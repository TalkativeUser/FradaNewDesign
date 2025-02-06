"use client";
import { cancelOrder } from "@/actions/dashboard/UserOrders";
import TrackOrderTimeLine from "../trackOrdersTimeLine/TrackOrderTimeLine";
import DashboardArrow from "../dashboardArrow/dashboardArrow";
import OrderClientDetails from "../orderClientDetails/OrderClientDetails";
import OrderProductsDetails from "../orderProductsDetails/OrderProductsDetails";
import { useState } from "react";
import DashboardButton from "./../dashboardButton/DashboardButton";
import TrackOrderCircle from "./../TrackOrderCircle/TrackOrderCircle";
const TrackOrdersAccordion = ({ order, user }) => {
  const [height, setHeight] = useState("0px");
  const toggleArrow = () => {
    setHeight((prevHeight) => (prevHeight === "0px" ? "auto" : "0px"));
  };
  return (
    <div className="shadow-md p-2 md:p-3 rounded-lg">
      <div className=" justify-between flex-col lg:flex-row contents ">
        <div className="flex gap-2 flex-col items-between ">
          <div className="w-full flex justify-between">
            <DashboardButton
              text="إلغاء "
              disable={order?.tracking?.trackingStatus?.step1}
              status={order?.status}
              onClick={() => cancelOrder(order?.order_id)}
            />
            <h1 className="text-darkGray2 text-lg lg:text-2xl  ">
              الطلب رقم <span className="underline">{order?.order_id}</span>
            </h1>
          </div>

          <p className="text-md lg:text-xl flex justify-end">
            <span>{order?.order_date}</span>{" "}
            <span className="hidden lg:block"> : تاريخ الطلب</span>
          </p>
        </div>
      </div>
      <div className="p-2 rounded mt-3 relative border-[1px] border-solid border-[#E6E6E6]">
        <div className="flex items-center gap-5 justify-end">
          <TrackOrderCircle
            percentage={parseInt(
              order?.progressPercentage.replace("%", ""),
              10
            )}
          />
          <TrackOrderTimeLine tracking={order?.tracking} order={order} />
        </div>
        <DashboardArrow
          className={`text-white fill-darkOrange cursor-pointer text-[30px] md:text-[35px] w-[27px] h-[27px] transform  ${
            height === "auto" ? "rotate-180" : "rotate-0"
          } transition-transform duration-500 ease-in-out`}
          onClick={toggleArrow}
        />
      </div>
      <div
        className={`body text-end lg:flex flex-wrap overflow-hidden`}
        style={{
          transition: "ease-in-out 0.5s",
          maxHeight: height === "auto" ? "1000px" : "0px",
        }}
      >
        <OrderClientDetails
          user={user}
          days={order.expected_days}
          day={order.expected_delivery_date}
        />
        <OrderProductsDetails
          orderItems={order.orderItems}
          totalAmount={order.total_amount}
        />
      </div>
    </div>
  );
};

export default TrackOrdersAccordion;
