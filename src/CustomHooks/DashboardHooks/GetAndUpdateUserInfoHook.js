import { updateUserInfo } from "@/actions/dashboard/userInfo";
import { useActionState, useEffect, useState } from "react";
const GetAndUpdateUserInfoHook = (userInfo) => {
  // initial values to catch errors
  let initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    cityId: "",
    success: false,
  };
  // use useActionState hook to send data
  const [state, submit, isPending] = useActionState(
    updateUserInfo,
    initialValues
  );
  // useStates and useEffect to set initial data and rerender when it updates
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [cityId, setCityId] = useState("");
  useEffect(() => {
    if (userInfo) {
      setFirstName(userInfo?.FirstName);
      setLastName(userInfo?.LastName);
      setEmail(userInfo?.Email);
      setPhone(userInfo?.Phone);
      setAddress(userInfo?.Address);
      setCityId(userInfo?.CityID);
    }
  }, [userInfo]);
  return [
    state,
    submit,
    isPending,
    firstName,
    lastName,
    email,
    phone,
    address,
    cityId,
    setFirstName,
    setLastName,
    setEmail,
    setPhone,
    setAddress,
    setCityId,
  ];
};

export default GetAndUpdateUserInfoHook;
