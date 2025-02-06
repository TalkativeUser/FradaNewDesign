import fradaShape from "../../public/images/footerImages/fradaShape.svg";
import fradaShapeMobile from "../../public/images/footerImages/mobile/fradaShape.svg";
import cartShape from "../../public/images/footerImages/cartShape.svg";
import cartShapeMobile from "../../public/images/footerImages/mobile/cartShape.svg";
import contactShape from "../../public/images/footerImages/contactShape.svg";
import contactShapeMobile from "../../public/images/footerImages/mobile/contactShape.svg";
import wishShape from "../../public/images/footerImages/wishShap.svg";
import wishShapeMobile from "../../public/images/footerImages/mobile/wishShap.svg";
import accShap from "../../public/images/footerImages/accountShap.svg";
import accShapMobile from "../../public/images/footerImages/mobile/accountShap.svg";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
// import { getCookie } from "cookies-next";
const FixedFooterHook = () => {
  let pathName = usePathname();
  const [activeIndex, setActiveIndex] = useState(2);
  const [shape, setShape] = useState(fradaShape);
  const router = useRouter();
  const navigateToRoute = (param) => {
    router.push(`/${param}`);
    if(param=="dashboard" && getCookie("access_token")==undefined){
      router.push(`/login`);
    }
  };
  useEffect(() => {
    if (pathName == "/cart") {
      setActiveIndex(1);
    }else if(pathName == "/wishes"){
      setActiveIndex(3);
    }else if(pathName == "/dashboard"){
      setActiveIndex(4);
    }else{
      setActiveIndex(2);
    }
  }, [pathName]);
  useEffect(() => {
    const listElements = document.querySelectorAll(".list");
    const activeLink = (index) => {
      listElements.forEach((item) => item.classList.remove("active"));
      listElements[index].classList.add("active");
    };
    const handleClick = (index) => {
      setActiveIndex(index);
    };
    listElements.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeLink(index);
        handleClick(index);
      });
    });

    if (activeIndex === 0) {
      if (window.innerWidth < 400) {
        setShape(contactShapeMobile);
      } else {
        setShape(contactShape);
      }
    } else if (activeIndex === 1) {
      if (window.innerWidth < 400) {
        setShape(cartShapeMobile);
      } else {
        setShape(cartShape);
      }
    } else if (activeIndex === 2) {
      if (window.innerWidth < 400) {
        setShape(fradaShapeMobile);
      } else {
        setShape(fradaShape);
      }
    } else if (activeIndex === 3) {
      if (window.innerWidth < 400) {
        setShape(wishShapeMobile);
      } else {
        setShape(wishShape);
      }
    } else if (activeIndex === 4) {
      if (window.innerWidth < 400) {
        setShape(accShapMobile);
      } else {
        setShape(accShap);
      }
    }
    // Cleanup event listeners on component unmount
    return () => {
      listElements.forEach((item, index) => {
        item.removeEventListener("click", () => {
          activeLink(index);
          handleClick(index);
        });
      });
    };
  }, [activeIndex]);
  return [shape, activeIndex, navigateToRoute];
};
export default FixedFooterHook;
