"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
export default function Collections() {
  return (
    <section className="flat-spacing-2 pb_0">
      <div className="container">
        <div className="heading-section-2 wow fadeInUp">
          <h3> تشكيلات قد تعجبك</h3>
          <Link href={`/shop-collection`} className="btn-line">
            تصفح التشكيلات
          </Link>
        </div>
        <div
          className="flat-collection-circle wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <Swiper
            dir="ltr"
            slidesPerView={5}
            spaceBetween={20}
            breakpoints={{
              1200: { slidesPerView: 5, spaceBetween: 20 },
              1000: { slidesPerView: 4, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              480: { slidesPerView: 2, spaceBetween: 15 },
              0: { slidesPerView: 2, spaceBetween: 15 },
            }}
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
              el: ".spd54",
            }}
            navigation={{
              prevEl: ".snbp12",
              nextEl: ".snbn12",
            }}
          >
            {collections.map((collection, index) => (
              <SwiperSlide key={index}>
                <div className="collection-circle hover-img">
                  <Link href={`/shop-collection`} className="img-style">
                    <Image
                      className="lazyload"
                      data-src={collection.imgSrc}
                      alt={collection.alt}
                      src={collection.imgSrc}
                      width={363}
                      height={363}
                    />
                  </Link>
                  <div className="collection-content text-center">
                    <div>
                      <Link href={`/shop-collection`} className="cls-title">
                        <h6 className="text">{collection.title}</h6>
                        <i className="icon icon-arrowUpRight" />
                      </Link>
                    </div>
                    <div className="count text-secondary">
                      {collection.count}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="d-flex d-lg-none sw-pagination-collection sw-dots type-circle justify-content-center spd54" />
          <div className="nav-prev-collection d-none d-lg-flex nav-sw style-line nav-sw-left snbp12">
            <i className="icon icon-arrLeft" />
          </div>
          <div className="nav-next-collection d-none d-lg-flex nav-sw style-line nav-sw-right snbn12">
            <i className="icon icon-arrRight" />
          </div>
        </div>
      </div>
    </section>
  );
}


 const collections = [
  {
    imgSrc: "/images/collections/collection-circle/cls-circle1.jpg",
    alt: "collection-img",
    title: "النعال العربي",
    count: "أصالة وأناقة مضمونة",
  },
  {
    imgSrc: "/images/collections/collection-circle/cls-circle2.jpg",
    title: "الزي السعودي",

    alt: "collection-img",
        count: "شموخ في التفاصيل",

  },
  {
    imgSrc: "/images/collections/collection-circle/cls-circle3.jpg",
    alt: "collection-img",
    title: "الملابس الشتوية",
        count: "دفء بأسلوب راقٍ",

  },
  {
    imgSrc: "/images/collections/collection-circle/cls-circle4.jpg",
    alt: "collection-img",
    title: "الأحذية الكلاسيكية",
        count: "فخامة تليق بك",

  },
  {
    imgSrc: "/images/collections/collection-circle/cls-circle5.jpg",
    alt: "collection-img",

    title: "الاكسسوارات",

        count: "لمسات تكمل طلتك",

  },
  {
    imgSrc: "/images/collections/collection-circle/cls-circle1.jpg",
    alt: "collection-img",
    title: "النعال العربي",


        count: "فخامة تليق بك",

  },
];