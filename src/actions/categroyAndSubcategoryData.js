"use server"
import { redirect } from "next/navigation";
// function to get category and subcategory products
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getCatogoryAndSubCategoryProductsAndFilteraData = async (numberOfProducts,pageParams, pageSearchParams) => {
    const url = new URL(`${API_URL}/products?per_page=${numberOfProducts}`);
    if (pageParams?.slug[0]) {
      url.searchParams.append("Category", pageParams.slug[0]);
    }
    if (pageParams?.slug[1]) {
      url.searchParams.append("Subcategory", pageParams.slug[1]);
    }
    if (pageSearchParams?.discount) {
      url.searchParams.append("Discount", pageSearchParams.discount);
    }
    if (pageSearchParams?.discount) {
      url.searchParams.append("Discount", pageSearchParams.discount);
    }
    if (pageSearchParams?.sort) {
      url.searchParams.append("sort", pageSearchParams.sort);
    }
    if (pageSearchParams?.offer) {
      url.searchParams.append("offers", pageSearchParams.offer);
    }
    if (pageSearchParams?.sizes) {
      Array.from(pageSearchParams?.sizes)
        .join("")
        .split(",")
        .map((size) => url.searchParams.append("Size[]", size));
    }
    if (pageSearchParams?.trademarks) {
      Array.from(pageSearchParams?.trademarks)
        .join("")
        .split(",")
        .map((trademark) => url.searchParams.append("TrademarkID[]=", trademark));
    }
    if (pageSearchParams?.colors) {
      Array.from(pageSearchParams?.colors)
        .join("")
        .split(",")
        .map((color) => url.searchParams.append("ColorID[]=", color));
    }
    if (pageSearchParams?.pricerange) {
      let priceRange = pageSearchParams?.pricerange?.split(",");
      url.searchParams.append("min", priceRange[0]);
      url.searchParams.append("max", priceRange[1]);
    }
    try {
      const productsResponse = await fetch(url, {
        cache: "no-store",
      });
      if (!productsResponse.ok) {
        redirect("/not-found")
      }
      const { data: productsResponseData } = await productsResponse.json();
      return productsResponseData;
    } catch (error) {
      throw error;
    }
  };