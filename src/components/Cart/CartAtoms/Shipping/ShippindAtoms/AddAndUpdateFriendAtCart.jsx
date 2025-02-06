import DashboardInput from "@/app/dashboard/dashboardUtils/DashboardInput/DashboardInput";
import DashboardSelect from "@/app/dashboard/dashboardUtils/DashboardSelect/DashboardSelect";
import GetAndUpdateFriendInfoHook from "@/CustomHooks/DashboardHooks/GetAndUpdateFriendInfoHook";

const AddAndUpdateFriendAtCart = ({
  setAddFriend,
  edditFriendInfo,
  setEdditFriendInfo,
  type,
  friendData,
  cities,
}) => {
  let where = "cart";
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
  ] = GetAndUpdateFriendInfoHook(
    where,
    type,
    friendData,
    undefined,
    setEdditFriendInfo,
    setAddFriend
  );
  return (
    <form action={submit}>
      <div
        className="eddit-address"
        onClick={() => setEdditFriendInfo(!edditFriendInfo)}
      >
        {edditFriendInfo == true && <span>إلغاء التعديل</span>}
      </div>
      <input type="hidden" name="friendID" value={friendID} />
      <div className="input-container">
        <DashboardInput
          label={"إسم الصديق"}
          placeholder={"أدخل إسم الصديق"}
          name={"friendName"}
          type={"text"}
          value={friendName}
          fn={setFriendName}
          error={!state?.success && state?.friendName}
          errorText={state?.friendName}
        />
      </div>
      <div className="input-container">
        <DashboardInput
          label={"رقم الهاتف"}
          placeholder={"أدخل رقم الهاتف"}
          name={"friendPhone"}
          type={"text"}
          value={friendPhone}
          fn={setPhone}
          error={!state?.success && state?.friendPhone}
          errorText={state?.friendPhone}
        />
      </div>

      <DashboardSelect
        label="المدينة"
        name="cityId"
        value={friendCityID}
        fn={setFriendCityID}
        DataToMap={cities}
        error={!state?.success && state?.cityId}
        errorText={state?.cityId}
      />

      <div className="input-container">
        <DashboardInput
          label={"العنوان"}
          placeholder={"العنوان بالتفصيل"}
          name={"friendAddress"}
          type={"text"}
          value={friendAddress}
          fn={setFriendAddress}
          error={!state?.success && state?.friendAddress}
          errorText={state?.friendAddress}
        />
      </div>
      
        {type == "add" ? (
          <div className="btn-container flex justify-between items-center flex-row-reverse">
            <button
              disabled={isPending}
              style={{
                pointerEvents: isPending ? "none" : "all",
                opacity: isPending ? ".4" : "1",
              }}
            >
              الإضافة
            </button>
            <p className="btn" onClick={() => setAddFriend(false)}>
              الرجوع
            </p>
            </div>
        ) : (
          <div className="btn-container">
          <button
            disabled={isPending}
            style={{
              pointerEvents: isPending ? "none" : "all",
              opacity: isPending ? ".4" : "1",
            }}
          >
            حفظ التعديلات
          </button>
          </div>
        )}
      
    </form>
  );
};

export default AddAndUpdateFriendAtCart;
