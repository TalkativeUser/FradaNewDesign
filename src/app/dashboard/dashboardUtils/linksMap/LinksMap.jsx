import Link from "next/link";
export default function LinksMap({
  data,
  active,
  setTopActive,
  setBottomActive,
  openDrawer,
  flex,
  which,
}) {
  const switchMap = (index) => {
    if (which == "top") {
      setTopActive(index);
      setBottomActive(null);
    } else {
      setBottomActive(index);
      setTopActive(null);
    }
  };
  return (
    <div className={`top-links flex flex-col gap-3  w-full  ${flex}`}>
      {data.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`flex items-center ${
              openDrawer ? "justify-end gap-3" : "justify-center relative"
            }   text-[18px] px-3  ${
              index == active && "text-white bg-darkOrange w-[100%]"
            }`}
            onMouseDown={() => switchMap(index)}
          >
            {link.notification != null && (
              <span
                className={`flex  ${
                  index == active
                    ? "text-darkOrange bg-white"
                    : "text-white bg-darkOrange "
                }  justify-center items-center text-[16px]   w-[33px] h-[33px] rounded-full ${
                  openDrawer ? "" : "absolute top-0 right-0 w-[22px] h-[22px] "
                }`}
              >
                {link.notification}
              </span>
            )}
            <span
              className={`${openDrawer ? "opened" : "closed"} overflow-hidden`}
            >
              {link.link}
            </span>
            <span className={`${index == active && "fill"}`}>{link.icon}</span>
          </Link>
        );
      })}
    </div>
  );
}
