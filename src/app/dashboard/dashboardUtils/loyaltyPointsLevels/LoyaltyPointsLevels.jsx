"use client";
import Image from "next/image";
import Slider from "react-slick";
const LoyaltyPointsLevels = ({ loyaltyData }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let levels = [
    {
      bgColor: "#B9E2FF",
      imageSrc: "/images/blue.svg",
      name: "بلاتيني",
      lock: true,
    },
    {
      bgColor: "#FFF1CB",
      imageSrc: "/images/gold.svg",
      name: "ذهبي",
      lock: true,
    },
    {
      bgColor: "#ECECEC",
      imageSrc: "/images/silver.svg",
      name: "فضي",
      lock: true,
    },
    {
      bgColor: "#FFEEE6",
      imageSrc: "/images/brown.svg",
      name: "برونزي",
      lock: false,
      textColor: "brown",
    },
  ];
  let lockImage = "/images/locked.svg";
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-brown text-center text-sm md:text-lg lg:text-xl font-[600] mt-5">
        إستبدل نقاطك برصيد لقسيمة شراء <br />
        أثناء التسوق من متجرنا أو من نقاط البيع
      </h2>
      <p className="font-[600] ">كل المستويات</p>

      <Slider {...settings}>
        {levels.map((level, index) => (
          <div key={index}>
            <div
              className="flex flex-col m-[10px] justify-around h-[200px] py-3 px-5 rounded-lg"
              style={{ backgroundColor: level.bgColor }}
            >
              <Image
                className="mx-auto"
                src={level.imageSrc}
                alt={level.name}
                width={65}
                height={65}
              />
              <div className="flex flex-col gap-3">
                <p className="text-center border-[1px] border-solid border-white w-fit  m-auto px-6 py-1 rounded-2xl text-[12px]">
                  {level.name}
                </p>
                {level.name == loyaltyData?.currentLayer?.layerName ? (
                  <p
                    className={`text-center text-[13px] font-[600] ${
                      level.textColor && `text-${level.textColor}`
                    }`}
                  >
                    المستوي مفتوح
                  </p>
                ) : (
                  <Image
                    src={lockImage}
                    alt={level.name}
                    width={13}
                    height={16}
                    className="m-auto"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default LoyaltyPointsLevels;
