export default function LinkBlockHeaderArrow() {
  return (
    <div className="links-block-header clearfix arrow-show flex mt-[10px]">
      <h2 className="header-links text-[16px] font-bold">
        Выбор автомобиля по марке
      </h2>
      <span className="show-all-legacy arrow-link js__show-all-legacy flex items-center ml-[15px] gap-[4px]">
        <span className="text-[#2a81dd]">Все марки</span>
        <i className="inline-block rotate-0 text-[#2A81DD]">▼</i>
      </span>
    </div>
  );
}
