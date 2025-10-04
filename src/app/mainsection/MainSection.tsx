export default function MainSection() {
  return (
    <div className="max-w-[1164px] w-full mx-auto grid grid-cols-[2fr_1fr] gap-4">
      <First></First>
      <Second></Second>
    </div>
  );
}
import First from "../first/First";
import Second from "../second/Second";
