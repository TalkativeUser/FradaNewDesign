const LoadMoreBtn = ({perPage,setPerPage}) => {
  return (
    <div className="btn-container  m-auto mt-3">
      <div onClick={()=>setPerPage(perPage+12)} className="load-more w-fit m-auto py-2 px-3 rounded-md cursor-pointer border-[1px] border-darkOrange bg-darkOrange text-white  hover:bg-white hover:text-darkOrange transition-all">
        تحميل المزيد
      </div>
    </div>
  );
};

export default LoadMoreBtn;
