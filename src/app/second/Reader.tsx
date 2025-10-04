export default function Reader() {
  return (
    <div className="mt-[20px]">
      <h4 className="reader-heading mb-[20px] text-[20px] text-[#2A81dd] underline">
        <a href="https://kolesa.kz/content/news/">Новости</a>
      </h4>
      <div className="record-items">
        {" "}
        <a
          className="flex justify-start items-center"
          href="https://kolesa.kz/content/news/aktsiz-na-roskoshnye-avto-v-2026-godu-kak-rasschitat-i-platit/"
        >
          <img
            className="mr-[16px] w-[69px] h-[48px]"
            src="https://kolesa-photos.kcdn.online/kolesa-read/670c8d99d7271ec4e49486e673319f9836093df9-230x160.jpg"
            alt=""
          />
          <span className="text-[#2a81dd] underline max-w-[250px]">
            Акциз на роскошные авто в 2026 году. Как рассчитать и платить
          </span>
        </a>
        <div className="mt-[12px]">
          {" "}
          Станут ли налоговики контролировать честность заполнения документов
          автовладельцами?
        </div>
      </div>
      <div className="mt-[12px] text-[#2A81dd] underline">
        <a href="https://kolesa.kz/content/news/lada-vesta-vyletela-s-dorogi-iz-za-blokirovki-rulya/">
          Lada Vesta вылетела с дороги из-за блокировки руля
        </a>
      </div>
      <div className="mt-[12px] text-[#2A81dd] underline">
        <a href="https://kolesa.kz/content/news/novyj-kia-telluride-stanet-moshhnym-gibridom/">
          Новый Kia Telluride станет мощным гибридом
        </a>
      </div>
      <div className="mt-[12px] text-[#2A81dd] underline">
        <a href="https://kolesa.kz/content/news/vtoroj-audi-bez-chetyryoh-kolets-zametili-v-kitae/">
          Второй AUDI без четырёх колец заметили в Китае
        </a>
      </div>
    </div>
  );
}
