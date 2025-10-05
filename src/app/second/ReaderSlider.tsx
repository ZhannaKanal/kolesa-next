export default function ReaderSlider() {
  return (
    <div className="mt-[20px] text-[#2a81dd]">
      <h4 className="reader-heading mb-[20px] text-[20px] text-[#2A81dd] underline">
        <a href="https://kolesa.kz/content/news/">Видео</a>
      </h4>
      <div className="media-slider">
        <div className="media-slider-slide">
          <a
            className="media-slider__image"
            href="https://kolesa.kz/content/video/do-polnoj-ostanovki-bolshoj-test-elektrokarov-na-zapas-hoda/"
          >
            <img
              src="https://kolesa-photos.kcdn.online/kolesa-read/e4aad59541c6e6bb727f0482ab8afded8a3db6f1-387x218.jpg"
              alt=""
            />
            <div className="media-slider__video-icon"></div>
          </a>
        </div>
        <div className="flex items-center justify-between mt-[4px]">
          <a
            className="media-slider__title text-[13px]"
            href="https://kolesa.kz/content/video/do-polnoj-ostanovki-bolshoj-test-elektrokarov-na-zapas-hoda/"
          >
            До полной остановки! <br /> Большой тест электрокаров
          </a>
          <div className="media-slider-nav flex gap-[4px]">
            <button
              type="button"
              className="media-slider__arrow media-slider__arrow--prev border-1 border-solid border-[#e8e6e6] rounded-[2px] w-[24px] h-[24px]"
            >
              ◀
            </button>
            <button
              type="button"
              className="media-slider__arrow media-slider__arrow--next border-1 border-solid border-[#e8e6e6] rounded-[2px] w-[24px] h-[24px]"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
