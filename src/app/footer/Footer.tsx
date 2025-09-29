export default function Footer() {
  return (
    <div className="bg-[#f2f2f3] py-[24px] text-[#888b94] text-[13px]">
      <div className="max-w-[1164px] w-full mx-auto">
        <div className="mt-[8px] mb-[24px] ">
          <img className="w-[100px]" src="https://kolesa.kz/static/frontend/images/kolesa-logo-new.svg" alt="kolesa.kz" />
        </div>
        <div className="flex justify-between">
          <ul className="max-w-[267px] w-full">
            <li className="mb-[12px]"> <a href="">О компании «Kolesa Group»</a></li>
            <li className="mb-[12px]"> <a href="">Написать в Службу заботы</a></li>
            <li className="mb-[12px]"> <a href="">Работа в «Kolesa Group»</a></li>
            <li className=""> <a href="">Карта сайта</a></li>
          </ul>
          <ul className="max-w-[267px] w-full">
            <li className="mb-[12px]"><a href="">Рекламодателям</a></li>
            <li className="mb-[12px]"><a href="">Правила размещения объявлений</a></li>
            <li className="mb-[12px]"><a href="">Пользовательское соглашение</a></li>
            <li className=""><a href="">Политика конфиденциальности</a></li>
          </ul>
          <ul className="max-w-[267px] w-full">
            <li className="mb-[12px]">
              <a href="">Скачать приложение</a>
            </li>
            <li className="mb-[12px]">
              <a href="">Мобильная версия сайта</a>
            </li>
          </ul>
          <div className="max-w-[267px] w-full">
            Следите за нашими новостями
            <ul className="mt-[12px] flex justify-start items-center">
              <li className="pr-[8px]">
                <a href="">
                  <img className="w-[24px] h-[24px]" src="/" alt="insta" />
                </a>
              </li>
              <li className="pr-[8px]">
                <a href="">
                  <img className="w-[24px] h-[24px]" src="/" alt="insta" />
                </a>
              </li>
              <li className="pr-[8px]">
                <a href="">
                  <img className="w-[24px] h-[24px]" src="/" alt="insta" />
                </a>
              </li>
              <li className="pr-[8px]">
                <a href="">
                  <img className="w-[24px] h-[24px]" src="/" alt="insta" />
                </a>
              </li>
              <li className="pr-[8px]">
                <a href="">
                  <img className="w-[24px] h-[24px]" src="/" alt="insta" />
                </a>
              </li>
              <li className="">
                <a href="">
                  <img className="w-[24px] h-[24px]" src="/" alt="insta" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="h-[1px] bg-[#1c18191a] border-[0] mt-[24px]" />
        <div className="text-[bbbec9] pt-[16px]">© 2006 — 2025 АО Колеса</div>
      </div>
    </div>
  );
}
