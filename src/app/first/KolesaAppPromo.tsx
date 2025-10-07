export default function KolesaAppPromo() {
  return (
    <section className="kolesa-app-promo">
      <div className="app-promo bg-[#2a81dd] py-[58px] px-[32px] flex justify-start relative">
        <div className="app-promo-qr-container bg-[#fff] p-[16px] rounded-[6px]">
          <img className="w-[110px] h-[110px]"
            src="//kolesa.kz/static/frontend/images/promo/app/qr.svg"
            alt=""
          />
        </div>
        <div className="app-promo-content pt-[16px] ml-[32px]">
          <h3 className="text-[white] text-[24px] mb-[16px] font-bold">
            Все возможности <br /> внутри приложения
          </h3>
          <p className="text-[white] ">Сканируйте, чтобы установить</p>
        </div>
        <img className="absolute z-[3] bottom-[0] right-[40px]"
          src="//kolesa.kz/static/frontend/images/promo/app/ru/phone.png?2"
          alt=""
        />
      </div>
    </section>
  );
}
