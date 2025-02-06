"use client"
import { useMainContext } from "@/Context/MainContext";
const CartSingleItem = ({cartSingleItems,onShowItemPopup,setShowTabbyCard}) => {
  let IMAGE_URL=process.env.NEXT_PUBLIC_IMAGE_SRC;
    const {
      addToCartFunc
    } = useMainContext();
  return (
    <>
    {cartSingleItems.map((cart, index) => {
      return (
        <div className="cart-details" key={index}>
          <span
            className="icon-trash"
            onClick={() => {
              onShowItemPopup(cart, event), setShowTabbyCard(false);
            }}
          ></span>
          <div className="price-qty-container">
            <div className="price-qty-content">
              <div className="price-container">
                {cart?.product?.OriginalPrice ? (
                  <>
                    <div>رس</div>
                    <div className="price">
                      {cart?.product?.OriginalPrice}
                    </div>
                  </>
                ) : (
                  <>
                    <div>رس</div>
                    <div className="price">{cart?.product?.Price}</div>
                  </>
                )}
              </div>
              <div
                className="quentity-container"
                // style={{ opacity: globalIndex == index ? ".2" : "1" }}
              >
                <button
                  onClick={() => {
                    addToCartFunc("minus", cart?.barcode, cart?.Quantity);
                      setShowTabbyCard(false);
                  }}
                  disabled={cart.Quantity == 1 ? true : false}
                  style={{ opacity: cart.Quantity == 1 ? ".2" : "1" }}
                >
                  -
                </button>
                <div className="quentity">{cart.Quantity}</div>
                <button
                  onClick={() => {
                    addToCartFunc("plus", cart?.barcode, cart?.Quantity);
                      setShowTabbyCard(false);
                  }}
                  disabled={
                    cart.Quantity == cart.productQuantityInventory
                      ? true
                      : false
                  }
                  style={{
                    opacity:
                      cart.Quantity == cart.productQuantityInventory
                        ? ".2"
                        : "1",
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div
              className="qty-notify"
              style={{
                opacity:
                  cart.Quantity == cart.productQuantityInventory ? "1" : "0",
              }}
            >
              {/* <NotifyComp
                notify={{ msg: "لقد وصلت للحد الأقصي", state: "error" }}
              /> */}
            </div>
          </div>
          <div className="caption-img-container">
            <div className="caption">
              <h5 className="title">{cart?.product?.Name}</h5>
              {cart?.ColorName && (
                <div className="color-container text-[14px]">
                  <h6 className="color-label">:اللـون</h6>
                  <span
                    className="color"
                    style={{
                      color: cart.ColorName,
                    }}
                  >
                    {cart.ColorName}
                  </span>
                </div>
              )}
              {cart.ThicknessName && (
                <div className="thickness-container text-[14px]">
                  <h6 className="thickness-label">:السٌمـك</h6>
                  <span className="thickness">{cart?.ThicknessName}</span>
                </div>
              )}
              {cart?.size && (
                <div className="size-container text-[14px]">
                  <h6 className="size-label">:المقـاس</h6>
                  <span className="size">{cart.size}</span>
                </div>
              )}
              {cart?.trademarkName != null && (
                <div className="trademark-container text-xs font-bold">
                  {/* <h6 className="trademark-label">:العلامـة التجاريـة</h6> */}
                  <span className="trademark">{cart.trademarkName}</span>
                </div>
              )}
            </div>
            <div className="img-container">
              <img
                src={`${IMAGE_URL}/${cart?.product?.color_image?.Image}`}
                alt={cart?.product?.Name}
              />
            </div>
          </div>
        </div>
      );
    })}
    </>
  )
}

export default CartSingleItem