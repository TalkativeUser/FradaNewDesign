"use client";
import "../Services/ServicesComp.css";
import { usePathname } from "next/navigation";
import bgImage from "../../../../public/images/policies/policiesBg.jpeg";
import TermsSite from "./TermsSite/TermsSite";
import TermsSale from "./TermsSale/TermsSale";
import Cookies from "./Cookies/Cookies";
import UnderWayPage from "@/components/utils/UnderWayPage/UnderWayPage";
import PoliciesSideBar from "../PoliciesAndInfoAtoms/PoliciesSideBar/PoliciesSideBar";
import PoliciesHeader from "../PoliciesAndInfoAtoms/PoliciesHeader/PoliciesHeader";

const TermsAndPolicies = () => {
  let pathname = usePathname();
  const sidebarLinks = [
    {
      title: "شروط وأحكام الموقع",
      href: "/terms-policies/terms-conditions-site",
    },
    {
      title: "شروط وأحكام البيع",
      href: "/terms-policies/terms-conditions-sale",
    },
    {
      title: "سياسة الخصوصية",
      href: "/terms-policies/privacy-policy",
    },
    {
      title: "(Cookies) سياسة ملفات الإرتباط",
      href: "/terms-policies/cookie-policy",
    },
  ];
  const sidebarCaption = [];
  return (
    <section className="services">
      <PoliciesSideBar
        title="البنود القانونية والسياسات"
        sidebarCaption={sidebarCaption}
        pathname={pathname}
        sidebarLinks={sidebarLinks}
      />
      <div className="services-content">
        <PoliciesHeader
          sidebarLinks={sidebarLinks}
          pathname={pathname}
          bgImage={bgImage}
        />
        <div className="services-child">
          {pathname == "/terms-policies/terms-conditions-site" && (
            <TermsSite />
          )}
          {pathname == "/terms-policies/terms-conditions-sale" && (
            <TermsSale />
          )}
          {pathname == "/terms-policies/privacy-policy" && <UnderWayPage />}
          {pathname == "/terms-policies/cookie-policy" && <Cookies />}
        </div>
      </div>
    </section>
  );
};
export default TermsAndPolicies;
