"use client";
import "./SingleProductReviews.css";
import ReactStars from "react-stars";
import EmptyData from "@/components/utils/EmptyData/EmptyData";
import { useEffect, useState } from "react";
import AddAndUpdateRating from "./SingleProductReviewsAtoms/AddAndUpdateRating/AddAndUpdateRating";
import { deleteReview } from "@/actions/ProductDetails";
import DeletePopup from "@/components/utils/DeletePopup/DeletePopup";
const SingleProductReviews = ({ productReviews,productID,isLoggedIn }) => {
  const [showAddِAndUpdateRatePopup, setShowAddِAndUpdateRatePopup] =useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [thisUserReview, setThisUserReview] = useState({});
  const [currentUserIsReviewed, setCurrentUserIsReviewed] = useState(false);
  // useEffect to get current user is reviewd or not
  useEffect(() => {
    if (productReviews) {
      let userReview = productReviews?.reviews.some(
        (review) =>
          review?.CustomerID == productReviews?.currentUser?.CustomerID
      );
      setCurrentUserIsReviewed(userReview);
    }else{
      setCurrentUserIsReviewed(false);
    }
  }, [productReviews]);
  // Update Review
  const onUpdateReview = (review) => {
    setShowAddِAndUpdateRatePopup(true);
    setThisUserReview(review);
  };
  // Delete Review
  const handleShowDeletePopup = async (review) => {
    setShowDeletePopup(true);
    setThisUserReview(review);
  };
const onDeleteReview= async ()=>{
  await deleteReview(thisUserReview.ReviewID);
  setShowDeletePopup(false);
  setThisUserReview({})
}
  return (
    <section className="ratings-reviews-container">
      <div className="top">
        <h3>التقييمات والتعليقات علي المنتج</h3>
      </div>
      {productReviews ? (
        productReviews.reviews.map((review, index) => (
          <div className="ratings-reviews" key={index}>
            <div className="single-rate">
              <div className="user-data user-data-lg">
                <div className="logo">
                  <p>{review?.user?.FirstName.slice(0, 1)}</p>
                </div>
                <div className="info">
                  <h6 className="name">
                    {review.user?.FirstName} {review.user?.LastName}
                  </h6>
                  <div className="date">{review?.ReviewDate}</div>
                  <div className="rate">
                    <ReactStars
                      value={review?.Rating}
                      size={24}
                      edit={false}
                      isHalf={true}
                      color="#c1c1c1"
                      activeColor="#ffd700"
                    />
                  </div>
                </div>
              </div>
              <div className="review-container">
                <div className="review">
                  <div className="user-data user-data-sm">
                    <div className="user-data-right">
                      <div className="logo">
                        <p>{review?.user?.FirstName.slice(0, 1)}</p>
                      </div>
                      <div className="info">
                        <h6 className="name">
                          {review?.user?.FirstName} {review?.user?.LastName}
                        </h6>
                        <div className="date">{review?.ReviewDate}</div>
                      </div>
                    </div>
                    <div className="rate">
                      <ReactStars
                        value={review?.Rating}
                        size={24}
                        edit={false}
                        isHalf={true}
                        color="#c1c1c1"
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>

                  <div className="user-review">
                    <p>{review?.Comment}</p>
                  </div>
                  {review?.adminReplie ? (
                    <div className="admin-replay">
                      <div className="logo">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21.214"
                          height="37.041"
                          viewBox="0 0 21.214 37.041"
                        >
                          <g
                            id="Frada"
                            transform="translate(-204.754 -843.606)"
                          >
                            <g
                              id="FRADA_icon"
                              data-name="FRADA icon"
                              transform="translate(204.754 843.606)"
                            >
                              <path
                                id="Path_25"
                                data-name="Path 25"
                                d="M90.038,4.04,96.689,0l14.564,8.166v8.25l-7.156,3.62-.252-7.913Z"
                                transform="translate(-90.038 0.001)"
                                fill="#888"
                              />
                              <path
                                id="Path_26"
                                data-name="Path 26"
                                d="M90.038,45.4l20.709,11.954L104.1,61.56l-14.059-8.5Z"
                                transform="translate(-90.038 -33.022)"
                                fill="#888"
                              />
                              <path
                                id="Path_27"
                                data-name="Path 27"
                                d="M90.038,93.467l7.1-4.206V97.34l-7.1,4.63Z"
                                transform="translate(-90.038 -64.929)"
                                fill="#888"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="replay">{review?.adminReplie}</div>
                    </div>
                  ) : null}
                </div>
                {productReviews?.currentUser
                  ? productReviews?.currentUser?.CustomerID ==
                      review?.CustomerID && (
                      <div className="icons">
                        <div
                          className="delete"
                          onClick={() => handleShowDeletePopup(review)}
                        >
                          <span className="icon-trash"></span>
                        </div>
                        <div
                          className="edit"
                          onClick={() => onUpdateReview(review)}
                        >
                          <span className="icon-write"></span>
                        </div>
                      </div>
                    )
                  : null}
              </div>
            </div>
          </div>
        ))
      ) : (
        <>
        <EmptyData text="لا توجد تقييمات علي هذا المنتج" style={{height:"0px",padding:"45px"}} />
        {/* <p className="bg-red-500">سجل دخول الآن وقيم المنتج</p> */}
        </>
      )}
      {isLoggedIn&&!currentUserIsReviewed ? (
        <button
          className="rate-btn"
          onClick={() => setShowAddِAndUpdateRatePopup(true)}
        >
          قيم المنتج
        </button>
      ) : null}

      {showAddِAndUpdateRatePopup == true && (
        <AddAndUpdateRating
          setShowAddِAndUpdateRatePopup={setShowAddِAndUpdateRatePopup}
          thisUserReview={thisUserReview}
          productID={productID}
        />
      )}
      {showDeletePopup == true && (
        <DeletePopup
          title="تقييمك للمنتج"
          onDelete={onDeleteReview}
          onClose={()=>setShowDeletePopup(false)}
        />
      )}
    </section>
  );
};
export default SingleProductReviews;
