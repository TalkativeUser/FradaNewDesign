"use server";
import { revalidateTag } from "next/cache";
import { getIsLogin } from "./Authentication";
let API_URL = process.env.NEXT_PUBLIC_API_URL;
// get cart data
export const getCartDataSrver = async () => {
  let token = await getIsLogin();
  try {
    let response = await fetch(`${API_URL}/getMyCart`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      tags: ["cart"],
      cache: "no-store",
    });
    const result = await response.json();
    if (response.ok) {
      return result?.data;
    } else {
      console.error("حدث خطأ ما");
      return null;
    }
  } catch (e) {
    console.log(e);
  }
};
// Add to cart
export const addToCart = async (barcode,quantity) => {
  console.log("barcode",barcode)
  console.log("quantity",quantity)
  let token = await getIsLogin();
  try {
    let response = await fetch(`${API_URL}/addItem`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        barcode,
        quantity
      }),
    });
    revalidateTag("cart");
    if (!response.ok) {
      throw new Error("حدث خطأ ما");
    }
  } catch (e) {
    console.log(e);
  }
};
// delete cart item
export const removeCartItem = async (cartItemID) => {
  let token = await getIsLogin();
  try {
    let response = await fetch(`${API_URL}/deleteItem/${cartItemID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    revalidateTag("cart");
    if (!response.ok) {
      throw new Error("حدث خطأ ما");
    }
  } catch (e) {
    console.log(e);
  }
};
// create and make order
export const createOrderServer = async (
  ShippingAddress,
  ShippingCity,
  DeliveryComments
) => {
  let token = await getIsLogin();
  try {
    let createOrderRes = await fetch(`${API_URL}/makeOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ShippingAddress,
        ShippingCity,
        DeliveryComments,
      }),
    });
    let data=await createOrderRes.json()
    return data
  } catch (e) {
    console.log(e);
  }
};
export const makeOrderServer=async(choosePaymentMethod,orderID)=>{
  let token = await getIsLogin();
  try {
    let makeOrderRes=await fetch(`${API_URL}/checkout/${choosePaymentMethod=="tabby"?"tabby":"telr"}`,
      {method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          order_id:orderID
        }),
      })
      let result =await makeOrderRes.json();
      return result
  } catch (e) {
    console.log(e);
  }
}