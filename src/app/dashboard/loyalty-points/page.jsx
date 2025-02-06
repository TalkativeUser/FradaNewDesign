import { getPoints } from "@/actions/dashboard/LoyalltyPoints"
import LoyaltyPoints from "../dashboardComponent/loyaltyPoints/LoyaltyPoints"
export const metadata = {
  title: "Loyalty Points",
  description:
    "استعد للتميّز والأناقة مع فرادا - وجهتك الأساسية لأزياء الرجال السعودية. اكتشف تشكيلتنا الاستثنائية من الزي السعودي التقليدي، الأحذية الرسمية، العطور، والإكسسوارات. احصل على إطلالة لا تنسى وأضف لمستك الشخصية مع منتجاتنا ذات الجودة العالية والفخامة. استمتع بتجربة تسوق مثيرة وتألق بثقة مع فرادا",
};
const page =async () => {
    let userPointData=await getPoints()
  return (
    <LoyaltyPoints userPointData={userPointData}/>
  )
}
export default page