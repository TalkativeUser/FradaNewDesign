"use client";
import EmptyData from "../utils/EmptyData/EmptyData";
import LoadMoreBtn from "./SearchAtoms/LoadMoreBtn/LoadMoreBtn";
import InputSearch from "./SearchAtoms/InputSearch/InputSearch";
import { getProductsBySearch } from "@/actions/SearchAction";
import { useEffect, useState } from "react";
import { useMainContext } from "@/Context/MainContext";
import { getWishlistData } from "@/actions/wishList";
import ProductCard from "../utils/ProductCard/ProductCard";
const SearchComp = () => {
  let suggestedWords = [
    {
      word: "نعال",
    },
    {
      word: "شماغ",
    },
    {
      word: "حذاء",
    },
    {
      word: "فرادا",
    },
    {
      word: "عطر",
    },
  ];
  const [searchWord, setSearchWord] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [filtredData, setFiltredData] = useState(null);
  const [perPage, setPerPage] = useState(12);
  const getProductsBySearchFun = async () => {
    let data = await getProductsBySearch("");
    setSearchData(data?.products);
    setFiltredData(data?.products);
  };
  useEffect(() => {
    getProductsBySearchFun();
  }, []);
  useEffect(() => {
    if (searchData) {
      let filterdData = searchData?.filter(
        (product) =>
          product.Barcode.toLocaleUpperCase().includes(
            searchWord.toLocaleUpperCase()
          ) ||
          product.Name.toLocaleUpperCase().includes(
            searchWord.toLocaleUpperCase()
          )
      );
      setFiltredData(filterdData);
    }
  }, [searchWord, searchData, perPage]);

  
  const {
    showAndGetProductBarcode,
    showSearcheLayer,
    setShowSearcheLayer,
    wishData,toggleWishList,wishlistReload,
  } = useMainContext();
  return (
    <section
      className={` ${
        !showSearcheLayer && "scale-0 opacity-0 delay-300 "
      } ease-in-out flex overflow-y-scroll bg-black_opacity h-screen fixed top-0 bottom-0 right-0 left-0 z-[999]  justify-center items-start pt-12`}
    >
      <div
        className={`transform
      ${
        showSearcheLayer
          ? "translate-y-0 opacity-100"
          : "-translate-y-10 opacity-0"
      } duration-300
        search-container mb-10 bg-white w-[95%] xl:w-[1200px] py-8 rounded-lg min-h-[90vh]`}
      >
        <div className="sticky -top-12 bg-white z-50 pb-2 ">
          <div className="top flex justify-between items-center px-6 ">
            <p
              className="icon-close cursor-pointer"
              onClick={() => {
                setShowSearcheLayer(false), setSearchWord("");
              }}
            ></p>
            <p>البحث</p>
          </div>
          <InputSearch searchWord={searchWord} setSearchWord={setSearchWord} />
        </div>
        <div className="suggested-words mt-3 text-right px-6 ">
          <h5>كلمات مقترحة</h5>
          <div className="suggested-words-content flex flex-wrap justify-end items-center gap-4 mr-2 mt-2">
            {suggestedWords &&
              suggestedWords.map((word, index) => (
                <p
                  key={index}
                  onClick={() => {
                    setSearchWord(`${word.word}`), setPerPage(12);
                  }}
                  className={`transform ${
                    searchWord == word.word &&
                    "bg-darkOrange text-white scale-105"
                  } transition-all cursor-pointer  text-darkOrange py-1 px-2 rounded-lg border-[1px] border-darkOrange hover:bg-darkOrange hover:text-white hover:scale-105`}
                >
                  {word.word}
                </p>
              ))}
          </div>
        </div>
        <div className="suggested-products mt-3 text-right">
          <h5 className="px-6 ">المنتجات المقترحة</h5>
          <div className="products mt-2">
            {filtredData != null ? (
              <>
                {filtredData && filtredData.length > 0 ? (
                  <>
                    <div className="flex flex-wrap justify-center items-center gap-2">
                      {filtredData.slice(0, perPage).map((product, index) => (
                        <ProductCard
                          key={index}
                          product={product}
                          wishesData={wishData}
                          toggleWishList={toggleWishList}
                          wishlistReload={wishlistReload}
                          showAndGetProductBarcode={showAndGetProductBarcode}
                          setShowSearcheLayer={setShowSearcheLayer}
                          type="search"
                          style="w-[48%] sm:w-[32%] md:w-[24%]"
                        />
                      ))}
                    </div>
                    {filtredData.length > 9 && perPage < filtredData.length && (
                      <LoadMoreBtn perPage={perPage} setPerPage={setPerPage} />
                    )}
                  </>
                ) : (
                  <EmptyData
                    text="جرب البحث عن كلمة أخري"
                    style={{ height: "45vh", padding: "0px" }}
                  />
                )}
              </>
            ) : (
              <EmptyData
                text="...جاري تحميل المنتجات"
                style={{ height: "45vh", padding: "0px" }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchComp;
