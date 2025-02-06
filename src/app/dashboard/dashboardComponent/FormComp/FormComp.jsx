"use client";
import "./FormComp.css";
import { useActionState, useEffect, useState } from "react";
import {
  addFriend,
  deleteFriend,
  UpdateFriendInfo,
} from "@/actions/dashboard/FriendsInfo";
import DashboardInput from "../../dashboardUtils/DashboardInput/DashboardInput";
import DashboardSelect from "../../dashboardUtils/DashboardSelect/DashboardSelect";
import DeletePopup from "@/components/utils/DeletePopup/DeletePopup";
import GetAndUpdateFriendInfoHook from "@/CustomHooks/DashboardHooks/GetAndUpdateFriendInfoHook";
export default function FormComp({
  type,
  friendData,
  cities,
  setShowAddFriendForm,
}) {
  let where="dashboard"
  const [
    friendID,
    setFriendID,
    friendName,
    setFriendName,
    friendPhone,
    setPhone,
    friendAddress,
    setFriendAddress,
    friendCityID,
    setFriendCityID,
    editAddress,
    setEditAddress,
    showSuccesText,
    setShowSuccesText,
    showDeletePopup,
    setShowDeletePopup,
    state,
    submit,
    isPending,
    handleClose,
    handleDeleteFriend,
  ] = GetAndUpdateFriendInfoHook(where="dashboard",type, friendData,setShowAddFriendForm);
  return (
    <>
      <form
        className="w-full lg:w-[1000px] xl:w-[1200px] m-auto"
        action={submit}
      >
        {showSuccesText && (
          <div className="text-center text-green-600 text-base">
            تم تحديث البيانات
          </div>
        )}

        <div className="wraper-form-container shadow-md flex mb-[30px] lg:pr-[40px]">
          <div className="add-delete-friend-btns">
            {type == "update" ? (
              <>
                {editAddress ? (
                  <>
                    <div
                      disabled={isPending}
                      className={`button close text-sm md:text-md ${
                        isPending ? "opacity-30" : "opacity-100"
                      }`}
                      onClick={() => handleClose()}
                    >
                      إغلاق
                    </div>
                    <button
                      disabled={isPending}
                      className={`button hover:bg-orange text-sm md:text-md ${
                        isPending ? "opacity-30" : "opacity-100"
                      }`}
                    >
                      {isPending ? "جاري التحديث" : "حفظ التعديلات"}
                    </button>
                  </>
                ) : (
                  <>
                    <div
                      className="button delete-friend hover:bg-orange text-sm md:text-md"
                      onClick={() => setShowDeletePopup(true)}
                    >
                      حذف
                    </div>
                    <div
                      className="button hover:bg-orange text-sm md:text-md"
                      onClick={() => setEditAddress(true)}
                    >
                      تحديث البيانات
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <div
                  className="button delete-friend hover:bg-orange text-sm md:text-md"
                  onClick={() => setShowAddFriendForm(false)}
                >
                  إغلاق
                </div>
                <button className="button hover:bg-orange text-sm md:text-md">
                  إضافة
                </button>
              </>
            )}
          </div>
          <div className="form-container">
            <input type="hidden" name="friendID" value={friendID} />
            <DashboardInput
              dashboard
              label={"إسم الصديق"}
              readOnly={!editAddress && type == "update"}
              name={"friendName"}
              type={"text"}
              value={friendName}
              fn={setFriendName}
              error={!state?.success && state?.friendName}
              errorText={state?.friendName}
            />
            <DashboardInput
              dashboard
              label={"رقم الهاتف"}
              readOnly={!editAddress && type == "update"}
              name={"friendPhone"}
              type={"text"}
              value={friendPhone}
              fn={setPhone}
              error={!state?.success && state?.friendPhone}
              errorText={state?.friendPhone}
            />
            <DashboardSelect
              dashboard
              label="المدينة"
              disabled={!editAddress && type == "update"}
              name="cityId"
              value={friendCityID}
              fn={setFriendCityID}
              DataToMap={cities}
              error={!state?.success && state?.cityId}
              errorText={state?.cityId}
            />
            <DashboardInput
              dashboard
              label={"العنوان بالتفصيل"}
              readOnly={!editAddress && type == "update"}
              name={"friendAddress"}
              type={"text"}
              value={friendAddress}
              fn={setFriendAddress}
              error={!state?.success && state?.friendAddress}
              errorText={state?.friendAddress}
            />
          </div>
        </div>
      </form>
      {showDeletePopup && (
        <DeletePopup
          title={`عنوان الصديق ${friendData.Name}`}
          onDelete={() => handleDeleteFriend()}
          onClose={() => setShowDeletePopup(false)}
        />
      )}
    </>
  );
}
