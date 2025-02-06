import "./SidebarMenu.css";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SocilaLinks from "../../../components/utils/SocialLinks/SocialLinks";
import { redirect } from "next/navigation";
import { logOut } from "@/actions/Authentication";
const SidebarMenu = ({ categories, setShowSidebar ,token}) => {
  // Show SubCategory
  let [showSubCategory, setShowSubCategory] = useState(false);
  let [filterdCategoryData, setfilterdCategoryData] = useState();
  const getSubCategoryData = (id) => {
    let filterdCategory = categories.categories.find(
      (filterdCategory) => filterdCategory.CategoryID === id
    );
    setfilterdCategoryData(filterdCategory);
  };
  return (
    <div className="sidebar-menu">
      <div className="sidebar-category">
        <div className="top">
          <span
            className="icon-close"
            onClick={() => setShowSidebar(false)}
          ></span>
          <h5>القائمة</h5>
        </div>
        <ul className="category-links">
          {/* categories */}
          {/* <li>
            <div className="single-category-link">
              <Link
                href="collections"
                as="collections"
                className="listed-desc"
                style={{ textDecoration: "none", color: "unset" }}
              >
                <h6 onClick={() => setShowSidebar(false)}>
                  <h6>العروض والخصومات</h6>
                </h6>
              </Link>
            </div>
          </li> */}
          {categories?.categories?.length > 0 &&
            categories?.categories?.map((category) => (
              <li key={category.CategoryID}>
                <div className="single-category-link">
                  {category.subcategories.length > 0 ? (
                    <div
                      onClick={() => {
                        getSubCategoryData(category.CategoryID),
                          setShowSubCategory(true);
                      }}
                      className="listed-desc"
                    >
                      <span className="icon-navigate_next"></span>
                      <h6>{category.arabic_name}</h6>
                    </div>
                  ) : (
                    <Link
                      href={`/products/${category.slug}`}
                      className="listed-desc"
                      style={{ textDecoration: "none", color: "unset" }}
                    >
                      <h6 onClick={() => setShowSidebar(false)}>
                        {category.arabic_name}
                      </h6>
                    </Link>
                  )}
                </div>
              </li>
            ))}
        </ul>
        <ul className="about-us-links">
          {token?
          <li className="logout" onClick={() => {logOut();setShowSidebar(false)}}>
            <h6>تسجيل الخروج</h6>
          </li>
          :
          <li className="login">
            <h6 onClick={() => {setShowSidebar(false);redirect("/login")}}>تسجيل الدخول</h6>
          </li>
          }
        </ul>

        <div className="social-links-container">
          <SocilaLinks text={"تابعنا علي مواقع التواصل الإجتماعي"} />
        </div>
      </div>
      <div
        className="sidebar-subcategory"
        style={{ left: `${showSubCategory === false ? "-100%" : "0"}` }}
      >
        {/* subCategories */}
        {filterdCategoryData && (
          <>
            <div className="top">
              <span
                className="icon-close"
                onClick={() => setShowSubCategory(false)}
              ></span>
              <h5>{filterdCategoryData.arabic_name}</h5>
            </div>

            <ul className="subcategory-links">
              <li
                onClick={() => {
                  setShowSidebar(false), setShowSubCategory(false);
                }}
              >
                <div className="single-subcategory-link">
                  <Link
                    href={`/products/${filterdCategoryData.slug}`}
                    className="listed-desc"
                    style={{ textDecoration: "none", color: "unset" }}
                  >
                    <h6>عرض الكل</h6>
                  </Link>
                </div>
              </li>
              {filterdCategoryData.subcategories &&
                filterdCategoryData.subcategories.map((subCategory) => (
                  <li
                    key={subCategory.SubcategoryID}
                    onClick={() => {
                      setShowSidebar(false), setShowSubCategory(false);
                    }}
                  >
                    <div className="single-subcategory-link">
                      <Link
                        href={`/products/${filterdCategoryData.slug}/${subCategory.slug}`}
                        className="listed-desc"
                        style={{ textDecoration: "none", color: "unset" }}
                      >
                        <h6>{subCategory.arabic_name}</h6>
                      </Link>
                    </div>
                  </li>
                ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
export default SidebarMenu;
