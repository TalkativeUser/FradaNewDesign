import {  useState } from "react";
import LoginWithPhone from "./CartLoginFormAtoms/LoginWithPhone.jsx/LoginWithPhone";
import LoginWithEmail from "./CartLoginFormAtoms/LoginWithEmail/LoginWithEmail";
const CartLoginForm = ({setStep,setShowForm}) => {
  const [loginType, setLoginType] = useState("phone"); 
  return (
    <>
      {loginType == "phone" ? (
        <LoginWithPhone setLoginType={setLoginType} setStep={setStep} setShowForm={setShowForm}/>
      ) : (
        <LoginWithEmail setLoginType={setLoginType} setStep={setStep} />
      )}
    </>
  );
};

export default CartLoginForm;
