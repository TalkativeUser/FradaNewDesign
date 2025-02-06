"use server";
import { revalidateTag } from "next/cache";
import { getIsLogin } from "../Authentication";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
// get user orders
export const getUserOrders = async () => {
  let token = await getIsLogin();
  try {
    const response = await fetch(`${API_URL}/getMyOrders`, {
      tags: ["userOrders"],
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("يرجي تسجيل الدخول");
    }
    if (response.ok) {
      let result = await response.json();
      return result?.data;
    }
  } catch (error) {
    throw new Error(error);
  }
};
// cancel order
export const cancelOrder = async (id) => {
  let token = await getIsLogin();
  try {
    let response = await fetch(`${API_URL}/cancelOrder/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      revalidateTag("userOrders");
    }
  } catch (error) {
    console.log(error);
  }
};
