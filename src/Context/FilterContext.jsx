"use client";
import { createContext, useState, useContext } from "react";
const FilterAndGridContext = createContext();
export function FilterAndGridProvider({ children }) {
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [grid, setGrid] = useState(true);
  return (
    <FilterAndGridContext.Provider
      value={{ showFilterMenu, setShowFilterMenu, grid, setGrid }}
    >
      {children}
    </FilterAndGridContext.Provider>
  );
}
export function useFilterContext() {
  return useContext(FilterAndGridContext);
}
