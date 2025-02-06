const { useSearchParams, useRouter } = require("next/navigation");
const FilterNavigate = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  // function to send filter queries to url
  const handleFilterChange = (value) => {
    const currentParams = new URLSearchParams(searchParams);
    if(value&&value?.sort&&value.sort!=null){
      currentParams.set("sort", value.sort);
    }else{
      currentParams.delete("sort");
    }

    if(value&&value?.offer&&value.offer!=null){
      currentParams.set("offer", value.offer);
    }else{
      currentParams.delete("offer");
    }

    if(value&&value?.discount&&value.discount!=0){
      currentParams.set("discount", value.discount);
    }else{
      currentParams.delete("discount");
    }

    if(value&&value?.tradeMarks?.length>0){
      currentParams.set("trademarks", value.tradeMarks);
    }else{
      currentParams.delete("trademarks");
    }

    if(value&&value?.sizes?.length>0){
      currentParams.set("sizes", value.sizes);
    }else{
      currentParams.delete("sizes");
    }

    if(value&&value?.colors?.length>0){
      currentParams.set("colors", value.colors);
    }else{
      currentParams.delete("colors");
    }
    if(value&&value?.from&&value?.to){
      currentParams.set("pricerange",[value?.from,value?.to])
    }else{
      currentParams.delete("pricerange");
    }
    router.push(`?${currentParams.toString()}`);
  };
  return [handleFilterChange];
};
export default FilterNavigate;