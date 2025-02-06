"use client";
import { FormHead } from "@/components/utils/AuthenticationUtils/FormHead/FormHead";
import FormInput from "@/components/utils/AuthenticationUtils/FormInput/FormInput";
import { SubmitButton } from "@/components/utils/AuthenticationUtils/SubmitButton/SubmitButton";
import Link from "next/link";
import { useActionState } from "react";
import "./ForgotPasswordComp.css";
import { forgotPassword } from "@/actions/Authentication";
export default function ForgotPasswordComp() {
  const initialState = { message: "", success: false };
  const [state, submit, isPending] = useActionState(
    forgotPassword,
    initialState
  );
  return (
    <section className="forgot-password">
      <div className="content">
        <Link href="/login" style={{ color: "unset", textDecoration: "none" }}>
          <div className="icon-arrow-up-left2"></div>
        </Link>
        <FormHead title={"إعادة تعيين كلمةالمرور"} />
        {state.success == false ? (
          <form className="form" action={submit}>
            <div className="notify">
              <p>
                أدخل عنوان البريد الإلكتروني الخاص بك وسنرسل لك رابط إعادة تعيين
                كلمة المرور.
              </p>
            </div>
            <FormInput
              name="email"
              type="text"
              placeHolder={"أدخل البريد الإلكتروني"}
              error={state?.message}
            />
            <SubmitButton title={"إرسال الرابط"} loading={isPending} />
          </form>
        ) : (
          <p>
            تحقق من بريدك الإلكتروني للحصول على رابط لإعادة تعيين كلمة المرور
            الخاصة بك. إذا لم يظهر خلال بضع دقائق، فتحقق من مجلد الرسائل غير
            المرغوب فيها
          </p>
        )}
      </div>
    </section>
  );
}
