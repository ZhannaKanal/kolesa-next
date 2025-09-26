import Image from "next/image";
import './globals.css';
import BaseHeader from "./header/BaseHeader";
import SecondHeader from "./header/SecondHeader";
import Sections from "./sections/Sections";

export default function Home() {
  return (
    <div className="">
      <BaseHeader></BaseHeader>
      <SecondHeader></SecondHeader>
      <hr className="h-[0.5px] bg-[#1c18191a] border-[0]" />
      <Sections></Sections>
</div>
  );
}
