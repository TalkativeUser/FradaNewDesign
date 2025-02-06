"use client";
import Slider from "react-slick";
import "./ProductSlider.css"
import Link from "next/link";
import ProductCard from "../ProductCard/ProductCard";
import { useMainContext } from "@/Context/MainContext";
const ProductsSlider = ({ title, products, wishesData, link }) => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2.5,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2.5,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const {
    showAndGetProductBarcode,
    setShowSearcheLayer,
    wishData,toggleWishList,wishlistReload
  } = useMainContext();
  return (
    <div className="carousel-3 mt-3">
      <h4 className="text-right text-sm md:text-lg font-semibold pr-2 mb-1 text-blackColor">
        {title}
      </h4>
      <Slider {...settings}>
        {products.map((product, index) => {
          return (
            <div key={index} className="px-1 md:px-2">
              <ProductCard
                key={index}
                product={product}
                wishesData={wishData}
                toggleWishList={toggleWishList}
                wishlistReload={wishlistReload}
                showAndGetProductBarcode={showAndGetProductBarcode}
                setShowSearcheLayer={setShowSearcheLayer}
                type=""
                style=" w-[100%]"
              />
            </div>
          );
        })}
      </Slider>
      <Link
        href={`/products/${link}`}
        className=" text-darkOrange ml-3 block w-fit rounded-lg text-sm md:text-base underline"
      >
       المزيد
      </Link>
    </div>
  );
};

export default ProductsSlider;
