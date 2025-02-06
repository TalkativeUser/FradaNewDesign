"use client";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./FilterBar.css";
import FilterHook from "@/CustomHooks/FilterHook";
export default function FilterBar({ productsData, pageSearchParams }) {
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
    setShowFilterMenu
  ] = FilterHook(productsData, pageSearchParams);

  // function to handle choose sort
  const sort = (value) => {
    setFilterQueries(
      {
        sort: value,
        offer: pageSearchParams.offer || null,
        discount: pageSearchParams?.discount || 0,
        tradeMarks:
          pageSearchParams?.trademarks
            ?.split(",")
            ?.map((trademark) => Number(trademark.trim())) || [],
        sizes:
          pageSearchParams?.sizes?.split(",")?.map((size) => size.trim()) || [],
        colors:
          pageSearchParams?.colors
            ?.split(",")
            ?.map((color) => Number(color.trim())) || [],
        from: pageSearchParams?.pricerange?.split(",")[0] || null,
        to: pageSearchParams?.pricerange?.split(",")[1] || null,
      }
    )
  };
  return (
    <div className="filter-sort-bar">
      <div className="filter-sort-grid-content">
        <div className="sort-container">
          <DropdownButton
            id="dropdown-basic-button"
            title={`الترتيب حسب: ${
              filterQueries.sort == "all" || filterQueries.sort == null
                ? "الأبرز"
                : filterQueries.sort == "lth"
                ? "الأقل سعراً"
                : "الأعلي سعراً"
            }`}
          >
            <Dropdown.Item onClick={() => sort(null)}>الأبرز</Dropdown.Item>
            <Dropdown.Item onClick={() => sort("htl")}>
              الأعلي سعراً
            </Dropdown.Item>
            <Dropdown.Item onClick={() => sort("lth")}>
              الأقل سعراً
            </Dropdown.Item>
          </DropdownButton>
          {openSort ? (
            <span className="icon-cheveron-down"></span>
          ) : (
            <span className="icon-cheveron-up"></span>
          )}
        </div>

        <div
          className="filter-btn"
          onClick={() => setShowFilterMenu((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="20"
            viewBox="0 0 37 20"
          >
            <g
              id="Group_3"
              data-name="Group 3"
              transform="translate(-683.5 -216)"
            >
              <line
                id="Line_1"
                data-name="Line 1"
                x2="35"
                transform="translate(684.5 220.5)"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <line
                id="Line_2"
                data-name="Line 2"
                x2="35"
                transform="translate(684.5 231.5)"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <g
                id="Ellipse_1"
                data-name="Ellipse 1"
                transform="translate(707 216)"
                fill="#fff"
                stroke="#000"
                strokeWidth="1"
              >
                <circle cx="4.5" cy="4.5" r="4.5" stroke="none" />
                <circle cx="4.5" cy="4.5" r="4" fill="none" />
              </g>
              <g
                id="Ellipse_2"
                data-name="Ellipse 2"
                transform="translate(688 227)"
                fill="#fff"
                stroke="#000"
                strokeWidth="1"
              >
                <circle cx="4.5" cy="4.5" r="4.5" stroke="none" />
                <circle cx="4.5" cy="4.5" r="4" fill="none" />
              </g>
            </g>
          </svg>
          {showFilterMenu ? (
            <span>إخفاء فلتر البحث </span>
          ) : (
            <span>إظهار فلتر البحث</span>
          )}
        </div>
      </div>
    </div>
  );
}
