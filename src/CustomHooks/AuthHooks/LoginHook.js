import {Login} from "@/actions/Authentication";
import { useActionState, useState } from "react";
const LoginHook = () => {
  const initialState = { msg: "", email: "", pass: "", success: false };
  const [state, submit, isPending] = useActionState(Login, initialState);
  const [showPass, setShowPass] = useState(false);
  return [state, submit, isPending, showPass, setShowPass];
};

export default LoginHook;
