import { RegisterCart } from "@/actions/Authentication";
import DashboardInput from "@/app/dashboard/dashboardUtils/DashboardInput/DashboardInput";
import DashboardSelect from "@/app/dashboard/dashboardUtils/DashboardSelect/DashboardSelect";
import FormInput from "@/components/utils/AuthenticationUtils/FormInput/FormInput";
import { SubmitButton } from "@/components/utils/AuthenticationUtils/SubmitButton/SubmitButton";
import { useActionState, useEffect, useState } from "react";
const CartRegisterForm = ({ setStep, cities, phoneOtped }) => {
  // useStates and useEffect to set initial data and rerender when it updates
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [cityId, setCityId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [state, submit, isPending] = useActionState(RegisterCart);
  useEffect(()=>{
    if(state?.success){
      setStep(2)
    }
  },[state])
  return (
    <form
      className="form register-form"
      style={{
        display: "flex",
      }}
      action={submit}
    >
      {/*<NotifyComp notify={verificationState}/>*/}
      <h6>بيانات التواصل</h6>
      <DashboardInput
        palceholder="البريد الإلكتروني"
        name={"Email"}
        type={"text"}
        value={email}
        fn={setEmail}
        error={!state?.success && state?.Email}
        errorText={state?.Email}
      />

      <h6>عنوان الشحن</h6>
      <DashboardInput palceholder="المملكة العربية السعودية" readOnly={true} />
      <DashboardInput
        palceholder="الاسم الأول"
        name={"FirstName"}
        type={"text"}
        value={firstName}
        fn={setFirstName}
        error={!state?.success && state?.FirstName}
        errorText={state?.FirstName}
      />

      <DashboardInput
        palceholder="الاسم الآخير"
        name={"LastName"}
        type={"text"}
        value={lastName}
        fn={setLastName}
        error={!state?.success && state?.LastName}
        errorText={state?.LastName}
      />

      <DashboardInput
        palceholder="رقم الهاتف"
        readOnly
        name="Phone"
        type={"text"}
        value={phoneOtped}
        error={!state?.success && state?.Phone}
        errorText={state?.Phone}
      />

      <DashboardSelect
        name="CityID"
        value={cityId}
        fn={setCityId}
        DataToMap={cities}
        error={!state?.success && state?.CityID}
        errorText={state?.CityID}
      />

      <DashboardInput
        palceholder="عنوان الشحن"
        name={"Address"}
        type={"text"}
        value={address}
        fn={setAddress}
        error={!state?.success && state?.Address}
        errorText={state?.Address}
      />
      <DashboardInput
        palceholder="كلمة المرور"
        name={"password"}
        type={`${showPass ? "text" : "password"}`}
        value={password}
        fn={setPassword}
        showPass={showPass}
        setShowPass={setShowPass}
        error={!state?.success && state?.password}
        errorText={state?.password}
      />

      <DashboardInput
        palceholder="تأكيد كلمة المرور"
        name={"confirmPassword"}
        type={`${showConfirmPass ? "text" : "password"}`}
        value={confirmPassword}
        fn={setConfirmPassword}
        showPass={showConfirmPass}
        setShowPass={setShowConfirmPass}
        error={!state?.success && state?.confirmPassword}
        errorText={state?.confirmPassword}
      />
      <SubmitButton title={"إنشاء الحساب والتقدم للشحن"} loading={isPending} />
    </form>
  );
};
export default CartRegisterForm;
