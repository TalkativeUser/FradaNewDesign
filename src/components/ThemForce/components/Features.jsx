"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features({ parentClass = "flat-spacing" }) {
  return (
    <section className={parentClass}>
      <div className="container">
        <Swiper
          dir="rtl"
          className="swiper tf-sw-iconbox"
          spaceBetween={15}
          breakpoints={{
            1200: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            576: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd2",
          }}
        >
          {iconboxItems.map((item) => (
            // update direction
            <SwiperSlide key={item.id} dir="rtl" >
              <div className="tf-icon-box">
                <div className="icon-box">
                  <span className={`icon ${item.icon}`} />
                </div>
                <div className="content text-center">
                  <h6>{item.title}</h6>
                  <p className="text-secondary">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-pagination-iconbox spd2 sw-dots type-circle justify-content-center" />
        </Swiper>
      </div>
    </section>
  );
}


const iconboxItems = [
  {
    id: 1,
    icon: "icon-return",
    title: "الاستبدال و الاسترجاع",
    description: " تقدر تسترجع أو تستبدل خلال 14 يوم بدون قلق",
  },
  {
    id: 2,
    icon: "icon-shipping",
    title: "شحن مجاني",
    description: "شحن مجاني لطلباتك فوق 499 ريال",
  },
  {
    id: 3,
    icon: "icon-headset",
    title: "معك لحظة بلحظة",
    description: "خدمة عملاء متواصلة - تواصل معنا 24/7",
  },
  {
    id: 4,
    icon: "icon-sealCheck",
    title: "عضويتك ذهب",
    description: "خصومات ونقاط حصرية بانتظارك.",
  },
];
