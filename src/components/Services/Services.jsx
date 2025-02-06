import ContTimeDown from "./ServicesAtoms/ContTimeDown";
import Service from "./ServicesAtoms/Service";
const Services = () => {
  return (
    <div
      className=" flex items-center lg:shadow flex-wrap "
    >
      <div className="w-11/12 m-auto lg:w-full lg:flex bg-white">
        <Service />
        <ContTimeDown />
      </div>
    </div>
  );
};

export default Services;
 