import { getIsLogin } from "@/actions/Authentication";
import HeaderUp from "./1-HeaderUp/HeaderUp";
import MiddleHeader from "./2-MiddleHeader/MiddleHeader";
import BottomHeader from "./3-BottomHeader/BottomHeader";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const getCategoriesData = async () => {
  try {
    let response = await fetch(`${API_URL}/categories`, {
      next: {
        revalidate: 3600,
      },
    });
    if (!response.ok) {
      throw new Error("تحقق من إتصالك بالإنترنت");
    }
    let { data: resData } = await response.json();
    return resData;
  } catch (e) {
    return e;
  }
};
const HeaderComponent =async () => {
  let categories = await getCategoriesData();
  let token = await getIsLogin();
  return (
    <>
    <HeaderUp/>
    <BottomHeader categories={categories} token={token} />
    </>
  );
};
export default HeaderComponent;
