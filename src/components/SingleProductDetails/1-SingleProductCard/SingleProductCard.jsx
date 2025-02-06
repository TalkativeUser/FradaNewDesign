"use client"
import SingleProductImageHolder from "../SingleProductCardAtoms/SingleProductImageHolder/SingleProductImageHolder"
import "./SingleProductCard.css"
import SingleProductDetails from "../SingleProductCardAtoms/SingleProductDetails/SingleProductDetails"
import { useEffect, useState } from "react"
const SingleProductCard = ({productData}) => {
  const[chooosedColorIndex,setChoosedColorIndex]=useState(0)
  const [images,setImages]=useState([]);
  // useEffect to change images
  useEffect(()=>{
    if(productData?.imagesWithoutColor!=null){
      setImages(productData?.imagesWithoutColor)
    }
    if(productData?.variants!=null){
      if(productData?.variants?.colors&&productData?.variants?.colors?.length>0){
        setImages(productData?.variants?.colors[chooosedColorIndex]?.images)
      }
    }
  },[productData,chooosedColorIndex]);
  return (
    <section className="single-product-card">
        <SingleProductImageHolder productData={productData} images={images}/>
        <SingleProductDetails  productData={productData} setChoosedColorIndex={setChoosedColorIndex}/>
    </section>
  )
}
export default SingleProductCard