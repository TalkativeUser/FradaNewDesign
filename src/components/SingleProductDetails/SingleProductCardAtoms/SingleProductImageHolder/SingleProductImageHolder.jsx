"use client";
import Image from "next/image";
import "./SingleProductImageHolder.css";
import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
const SingleProductImageHolder = ({ productData, images }) => {
  let imageSrc = process.env.NEXT_PUBLIC_IMAGE_SRC;
  const [hoveredPhoto, setHoveredPhoto] = useState(null);
  useEffect(() => {
    setHoveredPhoto(images[0]);
  }, [images]);
  const handlePhotoHover = (photo) => {
    setHoveredPhoto(photo);
  };
  return (
    <div className="image-holder-content">
      <div className="images-holder">
        <div className="main-image">
          <Image
            priority
            src={`${imageSrc}/${hoveredPhoto}`}
            width={500}
            height={500}
            alt={productData?.Name}
          />
        </div>

        <div className="sub-images">
          {images?.length > 0
            ? images.slice(0, 6).map((image, index) => (
                <div key={index} onMouseEnter={() => handlePhotoHover(image)}>
                  <Image
                    priority
                    src={`${imageSrc}/${image}`}
                    width={80}
                    height={80}
                    alt={productData?.Name}
                    className="ml-2"
                  />
                </div>
              ))
            : null}
        </div>
      </div>

      <div className="slider-single-mo">
        <Carousel className="slider-single" interval={2000}>
          {images?.length > 0 ? (
            images?.slice(0, 6).map((image, index) => (
              <Carousel.Item key={index}>
                <Carousel.Caption key={index} className="relative">
                  <Image
                  priority
                    src={`${imageSrc}/${image}`}
                    alt={productData?.Name}
                    width={500}
                    height={500}
                    className="ml-2"
                  />
                </Carousel.Caption>
              </Carousel.Item>
            ))
          ) :null}
        </Carousel>
      </div>
    </div>
  );
};
export default SingleProductImageHolder;
