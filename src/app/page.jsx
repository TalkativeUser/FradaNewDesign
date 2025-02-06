import { getHomeData } from "@/actions/HomeApi";
import HomeProductsSlider from "@/components/HomeComps/3-HomeProductsSlider/HomeProductsSlider";
import HomeLayerPhone from "@/components/HomeComps/HomeLayerPhone/HomeLayerPhone";
import WraperComps from "@/components/ThemForce/WraperComps";

export default async function Home() {
  const homeData = await getHomeData();
  return (
    <>

 <WraperComps />


      {/* <HeroSection bannerData={homeData.banner} />
      <CategorySlider />
      <div className="lg:hidden">
        <Services />
      </div> */}
      <HomeProductsSlider slidersData={homeData.sliders}/>
      {/* Small Home Layer */}
      <HomeLayerPhone />



    </>
  );
}
