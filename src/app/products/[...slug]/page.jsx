import CategoryProductsContainer from "@/components/CategoryProductsContainer/CategoryProductsContainer";
import FilterMenu from "@/components/FilterMenu/FilterMenu";
import FilterBar from "@/components/FilterBar/FilterBar";
import { FilterAndGridProvider } from "@/Context/FilterContext";
import { redirect } from "next/navigation";
import { getCatogoryAndSubCategoryProductsAndFilteraData } from "@/actions/categroyAndSubcategoryData";
import { getWishlistData } from "@/actions/wishList";
const categoryAndSubcategoryPage = async ({ params, searchParams }) => {
  const pageParams = await params;
  const pageSearchParams = await searchParams;
  const perPage=10;
  let productsData = await getCatogoryAndSubCategoryProductsAndFilteraData(perPage,pageParams, pageSearchParams);
  if(pageParams.slug[1]!=null&&(productsData&&productsData?.keys?.Subcategory==null)){
    redirect("/not-found")
  }
  return (
    <FilterAndGridProvider>
      <FilterBar productsData={productsData} pageSearchParams={pageSearchParams} />
      <div className="flex justify-center items-start relative mt-2">
        <CategoryProductsContainer productsData={productsData} perPage={perPage} pageParams={pageParams} pageSearchParams={pageSearchParams}/>
        <FilterMenu
          productsData={productsData}
          pageSearchParams={pageSearchParams}
        />
      </div>
    </FilterAndGridProvider>
  );
};
export default categoryAndSubcategoryPage;
