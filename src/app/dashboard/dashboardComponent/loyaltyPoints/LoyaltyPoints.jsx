import Image from "next/image";
import "./loyaltyPoints.css";
import LoyaltyPointsLevels from "../../dashboardUtils/loyaltyPointsLevels/LoyaltyPointsLevels";
export default async function LoyaltyPoints({userPointData}) {
  let progressPercentage =
    (userPointData?.currentPoints / userPointData?.nextLayer?.layerPoints) * 100;
  return (
    <div>
      <div className="relative  w-full  flex items-center banner  ">
        <p className="absolute text-white text-center gap-3 lg:text-2xl font-[700] md:mx-20 lg:mx-40 py-8 px-14  bg-orangeOpacity text">
          إكتسب المزيد من النقاط <br /> لمزيد من الخصومات
        </p>
      </div>
      <div className="w-[100%] lg:max-w-[80vw] xl:max-w-[1100px] m-auto mt-2  px-[10px] sm:p-4 md:p-10">
        <div
          className={`flex justify-between gap-2 md:gap-5 flex-wrap  rounded-xl py-3 px-[10px] sm:p-4 md:p-10`}
          style={{ backgroundColor: userPointData?.currentLayer?.layerBgColor }}
        >
          <div className="text-center flex flex-col gap-3 font-[600] m-auto text-[10px] sm:text-[14px] md:text-md  lg:text-lg ">
            <p>عدد النقاط الحالي</p>
            <p>{userPointData?.currentPoints}</p>
          </div>
          <div className="flex flex-col gap-4 m-auto ">
            <Image
              src={
                userPointData?.currentLayer?.layerName == "فضي"
                  ? "/images/silver.svg"
                  : userPointData?.currentLayer?.layerName == "بلاتيني"
                  ? "/images/blue.svg"
                  : userPointData?.currentLayer?.layerName == "برونزي"
                  ? "/images/brown.svg"
                  : userPointData?.currentLayer?.layerName == "ذهبي"
                  ? "/images/gold.svg"
                  : null
              }
              width={65}
              height={65}
              alt="نقاط"
              className="m-auto w-[40px] h-[40px] md:w-[65px] md:h-[65px]"
            />
            <div className="text-center flex flex-col gap-3 font-[600] text-[10px]  sm:text-[14px] md:text-md lg:text-lg ">
              <p>إجمالي النقاط </p>
              <p>{userPointData?.totalPoints}</p>
            </div>
          </div>

          <div className="text-center flex flex-col gap-3 font-[600] m-auto text-[10px]  sm:text-[14px] md:text-md lg:text-lg ">
            <p>المستوى التالي</p>
            <p>{userPointData?.nextLayer?.layerPoints}</p>
          </div>
        </div>
        {userPointData?.currentLayer?.layerName !== "بلاتيني" && (
          <div className="m-auto w-full flex flex-col gap-4 my-5">
            <p className="flex justify-between  text-[10px]  sm:text-[14px] md:text-md lg:text-lg font-[600]">
              <span>{userPointData?.nextLayer?.layerName}</span>
              <span>{userPointData.currentLayer?.layerName}</span>{" "}
            </p>

            <div className="h-6 sm:h-8 md:h-9 lg:h-10 rounded-3xl w-full m-auto flex justify-end  border-[1px] border-solid border-lightBrown">
              <div
                className={`bg-lightPink h-full rounded-3xl`}
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        )}
        <LoyaltyPointsLevels loyaltyData={userPointData} />
      </div>
    </div>
  );
}
