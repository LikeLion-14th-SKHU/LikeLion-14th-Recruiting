import React, { useRef, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function AlumniQuotesCarousel({ alumniQuotes }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <div className="relative">
      <div className="absolute right-4 md:right-8 flex gap-4 z-30">
        <button
          ref={prevRef}
          className="rounded-full border border-white bg-black/20 p-3 text-white backdrop-blur-[20px] transition hover:bg-primary-bg cursor-pointer"
        >
          <FaChevronLeft className="size-3" />
        </button>
        <button
          ref={nextRef}
          className="rounded-full border border-white bg-black/20 p-3 text-white backdrop-blur-[20px] transition hover:bg-primary-bg cursor-pointer"
        >
          <FaChevronRight className="size-3" />
        </button>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="pt-5"
      >
        {alumniQuotes.map((alumniQuote) => (
          <SwiperSlide key={alumniQuote.id} className="pt-15 md:px-5">
            <div className="md:w-full w-[70%] mx-auto border-3 border-primary-point2 shadow-primary-glow rounded-4xl p-4 md:p-8 bg-primary-bg min-h-50 md:min-h-60 flex flex-col">
              <div className="flex-1 flex items-center justify-center text-center">
                <p className="text-[14px] md:text-lg font-normal text-text-main leading-relaxed md:leading-tight">
                  {alumniQuote.content}
                </p>
              </div>

              <div className="mt-auto">
                <div className="mb-3 h-0.5 w-full bg-primary-point2" />
                <p className="text-[14px] md:text-sm text-center text-text-sub">
                  {alumniQuote.generation} {alumniQuote.position}{" "}
                  {alumniQuote.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default AlumniQuotesCarousel;
