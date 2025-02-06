import { getIsLogin } from "@/actions/Authentication";
import DashboardAside from "./dashboardComponent/dashboardAside/DashboardAside";
import { redirect } from "next/navigation";
export const metadata = {
  title: "Dashboard",
  description:
    "استعد للتميّز والأناقة مع فرادا - وجهتك الأساسية لأزياء الرجال السعودية. اكتشف تشكيلتنا الاستثنائية من الزي السعودي التقليدي، الأحذية الرسمية، العطور، والإكسسوارات. احصل على إطلالة لا تنسى وأضف لمستك الشخصية مع منتجاتنا ذات الجودة العالية والفخامة. استمتع بتجربة تسوق مثيرة وتألق بثقة مع فرادا",
};
export default async function DashboardLayout({ children }) {
  let token = await getIsLogin();
  if (!token) {
    redirect("/login");
  }
  return (
    <>
      <div className="w-[calc(100%_-_56px)] children"> {children}</div>
      <DashboardAside />
    </>
  );
}
