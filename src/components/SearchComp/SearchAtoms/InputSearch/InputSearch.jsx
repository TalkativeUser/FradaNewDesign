
import { IoSearch } from "react-icons/io5";
const InputSearch = ({searchWord,setSearchWord}) => {
  return (
    <div className="input-container mt-3 relative px-6 ">
      <input
      style={{direction:"rtl"}}
      value={searchWord}
      onChange={(e)=>setSearchWord(e.target.value)}
        type="text"
        className="form-control text-right focus:outline-none focus:outline-offset-none focus:shadow-none border-[1px] border-darkOrange "
        placeholder="إبحث عن منتجك"
      />
      
      <IoSearch  className="icon-search absolute top-1/2 -translate-y-[50%] left-[2.1rem]" />

    </div>
  );
};

export default InputSearch;
