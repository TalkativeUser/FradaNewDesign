import { getAllFriends } from "@/actions/dashboard/FriendsInfo";
import { getSaudiCities, getUserInfo } from "@/actions/dashboard/userInfo";
import Cart from "@/components/Cart/Cart";
const page = async () => {
   let cities = await getSaudiCities();
    let userData = await getUserInfo();
    let friendData = await getAllFriends();
  return <Cart cities={cities} userData={userData} friendData={friendData}/>;
};
export default page;
