"use client";
import  { useState } from "react";
import "./DashboardAside.css";
import { MdOutlineLogout } from "react-icons/md";
import LinksMap from "../../dashboardUtils/linksMap/LinksMap";
import DashboardArrow from "../../dashboardUtils/dashboardArrow/dashboardArrow";
import { logOut } from "@/actions/Authentication";
export default function DashboardAside() {
  let [topActive, setTopActive] = useState(null);
  let [bottomActive, setBottomActive] = useState(null);
  let [openDrawer, setOpenDrawer] = useState(false);
  let topLinks = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
         
          viewBox="0 0 26.25 28"
        >
          <path
            id="Icon_fa-solid-address-book"
            data-name="Icon fa-solid-address-book"
            d="M5.75,0a3.5,3.5,0,0,0-3.5,3.5v21A3.5,3.5,0,0,0,5.75,28H21.5A3.5,3.5,0,0,0,25,24.5V3.5A3.5,3.5,0,0,0,21.5,0Zm6.125,15.75h3.5a4.374,4.374,0,0,1,4.375,4.375.878.878,0,0,1-.875.875H8.375a.878.878,0,0,1-.875-.875A4.374,4.374,0,0,1,11.875,15.75Zm-1.75-5.25a3.5,3.5,0,1,1,3.5,3.5A3.5,3.5,0,0,1,10.125,10.5ZM28.5,4.375a.875.875,0,0,0-1.75,0v3.5a.875.875,0,0,0,1.75,0ZM27.625,10.5a.878.878,0,0,0-.875.875v3.5a.875.875,0,0,0,1.75,0v-3.5A.878.878,0,0,0,27.625,10.5Zm.875,7.875a.875.875,0,0,0-1.75,0v3.5a.875.875,0,0,0,1.75,0Z"
            transform="translate(-2.25)"
          />
        </svg>
      ),
      link: "معلومات الحساب",
      path: "/dashboard/user-info",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
       
          viewBox="0 0 26.25 19.25"
        >
          <path
            id="Icon_ion-people"
            data-name="Icon ion-people"
            d="M18.625,15.25a4.2,4.2,0,0,1-3.063-1.413A5.463,5.463,0,0,1,14.141,10.5,4.566,4.566,0,0,1,15.3,7.014a4.664,4.664,0,0,1,6.648.007,4.557,4.557,0,0,1,1.163,3.48,5.479,5.479,0,0,1-1.422,3.336A4.189,4.189,0,0,1,18.625,15.25ZM22.234,10.437Zm3.6,14.437H11.416a1.515,1.515,0,0,1-1.2-.584,1.653,1.653,0,0,1-.288-1.41,7.207,7.207,0,0,1,3.3-4.434A10.373,10.373,0,0,1,18.625,17a10.279,10.279,0,0,1,5.4,1.425,7.167,7.167,0,0,1,3.3,4.46,1.655,1.655,0,0,1-.291,1.41,1.514,1.514,0,0,1-1.2.581ZM8.289,15.469A4.112,4.112,0,0,1,4.516,11.48,3.856,3.856,0,0,1,5.5,8.548,3.754,3.754,0,0,1,8.289,7.375a3.741,3.741,0,0,1,2.785,1.18,3.826,3.826,0,0,1,.984,2.927A4.11,4.11,0,0,1,8.289,15.469Zm3.591,1.72a8.3,8.3,0,0,0-3.59-.705,8.459,8.459,0,0,0-4.406,1.182,5.933,5.933,0,0,0-2.712,3.648,1.5,1.5,0,0,0,.262,1.278,1.385,1.385,0,0,0,1.1.534H8.6a.437.437,0,0,0,.43-.359c.006-.035.014-.069.022-.1a7.921,7.921,0,0,1,3.156-4.584.437.437,0,0,0-.034-.732c-.086-.05-.184-.1-.3-.158Z"
            transform="translate(-1.125 -5.625)"
          />
        </svg>
      ),
      link: "عناوين الأصدقاء",
      path: "/dashboard/friends-info",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
         
          viewBox="0 0 25.868 25.868"
        >
          <path
            id="Icon_material-loyalty"
            data-name="Icon material-loyalty"
            d="M28.1,15.391,16.464,3.75A2.571,2.571,0,0,0,14.64,3H5.587A2.594,2.594,0,0,0,3,5.587V14.64a2.581,2.581,0,0,0,.763,1.837L15.4,28.118a2.571,2.571,0,0,0,1.824.75,2.529,2.529,0,0,0,1.824-.763L28.1,19.051a2.529,2.529,0,0,0,.763-1.824,2.612,2.612,0,0,0-.763-1.837ZM7.527,9.467a1.94,1.94,0,1,1,1.94-1.94A1.937,1.937,0,0,1,7.527,9.467Zm15.223,10.7-5.523,5.523L11.7,20.163a3.233,3.233,0,0,1,2.289-5.523,3.194,3.194,0,0,1,2.289.957l.944.931.944-.944a3.238,3.238,0,1,1,4.579,4.579Z"
            transform="translate(-3 -3)"
          />
        </svg>
      ),
      link: "برنامج الولاء",
      path: "/dashboard/loyalty-points",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
         
          viewBox="0 0 29.406 23.821"
        >
          <path
            id="Icon_fa-solid-truck-ramp-box"
            data-name="Icon fa-solid-truck-ramp-box"
            d="M29.965,0V18.61a5.212,5.212,0,0,1-10.421.126L2.441,23.4a1.49,1.49,0,0,1-.782-2.875L16.566,16.46V2.978A2.98,2.98,0,0,1,19.543,0ZM26.987,18.61a2.233,2.233,0,1,0-2.233,2.233,2.233,2.233,0,0,0,2.233-2.233ZM1.264,9.663A1.49,1.49,0,0,1,2.315,7.839l2.159-.577.963,3.6a.746.746,0,0,0,.912.526L7.787,11a.746.746,0,0,0,.526-.912l-.963-3.6,2.159-.577a1.49,1.49,0,0,1,1.824,1.051l1.926,7.188a1.49,1.49,0,0,1-1.051,1.824L5.014,17.907A1.49,1.49,0,0,1,3.19,16.856Z"
            transform="translate(-0.559)"
          />
        </svg>
      ),
      link: "تتبع الطلبات ",
      path: "/dashboard/track-orders",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
         
          viewBox="0 0 26.738 23.767"
        >
          <path
            id="Icon_fa-solid-boxes-stacked"
            data-name="Icon fa-solid-boxes-stacked"
            d="M11.512,0H9.655A2.229,2.229,0,0,0,7.427,2.228v5.2A2.974,2.974,0,0,0,10.4,10.4H16.34a2.974,2.974,0,0,0,2.971-2.971v-5.2A2.229,2.229,0,0,0,17.083,0H15.226V3.714a.745.745,0,0,1-.743.743H12.255a.745.745,0,0,1-.743-.743ZM2.971,11.884A2.974,2.974,0,0,0,0,14.855V20.8a2.974,2.974,0,0,0,2.971,2.971H10.4A2.974,2.974,0,0,0,13.369,20.8V14.855A2.974,2.974,0,0,0,10.4,11.884H8.541V15.6a.745.745,0,0,1-.743.743H5.57a.745.745,0,0,1-.743-.743V11.884ZM16.34,23.767h7.427A2.974,2.974,0,0,0,26.738,20.8V14.855a2.974,2.974,0,0,0-2.971-2.971H21.911V15.6a.745.745,0,0,1-.743.743H18.94A.745.745,0,0,1,18.2,15.6V11.884H16.34a2.94,2.94,0,0,0-1.843.641,3.718,3.718,0,0,1,.357,1.588v7.427a3.718,3.718,0,0,1-.357,1.588A2.94,2.94,0,0,0,16.34,23.767Z"
          />
        </svg>
      ),
      link: "جميع طلباتي",
      path: "/dashboard/all-orders",
    },
  ];
  let bottomLinks = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
         
          viewBox="0 0 21.373 24.935"
        >
          <path
            id="Icon_ion-notifications-sharp"
            data-name="Icon ion-notifications-sharp"
            d="M15.187,27.185a4.458,4.458,0,0,0,4.08-2.672h-8.16a4.458,4.458,0,0,0,4.08,2.672ZM23.2,16.5V13.13c0-3.922-1.523-7.339-5.343-8.208L17.413,2.25H12.96l-.445,2.672C8.681,5.79,7.172,9.194,7.172,13.13V16.5L4.5,20.061v2.672H25.873V20.061Z"
            transform="translate(-4.5 -2.25)"
          />
        </svg>
      ),
      link: "الإشعارات",
      path: "#",
      notification: 4,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
        
          viewBox="0 0 27.373 25.992"
        >
          <path
            id="Icon_simple-teamspeak"
            data-name="Icon simple-teamspeak"
            d="M13.692.908h-.344l-.1,0H13.22l-.08,0h-.034l-.072,0H13L12.9.93l-.1.007h-.029L12.7.944l-.034,0-.08.006-.023,0-.1.009h-.023l-.08.008-.031,0L12.25.983l-.029,0-.1.011-.1.011-.026,0-.075.009-.009,0-.017,0h0l-.083.011-.017,0-.057.008-.046.007-.016,0-.083.011-.027.006-.08.011-.023,0-.1.017-.04.007-.021,0-.04.007-.023,0-.08.015-.023,0-.091.017h-.014l-.1.021-.008,0h0l-.039.009-.049.011-.021,0-.086.019-.015,0-.1.023-.1.023-.011,0-.091.023-.013,0-.1.025-.1.027-.1.027-.011,0-.1.027h0l-.1.03-.1.031h0l-.083.026-.011,0-.006,0h0l-.032.011q-.109.034-.217.071l-.091.029-.293.1-.086.031q-.175.065-.348.137c-.023.008-.047.016-.07.026l-.164.068q-.305.13-.6.274l-.08.039-.091.046c-.194.1-.388.2-.577.3-.176.205-.347.413-.513.625l-.068.091-.041.049.006,0c-.042.055-.082.112-.125.167-.088.117-.178.234-.263.354-.065.091-.128.185-.19.277-.092.135-.186.267-.274.4-.062.095-.12.192-.18.285-.084.137-.171.274-.251.413-.058.1-.114.2-.169.294-.08.144-.161.285-.24.433-.05.1-.1.2-.151.3q-.109.215-.213.432c-.051.109-.1.22-.151.331q-.269.6-.494,1.212l-.057.146.01-.014c-.145.407-.279.818-.4,1.236l-.122.056-.017.007a5.418,5.418,0,0,0-.639.35l-.04.025a5.353,5.353,0,0,0-.562.422l-.051.043a5.366,5.366,0,0,0-.487.487l-.05.057a5.351,5.351,0,0,0-.417.557l-.029.046a5.318,5.318,0,0,0-.344.631l-.011.027a5.29,5.29,0,0,0-.259.691l0,.015a5.46,5.46,0,0,0-.16.73s0,.008,0,.011a5.36,5.36,0,0,0,0,1.5s0,.008,0,.011a5.539,5.539,0,0,0,.16.73l0,.016a5.158,5.158,0,0,0,.258.69l.011.027a5.543,5.543,0,0,0,.346.632l.027.043a5.179,5.179,0,0,0,.42.559l.047.056a5.581,5.581,0,0,0,.486.486l.055.046a4.988,4.988,0,0,0,.559.419l.046.031a5.424,5.424,0,0,0,.635.347l.017.007a5.245,5.245,0,0,0,.7.26l.019.006a5.309,5.309,0,0,0,.727.157l.014,0a5.358,5.358,0,0,0,1.5,0l.014,0a5.272,5.272,0,0,0,.727-.157l.019-.006a5.326,5.326,0,0,0,.695-.259l.019-.009a5.559,5.559,0,0,0,.633-.346l.048-.031a5.517,5.517,0,0,0,.559-.417l.051-.046a5.226,5.226,0,0,0,.489-.49l.044-.05A5.355,5.355,0,0,0,9.8,17.49l.023-.04a5.269,5.269,0,0,0,.349-.635l.011-.024a5.4,5.4,0,0,0,.259-.7l0-.009a5.5,5.5,0,0,0,.16-.73q0-.011,0-.023a5.358,5.358,0,0,0,.046-1v0a1.633,1.633,0,0,0-.011-.168q0-.049-.007-.1-.013-.127-.032-.253s0,0,0-.006a5.253,5.253,0,0,0-.347-1.252h0c-.034-.08-.07-.16-.107-.24l0,0q-.045-.1-.095-.188l-.023-.046-.08-.14-.057-.1-.042-.068q-.048-.079-.1-.156l-.014-.018a5.33,5.33,0,0,0-1.589-1.526c-.021-.013-.04-.026-.06-.038l-.109-.063c-.041-.024-.082-.049-.125-.072L7.8,9.869a5.288,5.288,0,0,0-1.56-.529A15.594,15.594,0,0,1,10.1,3.371,11.776,11.776,0,0,1,25.475,14.589v0a11.732,11.732,0,0,1-2,6.565l-.015.021c-2.361,3.516-6.715,5.923-12.622,5.3l.023.018c5.931,1.3,10.692-.622,13.552-3.946l-.021.03q.18-.208.351-.424c.021-.026.04-.055.062-.081q.161-.209.314-.422l.114-.167q.309-.452.577-.931L25.9,20.4q.3-.547.535-1.119l.071-.18q.2-.506.358-1.028c.018-.06.038-.12.054-.179q.086-.3.155-.6l0-.021c.044-.194.082-.391.117-.589l.029-.182q.086-.539.123-1.083c0-.068.011-.135.014-.2.01-.206.017-.414.017-.622A13.688,13.688,0,0,0,13.692.908Zm.265,3.738a10.264,10.264,0,0,1,2.749,5.964,2.446,2.446,0,0,1-.878,2.429,2.319,2.319,0,0,0,.3,1.2c.443,1.049,1.118,2,1.606,3.013.438.91-.721,1.583-1.567,1.859q-.156.052-.314.1c.055.437.313.764.245,1.144a1.118,1.118,0,0,1-.424.684s.319,1-.433,1.437c-.173.1-.376.119-.415.388a2.422,2.422,0,0,1-.575,1.491,2.163,2.163,0,0,1-.2.181,9.95,9.95,0,0,0,.538-19.852q-.316-.029-.634-.039Zm-2.25.194a9.9,9.9,0,0,0-2.284.766,3.171,3.171,0,0,1,1.106.609,6.824,6.824,0,0,1,2.2,3.858c.3,1.389.451,2.063-.279,2.57-.987.684,1.053,3.609,1.451,4.455-.525.675-1.211.66-1.574.847-.2.1-.117.486-.084.781s.3.471.152.7c-.13.2-.627.214-.841.354.208.228.667.455.6.75-.046.228-.561.189-.76.709-.106.279-.051.8-.271,1.057-.511.6-1.046.707-2.11.59q-.52-.058-1.036-.145a9.82,9.82,0,0,0,2.581,1.3,2.135,2.135,0,0,0,.89.094,1.815,1.815,0,0,0,1.33-.707c.251-.3.188-.885.308-1.2.227-.593.813-.545.867-.805.068-.338-.454-.6-.689-.855.244-.157.806-.175.956-.4.165-.254-.137-.461-.173-.79s-.131-.771.
    1-.89c.411-.212,1.192-.2,1.789-.963-.453-.963-2.771-4.288-1.65-5.066.83-.577.665-1.342.319-2.923a7.78,7.78,0,0,0-2.5-4.388A2.525,2.525,0,0,0,11.706,4.839Z"
            transform="translate(0.001 -0.907)"
          />
        </svg>
      ),
      link: "الدعم الفني",
      path: "#",
      notification: null,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
         
          viewBox="0 0 22.738 23.347"
        >
          <g
            id="Icon_ion-settings"
            data-name="Icon ion-settings"
            transform="translate(-2.25 -1.828)"
          >
            <path
              id="Path_925"
              data-name="Path 925"
              d="M19.5,17.061a2.436,2.436,0,1,1-2.436-2.436A2.436,2.436,0,0,1,19.5,17.061Z"
              transform="translate(-3.442 -3.56)"
              fill="#ababab"
            />
            <path
              id="Path_926"
              data-name="Path 926"
              d="M24.5,15.735l-.024-.019-1.6-1.256a.818.818,0,0,1-.31-.677V13.2a.812.812,0,0,1,.31-.671l1.6-1.257.024-.019a1.354,1.354,0,0,0,.3-1.729L22.632,5.77l-.007-.011a1.363,1.363,0,0,0-1.647-.574l-.018.007-1.883.758a.809.809,0,0,1-.734-.065q-.25-.157-.508-.3a.809.809,0,0,1-.416-.6l-.284-2.009-.006-.037a1.382,1.382,0,0,0-1.341-1.113H11.449a1.366,1.366,0,0,0-1.342,1.136l0,.028L9.819,5.006a.812.812,0,0,1-.413.6q-.259.139-.508.3a.808.808,0,0,1-.732.064L6.282,5.2,6.264,5.2a1.364,1.364,0,0,0-1.649.576l-.007.011L2.438,9.538a1.356,1.356,0,0,0,.3,1.731l.024.019,1.6,1.256a.818.818,0,0,1,.31.677v.587a.812.812,0,0,1-.31.671l-1.6,1.257-.024.019a1.354,1.354,0,0,0-.3,1.729l2.168,3.751.007.011a1.363,1.363,0,0,0,1.647.574l.018-.007,1.881-.758a.809.809,0,0,1,.734.065q.25.158.508.3a.809.809,0,0,1,.416.6l.282,2.009.006.037a1.382,1.382,0,0,0,1.344,1.113h4.341a1.366,1.366,0,0,0,1.342-1.136l0-.028L17.419,22a.812.812,0,0,1,.415-.6c.174-.093.343-.192.508-.3a.808.808,0,0,1,.732-.064l1.885.759.018.007a1.363,1.363,0,0,0,1.649-.576l.007-.011,2.168-3.75a1.355,1.355,0,0,0-.3-1.731Zm-6.825-2.042a4.071,4.071,0,1,1-1.188-3.058,4.06,4.06,0,0,1,1.188,3.058Z"
              transform="translate(0 0)"
            />
          </g>
        </svg>
      ),
      link: "الإعدادات",
      path: "#",
      notification: null,
    },
  ];
  return (
    <div
      className={`min-h-[100vh] bg-lightGray right-0 fixed  top-0  flex flex-col items-end py-5 pt-9 gap-4 rounded-br-lg shadow-md drawer overflow-hidden 
      ${openDrawer ? "opened-drawer" : "closed-drawer"}`}
    >
      <div
        className={`aside-arrow ${!openDrawer ? "flex justify-center w-full" : "flex justify-end w-full" }`}
      >
        <DashboardArrow
          className={`icon w-[33px] h-[33px] text-3xl cursor-pointer   rounded-full   ${
            openDrawer ? "-rotate-90 mr-2" : "rotate-90 "
          } transition-transform duration-500 ease-in-out `}
          onClick={() => {
            setOpenDrawer(!openDrawer);
          }}
        />
      </div>
      <LinksMap
        data={topLinks}
        active={topActive}
        setTopActive={setTopActive}
        setBottomActive={setBottomActive}
        openDrawer={openDrawer}
        flex="flex-1"
        which="top"
      />
      <LinksMap
        data={bottomLinks}
        active={bottomActive}
        setTopActive={setTopActive}
        setBottomActive={setBottomActive}
        openDrawer={openDrawer}
        flex="flex-0"
        which="bottom"
      />
      <div
        className={`char flex ${
          !openDrawer ? "justify-center gap-0 w-full" : "gap-5"
        }   my-5 md:px-3`}
      >
        <div className={`${!openDrawer && "hidden"}`}>
          <p className="text-xl">فولان فولان</p>
          <p className="text-md">mail@mail.com</p>
        </div>
        <div
          className={` ${
            openDrawer ? "w-[65px] h-[65px]" : "w-[35px] h-[35px] "
          } text-lightGray bg-darkOrange rounded-full flex justify-center items-center  text-md md:text-xl`}
        >
          ف
        </div>
      </div>
      <button className="text-darkOrange text-center w-full text-xl flex items-center justify-center" onClick={()=>logOut()}>
        <span
          className={`${openDrawer ? "w-auto block " : "w-0 hidden"}`}
          style={{ textWrap: "nowrap" }}
        >
          تسجيل الخروج
        </span>
        <MdOutlineLogout
          style={{ fill: "black" }}
          className={`text-2xl  ${openDrawer ? "hidden" : "block"}`}
        />
      </button>
    </div>
  );
}
