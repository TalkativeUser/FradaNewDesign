"use client";
import "./Cart.css";
import { Row, Col, Container } from "react-bootstrap";
import CartItems from "./CartAtoms/CartItems/CartItems";
import EmptyData from "../utils/EmptyData/EmptyData";
import { useMainContext } from "@/Context/MainContext";
import { useEffect, useState } from "react";
import DeletePopup from "../utils/DeletePopup/DeletePopup";
import CartSteps from "./CartAtoms/CartSteps/CartSteps";
import CartLoginForm from "./CartAtoms/CartLoginForm/CartLoginForm";
import { getIsLogin } from "@/actions/Authentication";
import CartRegisterForm from "./CartAtoms/CartRegisterForm/CartRegisterForm";
import Shipping from "./CartAtoms/Shipping/Shipping";
import Coupon from "./CartAtoms/Coupon/Coupon";
import NotifyComp from "../utils/NotifyComp/NotifyComp";
import { useCoupone } from "@/actions/CouponeAction";
import Payment from "./CartAtoms/Payment/Payment";
import { addToCart, createOrderServer, makeOrderServer } from "@/actions/CartActions";
import { redirect } from "next/navigation";
export default function Cart({ cities, userData, friendData }) {
  const { cartData, removeFromCart, cartReload } = useMainContext();
  const [notify, setNotify] = useState({ msg: "", success: false });
  const [showTabbyCard, setShowTabbyCard] = useState(false);
  const [deleteItemPopup, showDeleteItemPopup] = useState(false);
  const [itemDelete, setItemDelete] = useState(null);
  const [step, setStep] = useState(1);
  const [showForm, setShowForm] = useState("login");
  const [phoneOtped, setPhoneOtped] = useState(null);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [shippingCity, setShippingCity] = useState(null);
  const [deliveryComment, setDeliveryComment] = useState(" ");
  useEffect(() => {
    if (localStorage.getItem("phoneOtped")) {
      setPhoneOtped(localStorage.getItem("phoneOtped"));
    }
  }, [localStorage.getItem("phoneOtped")]);
  // ckeck if user logged in to show login or shiiping componnent
  const ckeckIfUserLoggedIn = async () => {
    let token = await getIsLogin();
    setStep(token ? 2 : 1);
  };
  useEffect(() => {
    ckeckIfUserLoggedIn();
  }, []);

  // show delete popup
  const onShowItemPopup = (cart) => {
    showDeleteItemPopup(true);
    setItemDelete(cart);
  };
  const [couponName, setCouponName] = useState("");
  //On Client Click Add Coupon Button
  const addCoupon = async () => {
    if (couponName == "") {
      setNotify({ msg: "أدخل قيمة الكوبون", success: false });
    } else {
      let couponeData = await useCoupone(couponName);
      if (couponeData.message.includes("Coupon applied successfully")) {
        setNotify({ msg: "تم تطبيق الكوبون بنجاح", success: false });
      } else if (
        couponeData.message.includes("This coupon is already taken before") ||
        couponeData.message.includes("Coupon not found or expired")
      ) {
        setNotify({
          msg: "هذا الكوبون منتهى الصلاحية أو تم إستخدامه من قبل",
          success: false,
        });
      }
    }
  };
  const [choosePaymentMethod, setChoosePaymentMethod] = useState("");
  const [iframeUrl, setIframeUrl] = useState(null);
  const [iframeLoader, setIframeLoader] = useState(false);
  let regectedOrder = null;
  // create order
  const createOrder = async () => {
    if (choosePaymentMethod == "") {
      setNotify({ msg: "من فضلك إختر طريقة الدفع", success: false });
    } else {
      let creatOrderResult = await createOrderServer(
        shippingAddress,
        shippingCity,
        deliveryComment
      );
      if (creatOrderResult.status == 201) {
        let makeOrderResult = await makeOrderServer(
          choosePaymentMethod,
          creatOrderResult?.data?.OrderID
        );
        if (makeOrderResult.status == 200) {
          if(choosePaymentMethod == "telr"){
            setIframeLoader(true);
            setStep(4);
            setIframeUrl(makeOrderResult.data);
            setTimeout(() => {
              setIframeLoader(false);
            }, 600);
          }else{
            redirect(makeOrderResult.data)
            // setStep(4);
            // setIframeUrl("https://checkout.tabby.ai/?apiKey=pk_test_632383e3-0b7d-4674-b07a-94c5359dedac&lang=ara&merchantCode=frada&product=installments&sessionId=f530ca43-83cd-4775-9c30-494f2061bcf4")
          }
          
        }
      }
    }
  };
  return (
    <div className="cart-page">
      <Container>
        {cartData && cartData?.cartItems?.length > 0 ? (
          <div className="cart-content">
            <Row>
              <Col className="col-12 col-lg-7">
                <CartItems
                  cartItems={cartData}
                  cartReload={cartReload}
                  onShowItemPopup={onShowItemPopup}
                  setShowTabbyCard={setShowTabbyCard}
                />
              </Col>
              <Col className="col-12 col-sm-8 offset-sm-2 col-lg-5 offset-lg-0">
                <div className="right">
                  {/*steps */}
                  <CartSteps step={step} />
                  {/*form */}
                  {step == 1 && (
                    <div className="login-register-cart">
                      {showForm == "login" || !phoneOtped ? (
                        <CartLoginForm
                          setStep={setStep}
                          setShowForm={setShowForm}
                        />
                      ) : (
                        <CartRegisterForm
                          setStep={setStep}
                          cities={cities}
                          phoneOtped={phoneOtped}
                        />
                      )}
                    </div>
                  )}
                  {step == 2 && (
                    <Shipping
                      cartItems={cartData}
                      userData={userData}
                      friendData={friendData}
                      cities={cities}
                      shippingCity={shippingCity}
                      setStep={setStep}
                      deliveryComment={deliveryComment}
                      setDeliveryComment={setDeliveryComment}
                      setShippingCity={setShippingCity}
                      setShippingAddress={setShippingAddress}
                      notify={notify}
                      setNotify={setNotify}
                    />
                  )}
                  {step == 3 && (
                    <div>
                      {/* Start Coupon */}
                      {notify.msg != "" && <NotifyComp notify={notify} />}
                      <Coupon
                        addCoupon={addCoupon}
                        setShowTabbyCard={setShowTabbyCard}
                        couponName={couponName}
                        setCouponName={setCouponName}
                      />
                      {/* End Coupon */}
                      {/* start pay */}
                      <Payment
                        choosePaymentMethod={choosePaymentMethod}
                        setChoosePaymentMethod={setChoosePaymentMethod}
                        showTabbyCard={showTabbyCard}
                        setShowTabbyCard={setShowTabbyCard}
                        regectedOrder={regectedOrder}
                        cartItems={cartData}
                        createOrder={createOrder}
                        setStep={setStep}
                      />
                      {/* end pay */}
                    </div>
                  )}
                  {step == 4 && (
                    <div className="iframe-container relative h-[310px]">
                      {iframeLoader ? (
                        <div className="h-[300px] iframe-loader absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black_opacity text-sm text-whiteColor">
                          ...جاري التحميل
                        </div>
                      ) : (
                        <>
                          <iframe
                            className="mt-3 rounded"
                            src={iframeUrl}
                            style={{
                              width: "100%",
                              minHeight: "100%",
                              border: "none",
                            }}
                            title="Embedded Content"
                          ></iframe>
                          <div
                            className="text-center cursor-pointer underline"
                            onClick={() => setStep(3)}
                          >
                            العوده
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          <EmptyData
            text="لا يوجد منتجات في السلة"
            style={{ height: "45vh", padding: "0px" }}
          />
        )}
      </Container>
      {deleteItemPopup == true && (
        <DeletePopup
          title={
            itemDelete?.product
              ? itemDelete?.product?.Name
              : itemDelete.CollectionName
          }
          onDelete={() => {
            removeFromCart(itemDelete?.CartItemID),
              showDeleteItemPopup(false);
          }}
          onClose={() => showDeleteItemPopup(false)}
        />
      )}
    </div>
  );
}
