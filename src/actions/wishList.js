"use server";
import { revalidateTag } from "next/cache";
import { getIsLogin } from "./Authentication";
let API_URL = process.env.NEXT_PUBLIC_API_URL;
// get wishlist data
export const getWishlistDataSrver = async () => {
  let token = await getIsLogin();
  try {
    let response = await fetch(`${API_URL}/getMyWishList`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      tags: ["wishes"],
      cache: "no-store",
    });
    const result = await response.json();
    if (response.ok) {return result?.wishlist;} else {
      console.error("حدث خطأ ما");
      return null;
    }} catch (e) {console.log(e);}
};
// Add to wishlist
export const addToWishlist = async (productSlug) => {
  let token = await getIsLogin();
  try {
    let response = await fetch(`${API_URL}/addItemWish`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        slug: productSlug,
      }),
    });
    revalidateTag("wishes");
    if (!response.ok) {throw new Error("حدث خطأ ما");}} catch (e) {console.log(e);}};
// remove from wishlist
export const removeFromWishlist = async (productSlug) => {
  let token = await getIsLogin();
  try {
    let response = await fetch(`${API_URL}/deleteWishItem/${productSlug}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    revalidateTag("wishes");
    if (!response.ok) {
      throw new Error("حدث خطأ ما");
    }
  } catch (e) {
    console.log(e);
  }
};
