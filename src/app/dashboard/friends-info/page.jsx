import { getAllFriends } from "@/actions/dashboard/FriendsInfo";
import FriendInfoComp from "../dashboardComponent/FriendsInfoComp/FriendInfoComp";
import { getSaudiCities } from "@/actions/dashboard/userInfo";
export const metadata = {
  title: "Friends Information",
  description:
    "استعد للتميّز والأناقة مع فرادا - وجهتك الأساسية لأزياء الرجال السعودية. اكتشف تشكيلتنا الاستثنائية من الزي السعودي التقليدي، الأحذية الرسمية، العطور، والإكسسوارات. احصل على إطلالة لا تنسى وأضف لمستك الشخصية مع منتجاتنا ذات الجودة العالية والفخامة. استمتع بتجربة تسوق مثيرة وتألق بثقة مع فرادا",
};
const page =async () => {
  let friendsData = await getAllFriends();
  let cities = await getSaudiCities();
  return (
    <FriendInfoComp friendsData={friendsData} cities={cities}/>
  )
}
export default page