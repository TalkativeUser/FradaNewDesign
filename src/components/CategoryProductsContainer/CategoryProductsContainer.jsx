"use client";
import { useFilterContext } from "@/Context/FilterContext";
import EmptyData from "../utils/EmptyData/EmptyData";
import { useEffect, useState } from "react";
import { getCatogoryAndSubCategoryProductsAndFilteraData } from "@/actions/categroyAndSubcategoryData";
import "./CategoryProductsContainer.css";
import { useInView } from "react-intersection-observer";
import CategoryProductsContainerLoader from "./CategoryProductsContainerAtoms/CategoryProductsContainerLoader/CategoryProductsContainerLoader";
import ProductCard from "../utils/ProductCard/ProductCard";
import { useMainContext } from "@/Context/MainContext";
const CategoryProductsContainer = ({
  productsData,
  perPage,
  pageParams,
  pageSearchParams,
}) => {
  const { showFilterMenu, setShowFilterMenu } = useFilterContext();
  const [updatePerPage, setUpdatePerPage] = useState(perPage);
  const [updateProducsData, setUpdateProductsData] = useState(productsData);
  // use react-intersection-observer to scroll pagination
  const { ref, inView } = useInView();
  const getData = async () => {
    let productsData = await getCatogoryAndSubCategoryProductsAndFilteraData(
      updatePerPage,
      pageParams,
      pageSearchParams
    );
    setUpdateProductsData(productsData);
    setUpdatePerPage(updatePerPage + 10);
  };
  useEffect(() => {
    getData();
  }, [productsData, inView]);

  const {
    showAndGetProductBarcode,
    setShowSearcheLayer,
    wishData,toggleWishList,wishlistReload
  } = useMainContext();
  return (
    <div
      className={`transition-all duration-500 ${
        showFilterMenu ? "md:w-[calc(100%_-_300px)]" : "w-full"
      }`}
    >
      {updateProducsData.length > 0 ? (
        <div className="flex flex-wrap justify-end items-center gap-2">
          {updateProducsData.products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              wishesData={wishData}
              toggleWishList={toggleWishList}
              wishlistReload={wishlistReload}
              showAndGetProductBarcode={showAndGetProductBarcode}
              setShowSearcheLayer={setShowSearcheLayer}
              type=""
              style=" w-[50%] sm:w-[33%] md:w-[24%] lg:w-[19%] xl:w-[19%]"
            />
          ))}
          {productsData.length >= updatePerPage && (
            <CategoryProductsContainerLoader ref={ref} />
          )}
        </div>
      ) : (
        <EmptyData
          text="لا توجد منتجات"
          style={{ height: "45vh", padding: "0px" }}
        />
      )}
    </div>
  );
};
export default CategoryProductsContainer;
