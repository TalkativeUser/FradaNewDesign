import { useState } from "react";
import "./AddAndUpdateRating.css";
import ReactStars from "react-stars";
import { addAndUpdateReview } from "@/actions/ProductDetails";
const AddAndUpdateRating = ({
  setShowAddِAndUpdateRatePopup,
  thisUserReview,
  productID
}) => {
  const [newRate, setNewRate] = useState(
    thisUserReview ? thisUserReview.Rating : 0
  );
  const [comment, setComment] = useState(
    thisUserReview ? thisUserReview.Comment : ""
  );
  const [updateRatingErrors, setUpdateRatingErrors] = useState({
    type: null,
    msg: null,
  });
  const maxCommentLength = 250;
  const ratingChanged = (newRating) => {
    setNewRate(newRating);
  };
  const AddReviewFunc = async () => {
      const commentRegex = /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFFa-zA-Z0-9\s]+$/
    if (!newRate) {
      setUpdateRatingErrors({ type: "error", msg: "يرجي وضع تقييم" });
    } else if (!comment) {
      setUpdateRatingErrors({ type: "error", msg: "يرجي كتابة تعليق" });
    } else if(!commentRegex.test(comment)){
      setUpdateRatingErrors({ type: "error", msg: "أدخل كلمات صالحة" });
    }else {
      let formData = {
        ProductID: productID,
        Rating: newRate,
        Comment: comment,
      };
      let response = await addAndUpdateReview(formData);
      if (response.status == 201) {
        setUpdateRatingErrors({
          type: "success",
          msg: "تم إضافة التعليق بنجاح",
        });
        setTimeout(() => {
          setShowAddِAndUpdateRatePopup(false);
        }, 500);
      } else {
        setUpdateRatingErrors({ type: "error", msg: response.errors.message });
      }
    }
  };
  return (
    <div className="add-rate-container">
      <div className="add-rate">
        <div
          className={`${
            updateRatingErrors.type == "error"
              ? "text-red-600"
              : "text-green-500"
          }`}
        >
          {updateRatingErrors && updateRatingErrors.msg}
        </div>
        <div className="rate">
          <ReactStars
            value={newRate}
            onChange={ratingChanged}
            size={40}
            isHalf={true}
            color="#c1c1c1"
            activeColor="#ffd700"
          />
        </div>
        <div className="review">
          <h6>أضف تعليقك</h6>
          <div className="review-text-container">
            <textarea
              placeholder="أضف تعليقك هنا"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              maxLength={250}
              style={{
                border:
                  comment != undefined && comment.length >= maxCommentLength
                    ? "1px solid red"
                    : "1px solid black",
              }}
            />
            <span className="review-counter">
              ({maxCommentLength}/{comment != undefined ? comment.length : 0})
            </span>
          </div>
        </div>
        <div className="btns">
          <button className="back-btn" onClick={() => setShowAddِAndUpdateRatePopup(false)}>
            إلغاء
          </button>
          <button className="add-btn" onClick={() => AddReviewFunc()}>
            إضافة
          </button>
        </div>
      </div>
      {/* <ToastContainer/> */}
    </div>
  );
};
export default AddAndUpdateRating;
