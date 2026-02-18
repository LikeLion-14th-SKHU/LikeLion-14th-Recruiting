import React, { useMemo, useRef, useState } from "react";
import ApplyButton from "../components/ApplyButton";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

/**
 * ✅ Swiper 기반 3-up 캐러셀
 * - 화면에는 (좌/중/우) 3장 보이되, "중앙(Active)" 기준으로 아래 설명 변경
 * - Next 클릭: 1,2,3 → 2,3,4 (slidesPerGroup=1 + centeredSlides)
 *
 */

function ProjectCarousel({ title, projects }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // 중앙(Active) 슬라이드 index
  const initialIndex = projects?.length >= 3 ? 1 : 0;
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  if (!Array.isArray(projects) || projects.length === 0) {
    return (
      <article className="pt-15">
        <div className="mb-3 h-0.5 w-25 bg-gradient" />
        <h3 className="text-2xl md:text-4xl font-semibold text-text-main">
          {title}
        </h3>
        <p className="mt-6 text-text-sub">표시할 프로젝트가 없습니다.</p>
      </article>
    );
  }

  const current = projects[Math.min(activeIndex, projects.length - 1)];

  return (
    <article className="pt-15">
      <div className="mb-3 h-0.5 w-25 bg-gradient" />
      <h3 className="text-2xl md:text-4xl font-semibold text-text-main">
        {title}
      </h3>

      <div className="relative mt-10">
        {/* 
        커스텀 네비게이션 버튼 변경해야함, 컴포넌트로 만들 수 있을지?
        */}
        <button
          ref={prevRef}
          type="button"
          aria-label="Previous"
          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-primary-point2/60 bg-primary-bg/60 p-3 text-primary-point2 shadow-[0_0_12px_rgba(255,77,0,0.35)] backdrop-blur transition hover:bg-primary-bg"
        >
          &lt;
        </button>
        <button
          ref={nextRef}
          type="button"
          aria-label="Next"
          className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-primary-point2/60 bg-primary-bg/60 p-3 text-primary-point2 shadow-[0_0_12px_rgba(255,77,0,0.35)] backdrop-blur transition hover:bg-primary-bg"
        >
          &gt;
        </button>

        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          centeredSlides
          slidesPerGroup={1}
          spaceBetween={40}
          initialSlide={initialIndex}
          // 모바일은 일단 1장(원하면 1.2로 바꿔서 살짝 옆 보이게 가능)
          breakpoints={{
            0: { slidesPerView: 1, centeredSlides: true, spaceBetween: 16 },
            768: { slidesPerView: 3, centeredSlides: true, spaceBetween: 40 },
          }}
          onBeforeInit={(swiper) => {
            // Swiper 초기화 전에 네비게이션 엘리먼트 연결
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.prevEl = prevRef.current;
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          loopAdditionalSlides
          navigation
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="mx-auto max-w-5xl py-10"
        >
          {projects.map((p, idx) => (
            <SwiperSlide key={p.id}>
              {/* card */}
              <div
                className={[
                  "mx-auto overflow-hidden bg-black/10 shadow-[0_22px_90px_rgba(0,0,0,0.45)] transition-all duration-300",
                  // 중앙 카드만 크게
                  // TODO: 크기 조정
                  idx === activeIndex
                    ? " opacity-100"
                    : "opacity-55 scale-[0.92]",
                ].join(" ")}
              >
                <img
                  src={p.imgSrc}
                  alt={p.title}
                  className="h-full w-full object-contain"
                  draggable={false}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Caption (중앙 Active 기준) */}
        <div className="pb-10 text-center">
          <h4 className="text-4xl font-extrabold tracking-tight text-text-main md:text-[44px]">
            {current.title}
          </h4>
          <p className="mt-3 text-xl text-text-sub md:text-2xl">
            {current.subtitle}
          </p>
          <p className="mt-2 text-base text-text-sub/80 md:text-lg">
            {current.members}
          </p>
        </div>
      </div>
    </article>
  );
}

function Results() {
  const ideathonProjects = useMemo(
    () => [
      {
        id: "idea-1",
        imgSrc: "../img/SpeechFit.png",
        title: "SpeechFit",
        subtitle:
          "면접·발표 전, 말하기 실력을 빠르게 단련해주는 AI 말하기 트레이너",
        members: "이다정, 이민준, 장대영, 조규림, 최성혁, 홍효정",
      },
      {
        id: "idea-2",
        imgSrc: "../img/동행.png",
        title: "동행",
        subtitle: "반려동물이 걱정되는 순간 당신의 판단을 도와주는 도구",
        members: "김수정, 서연진, 유하영, 박성준, 양라윤, 이하늘",
      },
      {
        id: "idea-3",
        imgSrc: "../img/두리번.png",
        title: "두리번",
        subtitle:
          "현 위치 기반으로 주변 공공 편의 시설을 실시간 안내하는 AI 위치 기반 안내 서비스",
        members: "강미소, 김지안, 박동준, 백하윤, 전승빈, 정다운",
      },
      {
        id: "idea-4",
        imgSrc: "../img/코스쓱.png",
        title: "코스쓱",
        subtitle:
          "사용자가 가고자 하는 위치와 그 날의 무드를 입력하면 AI가 맞춤 코스를 구성해 주는 AI 기반 코스 추천 서비스",
        members: "박예은, 이가은, 이예은, 이한용, 조성수, 최진원",
      },
      {
        id: "idea-5",
        imgSrc: "../img/약지기.png",
        title: "약지기",
        subtitle: "사진 한 장으로 쉽게 알아보는 약 정보 서비스",
        members: "김민우, 김재훈, 김현민, 신수연, 안준영, 현정빈",
      },
      {
        id: "idea-6",
        imgSrc: "../img/DeepGuard.png",
        title: "Deep Guard",
        subtitle:
          "딥페이크 이미지·영상 탐지와 예방 기능을 통해 개인을 디지털 범죄로부터 보호하는 통합 보안 서비스",
        members: "김규빈, 박세은, 손솔하, 이정혁, 박종범, 이창현",
      },
      {
        id: "idea-7",
        imgSrc: "../img/AiDo.png",
        title: "AiDo",
        subtitle:
          "대학교 과제와 사용자의 특성을 분석해 일정을 관리해주는 AI 서비스",
        members: "권하연, 김태현, 윤현승, 이슬아, 이아림, 홍다보미",
      },
    ],
    [],
  );

  const hackathonProjects = useMemo(
    () => [
      {
        id: "hack-1",
        imgSrc: "../img/EVENTORY.png",
        title: "EVENTORY",
        subtitle: "AI가 도와주는 행사 기획 및 홍보",
        members: "강미소, 김수정, 이아림, 이예은, 박예은",
      },
      {
        id: "hack-2",
        imgSrc: "../img/NEEZY.png",
        title: "NEEZY",
        subtitle: "AI가 자동으로 '이 동네에 부족한 업종'을 제안 및 추천",
        members: "안준영, 김민우, 윤현승, 최성혁, 이민준",
      },
      {
        id: "hack-3",
        imgSrc: "../img/어디가게.png",
        title: "어디가게?",
        subtitle:
          "서울 소상공인 지역·업종 종합 분석 리포트(최적의 입지, 지원정책 추천) AI 서비스",
        members: "박세은, 박동준, 이정혁, 현정빈, 이창현",
      },
      {
        id: "hack-4",
        imgSrc: "../img/ARTIPIC.png",
        title: "ARTIPIC",
        subtitle:
          "위치/날씨 기반, AI추천으로 지금 즐길 수 있는 문화 콘텐츠를 한눈에 보여줌",
        members: "최진원, 백하윤, 김태헌, 박종범, 손솔하, 이하늘",
      },
      {
        id: "hack-5",
        imgSrc: "../img/청상회.png",
        title: "청상회 : 청년과 상인의 회",
        subtitle: "지역 대학생/청년과 소상공인의 니즈에 맞춰 AI로 매칭",
        members: "정다운, 최기웅, 이한용, 홍다보미, 이가은, 박성준",
      },
      {
        id: "hack-6",
        imgSrc: "../img/동네링.png",
        title: "동네링",
        subtitle:
          "지역별 맞춤 소식을 AI로 큐레이션해주는, 나만을 위한 로컬 뉴스 요약 플랫폼",
        members: "유하영, 김현민, 김지안, 김은혜, 서연진, 장대영",
      },
      {
        id: "hack-7",
        imgSrc: "../img/이음.png",
        title: "이음",
        subtitle: "지역 기반 자원과 커뮤니티를 연결하는 플랫폼입니다.",
        members: "조정수, 이슬아, 조규림, 양라윤, 이다정",
      },
    ],
    [],
  );

  return (
    <section className="bg-primary-bg pt-18.75 md:mx-30 mx-5 text-text-main md:pt-18.75">
      <h2 className="w-fit font-bold bg-gradient bg-clip-text text-transparent text-4xl md:text-[64px]">
        Results
      </h2>

      <div className="pt-15 space-y-8.75">
        <ProjectCarousel
          title="아이디어톤 결과물"
          projects={ideathonProjects}
        />
        <ProjectCarousel title="해커톤 결과물" projects={hackathonProjects} />
      </div>

      <article className="pt-30">
        <div className="mb-3 h-0.5 w-25 bg-gradient" />
        <h3 className="text-2xl md:text-4xl font-semibold text-text-main">
          선배들의 한 마디
        </h3>
      </article>

      <article className="mt-27.5 pb-7.5">
        <p className="text-2xl text-text-main">
          이 기록을
          <br />
          다음 이야기로 이어갈 분들을 찾고 있습니다
        </p>
        <ApplyButton to="recruitment">모집 안내 보기</ApplyButton>
      </article>
    </section>
  );
}

export default Results;
