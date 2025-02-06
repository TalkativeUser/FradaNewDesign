"use client";
import {
  addToCart,
  getCartDataSrver,
  removeCartItem,
} from "@/actions/CartActions";
import {
  getWishlistDataSrver,
  addToWishlist,
  removeFromWishlist,
} from "@/actions/wishList";
import { createContext, useState, useContext, useEffect } from "react";
const MainContext = createContext();
export const MainContextProvider = ({ children }) => {
  const [showProductDetailsMenu, setShowDetailsMenu] = useState(false);
  const [productBarcode, setProductBarcode] = useState(null);
  const [showSearcheLayer, setShowSearcheLayer] = useState(false);
  const showAndGetProductBarcode = (barcode) => {
    setProductBarcode(barcode);
    setShowDetailsMenu(true);
  };
  // get wishlist data
  const [wishlistReload, setWishlistReaload] = useState(false);
  const [wishData, setWishData] = useState([]);
  const getWishlistData = async () => {
    let data = await getWishlistDataSrver();
    setWishData(data);
  };
  useEffect(() => {
    getWishlistData();
  }, [wishlistReload]);

  // add and remove item from wishList
  const toggleWishList = async (type, productSlug) => {
    setWishlistReaload(true);
    if (type == "add") {
      await addToWishlist(productSlug);
    } else {
      await removeFromWishlist(productSlug);
    }
    setWishlistReaload(false);
  };

  // get cart data
  const [cartReload, setCartReload] = useState(false);
  const [cartData, setCartData] = useState([]);
  const getCartData = async () => {
    let data = await getCartDataSrver();
    setCartData(data);
  };
  useEffect(() => {
    getCartData();
  }, [cartReload]);
  const addToCartFunc=async(type,barcode,quantity)=>{
    setCartReload(true);
    if(type=="plus"){
      await addToCart(barcode,(quantity+1));
    }else{
      await addToCart(barcode,(quantity-1));
    }
    setCartReload(false);
  }
  const removeFromCart=async(cartItemId)=>{
    setCartReload(true);
    await removeCartItem(cartItemId);
    setCartReload(false);
  }
  console.log("cartData",cartData);
  
  return (
    <MainContext.Provider
      value={{
        showProductDetailsMenu,
        setShowDetailsMenu,
        productBarcode,
        showAndGetProductBarcode,
        showSearcheLayer,
        setShowSearcheLayer,
        wishData,
        toggleWishList,
        wishlistReload,
        cartData,
        addToCartFunc,
        removeFromCart,
        cartReload,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
export function useMainContext() {
  return useContext(MainContext);
}
