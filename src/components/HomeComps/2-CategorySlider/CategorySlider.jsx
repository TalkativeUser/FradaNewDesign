"use client";
import Slider from "react-slick";
import imgTest from "../../../../public/images/test.png";
import HomeCategoriesCard from "../HomeAtoms/HomeCategoriesCard/HomeCategoriesCard";
const CategorySlider = () => {
  let categoryData = [
    {
      img: imgTest,
      p1: "تشكيلات النعال من فرادا",
      p2: "...تالقك يعني لنا الكثير",
    },
    {
      img: imgTest,
      p1: "تشكيلات النعال من فرادا",
      p2: "...تالقك يعني لنا الكثير",
    },
    {
      img: imgTest,
      p1: "تشكيلات النعال من فرادا",
      p2: "...تالقك يعني لنا الكثير",
    },
    {
      img: imgTest,
      p1: "تشكيلات النعال من فرادا",
      p2: "...تالقك يعني لنا الكثير",
    },
    {
      img: imgTest,
      p1: "تشكيلات النعال من فرادا",
      p2: "...تالقك يعني لنا الكثير",
    },
    {
      img: imgTest,
      p1: "تشكيلات النعال من فرادا",
      p2: "...تالقك يعني لنا الكثير",
    },
  ];
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className="bg-lightGray mt-2 lg:px-20 md:mx-5 lg:mx-20 shadow-md border rounded-lg carousel-2"
      style={{ borderColor: "white", borderWidth: "2px" }}
    >
      <Slider {...settings} className={`flex justify-center cards `}>
        {categoryData.map((item, index) => {
          return <HomeCategoriesCard item={item} key={index} />;
        })}
      </Slider>
    </div>
  );
};

export default CategorySlider;
