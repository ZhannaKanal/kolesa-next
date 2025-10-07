export default function SparePartBlock() {
  return (
    <div className="spare-parts-block section-links-block">
      <a
        href="/zapchasti/"
        className="header-link mb-[20px] text-[16px] text-[#2A81dd] underline"
      >
        <span>Запчасти</span>
      </a>
      <p className="pt-[6.5px] pb-[13px]">
        {" "}
        <small>
          Шины, диски, оптика, стёкла, масла, присадки, полироли и многое другое
          — всё здесь.
        </small>
      </p>
      <div className="spare-parts-hot section-hot hot flex justify-start">
        <img className="mr-[8px]"
          src="https://kolesa-photos.kcdn.online/webp/5a/5a496049-4aae-4453-9da8-a00e93d02f02/1-120x90.jpg"
          alt=""
        />
        <img className="mr-[8px]"
          src="https://kolesa-photos.kcdn.online/webp/18/18d98584-593d-4a8e-a8aa-502b57b6b6ea/23-120x90.jpg"
          alt=""
        />
        <img className="mr-[8px]"
          src="https://kolesa-photos.kcdn.online/webp/80/80aad418-fc3f-4d61-9ac7-9fc7bd24f2f1/1-120x90.jpg"
          alt=""
        />
        <img className="mr-[8px]"
          src="https://kolesa-photos.kcdn.online/webp/fb/fb176440-9f15-44f2-a6f4-9feaa0cfc012/1-120x90.jpg"
          alt=""
        />
      </div>
      <div className="spare-parts-links section-links row grid grid-cols-3 mb-[13px] mx-[-16px]">
        <ul className="text-[13px] text-[#2a81dd] underline px-[16px] my-[13px] ">
          <li className="pb-[5px]">
            <a href="/zapchasti/prodazha/">Автозапчасти</a>
          </li>
          <li className="pb-[5px]">
            <a href="/zapchasti/prodazha/">Запчасти на коммерческие</a>
          </li>
          <li className="pb-[5px]">
            <a href="/zapchasti/prodazha/">Мотозапчасти</a>
          </li>
          <li className="pb-[5px]">
            <a href="/zapchasti/prodazha/">Шины</a>
          </li>
        </ul>
        <ul className="text-[13px] text-[#2a81dd] underline px-[16px] my-[13px] ">
          <li className="pb-[5px]">
            <a href="/zapchasti/prodazha/">Диски</a>
          </li>
          <li className="pb-[5px]">
            <a href="/zapchasti/prodazha/">Аксессуары и мультимедия</a>
          </li>
          <li className="pb-[5px]">
            <a href="/zapchasti/prodazha/">Масла и автохимия</a>
          </li>
          <li className="pb-[5px]">
            <a href="/zapchasti/prodazha/">Авто на разбор</a>
          </li>
        </ul>
        <ul className="text-[13px] text-[#36a300] underline px-[16px] my-[13px] ">
          <li className="pb-[5px]">
            <a href="/zapchasti/prodazha/">Магазины шин и дисков</a>
          </li>
          <li className="pb-[5px]">
            <a href="/zapchasti/prodazha/">Магазины запчастей и авторазборы</a>
          </li>
          <li className="pb-[5px]">
            <a href="/zapchasti/prodazha/">Компания продавца запчастей</a>
          </li>

        </ul>
      </div>
    </div>
  );
}
