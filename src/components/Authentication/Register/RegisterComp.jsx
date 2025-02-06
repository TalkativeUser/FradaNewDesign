"use client";
import "./Register.css";
import Link from "next/link";
import { SubmitButton } from "@/components/utils/AuthenticationUtils/SubmitButton/SubmitButton";
import { GoogleAndApple } from "@/components/utils/AuthenticationUtils/GoogleAndApple/GoogleAndApple";
import { FormFooter } from "@/components/utils/AuthenticationUtils/FormFooter/FormFooter";
import { FormHead } from "@/components/utils/AuthenticationUtils/FormHead/FormHead";
import FormInput from "@/components/utils/AuthenticationUtils/FormInput/FormInput";
import { useActionState, useState } from "react";
import { Register } from "@/actions/Authentication";
export default function RegisterComp() {
  const [error, submit, isPending] = useActionState(Register);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  return (
    <section className="register-section">
      <div className="register">
        <div className="msg"></div>
        <FormHead title={"إنشاء حساب جديد"} />
        <form className="form" action={submit}>
          <FormInput
            name="FirstName"
            type="text"
            placeHolder={"الإسم الأول"}
            error={error?.FirstName && error?.FirstName[0]}
          />

          <FormInput
            name="LastName"
            type="text"
            placeHolder={"إسم العائلة"}
            error={error?.LastName && error?.LastName[0]}
          />
          <FormInput
            name="Email"
            type="text"
            placeHolder={"البريد الإلكتروني"}
            error={error?.Email && error?.Email[0]}
          />
          <FormInput
            name="Phone"
            type="text"
            placeHolder={"رقم الهاتف مثال (*******05)"}
            error={error?.Phone && error?.Phone[0]}
          />
          <FormInput
            name="password"
            type={`${showPass?"text":"password"}`}
            placeHolder={"كلمة المرور"}
            error={error?.password && error?.password[0]}
            showPass={showPass}
            setShowPass={setShowPass}
          />
          <FormInput
            name="confirmPassword"
            type={`${showConfirmPass?"text":"password"}`}
            placeHolder={"تأكيد كلمة المرور"}
            error={error?.confirmPassword && error?.confirmPassword[0]}
            showPass={showConfirmPass}
            setShowPass={setShowConfirmPass}
          />
          <div className="security">
            <p>بالنقر علي &quot;إنشاء حساب&quot; فإنك توافق على </p>
            <Link href="/" style={{ textDecoration: "none" }}>
              سياسة الخصوصية ,{" "}
            </Link>
            <Link href="/" style={{ textDecoration: "none" }}>
              شروط الخدمة ,{" "}
            </Link>
            <Link href="/" style={{ textDecoration: "none" }}>
              تلقي الأخبار والإشعارات
            </Link>
          </div>
          <SubmitButton
            title={"إنشاء الحساب"}
            loading={isPending}
          />
        </form>
        <GoogleAndApple pathName="/" title="تسجيل الدخول بإستخدام" />
        <FormFooter
          link="/login"
          title="تسجيل الدخول"
          subTitle="لدي حساب بالفعل؟"
        />
      </div>
    </section>
  );
}
