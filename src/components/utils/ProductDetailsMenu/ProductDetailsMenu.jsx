"use client";
import "./ProductDetailsMenu.css";
import { useEffect, useState } from "react";
import { useMainContext } from "@/Context/MainContext";
import SingleProductDetails from "@/components/SingleProductDetails/SingleProductCardAtoms/SingleProductDetails/SingleProductDetails";
import { Carousel } from "react-bootstrap";
import { getProductDetailsData } from "@/actions/ProductDetails";
import Image from "next/image";
const ProductDetailsMenu = () => {
  let imageSrc = process.env.NEXT_PUBLIC_IMAGE_SRC;
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { 
    showProductDetailsMenu,
    setShowDetailsMenu,
    productBarcode,
      } =
    useMainContext();
  const getProductDetails = async () => {
    setLoading(true);
    let productData = await getProductDetailsData(productBarcode);
    setProductData(productData);
    setLoading(false);
  };
  useEffect(() => {
    if (productBarcode) {
      getProductDetails();
    }
  }, [productBarcode]);
  const [chooosedColorIndex, setChoosedColorIndex] = useState(0);
  const [images, setImages] = useState([]);
  // useEffect to change images
  useEffect(() => {
    if (productData?.imagesWithoutColor != null) {
      setImages(productData?.imagesWithoutColor);
    }
    if (productData?.variants != null) {
      if (
        productData?.variants?.colors &&
        productData?.variants?.colors?.length > 0
      ) {
        setImages(productData?.variants?.colors[chooosedColorIndex]?.images);
      }
    }
  }, [productData, chooosedColorIndex]);
  return (
    <div
      className={`bg-black_opacity position-fixed top-0 right-0  bottom-0 h-screen z-40 ${
        showProductDetailsMenu ? "left-0" : "left-full"
      }`}
    >
      <div
        className="product-details-menu"
        style={{ right: showProductDetailsMenu ? "0" : "-200%" }}
      >
        <div className="top">
          <span
            className="icon-close"
            onClick={() => setShowDetailsMenu(false)}
          ></span>
          <p>إلقاء نظرة سريعة</p>
        </div>
        {!loading ? (
          <>
            <Carousel className="slider-single" interval={2000}>
              {images?.length > 0
                ? images?.slice(0, 6).map((image, index) => (
                    <Carousel.Item key={index}>
                      <Carousel.Caption
                        key={index}
                        className="relative left-0 right-0 img-slider"
                      >
                        <Image
                          priority
                          src={`${imageSrc}/${image}`}
                          alt={productData?.Name}
                          fill
                        />
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))
                : null}
            </Carousel>
            <SingleProductDetails
              productData={productData}
              setChoosedColorIndex={setChoosedColorIndex}
            />
          </>
        ) : (
          <div className="aside-loading">
            <span className="aside-loader"></span>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductDetailsMenu;
