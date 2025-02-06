import RegisterComp from "@/components/Authentication/Register/RegisterComp";
export const metadata = {
  title: "Register",
  description:
    "استعد للتميّز والأناقة مع فرادا - وجهتك الأساسية لأزياء الرجال السعودية. اكتشف تشكيلتنا الاستثنائية من الزي السعودي التقليدي، الأحذية الرسمية، العطور، والإكسسوارات. احصل على إطلالة لا تنسى وأضف لمستك الشخصية مع منتجاتنا ذات الجودة العالية والفخامة. استمتع بتجربة تسوق مثيرة وتألق بثقة مع فرادا",
};
const page = () => {
  return (
    <RegisterComp />
  )
}

export default page