"use server";
import {
  CartRegisterSchema,
  ForgotPasswordSchema,
  loginSchema,
  loginWithPhoneSchema,
  registerSchema,
} from "@/schemas";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
// check is user loggedIn
export const getIsLogin = async () => {
  let cookie = await cookies();
  let token = cookie.get("frada-token");
  return token?.value;
};
// login with email or phone
export const Login = async (prevData, formData) => {
  let cookieStore = await cookies();
  let resultFromShema = loginSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (resultFromShema.success) {
    let email_or_phone = formData.get("email_or_phone");
    let password = formData.get("password");
    let response = {};
    try {
      response = await fetch(
        `${API_URL}/auth/login?email_or_phone=${email_or_phone}&password=${password}`,
        {
          method: "POST",
        }
      );
    } catch (e) {
      console.log(e);
    }
    if (response.status == 200) {
      let data = await response.json();
      cookieStore.set("frada-token", data.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7,
      });
      return {
        msg: "تم تسجيل الدخول بنجاح",
        email: "",
        pass: "",
        success: true,
      };
    } else {
      return {
        msg: "البريد الإلكتروني أو كلمة المرور خطأ",
        email: "",
        pass: "",
        success: false,
      };
    }
  } else {
    return {
      msg: "",
      email: resultFromShema.error.formErrors?.fieldErrors?.email_or_phone[0],
      pass: resultFromShema.error.formErrors?.fieldErrors?.password[0],
      success: false,
    };
  }
};
export const phoneLogin = async (prevData, newData) => {
  let resultFromShema = loginWithPhoneSchema.safeParse(
    Object.fromEntries(newData.entries())
  );
  if (resultFromShema.success) {
    let phone = newData.get("phone");
    let response = await fetch(`${API_URL}/auth/sendOtp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone }),
    });
    if (response.status == 200) {
      return {
        phone: "",
        phoneNumber: newData.get("phone"),
        success: true,
      };
    }
  } else {
    return {
      phone: resultFromShema.error.formErrors?.fieldErrors?.phone[0],
      success: false,
    };
  }
};
// send verification code
export const sendVerificationCode = async (phoneNumber, otp) => {
  let cookieStore = await cookies();
  try {
    let response = await fetch(`${API_URL}/auth/verifyOtp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: phoneNumber,
        otp: otp,
      }),
    });
    if (response.status == 200) {
      let data = await response.json();
      cookieStore.set("frada-token", data?.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7,
      });
      return {
        msg: "تم التحقق",
        success: true,
      };
    } else if (response.status == 402) {
      return {
        msg: "",
        new: true,
        success: false,
      };
    } else {
      return {
        msg: "كود التحقق خطأ",
        success: false,
      };
    }
  } catch (e) {
    console.log(e);
  }
};
// register
export const Register = async (prevData, formData) => {
  let resultFromShema = registerSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (resultFromShema.success) {
    let FirstName = formData.get("FirstName");
    let LastName = formData.get("LastName");
    let Email = formData.get("Email");
    let Phone = formData.get("Phone");
    let password = formData.get("password");
    let response = {};
    try {
      response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ FirstName, LastName, Email, Phone, password }),
      });
    } catch (e) {
      console.log(e);
    }
    let data = await response.json();
    if (response.status == 201) {
      redirect("/login");
    } else {
      return data.message;
    }
  } else {
    return resultFromShema.error.formErrors.fieldErrors;
  }
};
// register cart
export const RegisterCart = async (prevData, newData) => {
  let cookieStore = await cookies();
  let resultFromShema = CartRegisterSchema.safeParse(
    Object.fromEntries(newData.entries())
  );
  if (resultFromShema.success) {
    let Email = newData.get("Email");
    let FirstName = newData.get("FirstName");
    let LastName = newData.get("LastName");
    let Phone = newData.get("Phone");
    let CityID = newData.get("CityID");
    let Address = newData.get("Address");
    let password = newData.get("password");
    try {
      let response = await fetch(`${API_URL}/auth/registerForCart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email,
          FirstName,
          LastName,
          Phone,
          CityID,
          Address,
          password,
        }),
      });
      let data = await response.json();
      if (response.status == 201) {
        cookieStore.set("frada-token", data?.access_token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 60 * 60 * 24 * 7,
        });
        return {
          success:true
        };
      } else {
        return data.message;
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    return resultFromShema.error.formErrors.fieldErrors;
  }
};
// forgot password
export const forgotPassword = async (prevData, formData) => {
  let resultFromShema = ForgotPasswordSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (resultFromShema.success) {
    let email = formData.get("email");
    let response = {};
    try {
      response = await fetch(`${API_URL}/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
    } catch (e) {
      console.log(e);
    }
    let data = await response.json();
    if (response.status == 200) {
      return {
        message: "",
        success: true,
      };
    } else {
      return {
        message: data.message.email,
        success: false,
      };
    }
  } else {
    return {
      message: resultFromShema.error.formErrors.fieldErrors.email[0],
      success: false,
    };
  }
};
// logOut
export const logOut = async () => {
  const cookie = await cookies();
  cookie.delete("frada-token");
};
