import { getIsLogin } from "@/actions/Authentication";
import { getProductDetailsData, getProductReviews } from "@/actions/ProductDetails";
import SingleProductCard from "@/components/SingleProductDetails/1-SingleProductCard/SingleProductCard";
import SingleProductDescription from "@/components/SingleProductDetails/2-SingleProductDescription/SingleProductDescription";
import SingleProductReviews from "@/components/SingleProductDetails/3-SingleProductReviews/SingleProductReviews";
import SimilarProducts from "@/components/SingleProductDetails/4-SimilarProducts/SimilarProducts";
const page = async ({ params }) => {
  let pageParams = await params;
  let productData = await getProductDetailsData(pageParams.slug[0]);
  let productReviews = await getProductReviews(productData.ProductID);  
  let isLoggedIn=await getIsLogin()
  return (
    <>
      <SingleProductCard productData={productData}/>
      <SingleProductDescription
        descriptions={productData?.descriptions}
      />
      <SingleProductReviews productReviews={productReviews} productID={productData.ProductID} isLoggedIn={isLoggedIn}/>
      {/* <SimilarProducts /> */}
    </>
  );
};

export default page;
