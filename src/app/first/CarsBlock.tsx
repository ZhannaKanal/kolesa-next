export default function CarsBlock() {
  return (
    <div className="block">
      <LinkBlockHeaderArrow></LinkBlockHeaderArrow>
      <LinkBlockList></LinkBlockList>
      <CrossLink></CrossLink>
    </div>
  );
}
import LinkBlockList from "./LinkBlockList";
import CrossLink from "./CrossLink";
import LinkBlockHeaderArrow from "./LinkBlockHeaderArrow";
