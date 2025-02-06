"use client";
import { IoHeartCircle } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import ReactStars from "react-stars";
import "./ProductCard.css";
import Quantity0 from "./Quantity0/Quantity0";
import { useEffect, useState } from "react";
const ImageUrl = process.env.NEXT_PUBLIC_IMAGE_SRC;
const ProductCard = ({
  product,
  wishesData,
  toggleWishList,
  wishlistReload,
  showAndGetProductBarcode,
  setShowSearcheLayer,
  type,
  style,
}) => {
  // check if product in wish list
  const [isInWishList, setIsInWishList] = useState(false);
  useEffect(() => {
    const getWishListProducts = () => {
      let isInWishList =
        wishesData &&
        wishesData?.some((wishProduct) => wishProduct?.slug == product?.slug);
      setIsInWishList(isInWishList);
    };
    getWishListProducts();
  }, [product?.slug, wishesData]);

  return (
    <div className={`${style} relative text-end p-1 rounded-lg border-[1px]`}>
      <div className="price-container  hidden md:flex justify-start items-center gap-2 text-[12px] lg:text-[1rem]">
        <div className="after-disc flex justify-center items-center bg-black text-white py-1 px-1 rounded-lg gap-[2px]">
          <p>رس</p>
          <p>{product.Price}</p>
        </div>
        <div className="before-disc flex justify-center items-center gap-[2px] relative before:content-[''] before:w-full before:h-[2px] before:bg-gray-500 before:absolute before:transform before:-rotate-[9deg]">
          <p>رس</p>
          <p>{product.SellPricePlusTax}</p>
        </div>
      </div>
      <ReactStars
        className="py-1 text-sm hidden lg:block"
        count={5}
        size={25}
        half={true}
        value={product.average_rating}
        edit={false}
        color1={"#c1c1c1"}
        color2={"#000"}
      />
      <div className="images-container">
        <div className="image-container relative">
        <Link href={`/product-details/${product.Barcode}`}>
          <Image
            priority
            src={`${ImageUrl}/${product.MainPhoto}`}
            width={500}
            height={500}
            alt={product.Name}
            className="w-full h-auto"
          />
          </Link>
          <div className="cart-icons absolute w-full bottom-0 b flex justify-center items-center gap-1 md:hidden px-2 ">
              <IoHeartCircle
                disabled={wishlistReload}
                onClick={() =>
                  toggleWishList(isInWishList ? "remove" : "add", product?.slug)
                }
                className={`${
                  isInWishList ? "text-darkOrange" : "text-[#888]"
                } ${
                  wishlistReload ? "opacity-30" : "opacity-100"
                } cursor-pointer hover:text-darkOrange transition-all duration-300 text-[28px] p-1`}
              />
            <FaCartArrowDown onClick={() => showAndGetProductBarcode(product.Barcode)} className="text-[17px] text-[#888] hover:text-darkOrange transition-all duration-300 cursor-pointer"/>
          </div>
        </div>

        {product?.Colors && product?.Colors?.length > 0 ? (
          <div className="sub-images hidden  md:flex  flex-row-reverse justify-start items-center gap-1 mt-1">
            <>
              {product?.Colors.slice(0, 3).map((img, index) => (
                <Image
                  priority
                  key={index}
                  src={`${ImageUrl}/${img.Image[0]}`}
                  width={50}
                  height={50}
                  alt={product?.Name}
                  className="border-[1px] max-w-[30px] max-h-[30px] md:max-w-[40px] md:max-h-[40px] lg:max-w-[50px] lg:max-h-[50px]  hover:border-black cursor-pointer rounded-[4px] transition-all duration-300"
                />
              ))}
              {product.Colors.length > 3 && (
                <span>+{product.Colors.length - 3}</span>
              )}
            </>
          </div>
        ) : null}
      </div>
      {product && product.allQuantity <= 0 && <Quantity0 />}
      <div className="card-footer text-[12px] lg:text-[1rem]">
        <h5 className="product-name mt-1  font-bold  lg:font-semibold">
          {product?.Name}
        </h5>
        <h6 className="product-barcode mt-1 font-semibold lg:font-extrabold text-gray-400 mr-1 hidden md:block">
          {product.Barcode}
        </h6>
        {/* Price At Phone */}
        <div className="price-container flex md:hidden flex-row-reverse justify-start items-center ">
        <div className="after-disc flex justify-center font-bold items-center text-black py-1 px-1 rounded-lg gap-[2px] text-[11px]">
          <p className="text-[9px]">ر.س</p>
          <p>{product.Price}</p>
        </div>
        <div className="before-disc flex justify-center items-center gap-[2px] relative before:content-[''] before:w-full before:h-[1px] before:bg-gray-500 before:absolute before:transform  text-[9px]">
          <p className="text-[9px]">ر.س</p>
          <p>{product.SellPricePlusTax}</p>
        </div>
      </div>
      {product?.Colors && product?.Colors?.length > 0 ? (
          <div className="sub-images flex md:hidden flex-row-reverse justify-start items-center gap-1 mt-1 ">
            <>
              {product?.Colors.slice(0, 3).map((img, index) => (
                <Image
                  priority
                  key={index}
                  src={`${ImageUrl}/${img.Image[0]}`}
                  width={50}
                  height={50}
                  alt={product?.Name}
                  className="border-[1px] max-w-[30px] max-h-[30px] md:max-w-[40px] md:max-h-[40px] lg:max-w-[50px] lg:max-h-[50px]  hover:border-black cursor-pointer rounded-[4px] transition-all duration-300"
                />
              ))}
              {product.Colors.length > 3 && (
                <span>+{product.Colors.length - 3}</span>
              )}
            </>
          </div>
        ) : null}
        {type == "search" ? (
          <div className="btns hidden md:flex justify-between items-center px-3 ">
            <IoHeartCircle
              disabled={wishlistReload}
              onClick={() =>
                toggleWishList(isInWishList ? "remove" : "add", product?.slug)
              }
              className={`${isInWishList ? "text-darkOrange" : "text-black"} ${
                wishlistReload
                  ? "opacity-30 cursor-not-allowed"
                  : "opacity-100 cursor-pointer"
              } text-4xl hover:text-darkOrange transition-all duration-300`}
            />
            <Link href={`/product-details/${product.Barcode}`}>
              <FaChevronRight
                className="bg-black text-white px-2 py-2 rounded-full cursor-pointer text-3xl  hover:bg-darkOrange transition-all duration-300"
                onClick={() => setShowSearcheLayer(false)}
              />
            </Link>
          </div>
        ) : (
          <div className="btns hidden md:flex justify-between items-center ">
            <div className="flex justify-between items-center">
              <IoHeartCircle
                disabled={wishlistReload}
                onClick={() =>
                  toggleWishList(isInWishList ? "remove" : "add", product?.slug)
                }
                className={`${
                  isInWishList ? "text-darkOrange" : "text-black"
                } ${
                  wishlistReload ? "opacity-30" : "opacity-100"
                } text-4xl cursor-pointer hover:text-darkOrange transition-all duration-300`}
              />
              <Link href={`/product-details/${product.Barcode}`}>
                <FaChevronRight className="bg-black text-white px-2 py-2 rounded-full cursor-pointer text-3xl  hover:bg-darkOrange transition-all duration-300" />
              </Link>
            </div>

            <div
              className="add-cart-btn"
              onClick={() => showAndGetProductBarcode(product.Barcode)}
            >
              <FaCartArrowDown />
              <span className="add-cart ">أضف للسلة</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductCard;
