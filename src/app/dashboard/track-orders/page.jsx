import { getUserOrders } from "@/actions/dashboard/UserOrders";
import TrackOrders from "../dashboardComponent/trackOrders/TrackOrders";
export const metadata = {
  title: "Track Orders",
  description:
    "استعد للتميّز والأناقة مع فرادا - وجهتك الأساسية لأزياء الرجال السعودية. اكتشف تشكيلتنا الاستثنائية من الزي السعودي التقليدي، الأحذية الرسمية، العطور، والإكسسوارات. احصل على إطلالة لا تنسى وأضف لمستك الشخصية مع منتجاتنا ذات الجودة العالية والفخامة. استمتع بتجربة تسوق مثيرة وتألق بثقة مع فرادا",
};
const page = async () => {
  let userOrders = await getUserOrders();
  return <TrackOrders userOrders={userOrders}/>
};
export default page;
