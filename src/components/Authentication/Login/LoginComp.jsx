"use client";
import "./Login.css";
import Link from "next/link";
import { FormHead } from "@/components/utils/AuthenticationUtils/FormHead/FormHead";
import { GoogleAndApple } from "@/components/utils/AuthenticationUtils/GoogleAndApple/GoogleAndApple";
import { FormFooter } from "@/components/utils/AuthenticationUtils/FormFooter/FormFooter";
import { SubmitButton } from "@/components/utils/AuthenticationUtils/SubmitButton/SubmitButton";
import FormInput from "@/components/utils/AuthenticationUtils/FormInput/FormInput";
import LoginHook from "@/CustomHooks/AuthHooks/LoginHook";
import { useEffect } from "react";
import { redirect } from "next/navigation";
export default function LoginComp() {
  const [state, submit, isPending, showPass, setShowPass]=LoginHook();
  useEffect(()=>{
    if(state.success){
      // redirect("/")
      window.location.href = "/";
    }
  },[state])
  return (
    <section className="login-section">
      <div className="login">
        <div className="msg">
          {!state.success && state.msg != "" && (
            <div className="text-red-600 text-base">{state.msg}</div>
          )}
        </div>
        <FormHead title={"تسجيل الدخول"} />
        <form className="form" action={submit}>
          <FormInput
            name="email_or_phone"
            type="text"
            placeHolder={"البريد الإلكتروني أو رقم الهاتف"}
            error={state?.email && state?.email}
          />
          <FormInput
            name="password"
            type={`${showPass?"text":"password"}`}
            placeHolder={"كلمة المرور"}
            error={state?.pass && state?.pass}
            showPass={showPass}
            setShowPass={setShowPass}
          />
          <div className="forgot-password-link">
            <Link href="/forgot-password" style={{ textDecoration: "none" }}>
              هل نسيت كلمة السر؟
            </Link>
          </div>
          <SubmitButton title={"تسجيل الدخول"} loading={isPending} />
        </form>
        <GoogleAndApple pathName="/" title="تسجيل الدخول بإستخدام" />
        <FormFooter
          link="/register"
          title="إنشاء حساب جديد"
          subTitle="ليس لديك حساب؟"
        />
      </div>
    </section>
  );
}
