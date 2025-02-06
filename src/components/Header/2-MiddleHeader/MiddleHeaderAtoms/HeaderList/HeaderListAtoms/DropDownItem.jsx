"use client";
import { Dropdown } from "react-bootstrap";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { logOut } from "@/actions/Authentication";
const DropDownItem = ({ img, token }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = (url) => {
    setShowDropDown(false);
    redirect(url);
  };
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <div className="option" onClick={() => setShowDropDown(true)}>
          <Image src={img} alt="Help" className="option-img" />
          <p className="option-desc">حسابي</p>
        </div>
      </Dropdown.Toggle>
      {showDropDown && (
        <Dropdown.Menu>
          {token ? (
            <>
              <Dropdown.Item onClick={() => navigate("/dashboard/user-info")}>
                لوحة التحكم
              </Dropdown.Item>
              <Dropdown.Item onClick={() => logOut()}>
                تسجيل الخروج
              </Dropdown.Item>
            </>
          ) : (
            <Dropdown.Item onClick={() => navigate("/login")}>
              تسجيل الدخول
            </Dropdown.Item>
          )}
        </Dropdown.Menu>
      )}
    </Dropdown>
  );
};

export default DropDownItem;
