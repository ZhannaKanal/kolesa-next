export default function Header() {
    return <div>
        <BaseHeader />
        <SecondHeader />
        <hr className="h-[0.5px] bg-[#1c18191a] border-[0]" />
        <CategoriesMenu />
  </div>;
}
import BaseHeader from "./BaseHeader";
import SecondHeader from "./SecondHeader";
import CategoriesMenu from "./CategoriesMenu";
