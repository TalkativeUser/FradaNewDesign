import FormInput from "@/components/utils/AuthenticationUtils/FormInput/FormInput";
import { GoogleAndApple } from "@/components/utils/AuthenticationUtils/GoogleAndApple/GoogleAndApple";
import { SubmitButton } from "@/components/utils/AuthenticationUtils/SubmitButton/SubmitButton";
import LoginHook from "@/CustomHooks/AuthHooks/LoginHook";
import Link from "next/link";
import { useEffect } from "react";
const LoginWithEmail = ({setLoginType,setStep}) => {
    const [state, submit, isPending, showPass, setShowPass]=LoginHook();
    useEffect(()=>{
      console.log("state",state);
      if(state.success){
        window.location.href = "/cart";
      }
    },[state])
  return (
     <form
          className="form"
          style={{
            display: "flex",
          }}
          action={submit}
        >
          <FormInput
            name="email_or_phone"
            type="text"
            placeHolder={"البريد الإلكتروني أو رقم الهاتف"}
            error={state?.email && state?.email}
          />
          <FormInput
            name="password"
            type={`${showPass ? "text" : "password"}`}
            placeHolder={"كلمة المرور"}
            error={state?.pass && state?.pass}
            showPass={showPass}
            setShowPass={setShowPass}
          />
          <div className="forgot-password-and-login-email-container">
            <div className="forgot-password-link">
              <Link href="/forgot-password" style={{ textDecoration: "none" }}>
                هل نسيت كلمة السر؟
              </Link>
            </div>

            <div className="login-email" onClick={() => setLoginType("phone")}>
              <span className="icon icon-refresh"></span>
              <span>الدخول برقم الهاتف</span>
            </div>
          </div>

          <SubmitButton title={"الدخول والتقدم للشحن"} loading={isPending} />
          <GoogleAndApple pathName="cart" title="تسجيل الدخول بإستخدام" />
        </form>
  )
}
export default LoginWithEmail