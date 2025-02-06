import { phoneLogin, sendVerificationCode } from "@/actions/Authentication";
import FormInput from "@/components/utils/AuthenticationUtils/FormInput/FormInput";
import { GoogleAndApple } from "@/components/utils/AuthenticationUtils/GoogleAndApple/GoogleAndApple";
import { SubmitButton } from "@/components/utils/AuthenticationUtils/SubmitButton/SubmitButton";
import NotifyComp from "@/components/utils/NotifyComp/NotifyComp";
import { useActionState, useEffect, useState } from "react";
import VerificationInput from "react-verification-input";
const LoginWithPhone = ({
  setLoginType,
  setStep,
  setShowForm,
  setPhoneOtped,
}) => {
  const [showVerificationInputs, setShowVerificationInputs] = useState(false);
  const [verificationState, setVerficationState] = useState(false);
  const initialState = { phone: "", phoneNumber: null, success: false };
  const [state, submit, isPending] = useActionState(phoneLogin, initialState);
  useEffect(() => {
    setShowVerificationInputs(state.success);
  }, [state]);
  const checkVerificationCode = async (code) => {
    let result = await sendVerificationCode(state.phoneNumber, code);
    setVerficationState(result);
    if (!result.success && result.new) {
      setShowForm("register");
      localStorage.setItem("phoneOtped", state.phoneNumber);
    }
    if (result.success) {
      setStep(2);
      window.location.href = "/cart";
    }
  };
  return (
    <form
      className="form"
      style={{
        display: "flex",
      }}
      action={submit}
    >
      {verificationState && <NotifyComp notify={verificationState} />}
      <div className="login-phone-container">
        <FormInput
          name="phone"
          type="text"
          placeHolder={"أدخل رقم الهاتف"}
          error={state?.phone && state?.phone}
        />

        <div className="login-email" onClick={() => setLoginType("email")}>
          <span className="icon icon-refresh"></span>
          <span>الدخول بالبريد الإلكتروني</span>
        </div>
      </div>
      <SubmitButton title={"التحقق من الهاتف"} loading={isPending} />
      {showVerificationInputs === true && (
        <div className="verfication-container">
          <div className="verfication">
            <h6>أدخل رمز التحقق</h6>
            <VerificationInput
              length={4}
              validChars="0-9"
              inputProps={{ autoComplete: "one-time-code" }}
              onComplete={(value) => checkVerificationCode(value)}
              classNames={{
                container: "container",
                character: `character ${
                  verificationState.success == false && "invalid"
                }`,
                characterInactive: "character--inactive",
                characterSelected: "character--selected",
                characterFilled: "character--filled",
              }}
            />
          </div>
        </div>
      )}
      <GoogleAndApple pathName="/cart" title="تسجيل الدخول بإستخدام" />
    </form>
  );
};
export default LoginWithPhone;
