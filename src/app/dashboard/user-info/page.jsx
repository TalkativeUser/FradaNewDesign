import { getSaudiCities, getUserInfo } from "@/actions/dashboard/userInfo";
import UserInfoComp from "../dashboardComponent/UserInfoComp/UserInfoComp";
export const metadata = {
  title: "Personal Infomation",
  description:
    "استعد للتميّز والأناقة مع فرادا - وجهتك الأساسية لأزياء الرجال السعودية. اكتشف تشكيلتنا الاستثنائية من الزي السعودي التقليدي، الأحذية الرسمية، العطور، والإكسسوارات. احصل على إطلالة لا تنسى وأضف لمستك الشخصية مع منتجاتنا ذات الجودة العالية والفخامة. استمتع بتجربة تسوق مثيرة وتألق بثقة مع فرادا",
};
const page = async () => {
  let userInfo = await getUserInfo();
  let citiesData = await getSaudiCities();
  return <UserInfoComp userInfo={userInfo} citiesData={citiesData} />;
};
export default page;
