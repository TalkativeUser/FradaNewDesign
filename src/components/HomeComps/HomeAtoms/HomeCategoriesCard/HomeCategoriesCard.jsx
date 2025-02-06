export default function HomeCategoriesCard({ item }) {
  return (
    <div
      className="card relative cursor-pointer h-[300px] flex flex-col justify-end m-auto
     bg-white cards pt-6 pb-3  lg:pt-[90px] lg:pb-1 transition duration-300
      hover:shadow-md  rounded-lg w-[280px]"
    >
      <div
        className={` ${
          item.height ? "w-[50vw]" : ""
        }  flex flex-col gap-2 items-center justify-center  py-2 px-3`}
      >
        <div className="flex w-full h-full flex-col">
          <div className="flex flex-col justify-center h-full  ">
            <img
              src={item.img.src}
              alt={item.p1}
              className="w-[190px] z-20 -left-7 -bottom-[1rem] absolute lg:top-[0px] lg:left-[50%] lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2"
            />
          </div>

          <div className="flex flex-col justify-between gap-2">
            <div className="flex flex-col justify-between ">
              <p className="text-right xs:text-white md:w-full lg:text-black lg:text-center">{item.p1}</p>
              <p className="text-right xs:text-white md:w-full lg:text-black lg:text-center">{item.p2}</p>
            </div>

            <div className="btn-container w-full flex justify-center">
              <button className="rounded text-white bg-black text-lg text-center  px-2 py-1  hover:shadow-lg shopping">
                تسوق الان
              </button>
            </div>
          </div>
        </div>

        <p className="text-white text-xl text-center">{item.title}</p>
        {item.title2 && (
          <p className="text-white text-xl text-center">{item.title2}</p>
        )}
      </div>
    </div>
  );
}
