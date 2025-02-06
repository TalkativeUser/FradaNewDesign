"use client"
import Image from "next/image";
import Link from "next/link";
import fradaLogo from "../../../../../../public/images/NavBar/MiddleNav/large-logo.svg";
import "./HeaderLogo.css";
const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="logo">
        <Image priority src={fradaLogo}  alt="Logo" />
      </div>
    </Link>
  );
};

export default HeaderLogo;
