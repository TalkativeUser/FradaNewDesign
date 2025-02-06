import {
  addFriend,
  deleteFriend,
  UpdateFriendInfo,
} from "@/actions/dashboard/FriendsInfo";
import { useActionState, useEffect, useState } from "react";
const GetAndUpdateFriendInfoHook = (
    where,
    type,
    friendData,
    setShowAddFriendForm = () => {},
    setEdditFriendInfo = () => {},
    setAddFriend = () => {}
) => {
  const [friendID, setFriendID] = useState("");
  const [friendName, setFriendName] = useState("");
  const [friendPhone, setPhone] = useState("");
  const [friendAddress, setFriendAddress] = useState("");
  const [friendCityID, setFriendCityID] = useState("");
  const [editAddress, setEditAddress] = useState(false);
  const [showSuccesText, setShowSuccesText] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const getFriendData = () => {
    if (friendData) {
      setFriendID(friendData.ID);
      setFriendName(friendData.Name);
      setPhone(friendData.Phone);
      setFriendAddress(friendData.Address);
      setFriendCityID(friendData.CityId);
    }
  };
  useEffect(() => {
    getFriendData();
  }, [friendData]);
  let initialValues = {
    friendName: "",
    friendPhone: "",
    friendAddress: "",
    cityId: "",
    success: false,
  };
  const [state, submit, isPending] = useActionState(
    type == "update" ? UpdateFriendInfo : addFriend,
    initialValues
  );
  useEffect(() => {
    if (state && state?.success == true) {
      setEditAddress(false);
      setShowSuccesText(true);
      if (where == "cart") {
        if (type == "add") {
          console.log("dashboard add");
          setAddFriend(false)
        } else {
          console.log("dashboard update");
          setEdditFriendInfo(false)
        }
      } else if (where == "dashboard") {
        if (type == "add") {
          setShowAddFriendForm(false);
        }
      }
      setTimeout(() => {
        setShowSuccesText(false);
      }, 1500);
    }
  }, [state && state?.success]);

  const handleClose = () => {
    setEditAddress(false);
    getFriendData();
  };
  // Delete Friend
  const handleDeleteFriend = async () => {
    await deleteFriend(friendData.ID);
    setShowDeletePopup(false);
  };
  return [
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
  ];
};

export default GetAndUpdateFriendInfoHook;
