export default function Reader() {
  return (
    <div className="mt-[20px]">
      <h4 className="reader-heading mb-[20px] text-[20px] text-[#2A81dd] underline">
        Новости
      </h4>
      <div className="record-items">
        <div className="flex justify-start items-center">
          <img className="mr-[16px] w-[69px] h-[48px]" src="https://kolesa-photos.kcdn.online/kolesa-read/670c8d99d7271ec4e49486e673319f9836093df9-230x160.jpg" alt="" />
          <span className="text-[#2a81dd] underline max-w-[250px]">
            Акциз на роскошные авто в 2026 году. Как рассчитать и платить
          </span>
        </div>
        <div className="mt-[12px]">
          {" "}
          Станут ли налоговики контролировать честность заполнения документов
          автовладельцами?
        </div>
      </div>
      <div className="mt-[12px] text-[#2A81dd] underline">
        <a href="">Lada Vesta вылетела с дороги из-за блокировки руля</a>
      </div>
      <div className="mt-[12px] text-[#2A81dd] underline">
        <a href="">Новый Kia Telluride станет мощным гибридом</a>
      </div>
      <div className="mt-[12px] text-[#2A81dd] underline">
        <a href="">Второй AUDI без четырёх колец заметили в Китае</a>
      </div>
    </div>
  );
}
