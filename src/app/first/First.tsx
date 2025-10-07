export default function First() {
  return (
    <div className="px-[16px]">
   
      <CarsBlock></CarsBlock>
      <SparePartBlock></SparePartBlock>
          <RegionLink></RegionLink>
          <SparePartBlock></SparePartBlock>
          <SparePartBlock></SparePartBlock>
      <RegionLink></RegionLink>
      <RegionLink></RegionLink>
      <PartnersLink></PartnersLink>
    </div>
  );
}
import PartnersLink from "./PartnersLink";
import RegionLink from "./RegionLink";
import CarsBlock from "./CarsBlock";
import SparePartBlock from "./SparePartBlock";
