import { useEffect, useState } from "react";
import "./Shipping.css";
import { getUserInfo } from "@/actions/dashboard/userInfo";
import DashboardInput from "@/app/dashboard/dashboardUtils/DashboardInput/DashboardInput";
import DashboardSelect from "@/app/dashboard/dashboardUtils/DashboardSelect/DashboardSelect";
import { SubmitButton } from "@/components/utils/AuthenticationUtils/SubmitButton/SubmitButton";
import GetAndUpdateUserInfoHook from "@/CustomHooks/DashboardHooks/GetAndUpdateUserInfoHook";
import FriendData from "./ShippindAtoms/FriendData";
import EmptyData from "@/components/utils/EmptyData/EmptyData";
import AddAndUpdateFriendAtCart from "./ShippindAtoms/AddAndUpdateFriendAtCart";
import NotifyComp from "@/components/utils/NotifyComp/NotifyComp";

const Shipping = ({
  cartItems,
  userData,
  friendData,
  cities,
  setStep,
  deliveryComment,
  setDeliveryComment,
  shippingCity,
  setShippingCity,
  setShippingAddress,
  notify,setNotify
}) => {
  const [choosenAddress, setChoosenAddress] = useState("userAddress");
  const [edditUserInfo, setEdditUserInfo] = useState(false);
  const [edditFriendInfo, setEdditFriendInfo] = useState(false);
  const [addFriend, setAddFriend] = useState(false);
  const [selectedFriendIndex, setSelectedFriendIndex] = useState(0);
  const [
    state,
    submit,
    isPending,
    firstName,
    lastName,
    email,
    phone,
    address,
    cityId,
    setFirstName,
    setLastName,
    setEmail,
    setPhone,
    setAddress,
    setCityId,
  ] = GetAndUpdateUserInfoHook(userData);
  useEffect(() => {
    if (choosenAddress == "userAddress") {
      setShippingCity(cityId);
      setShippingAddress(address)
    } else {
      setShippingCity(friendData.GiftAddresses[selectedFriendIndex]?.CityId);
      setShippingAddress(friendData.GiftAddresses[selectedFriendIndex].Address)
    }
  }, [choosenAddress,friendData,address,cityId]);
  useEffect(() => {
    if (state?.success == true) {
      setEdditUserInfo(false);
    }
  }, [state]);
  const getShippingInfo = () => {
    if (
      userData.Address == null ||
      userData.CityID == null ||
      userData.FirstName == null ||
      userData.LastName == null ||
      userData.Phone == null ||
      userData.Email == null
    ) {
      setNotify({ msg: "من فضلك أكمل ملفك الشخصي", success: false });
    } else if (shippingCity == null || shippingCity == undefined) {
      setNotify({ msg: "من فضلك إختر عنوان الشحن", state: false });
    } else {
      setStep(3);
      setNotify({ msg: "", success: false })
    }
  };
  return (
    <div className="shipping">
      <NotifyComp notify={notify}/>
      <div className="address">
        <div className="radio-input">
          <input
            type="radio"
            name="shippingAddress"
            id="useAddress"
            value="myAddress"
            checked={choosenAddress == "userAddress" && true}
            onChange={() => setChoosenAddress("userAddress")}
          />
          <label htmlFor="useAddress">إشحن الطلب إلي عنواني</label>
        </div>
        {choosenAddress == "userAddress" && (
          <div className="address-info-container">
            {userData && (
              <>
                <div className="top">
                  <h5>بيانات الشحن</h5>
                </div>
                {edditUserInfo == false ? (
                  <div className="address-info">
                    {userData.city == null ||
                    userData.Address == null ||
                    userData.LastName == null ||
                    userData.Phone == null ||
                    userData.Email == null ? (
                      <div className="no-data">
                        <span>لا يوجد بيانات</span>
                        <span>يرجي إكمال ملفك الشخصي </span>
                        <p
                          onClick={() => {
                            setEdditUserInfo(true);
                          }}
                        >
                          إكمال الملف الشخصي
                        </p>
                      </div>
                    ) : (
                      <>
                        <div
                          className="eddit-address"
                          onClick={() => setEdditUserInfo(true)}
                        >
                          {edditUserInfo == false && <span>تعديل العنوان</span>}
                        </div>
                        <div className="info">
                          <div> الدولة</div>
                          <div>المملكة العربية السعودية</div>
                        </div>
                        <div className="info">
                          <div> الإسم</div>
                          <div>
                            {userData?.FirstName} {userData?.LastName}
                          </div>
                        </div>
                        <div className="info">
                          <div> المدينة</div>
                          <div>{userData?.city?.nameAr}</div>
                        </div>
                        <div className="info">
                          <div> العنوان</div>
                          <div>{userData.Address}</div>
                        </div>
                        <div className="info">
                          <div> الهاتف</div>
                          <div>{userData.Phone}</div>
                        </div>
                        <div className="alert-warnning">
                          <span>يصل خلال </span>
                          <span>{userData.CityID == 3 ? "1" : "4"}</span>
                          <span> أيام عمل</span>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <form action={submit}>
                    <div
                      className="eddit-address"
                      onClick={() => setEdditUserInfo(false)}
                    >
                      {edditUserInfo == true && <span>إلغاء التعديل</span>}
                    </div>
                    <DashboardInput
                      label={"البريد الإلكتروني"}
                      name={"email"}
                      type={"text"}
                      value={email}
                      fn={setEmail}
                      error={!state?.success && state?.email}
                      errorText={state?.email}
                    />

                    <DashboardInput
                      label={"الاسم الأول"}
                      name={"firstName"}
                      type={"text"}
                      value={firstName}
                      fn={setFirstName}
                      error={!state?.success && state?.firstName}
                      errorText={state?.firstName}
                    />

                    <DashboardInput
                      label={"الاسم الأخير"}
                      name={"lastName"}
                      type={"text"}
                      value={lastName}
                      fn={setLastName}
                      error={!state?.success && state?.lastName}
                      errorText={state?.lastName}
                    />

                    <DashboardInput
                      label={"رقم الهاتف"}
                      name={"phone"}
                      type={"text"}
                      value={phone}
                      fn={setPhone}
                      error={!state?.success && state?.phone}
                      errorText={state?.phone}
                    />

                    <DashboardSelect
                      label="المدينة"
                      name="cityId"
                      value={cityId}
                      fn={setCityId}
                      DataToMap={cities}
                      error={!state?.success && state?.cityId}
                      errorText={state?.cityId}
                    />
                    <DashboardInput
                      label={"العنوان بالتفصيل"}
                      name={"address"}
                      type={"text"}
                      value={address}
                      fn={setAddress}
                      error={!state?.success && state?.address}
                      errorText={state?.address}
                    />

                    <div className="btn-container">
                      <SubmitButton
                        title={"حفظ التعديلات"}
                        loading={isPending}
                      />
                    </div>
                  </form>
                )}
              </>
            )}
          </div>
        )}
      </div>

      <div className="address">
        <div className="friend-address-inputs">
          <div className="radio-input">
            <input
              type="radio"
              name="shippingAddress"
              id="friendAddress"
              value="friendAddress"
              checked={choosenAddress == "friendAddress" && true}
              onChange={() => setChoosenAddress("friendAddress")}
            />
            <label htmlFor="friendAddress">إشحن الطلب إلي عنوان صديق</label>
          </div>
        </div>

        {choosenAddress == "friendAddress" && (
          <div className="address-info-container">
            {addFriend == false && edditFriendInfo == false ? (
              friendData.GiftAddresses?.length > 0 ? (
                <FriendData
                  friendData={friendData}
                  edditFriendInfo={edditFriendInfo}
                  setEdditFriendInfo={setEdditFriendInfo}
                  setAddFriend={setAddFriend}
                  selectedFriendIndex={selectedFriendIndex}
                  setSelectedFriendIndex={setSelectedFriendIndex}
                />
              ) : (
                <>
                  <EmptyData
                    text="لا يوجد أصدقاء"
                    style={{
                      height: "0vh",
                      paddingTop: "30px",
                      fontSize: "14px",
                    }}
                  />
                  <p className=" text-center mt-3 text-sm cursor-pointer underline decoration-solid" onClick={() => setAddFriend(true)}>قم بإضافة صديق</p>
                </>
              )
            ) : addFriend == true && edditFriendInfo == false ? (
              <AddAndUpdateFriendAtCart
                setAddFriend={setAddFriend}
                type="add"
                cities={cities}
              />
            ) : (
              addFriend == false &&
              edditFriendInfo == true && (
                <AddAndUpdateFriendAtCart
                  edditFriendInfo={edditFriendInfo}
                  setEdditFriendInfo={setEdditFriendInfo}
                  type="update"
                  friendData={friendData?.GiftAddresses[selectedFriendIndex]}
                  cities={cities}
                />
              )
            )}
          </div>
        )}
      </div>

      <textarea
        placeholder="إترك رسالة للمندوب"
        value={deliveryComment}
        onChange={(e) => setDeliveryComment(e.target.value)}
      ></textarea>

      <div className="btn-container">
        <button className="btn" onClick={() => getShippingInfo()}>
          التقدم للدفع
        </button>
      </div>
    </div>
  );
};

export default Shipping;
