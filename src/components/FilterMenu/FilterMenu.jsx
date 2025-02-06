"use client";
import "react-range-slider-input/dist/style.css";
import RangeSlider from "react-range-slider-input";
import "./FilterMenu.css";
import FilterHook from "@/CustomHooks/FilterHook";
const FilterMenu = ({ productsData, pageSearchParams }) => {
  const [
    openSort,
    setOpenSort,
    openOffers,
    setOpenOffers,
    openDiscounts,
    setOpenDiscounts,
    openTradmark,
    setOpenTradmark,
    openSizes,
    setOpenSizes,
    openColors,
    setOpenColors,
    valuePrice,
    showFilterMenu,
    filterQueries,
    setFilterQueries,
    handlePriceRange,
    onChooseFilterArrayData,
    onDeleteQueries,
    setShowFilterMenu,
  ] = FilterHook(productsData, pageSearchParams);
  const colorMap = {
    "RED": "#FF0000",
    "BLUE": "#0000FF",
    "ALMOND": "#EFDECD",
    "YELLOW": "#FFFF00",
    "ORANGE": "#FFA500",
    "PURPLE": "#800080",
    "ROSE": "#FF007F",
    "GREEN & BROWN": ["#008000", "#A52A2A"],
    "GRAY": "#808080",
    "WHITE": "#FFFFFF",
    "BLACK": "#000000",
    "SILVER": "#C0C0C0",
    "GOLD": "#FFD700",
    "EMERALD": "#50C878",
    "GREY & BROWN": ["#808080", "#A52A2A"],
    "D-RED": "#8B0000",
    "BABE BLUE": "#89CFF0",
    "PETROLE & BROWN": ["#005F6A", "#A52A2A"],
    "A'SHAM": "#D2B48C", // لون افتراضي
    "L-YELLOW": "#FFFFE0",
    "VIOLET": "#EE82EE",
    "WHITE & RED": ["#FFFFFF", "#FF0000"],
    "CAMEL": "#C19A6B",
    "CREAM": "#FFFDD0",
    "LAHMY": "#F0E68C", // لون افتراضي
    "SUGAR": "#F5F5F5", // لون افتراضي
    "NVY": "#000080",
    "LEMON": "#FFF700",
    "SHADOW & BROWN": ["#8A8A8A", "#A52A2A"],
    "D-GREEN": "#006400",
    "BEIGE & GREEN": ["#F5F5DC", "#008000"],
    "BORDO & BLACK": ["#800000", "#000000"],
    "BROWEN & YELLOW": ["#A52A2A", "#FFFF00"],
    "WHITE & OLIVE": ["#FFFFFF", "#808000"],
    "OLIVE & GRAY": ["#808000", "#808080"],
    "GRAY & BLACK": ["#808080", "#000000"],
    "BEIGE & GRAY": ["#F5F5DC", "#808080"],
    "OLIVE": "#808000",
    "L-GRAY": "#D3D3D3",
    "D-GREY": "#A9A9A9",
    "D-BROWN": "#654321",
    "D-BLUE": "#00008B",
    "HAVAN": "#C3B091", // لون افتراضي
    "BORDO": "#800000",
    "SAND": "#C2B280",
    "NAVY & HAVAN": ["#000080", "#C3B091"],
    "L-BROWN": "#CD853F",
    "BROWN": "#A52A2A",
    "CHERRY & BLKG & RBO": ["#DE3163", "#000000", "#FF0000"], // ألوان افتراضية
    "NAVY & CLD & DESRT": ["#000080", "#B0E0E6", "#F4A460"], // ألوان افتراضية
    "BLACK & GRY & HVN": ["#000000", "#808080", "#C3B091"], // ألوان افتراضية
    "GREEN & MTD & HVNE": ["#008000", "#8B4513", "#C3B091"], // ألوان افتراضية
    "CLOUD": "#B0E0E6",
    "CAFE & BLACK": ["#4B3621", "#000000"],
    "GREY & CHREY": ["#808080", "#D2B48C"], // ألوان افتراضية
    "CAFEE": "#4B3621",
    "CHERE & CREAM": ["#D2B48C", "#FFFDD0"], // ألوان افتراضية
    "GREEN": "#008000",
    "DESERT & NAVY": ["#F4A460", "#000080"],
    "BLACK & SILVER": ["#000000", "#C0C0C0"],
    "GREEN & MOTRAD": ["#008000", "#8B4513"], // لون افتراضي
    "INDIGO & GOTT & CAMEL": ["#4B0082", "#003333", "#C19A6B"],
    "BETROLE": "#005F6A",
    "GREEN & BORDO": ["#008000", "#800000"],
    "GREEN & HAVAN": ["#008000", "#C3B091"],
    "DENIM & CLOUD": ["#1560BD", "#B0E0E6"],
    "MOTARD & NAVY": ["#8B4513", "#000080"], // لون افتراضي
    "CLOUD & NAVY & GRY": ["#B0E0E6", "#000080", "#808080"],
    "TAUPE": "#483C32",
    "MTP & NAVY & GRY": ["#8B4513", "#000080", "#808080"], // لون افتراضي
    "GLACIER": "#78B1BF",
    "YELLOW & GRAY": ["#FFFF00", "#808080"],
    "YELLOW & BLACK": ["#FFFF00", "#000000"],
    "BROWEN & CAMEL": ["#A52A2A", "#C19A6B"],
    "NAT": "#F5DEB3", // لون افتراضي
    "OFWT": "#F5F5F5", // لون افتراضي
    "TAN": "#D2B48C",
    "WHITE & BROWN": ["#FFFFFF", "#A52A2A"],
    "BLUE & RED": ["#0000FF", "#FF0000"],
    "BLACK & OLIVE": ["#000000", "#808000"],
    "NVY & CLD & DESERT": ["#000080", "#B0E0E6", "#F4A460"],
    "BLACK & BLUE": ["#000000", "#0000FF"],
    "BLACK & BROWN": ["#000000", "#A52A2A"],
    "NAPA & HELLO": ["#D2B48C", "#FFFF00"], // ألوان افتراضية
    "CASTANO": "#8B4513",
    "NIGER": "#4B3621", // لون افتراضي
    "NAPA & NIGER": ["#D2B48C", "#4B3621"],
    "ADORNO & CASTANO": ["#D2B48C", "#8B4513"], // ألوان افتراضية
    "ADORNOHILO": "#D2B48C", // لون افتراضي
    "ELLINGTON": "#8B4513", // لون افتراضي
    "NAPA & BOREAL": ["#D2B48C", "#5F9EA0"], // ألوان افتراضية
    "BRN": "#8B4513",
    "DESRET": "#F4A460", // لون افتراضي
    "FINDIK": "#D2B48C", // لون افتراضي
    "OLIVE & MTRD & HVN": ["#808000", "#8B4513", "#C3B091"], // ألوان افتراضية
    "BLACK & TRFLEX": ["#000000", "#8B4513"], // لون افتراضي
    "INDIGO & NAVY": ["#4B0082", "#000080"],
    "ALMOND & NVY & HVN": ["#EFDECD", "#000080", "#C3B091"],
    "DENIM": "#1560BD",
    "MUTARD": "#8B4513", // لون افتراضي
    "BLACK & HAVAN": ["#000000", "#C3B091"],
    "NESCAFE": "#4B3621", // لون افتراضي
    "BLACK & DSRT & HAN": ["#000000", "#F4A460", "#C3B091"], // ألوان افتراضية
    "HAVAN & CAMEL": ["#C3B091", "#C19A6B"],
    "CHERE": "#D2B48C", // لون افتراضي
    "Owdi": "#D2B48C", // لون افتراضي
    "Ashqr": "#D2B48C", // لون افتراضي
    "BEIGE": "#F5F5DC",
    "GREY": "#808080",
    "BROWEN & BEIGE": ["#A52A2A", "#F5F5DC"],
    "BLACK & BEIGE": ["#000000", "#F5F5DC"],
    "D-BEIGE": "#F5F5DC", // لون افتراضي
    "BEIGE & SILVER": ["#F5F5DC", "#C0C0C0"],
    "BLACK & RED": ["#000000", "#FF0000"],
    "GREEN & SILVER": ["#008000", "#C0C0C0"],
    "GRAY & SILVER": ["#808080", "#C0C0C0"],
    "ARCTIC": "#B0E0E6",
    "ORANGE & GRAY": ["#FFA500", "#808080"],
    "ORANGE & PETROLE": ["#FFA500", "#005F6A"],
    "ORANGE & CLOUD": ["#FFA500", "#B0E0E6"],
    "GRAY & NAVY": ["#808080", "#000080"],
    "BORDO & BEIGE": ["#800000", "#F5F5DC"],
    "BORDO & NAVY": ["#800000", "#000080"],
    "MAROON & PETROLE": ["#800000", "#005F6A"],
    "BORDO & NAVY & GREY": ["#800000", "#000080", "#808080"],
    "BROWEN & CARMNE": ["#A52A2A", "#960018"], // لون افتراضي
    "SAND & PETROLE": ["#C2B280", "#005F6A"],
    "BLACK & DESERT": ["#000000", "#F4A460"],
    "GREEN & CLOUD": ["#008000", "#B0E0E6"],
    "BORDO & VERDE": ["#800000", "#008000"],
    "KHAZAMA": "#D2B48C", // لون افتراضي
    "PETROLE": "#005F6A",
    "IVORY": "#FFFFF0",
    "PISTACHO": "#93C572",
    "IVORY & ORANG": ["#FFFFF0", "#FFA500"],
    "IVORY & PISTACHO": ["#FFFFF0", "#93C572"],
    "IVORY & HAVAN": ["#FFFFF0", "#C3B091"],
    "INDIGO & AZURE": ["#4B0082", "#007FFF"],
    "DESERT": "#F4A460",
    "PETROLLE & CLOUD": ["#005F6A", "#B0E0E6"],
    "CLOUD & GREY": ["#B0E0E6", "#808080"],
    "NAVY & BLUE": ["#000080", "#0000FF"],
    "MOTARD": "#8B4513", // لون افتراضي
    "INDIGO & HAVAN": ["#4B0082", "#C3B091"],
    "MARON": "#800000",
    "HAVAN & PETROLE": ["#C3B091", "#005F6A"],
    "INDIGO": "#4B0082",
    "COFFEE": "#4B3621",
    "BLACK & GRAY": ["#000000", "#808080"],
    "HAVAN & NAVY": ["#C3B091", "#000080"],
    "BROWEN & SILVER": ["#A52A2A", "#C0C0C0"],
    "BLUE & YELLOW": ["#0000FF", "#FFFF00"],
    "IVORY & BLUE": ["#FFFFF0", "#0000FF"],
    "IVORY & BORDO": ["#FFFFF0", "#800000"],
    "L-BLUE": "#ADD8E6",
    "GREEN & IVORY": ["#008000", "#FFFFF0"],
    "NAVY": "#000080",
    "BLACK & GOLD": ["#000000", "#FFD700"],
    "BROWEN & GOLD": ["#A52A2A", "#FFD700"],
    "NVY & SILVER": ["#000080", "#C0C0C0"],
    "SILVER & REED": ["#C0C0C0", "#D2B48C"], // لون افتراضي
    "ORANGE & SILVER": ["#FFA500", "#C0C0C0"],
    "TEAL": "#008080",
    "CAFE & BLACK & ORANGE": ["#4B3621", "#000000", "#FFA500"],
    "INDIGO & BLACK": ["#4B0082", "#000000"],
    "INDIGO & BROWN": ["#4B0082", "#A52A2A"],
    "CAMAL & NAVY": ["#C19A6B", "#000080"],
    "CAMAL & GRAY": ["#C19A6B", "#808080"],
    "NAVY & BEIGE": ["#000080", "#F5F5DC"],
    "NAVY (A)": "#000080",
    "NAVY (B)": "#000080",
    "ORANGE (A)": "#FFA500",
    "ORANGE (B)": "#FFA500",
    "ORANGE (C)": "#FFA500",
    "DARK ORANGE": "#FF8C00",
    "BROWN (D)": "#A52A2A",
    "BROWN (F)": "#A52A2A",
    "GREY (H)": "#808080",
    "GREY (G)": "#808080",
    "NAVY (C)": "#000080",
    "ORANGE (D)": "#FFA500",
    "ORANGE (E)": "#FFA500",
    "ORANGE (F)": "#FFA500",
    "GREY (A)": "#808080",
    "GREY (B)": "#808080",
    "GREY (C)": "#808080",
    "GREY (D)": "#808080",
    "BROWN (A)": "#A52A2A",
    "NAVY (D)": "#000080",
    "NAVY (E)": "#000080",
    "D-ORANG": "#FF8C00",
    "L-GREY": "#D3D3D3",
    "D-BROWN(A)": "#654321",
    "D-GREY (A)": "#A9A9A9",
    "D-GREY (B)": "#A9A9A9",
    "D-GREY (C)": "#A9A9A9",
    "D-GREY (D)": "#A9A9A9",
    "D-BROWN(B)": "#654321",
    "D-BROWN(C)": "#654321",
    "D-NAVY": "#00008B",
    "D-NAVY(A)": "#00008B",
    "A'SHAM(A)": "#D2B48C",
    "A'SHAM(B)": "#D2B48C",
    "A'SHAM(C)": "#D2B48C",
    "L-BLUE": "#ADD8E6",
    "L-BLUE(A)": "#ADD8E6",
    "L-BLUE(B)": "#ADD8E6",
    "RED(A)": "#FF0000",
    "RED(B)": "#FF0000",
    "LAHMY(A)": "#F0E68C",
    "LAHMY(B)": "#F0E68C",
    "BETROLE(A)": "#005F6A",
    "L-BETROLE": "#005F6A",
    "RED(C)": "#FF0000",
    "RED(D)": "#FF0000",
    "BROWN & D-BROWN": ["#A52A2A", "#654321"],
    "BLACK & D-GRAY": ["#000000", "#A9A9A9"],
    "SUGAR & SAMAWI": ["#F5F5F5", "#87CEEB"], // ألوان افتراضية
    "SUGAR & BROWN": ["#F5F5F5", "#A52A2A"],
    "BEIGE & NVY": ["#F5F5DC", "#000080"],
    "MOTARD & HAVAN": ["#8B4513", "#C3B091"],
    "SKY BLUE": "#87CEEB",
    "NVY & GRAY & MOTARD": ["#000080", "#808080", "#8B4513"],
    "TA4PE": "#483C32", // لون افتراضي
    "IVORY & GREEN & NAVY": ["#FFFFF0", "#008000", "#000080"],
    "D-GRAY": "#A9A9A9",
    "COFFEE TAN": "#4B3621",
    "GREEN & BLUE": ["#008000", "#0000FF"],
    "BLACK & GRAY": ["#000000", "#808080"],
    "KHAKI": "#C3B091",
    "NAVY & IVORY": ["#000080", "#FFFFF0"],
    "CHOLO": "#D2B48C", // لون افتراضي
    "SUGAR & D-BROWN": ["#F5F5F5", "#654321"],
    "BROWN & NAVY": ["#A52A2A", "#000080"],
    "IVORY & ORNG & DENM": ["#FFFFF0", "#FFA500", "#1560BD"],
    "CREAM & NVY & IVORY": ["#FFFDD0", "#000080", "#FFFFF0"],
    "BORDO & CREAM & IVORY": ["#800000", "#FFFDD0", "#FFFFF0"],
    "DENM & ORNG & IVORY": ["#1560BD", "#FFA500", "#FFFFF0"],
    "GRREY & PETROLE": ["#808080", "#005F6A"],
    "TABA": "#D2B48C", // لون افتراضي
    "CAMEL & BLACK": ["#C19A6B", "#000000"],
    "BLUE & LIGH": ["#0000FF", "#ADD8E6"],
    "HIELO": "#B0E0E6", // لون افتراضي
    "BLACK & ORANGE": ["#000000", "#FFA500"],
    "CLOUD & ORANGE": ["#B0E0E6", "#FFA500"],
    "GREY & YELLOW": ["#808080", "#FFFF00"],
    "COFFEE & BROWN": ["#4B3621", "#A52A2A"],
    "DESERT & HAVAN": ["#F4A460", "#C3B091"],
    "BLACK & GREY": ["#000000", "#808080"],
    "BOTTEGA & BROWN": ["#D2B48C", "#A52A2A"], // ألوان افتراضية
    "BOTEGA & NAVY": ["#D2B48C", "#000080"], // ألوان افتراضية
    "BOTEGA & BLACK": ["#D2B48C", "#000000"], // ألوان افتراضية
    "DK & BROWN": ["#000000", "#A52A2A"],
    "RED & SUGARY": ["#FF0000", "#F5F5F5"],
    "TURQUOISE": "#40E0D0",
    "SAMAWI": "#87CEEB", // لون افتراضي
    "WHITE & BLACK": ["#FFFFFF", "#000000"],
    "WARM & GRAY": ["#808080", "#D3D3D3"], // لون افتراضي
    "SAFFRON": "#F4C430",
    "NABATY": "#D2B48C", // لون افتراضي
    "ASHAM": "#D2B48C", // لون افتراضي
    "HDIDI": "#D2B48C", // لون افتراضي
  };
  return (
    <>
      <aside
        className={`filter h-screen fixed top-0 bottom-0 left-0 right-0 md:sticky md:w-[300px] md:ml-4 transition-all duration-500 ${
          showFilterMenu
            ? "translate-y-0 md:-translate-y-0 md:translate-x-0 md:mr-0"
            : "translate-y-full md:-translate-y-0 md:translate-x-full md:mr-[-315px]"
        }`}
      >
        <div className={`filter-content mt-10 md:mt-0 mb-14 w-11/12`}>
          <div className="sort-container">
            <h6 onClick={() => setOpenSort(!openSort)}>
              <span>الترتيب حسب</span>
              {openSort == true ? (
                <span className="icon-cheveron-up"></span>
              ) : (
                <span className="icon-cheveron-down"></span>
              )}
            </h6>
            <div
              className="sort-items"
              style={{ display: openSort ? "block" : "none" }}
            >
              <div className="single-sort-item">
                <input
                  type="radio"
                  name="sort"
                  id={0}
                  className="cursor-pointer"
                  checked={
                    filterQueries.sort == "all" || filterQueries.sort == null
                  }
                  onChange={() =>
                    setFilterQueries((previousQueries) => ({
                      ...previousQueries,
                      sort: null,
                    }))
                  }
                />
                <label htmlFor="all" className="cursor-pointer">
                  الأبرز
                </label>
              </div>
              <div className="single-sort-item">
                <input
                  type="radio"
                  name="sort"
                  id="htl"
                  className="cursor-pointer"
                  checked={filterQueries.sort == "htl"}
                  onChange={() =>
                    setFilterQueries((previousQueries) => ({
                      ...previousQueries,
                      sort: "htl",
                    }))
                  }
                />
                <label htmlFor="htl" className="cursor-pointer">
                  الأعلي سعراً
                </label>
              </div>
              <div className="single-sort-item">
                <input
                  type="radio"
                  name="sort"
                  id="lth"
                  className="cursor-pointer"
                  checked={filterQueries.sort == "lth"}
                  onChange={() =>
                    setFilterQueries((previousQueries) => ({
                      ...previousQueries,
                      sort: "lth",
                    }))
                  }
                />
                <label htmlFor="lth" className="cursor-pointer">
                  الأقل سعراً
                </label>
              </div>
            </div>
          </div>

          {productsData?.offers && productsData.offers?.length > 0 && (
            <div className="offers-container">
              <h6 onClick={() => setOpenOffers(!openOffers)}>
                <span>العروض</span>
                {openOffers == true ? (
                  <span className="icon-cheveron-up"></span>
                ) : (
                  <span className="icon-cheveron-down"></span>
                )}
              </h6>
              <div
                className="offers"
                style={{ display: openOffers ? "block" : "none" }}
              >
                <div className="offer">
                  <input
                    type="radio"
                    id="all"
                    name="offer"
                    onChange={() =>
                      setFilterQueries((previousQueries) => ({
                        ...previousQueries,
                        offer: null,
                      }))
                    }
                  />
                  <label htmlFor="all">الكل</label>
                </div>
                {productsData.offers.map((offer, index) => (
                  <div className="offer" key={index}>
                    <input
                      type="radio"
                      id={index + 1}
                      checked={filterQueries.offer == offer}
                      name="offer"
                      onChange={() =>
                        setFilterQueries((previousQueries) => ({
                          ...previousQueries,
                          offer: offer,
                        }))
                      }
                    />
                    <label htmlFor={index + 1}>{offer}</label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {productsData?.discount && productsData.discount?.length > 0 && (
            <div className="discounts-container">
              <h6 onClick={() => setOpenDiscounts(!openDiscounts)}>
                <span>الخصومات</span>
                {openDiscounts == true ? (
                  <span className="icon-cheveron-up"></span>
                ) : (
                  <span className="icon-cheveron-down"></span>
                )}
              </h6>
              <select
                onChange={(e) =>
                  setFilterQueries((previousQueries) => ({
                    ...previousQueries,
                    discount: e.target.value,
                  }))
                }
                value={Number(filterQueries.discount)}
                style={{ display: openDiscounts ? "block" : "none" }}
              >
                <option value={0}>إختر من الخصومات</option>
                {productsData.discount.map((discount, index) => (
                  <option value={discount} key={index}>
                    {discount}
                  </option>
                ))}
              </select>
            </div>
          )}

          {productsData?.trademarks && productsData.trademarks?.length > 0 && (
            <div className="tradmarks-container">
              <h6 onClick={() => setOpenTradmark(!openTradmark)}>
                <span>العلامات التجارية</span>
                {openTradmark == true ? (
                  <span className="icon-cheveron-up"></span>
                ) : (
                  <span className="icon-cheveron-down"></span>
                )}
              </h6>
              <div
                className={`tradmarks ${
                  openTradmark ? "flex" : "hidden"
                } justify-end items-center flex-wrap`}
              >
                {productsData?.trademarks.map((trademark, index) => (
                  <div className="tradmark w-[48%]" key={index}>
                    <input
                      checked={filterQueries.tradeMarks.includes(
                        trademark?.TrademarkID
                      )}
                      type="checkbox"
                      value={trademark?.TrademarkID}
                      onChange={() =>
                        onChooseFilterArrayData(
                          "trademark",
                          trademark?.TrademarkID
                        )
                      }
                    />
                    <label>{trademark?.TrademarkName}</label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {productsData?.sizes && productsData.sizes?.length > 0 && (
            <div className="sizes-container">
              <h6 onClick={() => setOpenSizes(!openSizes)}>
                <span>المقاسات</span>
                {openSizes == true ? (
                  <span className="icon-cheveron-up"></span>
                ) : (
                  <span className="icon-cheveron-down"></span>
                )}
              </h6>
              <div className={`sizes ${openSizes ? "grid" : "hidden"}`}>
                {productsData?.sizes.map((size, index) => (
                  <div
                    key={index}
                    className="size w-full"
                    style={{
                      color: filterQueries.sizes.includes(size)
                        ? "#fff"
                        : "#000",
                      backgroundColor: filterQueries.sizes.includes(size)
                        ? "#000"
                        : "#fff",
                    }}
                    onClick={() => onChooseFilterArrayData("size", size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
          )}

          {productsData?.colors && productsData.colors?.length > 0 && (
            <div className="colors-container">
              <h6 onClick={() => setOpenColors(!openColors)}>
                <span>الألوان</span>
                {openColors == true ? (
                  <span className="icon-cheveron-up"></span>
                ) : (
                  <span className="icon-cheveron-down"></span>
                )}
              </h6>
              <div
                className="colors"
                style={{ display: openColors ? "grid" : "none" }}
              >
                {productsData?.colors.map((color, index) => {
                  const colorValue = colorMap[color.Value] || color.Value;
                  const isGradient = Array.isArray(colorValue);
                  return (
                    <div
                    
                      className="color"
                      style={{
                        background: isGradient
                          ? `linear-gradient(to right, ${colorValue.join(", ")})`
                          : colorValue,
                        width: "30px",
                        height: "30px",
                      }}
                      key={index}
                      onClick={() => onChooseFilterArrayData("color", color.id)}
                    >
                      <span
                        className="icon-check"
                        style={{
                          display: filterQueries.colors.includes(color.id)
                            ? "block"
                            : "none",
                          color: colorValue === "#000000" ? "#fff" : "#000",
                        }}
                      ></span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="price-container">
            <h6>السعر</h6>
            <RangeSlider
              min={productsData.minPrice}
              max={productsData.maxPrice}
              step={1}
              value={valuePrice}
              onInput={handlePriceRange}
            />
            <div className="price-range">
              <div>
                <span>رس</span>
                <span>{valuePrice[0]}</span>
              </div>
              <div>
                <span>رس</span>
                <span>{valuePrice[1]}</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <div
        className={`bg-blackColor py-2 flex justify-center items-center gap-10 fixed bottom-0 left-0 right-0 z-40 md:hidden ${
          showFilterMenu ? "translate-y-0" : "translate-y-full"
        } transition-all duration-300`}
      >
        <button
          className=" border-[1px] border-mainColor hover:border-whiteColor py-2 w-32 text-base bg-whiteColor hover:bg-mainColor hover:text-whiteColor transition-all duration-300"
          onClick={() => setShowFilterMenu(false)}
        >
          تنفيذ
        </button>
        <button
          className=" border-[1px] border-mainColor hover:border-whiteColor py-2 w-32 text-base bg-whiteColor hover:bg-mainColor hover:text-whiteColor transition-all duration-300"
          onClick={() => onDeleteQueries()}
        >
          مسح[{productsData.lengthOfKeys}]
        </button>
      </div>
    </>
  );
};
export default FilterMenu;
