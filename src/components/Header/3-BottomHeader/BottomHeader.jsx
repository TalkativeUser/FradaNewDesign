"use client";
import { Row, Col, Container } from "react-bootstrap";
import Link from "next/link";
import BottomLinks from "./BottomHeaderAtoms/BottomLinks";
import cartIcon from "../../../../public/images/NavBar/cart-navBar.svg";
import "./BottomHeader.css";
import Image from "next/image";
import SocialLinks from "@/components/utils/SocialLinks/SocialLinks";
import { useMainContext } from "@/Context/MainContext";


import "../2-MiddleHeader/MiddleHeader.css";
import HeaderLogo from "../2-MiddleHeader/MiddleHeaderAtoms/HeaderLogo/HeaderLogo";
import HeaderSearch from "../2-MiddleHeader/MiddleHeaderAtoms/HeaderSearch/HeaderSearch";
import HeaderList from "../2-MiddleHeader/MiddleHeaderAtoms/HeaderList/HeaderList";
import { useState } from "react";
import SidebarMenu from "@/components/utils/SidebarMenu/SidebarMenu";


const BottomHeader = ({ categories , token,  fullWidth=false }) => {
    const [showSidebar,setShowSidebar]=useState(false);
    const { setShowSearcheLayer } = useMainContext();

  const IMAGE_SRC = process.env.NEXT_PUBLIC_IMAGE_SRC;
  return (
     <>
      <header
      id="header"
      className={`header-default ${fullWidth ? "header-fullwidth" : ""}  `}
    >
      <div className={fullWidth ? "" : "container"}>


        
        <div className="row wrapper-header align-items-center justify-between ">
          <div className="col-md-4 col-3 d-xl-none">
            <a
              href="#mobileMenu"
              className="mobile-menu"
              data-bs-toggle="offcanvas"
              aria-controls="mobileMenu"
            >
              <i className="icon icon-categories" />
            </a>
          </div>
          <div className="col-xl-2 col-md-4 col-6">
            <Link href={`/`} className="logo-header">
              <Image
                alt="logo"
                className="logo"
                src="/images/logo/logo.svg"
                width={144}
                height={25}
              />
            </Link>
          </div>
          <div className="col-xl-8 d-none d-xl-block">
            <nav className="box-navigation text-center">
              <ul className="box-nav-ul d-flex align-items-center justify-content-center nav-list">
                {/* <Nav /> */}
              {categories?.collections_and_discounts && (
                <li className="listed">
                  <Link
                    href={`/collections`}
                    className="listed-desc text-inherit"
                  >
                    <div className="category-name">
                      <p>{categories?.collections_and_discounts.Name}</p>
                    </div>
                  </Link>
                </li>
              )}

              {categories.categories?.map((category, index) => (
                <BottomLinks category={category} key={index} />
              ))}

              {categories.length > 0 &&
                categories.map((category) => (
                  <li className="listed" key={category.CategoryID}>
                    {category.subcategories.length > 0 ? (
                      <div className="subcategory">
                        <Container fluid>
                          <Row>
                            <Col md={{ span: 6 }} className="p-0">
                              <div className="img-container">
                                <img
                                  loading="lazy"
                                  src={`${IMAGE_SRC}/Category/${category.photo}`}
                                  alt={category.Name}
                                />
                                <div className="layer"></div>
                                <div className="content">
                                  <p>
                                    إكتشف أهم مستلزمات الرجال في العصر الحديث
                                  </p>
                                  <p>{category.Name}</p>
                                  <Link
                                    href={"category/" + category.CategoryID}
                                    className="listed-desc text-inherit"
                                  >
                                    <button className="btn">
                                      إكتشف المزيد
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </Col>
                            <Col md={{ span: 6 }} className="p-0">
                              <div className="subcategory-content">
                                <div className="subcategory-container">
                                  {/* <ul className="group-list list-unstyled">
                                    <li>أبرز المجموعات</li>
                                    <li>مجموعات إيطاليه نادره</li>
                                    <li>مجموعات إيطاليه نادره</li>
                                  </ul> */}
                                  <ul className="subcategory-list list-unstyled">
                                    <li>
                                      <Link
                                        href={"category/" + category.Name}
                                        className="listed-desc text-inherit"
                                      >
                                        <p>إظهار الكل</p>
                                      </Link>
                                    </li>
                                    {category.subcategories.map(
                                      (subcategory) => (
                                        <li key={subcategory.SubcategoryID}>
                                          <Link
                                            href={
                                              "category/" +
                                              category.CategoryID +
                                              "/subcategory/" +
                                              subcategory.SubcategoryID
                                            }
                                            className="listed-desc text-inherit"
                                          >
                                            <p>{subcategory.Name}</p>
                                          </Link>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                                <div className="social-links-container">
                                  <SocialLinks text="تابعنا علي مواقع التواصل الإجتماعي" />
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    ) : null}
                  </li>
                ))}
                
              </ul>
            </nav>
          </div>
          <div className="col-xl-2 col-md-4 col-3">
            <ul className="nav-icon d-flex justify-content-end align-items-center">
              <li className="nav-search"  onClick={()=>setShowSearcheLayer(true)}  >
                <a
                  href="#search"
                  data-bs-toggle="modal"
                  className="nav-icon-item"
                >
                  <svg
                    className="icon"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                      stroke="#181818"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.35 21.0004L17 16.6504"
                      stroke="#181818"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li className="nav-account">
                <a href="#" className="nav-icon-item">
                  <svg
                    className="icon"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                      stroke="#181818"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                      stroke="#181818"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <div className="dropdown-account dropdown-login">
                  <div className="sub-top">
                    <Link href={`/login`} className="tf-btn btn-reset ">
                      تسجيل الدخول
                    </Link>
                    <p className="text-center text-secondary-2">
                       ليس لديك حساب ؟ إنشاء  {" "}
                      <Link href={`/register`}>حساب جديد</Link>
                    </p>
                  </div>
                  <div className="sub-bot">
                    <Link href={'/services/faq'} className="body-text-">مركز المساعدة</Link>
                  </div>
                </div>
              </li>
              <li className="nav-wishlist">
                <Link href={`/wishes`} className="nav-icon-item">
                  <svg
                    className="icon"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987V4.60987Z"
                      stroke="#181818"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </li>
              <li className="nav-cart">
                <Link
                  href="/cart"
                  data-bs-toggle="modal"
                  className="nav-icon-item"
                >
                  <svg
                    className="icon"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5078 10.8734V6.36686C16.5078 5.17166 16.033 4.02541 15.1879 3.18028C14.3428 2.33514 13.1965 1.86035 12.0013 1.86035C10.8061 1.86035 9.65985 2.33514 8.81472 3.18028C7.96958 4.02541 7.49479 5.17166 7.49479 6.36686V10.8734M4.11491 8.62012H19.8877L21.0143 22.1396H2.98828L4.11491 8.62012Z"
                      stroke="#181818"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="count-box">
<span>3</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

   

    <section className="header-nav">
      <Container>
        <Row>
          <Col md={{ span: 4 }} lg={{ span: 2 }}>
            <HeaderLogo />
          </Col>
          <Col
            xs={{ span: 11 }}
            md={{ span: 6 }}
            lg={{ span: 3 }}
            xl={{ span: 4 }}
            xxl={{ span: 5 }}
          >
            <HeaderSearch />
          </Col>
          <Col
            xs={{ span: 1 }}
            md={{ span: 2 }}
            lg={{ span: 7 }}
            xl={{ span: 6 }}
            xxl={{ span: 5 }}
          >
            <HeaderList setShowSidebar={setShowSidebar} token={token}/>
          </Col>
        </Row>
        {showSidebar && (
          <SidebarMenu
            categories={categories}
            setShowSidebar={setShowSidebar}
            token={token}
          />
        )}
      </Container>
    </section>

     </>
  );
};

export default BottomHeader;
