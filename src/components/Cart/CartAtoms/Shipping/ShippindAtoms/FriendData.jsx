const FriendData = ({
  friendData,
  edditFriendInfo,
  setEdditFriendInfo,
  setAddFriend,
  selectedFriendIndex,
  setSelectedFriendIndex,
}) => {
  return (
    <div>
      <div className="top">
        <h5>بيانات مستلم الشحنة</h5>
      </div>
      <div className="address-info">
        <div
          className="eddit-address"
          onClick={() => (setEdditFriendInfo(true), setAddFriend(false))}
        >
          {edditFriendInfo == false && <span>تعديل عنوان الصديق</span>}
        </div>
        <div className="info">
          <div> الدولة</div>
          <div>المملكة العربية السعودية</div>
        </div>
        <div className="info">
          <div> الإسم</div>
          <div>{friendData.GiftAddresses[selectedFriendIndex]?.Name}</div>
        </div>
        <div className="info">
          <div> المدينة</div>
          <div>{friendData?.GiftAddresses[selectedFriendIndex]?.City}</div>
        </div>
        <div className="info">
          <div> العنوان</div>
          <div>{friendData?.GiftAddresses[selectedFriendIndex]?.Address}</div>
        </div>
        <div className="info">
          <div> الهاتف</div>
          <div>{friendData?.GiftAddresses[selectedFriendIndex]?.Phone}</div>
        </div>
        <div className="alert-warnning">
          <span>يصل خلال </span>
          <span>
            {friendData?.GiftAddresses[selectedFriendIndex]?.CityID == 3
              ? "1"
              : "4"}
          </span>
          <span> أيام عمل</span>
        </div>
        <div className="address-info-footer">
          {friendData?.GiftAddresses.length < 4 && (
            <button
              onClick={() => (setEdditFriendInfo(false), setAddFriend(true))}
            >
              إضافة صديق
            </button>
          )}
          {friendData?.GiftAddresses.length > 0 && (
            <select
              className="addresses w-fit"
              value={selectedFriendIndex}
              onChange={(e) => setSelectedFriendIndex(e.target.value)}
            >
              {friendData?.GiftAddresses.map((friend, index) => (
                <option key={index} value={index}>
                  {friend.Name}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
    </div>
  );
};

export default FriendData;
