"use client";
import { useState } from "react";
import "./HeaderSearch.css";
// import Image from "next/image";
// import mobileLogo from "../../../../../../public/images/Logos/mobile-logo.svg";
import { IoSearch } from "react-icons/io5";

import { useMainContext } from "@/Context/MainContext";
const HeaderSearch = () => {
  // const [showSearchInput, setShowSearchInput] = useState(false);
    const {
      setShowSearcheLayer,
    } = useMainContext();
  return (
    <>
        <div className="input-group large-search-input">
          <input
            onFocus={()=>setShowSearcheLayer(true)}
            type="text"
            className="form-control"
            placeholder="إبحث عن منتجك"
          />
        </div>


        <div className="input-group small-search-input ">
          <span
            className="input-group-text"
            onClick={()=>setShowSearcheLayer(true)}
          >
          <IoSearch />
          </span>
          {/* {showSearchInput ? (
            <input
              type="text"
              className="form-control"
              placeholder="إبحث عن منتجك"
            />
          ) : (
            <div className="logo-container">
              <Image src={mobileLogo} alt="frada ksa" width={70} height={38} className="m-auto"/>
            </div>
          )} */}
        </div>
    </>
  );
};
export default HeaderSearch;
