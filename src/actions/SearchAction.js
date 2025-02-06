"use server";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getProductsBySearch = async (searchWord) => {
  let searchResponse = await fetch(`${API_URL}/products`);
  if (searchResponse.ok) {
    let searchResult = await searchResponse.json();
    let data = searchResult?.data;
    return data;
  }
};
