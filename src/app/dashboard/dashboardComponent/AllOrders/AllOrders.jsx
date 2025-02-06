import AllOrdersTable from "../../dashboardUtils/allOrdersTable/AllOrdersTable";
import DashboardPageTitle from "../../dashboardUtils/dashboardPageTitle/DashboardPageTitle";
export default async function AllOrders({userOrders}) {
  return (
    <div className="px-5 md:px-10">
      <DashboardPageTitle title="جميع طلباتي" />
      <AllOrdersTable data={userOrders} />
    </div>
  );
}