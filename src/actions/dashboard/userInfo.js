"use server";
import { userInfoSchema } from "@/schemas";
import { revalidateTag } from "next/cache";
import { getIsLogin } from "../Authentication";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
// update saudi cieties data
export const getSaudiCities = async () => {
  try {
    let response = await fetch(`${API_URL}/getCities`, {
      next: { revalidate: 1209600 },//two weeks
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
};
// get user data
export const getUserInfo = async () => {
  let token = await getIsLogin();
  try {
    const response = await fetch(`${API_URL}/userProfile`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      next: {
        tags: ["userData"],
        cache: "no-store",
      },
    });

    const result = await response.json();
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

// update user data
export const updateUserInfo = async (prevData, newData) => {
  let token=await getIsLogin()
  let resultFromShema = userInfoSchema.safeParse(
    Object.fromEntries(newData.entries())
  );
  if (resultFromShema.success) {
    let FirstName = newData.get("firstName");
    let LastName = newData.get("lastName");
    let Email = newData.get("email");
    let CityID = newData.get("cityId");
    let Address = newData.get("address");
    let Phone = newData.get("phone");
    try {
      const response = await fetch(`${API_URL}/updateUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          FirstName,
          LastName,
          Email,
          CityID,
          Address,
          Phone,
        }),
      });
      let result = await response.json();
      if (result.status == 201) {
        revalidateTag("userData");
        return {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          cityId: "",
          success: true,
        };
      } else {
        return {
          phone: result.errors?.Phone,
          email: result.errors?.Email,
          success: false,
        };
      }
    } catch (e) {
      console.log(e);
    }
    
  } else {
    return {
      firstName:
        resultFromShema?.error?.formErrors?.fieldErrors?.firstName &&
        resultFromShema?.error?.formErrors?.fieldErrors?.firstName[0],
      lastName:
        resultFromShema?.error?.formErrors?.fieldErrors?.lastName &&
        resultFromShema?.error?.formErrors?.fieldErrors?.lastName[0],
      email:
        resultFromShema?.error?.formErrors?.fieldErrors?.email &&
        resultFromShema?.error?.formErrors?.fieldErrors?.email[0],
      phone:
        resultFromShema?.error?.formErrors?.fieldErrors?.phone &&
        resultFromShema?.error?.formErrors?.fieldErrors?.phone[0],
      address:
        resultFromShema?.error?.formErrors?.fieldErrors?.address &&
        resultFromShema?.error?.formErrors?.fieldErrors?.address[0],
      cityId:
        resultFromShema?.error?.formErrors?.fieldErrors?.cityId &&
        resultFromShema?.error?.formErrors?.fieldErrors?.cityId[0],
      success: false,
    };
  }
};
