import React, { useRef, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function HackathonCarousel({ title, projects }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const current =
    projects[Math.min(activeIndex, projects.length - 1)] ?? projects[0];

  return (
    <article className="pt-10 md:pt-15 overflow-hidden">
      <div className="mb-3 h-0.5 w-25 bg-gradient mx-0" />
      <h3 className="text-2xl md:text-4xl font-semibold md:mb-10">{title}</h3>

      <div className="relative mx-auto md:h-180 w-full max-w-6xl overflow-hidden flex items-center justify-center">
        {/* 왼쪽 화살표 */}
        <button
          ref={prevRef}
          className="absolute left-2 top-76 md:left-90 md:top-80 md:-translate-y-1/2 z-30 shrink-0 mr-2.5 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 md:w-10 md:h-10 drop-shadow-[0_0_5px_#FF4D00]"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="11" cy="11" r="10" stroke="#FFA100" strokeWidth="1" />
            <polyline
              points="12.5 7 8.5 11 12.5 15"
              stroke="#FFA100"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* 오른쪽 화살표 */}
        <button
          ref={nextRef}
          className="absolute right-2 top-76 md:top-80 md:right-90 md:-translate-y-1/2 z-30 shrink-0 ml-2.5 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 md:w-10 md:h-10 drop-shadow-[0_0_5px_#FF4D00]"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="13" cy="13" r="10" stroke="#FFA100" strokeWidth="1" />
            <polyline
              points="11.5 9 15.5 13 11.5 17"
              stroke="#FFA100"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          slidesPerGroup={1}
          centeredSlides
          spaceBetween={80}
          loop
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16, centeredSlides: true },
            768: { slidesPerView: 3, spaceBetween: 80, centeredSlides: true },
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation = {
              ...(swiper.params.navigation || {}),
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            };
          }}
          onInit={(swiper) => {
            requestAnimationFrame(() => {
              swiper.navigation?.init?.();
              swiper.navigation?.update?.();
            });
          }}
          navigation
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="h-full w-full [&_.swiper-wrapper]:items-center [&_.swiper-slide]:flex [&_.swiper-slide]:items-center [&_.swiper-slide]:justify-center"
        >
          {projects.map((p) => (
            <SwiperSlide
              key={p.id}
              className="flex items-center justify-center h-full"
            >
              {({ isActive }) => (
                <div className="flex h-160 items-center justify-center">
                  <div
                    className={[
                      "flex itxems-center justify-center origin-center transition-all duration-500 will-change-transform",
                      isActive
                        ? "z-30 scale-100 opacity-100"
                        : "z-10 scale-75 opacity-80",
                      isActive && p.frame === "desktop"
                        ? "scale-120 md:scale-150"
                        : "",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "relative flex items-center justify-center overflow-hidden bg-black/10 shadow-[0_22px_90px_rgba(0,0,0,0.45)]",
                        p.frame === "desktop" ? "w-75 h-50" : "w-70 h-140",
                      ].join(" ")}
                    >
                      {p.frame === "desktop" ? (
                        <img
                          src={p.imgSrc}
                          alt={p.title}
                          className="absolute inset-0 m-auto max-h-full max-w-full object-contain object-center"
                        />
                      ) : (
                        <img
                          src={p.imgSrc}
                          alt={p.title}
                          className="h-full w-full object-contain object-center rounded-4xl"
                        />
                      )}
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="md:w-156.25 mx-auto text-center">
        <h4 className="text-4xl font-semibold tracking-tight text-text-main md:text-[48px]">
          {current.title}
        </h4>
        <p className="mt-3 text-xl text-text-sub md:text-[32px]">
          {current.subtitle}
        </p>
        <p className="mt-2 text-base text-text-sub/50 md:text-[24px]">
          {current.members}
        </p>
      </div>
    </article>
  );
}

export default HackathonCarousel;
