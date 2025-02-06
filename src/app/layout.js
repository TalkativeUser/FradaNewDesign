
import "../../public/icons/style.css"
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderComponent from "@/components/Header/Header";
import Footer from "@/components/utils/Footer/Footer";
import FixedFooter from "@/components/utils/FixedFooter/FixedFooter";
import { MainContextProvider } from "@/Context/MainContext";
import ProductDetailsMenu from "@/components/utils/ProductDetailsMenu/ProductDetailsMenu";
import SearchComp from "@/components/SearchComp/SearchComp";
import '../../public/scss/main.scss';
import "photoswipe/style.css";
import "react-range-slider-input/dist/style.css";
import "../../public/css/image-compare-viewer.min.css";

import { Cairo } from "next/font/google";
export const metadata = {
  title: "Frada | فرادا ",
  description: "استعد للتميّز والأناقة مع فرادا - وجهتك الأساسية لأزياء الرجال السعودية. اكتشف تشكيلتنا الاستثنائية من الزي السعودي التقليدي، الأحذية الرسمية، العطور، والإكسسوارات. احصل على إطلالة لا تنسى وأضف لمستك الشخصية مع منتجاتنا ذات الجودة العالية والفخامة. استمتع بتجربة تسوق مثيرة وتألق بثقة مع فرادا",
};
const cairo = Cairo({ 
  subsets: ['arabic'],
  display: 'swap',
})
export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body
        className={cairo.className}
      >
        <MainContextProvider>
        <HeaderComponent/>
        <SearchComp/>
        {children}
        <ProductDetailsMenu/>
        <Footer/>
        <FixedFooter/>
        </MainContextProvider>
      </body>
    </html>
  );
}
