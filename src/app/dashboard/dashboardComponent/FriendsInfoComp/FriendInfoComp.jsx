"use client";
import { useState } from "react";
import FormComp from "../FormComp/FormComp";
import EmptyData from "@/components/utils/EmptyData/EmptyData";
export default function FriendInfoComp({ friendsData, cities }) {
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  return (
    <div className="friend-profile-container">
      <div className="friend-profile-content m-3">
        <div className="friend-profile-container">
          <div className="friend-profile-content m-3">
            {friendsData?.GiftAddresses?.length > 0 ? (
              friendsData.GiftAddresses?.map((friendData, index) => (
                <FormComp
                  key={index}
                  type="update"
                  friendData={friendData}
                  cities={cities}
                />
              ))
            ) : (
              <EmptyData text="لا يوجد أصدقاء" style={{height:"45vh",padding:"0px"}} />
            )}
            {!showAddFriendForm &&
              friendsData?.GiftAddresses &&
              friendsData?.GiftAddresses?.length < 4 && (
                <div className=" flex justify-center items-center">
                  <button
                  type="button"
                  className="add-new-friend"
                  onClick={() => setShowAddFriendForm(true)}
                >
                  + أضف صديق جديد
                </button>
                </div>
              )}
          </div>
        </div>

        {showAddFriendForm && (
          <FormComp
            type="add"
            cities={cities}
            setShowAddFriendForm={setShowAddFriendForm}
          />
        )}
      </div>
    </div>
  );
}
