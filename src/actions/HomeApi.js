"use server"
const API_URL = process.env.NEXT_PUBLIC_API_URL;
// function to get home page data
export const getHomeData = async () => {
    try {
      const productsResponse = await fetch(`${API_URL}/home-page`, {
        cache: "no-store",
      });
      if (!productsResponse.ok) {
        throw new Error("تأكد من الإتصال بالإنترنت");
      }
      const { data: productsResponseData } = await productsResponse.json();
      return productsResponseData;
    } catch (error) {
      throw error;
    }
  };