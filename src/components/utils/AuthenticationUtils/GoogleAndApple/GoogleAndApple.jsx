import "./GoogleAndApple.css"
import { setCookie } from "cookies-next";
import Image from "next/image";
import apple from "../../../../../public/images/login/apple.png";
import google from "../../../../../public/images/login/google.png";
import Link from "next/link";
export const GoogleAndApple = ({pathName,title}) => {
  let googleLoginKey=process.env.NEXT_PUBLIC_LOGIN_GOOGLE
  return (
    <div className="google-apple-container">
      <div className="google-apple-title">{title}</div>
      <div className="google-apple"  onClick={()=> setCookie("pathName",pathName)}>
        <Link href={`${googleLoginKey}/auth/google`}>
          <Image src={google} alt="frada" />
        </Link>
        <Image src={apple} alt="frada" />
      </div>
    </div>
  );
};