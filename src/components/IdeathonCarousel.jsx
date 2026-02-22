import React, { useRef, useState } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function IdeathonCarousel({ title, projects }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const initialIndex = projects?.length >= 3 ? 1 : 0;
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const current = projects[Math.min(activeIndex, projects.length - 1)];

  return (
    <article className="md:pt-15">
      <div className="mb-3 h-0.5 w-25 bg-gradient" />
      <h3 className="text-2xl md:text-5xl font-semibold text-text-main">
        {title}
      </h3>

      <div className="relative pt-3 md:mt-10">
        <div className="relative mx-auto md:h-100 px-2.5 overflow-visible">
          {/* 왼쪽 화살표 */}
          <button
            ref={prevRef}
            className="absolute left-0 top-15 md:left-50 md:top-1/2 md:-translate-y-1/2 z-30 shrink-0 mr-2.5 cursor-pointer"
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
            className="absolute right-0 top-15 md:right-50 md:top-1/2 md:-translate-y-1/2 z-30 shrink-0 ml-2.5 cursor-pointer"
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
            slidesPerView={"auto"}
            centeredSlides
            slidesPerGroup={1}
            spaceBetween={-280}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: -80,
              },
              768: {
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: -220,
              },
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation = {
                ...(swiper.params.navigation || {}),
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              };
            }}
            navigation
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className={[
              "overflow-visible",
              "[&_.swiper-wrapper]:items-center",
              "[&_.swiper-wrapper]:overflow-visible",
              "[&_.swiper-slide]:overflow-visible",
              "[&_.swiper-slide]:relative",
              "[&_.swiper-slide-active]:z-30",
              "[&_.swiper-slide-prev]:z-10",
              "[&_.swiper-slide-next]:z-10",
              "[&_.swiper-slide]:z-0",
              "mx-auto py-10",
              "[&_.swiper-slide]:transition-all [&_.swiper-slide]:duration-300",
              "[&_.swiper-slide-active]:opacity-100 [&_.swiper-slide-active]:blur-0",
              "[&_.swiper-slide-prev]:opacity-100 [&_.swiper-slide-prev]:blur-[2.5px]",
              "[&_.swiper-slide-next]:opacity-100 [&_.swiper-slide-next]:blur-[2.5px]",
            ].join(" ")}
          >
            {projects.map((p, idx) => (
              <SwiperSlide
                key={p.id}
                className="md:w-175! h-full! py-3 flex items-center justify-center"
              >
                <div
                  className={[
                    "mx-auto overflow-hidden bg-black/10 transition-all duration-300",
                    idx === activeIndex
                      ? "w-70 h-35 md:w-175 md:h-100 rounded-2xl opacity-95 shadow-[0_0_10px_2px_rgba(255,161,0,1)]"
                      : "hidden md:flex w-fit h-65 top-1/2",
                  ].join(" ")}
                >
                  <img
                    src={p.imgSrc}
                    alt={p.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-74 md:w-156.25 mx-auto pt-5 md:pt-22.5">
          <h4 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-main md:text-[48px]">
            {current.title}
          </h4>
          <p className="mt-3 text-lg md:text-xl text-text-sub md:text-[32px]">
            {current.subtitle}
          </p>
          <p className="mt-2 text-sm md:text-base text-text-sub/50 md:text-[24px]">
            {current.members}
          </p>
        </div>
      </div>
    </article>
  );
}

export default IdeathonCarousel;
