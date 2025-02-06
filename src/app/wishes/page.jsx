"use client";
import EmptyData from "@/components/utils/EmptyData/EmptyData";
import ProductCard from "@/components/utils/ProductCard/ProductCard";
import { useMainContext } from "@/Context/MainContext";
const page = () => {
  const {
    showAndGetProductBarcode,
    setShowSearcheLayer,
    wishData,toggleWishList,wishlistReload
  } = useMainContext();
  return (
    <section className="wishlist-page my-5 m-auto max-w-[1700px]">
      {wishData && wishData?.length > 0 ? (
        <>
          <h5 className="text-right mb-2 font-bold mr-2">قائمة الأمنيات</h5>
          <div className="products-container flex justify-end flex-wrap items-center gap-x-2 gap-y-6 m-auto">
            {wishData.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                wishesData={wishData}
                toggleWishList={toggleWishList}
                wishlistReload={wishlistReload}
                showAndGetProductBarcode={showAndGetProductBarcode}
                setShowSearcheLayer={setShowSearcheLayer}
                type=""
                style="w-[50%] sm:w-[33%] md:w-[24%] lg:w-[19%] xl:w-[16.2%]"
              />
            ))}
          </div>
        </>
      ) : (
        <EmptyData text="لم يتم إضافة أمنيات" style={{ height: "45vh" }} />
      )}
    </section>
  );
};
export default page;
