import "./Payment.css";
import TabbyCheckout from "../../../Tabby/TabbyCheckout/TabbyCheckout";
import madaLogo from "../../../../../public/images/payment-method/madaLogo.svg";
import masterCardLogo from "../../../../../public/images/payment-method/masterCardLogo.svg";
import visaLogo from "../../../../../public/images/payment-method/visaLogo.svg";
import applePayLogo from "../../../../../public/images/payment-method/applePayLogo.svg";
import tabbyLogo from "../../../../../public/images/payment-method/tabby-badge.svg";
import Image from "next/image";
const Payment = ({
  choosePaymentMethod,
  setChoosePaymentMethod,
  showTabbyCard,
  setShowTabbyCard,
  regectedOrder,
  cartItems,
  createOrder,
  setStep,
}) => {
  return (
    <div className="payment-methods-container">
      <h6>الدفع عن طريق</h6>
      <div className="cart-payment-methods">
        <div className="telr-container">
          <input
            style={{ cursor: "pointer" }}
            type="radio"
            id="telr"
            name="payment"
            value="telr"
            checked={choosePaymentMethod === "telr"}
            onClick={() => {
              setChoosePaymentMethod("telr"), setShowTabbyCard(false);
            }}
          />
          <label htmlFor="telr">
            <div className="payment-methods-telr-logos flex">
              <Image src={visaLogo} alt="visa logo" />
              <Image src={masterCardLogo} alt="master card logo" />
              <Image src={madaLogo} alt="mada logo" />
            </div>
          </label>
        </div>
        <div className="applePay-container">
          <input
            style={{ cursor: "pointer" }}
            type="radio"
            id="apple"
            name="payment"
            value="apple"
            checked={choosePaymentMethod === "apple"}
            onChange={() => {
              setChoosePaymentMethod("apple");
              setShowTabbyCard(false);
            }}
          />
          <label htmlFor="apple">
            <div className="payment-method-apple-logo">
              <Image src={applePayLogo} alt="apple logo" />
            </div>
          </label>
        </div>
        <div className="tabby-container">
          <input
            style={{ cursor: "pointer" }}
            type="radio"
            id="tabby"
            name="payment"
            value="tabby"
            checked={choosePaymentMethod === "tabby"}
            onClick={() => {
              setChoosePaymentMethod("tabby"), setShowTabbyCard(true);
            }}
            disabled={regectedOrder == null ? false : true}
          />
          <label htmlFor="tabby">
            <div className="payment-method-tabby-logo">
              <Image src={tabbyLogo} alt="tabby logo" />
              <div className="tabby-text">
                .قسّمها على 4. بدون أي فوائد، أو رسوم
              </div>
            </div>
          </label>
        </div>
        {regectedOrder != null && (
          <p className="tabby-regected">{regectedOrder}</p>
        )}
        {showTabbyCard == true && (
          <div className="tabby-card-container">
            <TabbyCheckout
              price={
                cartItems.cart.priceAfterDiscount > 0
                  ? Number(cartItems.cart.priceAfterDiscount) + 25
                  : Number(cartItems.cart.priceBeforeDiscount) + 25
              }
            />
          </div>
        )}
      </div>
      <div className="confirm">
        <button className="btn" onClick={() => createOrder()}>
          إتمام الشراء
        </button>
        <span
          onClick={() => {
            setStep(2);
            setChoosePaymentMethod("");
            setShowTabbyCard(false);
          }}
        >
          الـرجــوع
        </span>
      </div>
    </div>
  );
};

export default Payment;
