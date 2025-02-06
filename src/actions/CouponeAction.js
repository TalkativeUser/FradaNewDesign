"use server";
import { revalidateTag } from "next/cache";
import { getIsLogin } from "./Authentication";
let API_URL = process.env.NEXT_PUBLIC_API_URL;
export const useCoupone = async (couponName) => {
      let token = await getIsLogin();
  try {
    let response = await fetch(`${API_URL}/getCoupon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        coupon: couponName,
      }),
    });
    revalidateTag("cart");
    let data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
