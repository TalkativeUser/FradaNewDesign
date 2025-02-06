import debounce from "lodash.debounce";
import FilterNavigate from "./FilterNavigate";
import { useFilterContext } from "@/Context/FilterContext";
import { useCallback, useEffect, useState } from "react";
const FilterHook = (productsData, pageSearchParams) => {
  const [openSort, setOpenSort] = useState(true);
  const [openOffers, setOpenOffers] = useState(true);
  const [openDiscounts, setOpenDiscounts] = useState(true);
  const [openTradmark, setOpenTradmark] = useState(true);
  const [openSizes, setOpenSizes] = useState(true);
  const [openColors, setOpenColors] = useState(true);
  const [valuePrice, setValuePrice] = useState([
    pageSearchParams?.pricerange?.split(",")[0] || productsData.minPrice,
    pageSearchParams?.pricerange?.split(",")[1] || productsData.maxPrice,
  ]);
  // send filter data to url
  const [handleFilterChange] = FilterNavigate();

  // show filter aside context
  const { showFilterMenu, setShowFilterMenu } = useFilterContext();
  // initila filter keys
  const [filterQueries, setFilterQueries] = useState({
    sort: pageSearchParams?.sort || null,
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
  });

  // function to handle price range
  const handlePriceRangeChange = useCallback(
    debounce((price) => {
      setFilterQueries((prevQueries) => ({
        ...prevQueries,
        from: price[0],
        to: price[1],
      }));
    }, 500),
    []
  );

  const handlePriceRange = (price) => {
    setValuePrice([price[0], price[1]]);
    handlePriceRangeChange(price);
  };
  // when choose array data
  const onChooseFilterArrayData = (type, value) => {
    setFilterQueries((previousQueries) => ({
      ...previousQueries,
      tradeMarks:
        type == "trademark"
          ? filterQueries.tradeMarks.includes(value)
            ? filterQueries.tradeMarks.filter(
                (trademarkID) => trademarkID != value
              )
            : [...filterQueries.tradeMarks, value]
          : filterQueries.tradeMarks,
      sizes:
        type == "size"
          ? filterQueries.sizes.includes(value)
            ? filterQueries.sizes.filter((size) => size != value)
            : [...filterQueries.sizes, value]
          : filterQueries.sizes,
      colors:
        type == "color"
          ? filterQueries.colors.includes(value)
            ? filterQueries.colors.filter((color) => color != value)
            : [...filterQueries.colors, value]
          : filterQueries.colors,
    }));
  };

  useEffect(() => {
    handleFilterChange(filterQueries);
  }, [filterQueries]);

  // delete filter data
  const onDeleteQueries = () => {
    setFilterQueries({
      sort: null,
      offer: null,
      discount: 0,
      tradeMarks: [],
      sizes: [],
      colors: [],
      from: null,
      to: null,
    });
    setShowFilterMenu(false);
  };
  return [
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
  ];
};

export default FilterHook;
