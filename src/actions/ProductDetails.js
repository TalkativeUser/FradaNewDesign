"use server"
import { revalidateTag } from "next/cache";
import { getIsLogin } from "./Authentication";
const API_URL = process.env.NEXT_PUBLIC_API_URL;


export const getProductDetailsData = async (pageParams) => {
  try {
    const productDetailsResponse = await fetch(`${API_URL}/getProduct/${pageParams}`, {
      next:{
        tags:"productDetails",
        cache: "no-store",
      }
    });
    if (!productDetailsResponse.ok) {
      throw new Error("حدث خطأ ما");
    }
    const { data: productDetailsResponseData } =
      await productDetailsResponse.json();
    return productDetailsResponseData;
  } catch (error) {
    throw error;
  }
};

export const getProductReviews = async (productId) => {
  let token=await getIsLogin()
  try {
    const productReviewsResponse = await fetch(`${API_URL}/getReviews/${productId}`, {
      headers: { 
        "Content-Type": "application/json", 
        Authorization: `Bearer ${token}` 
      },
      tags:["reviews"],
      cache: "no-store",
    });

    const { data: productReviewsResponseData } = await productReviewsResponse.json();
    return productReviewsResponseData;
  } catch (error) {
    throw error;
  }
};

export const addAndUpdateReview=async(formData)=>{
  let token=await getIsLogin()
  try{
    let response = await fetch(`${API_URL}/makeReview`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` 
      },
      body: JSON.stringify(formData),
    });
    revalidateTag("reviews");
    return await response.json();
  }catch(e){
    console.log(e);
  }
}

export const deleteReview=async(reviewId)=>{
  let token=await getIsLogin()
  try{
    let response = await fetch(`${API_URL}/deleteReview/${reviewId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` 
      },
    });
    revalidateTag("reviews");    
    return await response.json();
  }catch(e){
    console.log(e);
  }
}
