"use client";
import "./UserInfoComp.css";
import DashboardInput from "../../dashboardUtils/DashboardInput/DashboardInput";
import DashboardSelect from "../../dashboardUtils/DashboardSelect/DashboardSelect";
import GetAndUpdateUserInfoHook from "@/CustomHooks/DashboardHooks/GetAndUpdateUserInfoHook";
export default function UserInfoComp({ userInfo, citiesData }) {
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
  ] = GetAndUpdateUserInfoHook(userInfo);
  return (
    <section className="personal-profile-container">
      <div className="personal-profile-content">
        <form className="personal-profile-form" action={submit}>
          <div className="top flex-row-reverse">
            <div
              className="text-center text-green-600 text-base"
              style={{ flex: "1 1 0%" }}
            >
              {state?.success && "تم تحديث البيانات"}
            </div>

            <button
              type="submit"
              disabled={isPending}
              style={{
                pointerEvents: !isPending ? "all" : "none",
                opacity: !isPending ? "1" : ".4",
              }}
            >
              تحديث
            </button>
          </div>
          <div className="form-container">
            <DashboardInput
              dashboard
              label={"الاسم الأول"}
              name={"firstName"}
              type={"text"}
              value={firstName}
              fn={setFirstName}
              error={!state?.success && state?.firstName}
              errorText={state?.firstName}
            />

            <DashboardInput
              dashboard
              label={"الاسم الأخير"}
              name={"lastName"}
              type={"text"}
              value={lastName}
              fn={setLastName}
              error={!state?.success && state?.lastName}
              errorText={state?.lastName}
            />

            <DashboardInput
              dashboard
              label={"البريد الإلكتروني"}
              name={"email"}
              type={"text"}
              value={email}
              fn={setEmail}
              error={!state?.success && state?.email}
              errorText={state?.email}
            />

            <DashboardInput
              dashboard
              label={"رقم الهاتف"}
              name={"phone"}
              type={"text"}
              value={phone}
              fn={setPhone}
              error={!state?.success && state?.phone}
              errorText={state?.phone}
            />
            <div className="customer-info">
              <label>الدولة</label>
              <div className="input-dashboard">
                <input type="text" readOnly value="المملكة العربية السعودية" />
              </div>
            </div>
            <DashboardSelect
              dashboard
              label="المدينة"
              name="cityId"
              value={cityId}
              fn={setCityId}
              DataToMap={citiesData}
              error={!state?.success && state?.cityId}
              errorText={state?.cityId}
            />
            <DashboardInput
              dashboard
              label={"العنوان بالتفصيل"}
              name={"address"}
              type={"text"}
              value={address}
              fn={setAddress}
              error={!state?.success && state?.address}
              errorText={state?.address}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
