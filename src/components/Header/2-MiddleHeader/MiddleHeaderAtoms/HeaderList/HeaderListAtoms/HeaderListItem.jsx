"use client";
import { useMainContext } from "@/Context/MainContext";
import Image from "next/image";
const HeaderListItem = ({ data }) => {
  const {
    wishData,
    cartData
  } = useMainContext();
  return (
    <div className="flex justify-center items-center flex-col">
      <Image priority src={data.img} alt={data.title} className="option-img" />
      <p className="option-desc">{data.title}</p>
      {data.url == "/wishes" && (
        <div className="cart-length">
          <p>{wishData?.length || 0}</p>
        </div>
      )}
      {data.url == "/cart" && (
        <div className="cart-length">
          <p>{cartData?.cartItems?.length || 0}</p>
        </div>
      )}
    </div>
  );
};

export default HeaderListItem;
