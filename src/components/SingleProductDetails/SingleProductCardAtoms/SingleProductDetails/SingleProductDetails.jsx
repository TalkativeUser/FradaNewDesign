"use client";
import Card from "react-bootstrap/Card";
import "./SingleProductDetails.css";
import ReactStars from "react-stars";
import { useEffect, useState } from "react";
import AvilableOrNotComp from "./SingleProductDetailsAtoms/AvilableOrNotComp";
import Image from "next/image";
import TabbyPromo from "@/components/Tabby/TabbyPromo/TabbyPromo";
import { useMainContext } from "@/Context/MainContext";
const SingleProductDetails = ({ productData, setChoosedColorIndex }) => {
  const imgSrc = process.env.NEXT_PUBLIC_IMAGE_SRC;
  const [avilableSizes, setAvilableSizes] = useState([]);
  const [selectedColorID, setSelectedColorID] = useState(null);
  const [selectedThickness, setSelectedThickness] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [productQuantity, setProductQuantity] = useState(null);
  const [productQuantityAtCart, setProductQuantityAtCart] = useState(null);
  const [choosedProductVariantBarcode, setChoosedProductVariantBarcode] =
    useState(null);
  // useEffect to set quantity when product without variants
  useEffect(() => {
    if (productData?.variants == null) {
      setProductQuantity(productData?.Quantity);
      setProductQuantityAtCart(productData?.quantityAtCart);
      setChoosedProductVariantBarcode(productData?.Barcode);
    }
  }, [productData]);
  // when choose color
  const handleSelectColor = (color, index) => {
    setChoosedColorIndex(index);
    setSelectedColorID(color.colorId);
    setSelectedSize(null);
    if (color.variantSizes?.length > 0) {
      setAvilableSizes(color?.variantSizes);
      setProductQuantity(null);
      setProductQuantityAtCart(null);
      setChoosedProductVariantBarcode(null);
    } else {
      setProductQuantity(color?.variantQuantity);
      setProductQuantityAtCart(color?.quantityAtCartForVariant);
      setChoosedProductVariantBarcode(color?.VariantBarcode);
    }
  };
  // when choose thickness
  const handleSelectThickness = (thickness) => {
    setSelectedThickness(thickness?.thicknessName);
    setSelectedSize(null);
    if (thickness.variantSizes?.length > 0) {
      setAvilableSizes(thickness?.variantSizes);
      setProductQuantity(null);
      setProductQuantityAtCart(null);
      setChoosedProductVariantBarcode(null);
    } else {
      setProductQuantity(thickness?.variantQuantity);
      setProductQuantityAtCart(thickness?.quantityAtCartForVariant);
      setChoosedProductVariantBarcode(thickness?.VariantBarcode);
    }
  };
  // when choose size
  const handleSelectSize = (matchedSize) => {
    setProductQuantity(matchedSize?.variantQuantity);
    setProductQuantityAtCart(matchedSize?.quantityAtCartForVariantSize);
    setSelectedSize(matchedSize?.sizeName);
    setChoosedProductVariantBarcode(matchedSize?.VariantBarcode);
  };
  // check if product in wish list
  const [isInWishList, setIsInWishList] = useState(false);
  const {
    wishData,
    toggleWishList,
    wishlistReload,
    addToCartFunc,
  } = useMainContext();

  useEffect(() => {
    const getWishListProducts = async () => {
      let isInWishList =
        wishData &&
        wishData.some((product) => product.slug == productData?.slug);
      setIsInWishList(isInWishList);
    };
    getWishListProducts();
  }, [productData, wishData]);

  // Start Tabby Logic
  const [tabbyPrice, setTabbyPrice] = useState(null);
  const [scriptLoading, setScriptLoading] = useState(true);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.tabby.ai/tabby-promo.js";
    document.body.appendChild(script);
    script.onload = () => {
      setScriptLoading(false);
    };
  }, []);
  useEffect(() => {
    setTabbyPrice(productData?.Price);
  }, [productData]);
  return (
    <Card className="detail-content">
      <Card.Body>
        <Card.Title>
          <h5>{productData?.Name}</h5>
        </Card.Title>
        <div className="code-rate-holder">
          <span className="code">{productData?.Barcode}</span>
          <div className="rate">
            {productData?.Reviews?.averageRating > 0 ? (
              <>
                <div className="number-evaluators">
                  &#41;
                  <span>{productData?.Reviews?.length}</span>
                  <span>تقييم</span>
                  &#40;
                </div>
                <ReactStars
                  count={5}
                  size={30}
                  half={true}
                  value={productData?.Reviews?.averageRating}
                  edit={false}
                  color1={"#c1c1c1"}
                  color2={"#ffd700"}
                />
              </>
            ) : null}
          </div>
        </div>
        {productData?.trademark && productData.trademark?.TrademarkName ? (
          <div className="trademark-container">
            <h6>:العلامة التجارية</h6>
            <span>{productData.trademark?.TrademarkName}</span>
          </div>
        ) : null}

        <div className="price-container">
          <h6>:السعر</h6>
          {productData?.Discount > 0 ? (
            <>
              <div className="price-after-disc">
                <span>رس</span>
                <span>{productData?.Price}</span>
              </div>
              <div className="price-before-disc">
                <span>رس</span>
                <span>{productData?.SellPricePlusTax}</span>
              </div>
            </>
          ) : (
            <div className="price-after-disc">
              <span>رس</span>
              <span>{productData?.Price}</span>
            </div>
          )}
        </div>
        {!scriptLoading ? <TabbyPromo price={tabbyPrice} /> : null}

        {productData?.variants != null ? (
          <>
            {productData.variants?.colors &&
            productData.variants?.colors?.length > 0 ? (
              <div className="color-product-holder">
                <h6>إختر لون</h6>
                <div className="color-image-holder">
                  {productData?.variants.colors?.length > 0 &&
                    productData.variants?.colors.map((color, index) => (
                      <div
                        onClick={() => handleSelectColor(color, index)}
                        key={index}
                        className="image-color"
                        style={{
                          cursor: "pointer",
                          border:
                            selectedColorID == color?.colorId
                              ? "1px solid #000"
                              : "1px solid #ddd",
                        }}
                      >
                        <Image
                          priority
                          src={`${imgSrc}/${color?.images[0]}`}
                          width={50}
                          height={50}
                          alt={productData?.Name}
                          className="max-w-[50px] max-h-[50px]"
                        />
                      </div>
                    ))}
                </div>
              </div>
            ) : null}

            {productData?.variants?.thickness &&
            productData.variants?.thickness?.length > 0 ? (
              <div className="thickness-container mt-2">
                <h6>إختر سٌمك</h6>
                <div className="thickness-list mt-3">
                  {productData.variants.thickness?.length > 0 &&
                    productData.variants.thickness.map((thickness, index) => (
                      <div
                        onClick={() => handleSelectThickness(thickness)}
                        key={index}
                        className={`thickness-item ${
                          thickness?.thicknessName == selectedThickness &&
                          "bg-blackColor text-whiteColor"
                        } `}
                      >
                        {thickness?.thicknessName}
                      </div>
                    ))}
                </div>
              </div>
            ) : null}

            {productData?.allSizes != null ? (
              <div className="size-container mt-2">
                <h6>إختر مقاس</h6>
                <div className="sizes-list mt-3">
                  {productData.allSizes?.length > 0 &&
                    productData.allSizes?.map((size, index) => {
                      const matchedSize = avilableSizes.find(
                        (avilableSize) => avilableSize?.sizeName === size
                      );
                      return (
                        <div
                          key={index}
                          onClick={() => handleSelectSize(matchedSize)}
                          className={`single-size ${
                            selectedSize == size &&
                            "bg-blackColor text-whiteColor"
                          } ${
                            matchedSize?.sizeName != size &&
                            "opacity-25 pointer-events-none"
                          }`}
                        >
                          {size}
                        </div>
                      );
                    })}
                </div>
              </div>
            ) : null}

            {productQuantity != null ? (
              <AvilableOrNotComp
                productQuantity={productQuantity}
                productQuantityAtCart={productQuantityAtCart}
              />
            ) : null}
          </>
        ) : (
          <>
            {productQuantity != null ? (
              <AvilableOrNotComp
                productQuantity={productQuantity}
                productQuantityAtCart={productQuantityAtCart}
              />
            ) : null}
          </>
        )}
        <div className="flex justify-center items-center gap-3 mt-4 text-sm">
          <button
            onClick={() =>
              toggleWishList(isInWishList ? "remove" : "add", productData?.slug)
            }
            disabled={wishlistReload}
            className={`${
              wishlistReload ? "opacity-30" : "opacity-100"
            } bg-blackColor border-[1px] border-blackColor text-whiteColor hover:bg-whiteColor hover:text-blackColor px-[20px] py-1 rounded-lg transition-all duration-300`}
          >
            {wishlistReload
              ? "loading..."
              : isInWishList
              ? "الحذف من الأمنيات"
              : "أضف للأمنيات"}
          </button>

          <button
            className={`${
              productQuantity > 0 && productQuantity > productQuantityAtCart
                ? "bg-blackColor text-whiteColor opacity-100"
                : "bg-whiteColor text-blackColor opacity-50 pointer-events-none"
            } border-[1px] border-blackColor hover:bg-whiteColor hover:text-blackColor px-[20px] py-1 rounded-lg transition-all duration-300`}
            style={{ opacity: "1" }}
            onClick={() => addToCartFunc("add",choosedProductVariantBarcode)}
          >
            أضف للسلة
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};
export default SingleProductDetails;
