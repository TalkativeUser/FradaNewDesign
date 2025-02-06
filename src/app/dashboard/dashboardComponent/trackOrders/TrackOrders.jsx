import EmptyData from "@/components/utils/EmptyData/EmptyData";
import DashboardPageTitle from "../../dashboardUtils/dashboardPageTitle/DashboardPageTitle";
import TrackOrdersAccordion from "../../dashboardUtils/trackOrdersAccordion/TrackOrdersAccordion";
export default async function TrackOrders(userOrders) {
  return (
    <div className="px-3 xl:px-10">
      {userOrders?.userOrders?.orders &&
      userOrders?.userOrders?.orders.length > 0 ? (
        <>
          <DashboardPageTitle title="تتبع الطلبات" />
          <div className="flex flex-col gap-8 mb-3">
            {userOrders?.userOrders?.orders.map(
              (order, index) =>
                order.progressPercentage !== "100%" && (
                  <TrackOrdersAccordion
                    order={order}
                    user={userOrders?.userOrders?.user}
                    key={index}
                  />
                )
            )}
          </div>
        </>
      ) : (
        <EmptyData
          text="لا توجد طلبات"
          style={{ height: "45vh", padding: "0px" }}
        />
      )}
    </div>
  );
}
