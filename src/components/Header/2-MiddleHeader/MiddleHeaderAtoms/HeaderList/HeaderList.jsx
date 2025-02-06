"use client"
import Link from "next/link";
import Checkout from "../../../../../../public/images/NavBar/MiddleNav/checkout.svg";
import Help from "../../../../../../public/images/NavBar/MiddleNav/customer_help.svg";
import Cart from "../../../../../../public/images/NavBar/MiddleNav/cart.svg";
import Exporters from "../../../../../../public/images/NavBar/MiddleNav/exporters.svg";
import myAcc from "../../../../../../public/images/NavBar/MiddleNav/account.svg";
import MyWishes from "../../../../../../public/images/NavBar/MiddleNav/wisheButton.svg";
import "./HeaderList.css";
import HeaderListItem from "./HeaderListAtoms/HeaderListItem";
import { IoMenuOutline } from "react-icons/io5";
import DropDownItem from "./HeaderListAtoms/DropDownItem";


const linksArrayData = [
  {
    img: Checkout,
    title: "متابعة الشراء",
    url: "/",
  },
  {
    img: Exporters,
    title: "تجار وموزعين",
    url: "/",
  },
  {
    img: Cart,
    title: "سلتـي",
    url: "/cart",
  },
  {
    img: MyWishes,
    title: "أمنياتي",
    url: "/wishes",
  },
  {
    img: Help,
    title: "مركز المساعدة",
    url: "/services/faq",
  },
];
const HeaderList = ({setShowSidebar,token}) => {
  return (
    <>
      <ul className="option-list">
        {linksArrayData.map((data, index) => (
          <li
            className={`option ${(data.url == "/cart"||"/wishes") && "cart-container"}`}
            key={index}
          >
            <Link href={data.url} className="text-inherit">
              <HeaderListItem data={data} />
            </Link>
          </li>
        ))}

        <DropDownItem img={myAcc} token={token}/>
      </ul>
      <div className="icon-list w-9  " onClick={()=>setShowSidebar(true)}>
      <IoMenuOutline  size={70} />

      </div>
    </>
  );
};

export default HeaderList;
