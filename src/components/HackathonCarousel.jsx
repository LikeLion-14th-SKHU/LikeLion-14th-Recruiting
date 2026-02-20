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
    <article className="pt-15 overflow-hidden">
      <div className="mb-3 h-0.5 w-25 bg-gradient mx-auto md:mx-0" />
      <h3 className="text-2xl md:text-4xl font-semibold mb-10">{title}</h3>

      <div className="relative mx-auto h-180 w-full max-w-6xl overflow-hidden flex items-center justify-center">
        <button
          ref={prevRef}
          className="absolute left-73 top-80 z-40 -translate-y-1/2 rounded-full border border-primary-point1 bg-black/20 p-3 text-primary-point1 shadow-[0_0_10px_rgba(255,77,0)] backdrop-blur-[20px] transition hover:bg-primary-bg cursor-pointer"
        >
          <FaChevronLeft className="size-7" />
        </button>

        <button
          ref={nextRef}
          className="absolute right-73 top-80 z-40 -translate-y-1/2 rounded-full border border-primary-point1 bg-black/20 p-3 text-primary-point1 shadow-[0_0_10px_rgba(255,77,0)] backdrop-blur-[20px] transition hover:bg-primary-bg cursor-pointer"
        >
          <FaChevronRight className="size-7" />
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
                      "flex items-center justify-center origin-center transition-all duration-500 will-change-transform",
                      isActive
                        ? "z-30 scale-100 opacity-100"
                        : "z-10 scale-75 opacity-80",
                      isActive && p.frame === "desktop" ? "scale-150" : "",
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
                          className="h-full w-full object-contain object-center"
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

      <div className="w-156.25 mx-auto text-center">
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
