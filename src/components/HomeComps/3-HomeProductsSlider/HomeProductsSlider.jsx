import ProductsSlider from "@/components/utils/ProductsSlider/ProductsSlider";
import { getWishlistData } from "@/actions/wishList";
const HomeProductsSlider = async ({slidersData}) => {
  return (
    <>
      {slidersData?.map((sliderData, index) => (
        <ProductsSlider
          title={sliderData.title}
          products={sliderData.selected_products}
          link={`${sliderData?.category_slug || ""}/${
            sliderData?.subcategory_slug || ""
          }`}
          key={index}
        />
      ))}
    </>
  );
};
export default HomeProductsSlider;