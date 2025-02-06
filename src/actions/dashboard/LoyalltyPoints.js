import { getIsLogin } from "../Authentication";
let API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getPoints = async () => {
  let token=await getIsLogin()
  try {
    const response = await fetch(`${API_URL}/points/layer`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("حدث خطأ ما");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};