"use server";
let API_URL = process.env.NEXT_PUBLIC_API_URL;
import { freindDataSchema } from "@/schemas";
import { revalidateTag } from "next/cache";
import { getIsLogin } from "../Authentication";
// get friends data
export const getAllFriends = async () => {
  let token=await getIsLogin()
  try {
    const response = await fetch(`${API_URL}/getGift`, {
      tags: ["friendAddress"],
      cache: "no-store",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    if (response.ok) {
      return result.data;
    } else {
      console.error("حدث خطأ ما");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

// add friend Address
export const addFriend = async (prevData, newData) => {
  let token=await getIsLogin()
  let resultFromShema = freindDataSchema.safeParse(
    Object.fromEntries(newData.entries())
  );
  if (resultFromShema.success) {
    let Name = newData.get("friendName");
    let Phone = newData.get("friendPhone");
    let Address = newData.get("friendAddress");
    let CityID = newData.get("cityId");
    try {
      const response = await fetch(`${API_URL}/addGiftAddress`, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ Name, Address, CityID, Phone }),
      });
      if (response.ok) {
        revalidateTag("friendAddress");
        return {
          success: true,
        };
      }
    } catch (error) {
      console.error("خطأ في الاتصال بالخادم:", error);
    }
  } else {
    return {
      friendName:
        resultFromShema?.error?.formErrors?.fieldErrors?.friendName &&
        resultFromShema?.error?.formErrors?.fieldErrors?.friendName[0],
      friendPhone:
        resultFromShema?.error?.formErrors?.fieldErrors?.friendPhone &&
        resultFromShema?.error?.formErrors?.fieldErrors?.friendPhone[0],
      friendAddress:
        resultFromShema?.error?.formErrors?.fieldErrors?.friendAddress &&
        resultFromShema?.error?.formErrors?.fieldErrors?.friendAddress[0],
      cityId:
        resultFromShema?.error?.formErrors?.fieldErrors?.cityId &&
        resultFromShema?.error?.formErrors?.fieldErrors?.cityId[0],
      success: false,
    };
  }
};
// update friend data
export const UpdateFriendInfo = async (prevData, newData) => {
  let token=await getIsLogin()
  let resultFromShema = freindDataSchema.safeParse(
    Object.fromEntries(newData.entries())
  );
  if (resultFromShema.success) {
    let friendId = newData.get("friendID");
    let Name = newData.get("friendName");
    let Phone = newData.get("friendPhone");
    let Address = newData.get("friendAddress");
    let CityID = newData.get("cityId");
    try {
      const response = await fetch(`${API_URL}/updateGiftAddress/${friendId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ Name, Address, CityID, Phone }),
      });
      if (response.ok) {
        revalidateTag("friendAddress");
        return {
          success: true,
        };
      }
    } catch (error) {
      console.error("خطأ في الاتصال بالخادم:", error);
    }
  } else {
    return {
      friendName:
        resultFromShema?.error?.formErrors?.fieldErrors?.friendName &&
        resultFromShema?.error?.formErrors?.fieldErrors?.friendName[0],
      friendPhone:
        resultFromShema?.error?.formErrors?.fieldErrors?.friendPhone &&
        resultFromShema?.error?.formErrors?.fieldErrors?.friendPhone[0],
      friendAddress:
        resultFromShema?.error?.formErrors?.fieldErrors?.friendAddress &&
        resultFromShema?.error?.formErrors?.fieldErrors?.friendAddress[0],
      cityId:
        resultFromShema?.error?.formErrors?.fieldErrors?.cityId &&
        resultFromShema?.error?.formErrors?.fieldErrors?.cityId[0],
      success: false,
    };
  }
};
// delete friend
export const deleteFriend = async (id) => {
  let token=await getIsLogin()
  try {
    const response = await fetch(`${API_URL}/deleteGift/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if(response.ok){
      revalidateTag("friendAddress");
    }
  } catch (error) {
    console.error("خطأ في الاتصال بالخادم:", error);
  }
};
