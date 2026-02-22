import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextButton from "../components/NextButton";

function Activity() {
  const [activeTrack, setActiveTrack] = useState("Frontend");
  const [direction, setDirection] = useState(1); // 1: 오른쪽→왼쪽, -1: 왼쪽→오른쪽
  const [currentSlide, setCurrentSlide] = useState({
    아이디어톤: 0,
    해커톤: 0,
    친목활동: 0,
  });
  const [slideDirection, setSlideDirection] = useState({
    아이디어톤: 1,
    해커톤: 1,
    친목활동: 1,
  });

  const trackOrder = ["Frontend", "Backend", "AI"];

  const handleTrackChange = (track) => {
    const prevIndex = trackOrder.indexOf(activeTrack);
    const nextIndex = trackOrder.indexOf(track);
    setDirection(nextIndex > prevIndex ? 1 : -1);
    setActiveTrack(track);
  };

  // 섹션 ref
  const partStudyRef = useRef(null);
  const ideathonRef = useRef(null);
  const hackathonRef = useRef(null);
  const networkingRef = useRef(null);

  const scrollToSection = (section) => {
    const refs = {
      "파트별 스터디": partStudyRef,
      아이디어톤: ideathonRef,
      해커톤: hackathonRef,
      친목활동: networkingRef,
    };

    refs[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const tracks = {
    Frontend: {
      title: "Frontend: 사용자에게 닿는 모든 순간을 설계합니다",
      description:
        "프론트엔드 파트는 단순히 화면을 그리는 것을 넘어 사용자와 서비스가 상호작용하는 모든 여정을 구현합니다.\n기초적인 마크업부터 복잡한 상태 관리, 실제 배포까지 이어지는 체계적인 커리큘럼을 통해\n'프론트엔드 엔지니어'로 성장할 수 있는 기반을 다집니다.",
      steps: [
        {
          number: 1,
          title: "Web 기초",
          subtitle:
            "HTML과 CSS를 통해 웹 페이지의 구조와 스타일을\n이해하고 기본적인 화면 구성 방법을 익힙니다",
        },
        {
          number: 2,
          title: "JavaScript",
          subtitle:
            "JavaScript의 기초부터 심화까지 학습하며\n웹 페이지에 동작을 추가하고 사용자와\n상호작용하는 기능을 구현하는 방법을 익힙니다",
        },
        {
          number: 3,
          title: "React 기초",
          subtitle:
            "React를 통해 컴포넌트 단위로 화면을 설계하며\n재사용 가능한 UI를 구성하는 기본 개념을 익힙니다",
        },
        {
          number: 4,
          title: "React 심화",
          subtitle:
            "상태 관리와 라우팅을 통해 여러 화면과\n상태를 연결하며 애플리케이션의\n전체 흐름을 설계하는 방법을 익힙니다",
        },
        {
          number: 5,
          title: "데이터 흐름 & 실전 배포",
          subtitle:
            "전역 상태 관리와 백엔드 통합 에플리케이션을 완성적으로\n구성하고 실제 서비스 형태로 완성하는 경험을 합니다",
        },
      ],
    },
    Backend: {
      title: "Backend: 데이터를 안전하게 다루고 서비스의 뼈대를 설계합니다",
      description:
        "백엔드 파트는 눈에 보이지 않는 곳에서 서비스의 핵심 로직과 데이터를 책임진다. JAVA와 데이터베이스 기초부터\n스프링 기반의 웹 애플리케이션, 보안, 실제 배포와 해커톤까지 이어지는 커리큘럼을 통해 '백엔드 엔지니어'로\n성장할 수 있는 탄탄한 기반을 다집니다.",
      steps: [
        {
          number: 1,
          title: "Java & 서버 기본기",
          subtitle:
            "Java를 통해 객체지향 언어와\n서버 개발의 기본 구조를 익힙니다",
        },
        {
          number: 2,
          title: "데이터 모델링 & DB",
          subtitle:
            "ERD Cloud로 서비스 구조를\n설계하고 MySQL 기반의 엔터티,\n관계 모델링을 완성합니다",
        },
        {
          number: 3,
          title: "스프링 웹 애플리케이션 & CRUD API",
          subtitle:
            "기본 CRUD API를 만들고 Postman과 Swagger를 통해\n테스트를 진행하며 여러차원의 총 경증까지 구현합니다",
        },
        {
          number: 4,
          title: "인증, 보안 & 서비스 확장",
          subtitle:
            "스프링 시큐리티로 토큰 기반 인증과 소셜 로그인을\n구현하며 이미지 업로드(S3), 공급 API 활용 및\nAI 연동 등 확장 기능을 구현합니다",
        },
        {
          number: 5,
          title: "배포 & 실전 프로젝트",
          subtitle:
            "AWS와 Docker로 실제 서비스 배포를 진행하며\n해커톤을 위한 실전 프로젝트 호출을 경리합니다",
        },
      ],
    },
    AI: {
      title: "AI: 데이터로 세상을 이해하고 판단하는 방법을 만듭니다",
      description:
        "AI 파트는 데이터를 기반으로 문제를 정의하고 모델이 학습하고 예측하는 과정을 단계적으로 이해합니다.\n머신러닝과 컴퓨터 비전, 딥러닝과 LLM까지 이어지는 학습을 통해 이론과 실습을 모두 갖춘 AI 엔지니어의\n기초 역량을 쌓습니다.",
      steps: [
        {
          number: 1,
          title: "AI 기초",
          subtitle:
            "AI와 머신러닝의 큰 흐름을 살펴보고\nPython으로 데이터 처리를 시작합니다",
        },
        {
          number: 2,
          title: "머신러닝",
          subtitle:
            "수학적 개념을 바탕으로 모델이 학습하는\n과정을 이해하고 머신러닝의 기본 원리를 익힙니다",
        },
        {
          number: 3,
          title: "컴퓨터 비전",
          subtitle:
            "이미지와 영상 데이터를 직접 다루며\n컴퓨터가 시각 정보를 인식하는 방식을 경험합니다",
        },
        {
          number: 4,
          title: "딥러닝 & CNN(Convolutional Neural Network)",
          subtitle:
            "CNN 구조를 이해하고 이를 바탕으로\n이미지 분류 모델을 구현하는 과정을 경험합니다",
        },
        {
          number: 5,
          title: "LLM(Large Language Model)",
          subtitle: "언어 모델의 구조를 이해하고\nAI 서비스로 연결합니다",
        },
      ],
    },
  };

  const carouselSections = [
    {
      id: "아이디어톤",
      ref: ideathonRef,
      title: "아이디어톤",
      description:
        "팀 프로젝트를 통해 실천하고 싶은 아이디어(웹 서비스)를 발표하는 자리이며,\n전국의 멋사 학생들이 모여 아이디어를 공유하는 네트워킹의 장입니다.",
      images: [
        "../img/아이디어톤1.png",
        "../img/아이디어톤2.png",
        "../img/아이디어톤3.png",
        "../img/아이디어톤4.png",
      ],
    },
    {
      id: "해커톤",
      ref: hackathonRef,
      title: "해커톤",
      description:
        "실제 아이디어가 구현되는 축제의 장입니다. 수 주간의 아이디어 빌드업과 프로그래밍에 이어 해커톤 당일의 밤샘 코딩 및 최종 발표를 통해 아이디어를 구현하고 소개합니다.",
      images: [
        "../img/해커톤1.png",
        "../img/해커톤2.png",
        "../img/해커톤3.png",
        "../img/해커톤4.png",
        "../img/해커톤5.png",
      ],
    },
    {
      id: "친목활동",
      ref: networkingRef,
      title: "친목활동",
      description:
        "성공회대 멋사만의 MT, OT, 조지미 제도, 세미나 등 학교 선배, 후배, 동기와 친해지고 더불어 함께 스터디를 할 수 있는 기회를 얻을 수 있습니다.",
      images: [
        "../img/친목1.png",
        "../img/친목2.png",
        "../img/친목3.png",
        "../img/친목4.png",
        "../img/친목5.png",
      ],
    },
  ];

  const handlePrevSlide = (section) => {
    setSlideDirection((prev) => ({ ...prev, [section]: -1 })); // ← 추가
    setCurrentSlide((prev) => {
      const sectionData = carouselSections.find((s) => s.id === section);
      return {
        ...prev,
        [section]:
          prev[section] === 0
            ? sectionData.images.length - 1
            : prev[section] - 1,
      };
    });
  };

  const handleNextSlide = (section) => {
    setSlideDirection((prev) => ({ ...prev, [section]: 1 })); // ← 추가
    setCurrentSlide((prev) => {
      const sectionData = carouselSections.find((s) => s.id === section);
      return {
        ...prev,
        [section]:
          prev[section] === sectionData.images.length - 1
            ? 0
            : prev[section] + 1,
      };
    });
  };

  // Framer Motion 슬라이드 variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <section className="mx-auto bg-primary-bg px-5 py-12 md:px-30 md:py-18.75 md:w-360">
      {/* Activity 타이틀 */}
      <h2 className="w-fit text-[32px] md:text-[64px] font-bold bg-gradient bg-clip-text text-transparent mb-6 md:mb-10">
        Activity
      </h2>

      {/* 질문 */}
      <h3 className="text-xl md:text-4xl font-semibold text-text-main mb-6 md:mb-10">
        멋사에선 무엇을 하나요?
      </h3>

      {/* 네비게이션 버튼 - 모바일: 2x2 가운데 정렬 / 데스크탑: 기존 유지 */}
      <div className="grid grid-cols-2 gap-3 justify-items-center md:flex md:flex-wrap md:gap-[105px] mb-12 md:mb-20">
        {["파트별 스터디", "아이디어톤", "해커톤", "친목활동"].map((tab) => (
          <button
            key={tab}
            onClick={() => scrollToSection(tab)}
            className="px-5 md:px-6 md:w-[221px] w-[130px] h-[47px] shadow-primary-glow md:h-[96px] md:text-[30px] py-2.5 rounded-[14px] md:py-3 md:rounded-[28px] md:border-3 border-2 border-primary-point2 bg-transparent text-text-main text-sm font-semibold hover:bg-primary-point2 hover:text-white transition-all duration-300"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 파트별 스터디 섹션 */}
      <div
        ref={partStudyRef}
        className="space-y-10 md:space-y-15 mb-20 md:mb-32"
      >
        <div className="mb-4 h-0.5 w-20 md:w-[97px] md:mb-7 bg-gradient" />

        <h4 className="text-2xl md:text-4xl font-semibold text-text-main mb-6 md:mb-10">
          파트별 스터디
        </h4>

        <p className="text-sm md:text-2xl text-text-sub mb-8 md:mb-12">
          프론트엔드, 백엔드, AI 파트로 나누어 운영한 주도하여 정기적인 스터디를
          진행합니다.
          <br />
          기초부터 차근차근 함께 공부해 나갑니다.
        </p>

        {/* 트랙 선택 버튼 */}
        <div className="flex gap-6 md:gap-10 mb-8 md:mb-12">
          {["Frontend", "Backend", "AI"].map((track) => (
            <button
              key={track}
              onClick={() => handleTrackChange(track)}
              className={`
                pb-3 md:pb-1 text-base md:text-2xl font-bold transition-all duration-300
                ${
                  activeTrack === track
                    ? "text-text-main border-b-2 border-text-main"
                    : "text-[#9e9e9e]"
                }
              `}
            >
              {track}
            </button>
          ))}
        </div>

        {/* 트랙별 컨텐츠 - AnimatePresence로 부드러운 전환 */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeTrack}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 400, damping: 35 },
                opacity: { duration: 0.2 },
              }}
            >
              <div className="md:px-5">
                <h5 className="text-lg md:text-3xl font-bold text-text-main mb-4 md:mb-6">
                  {tracks[activeTrack].title}
                </h5>
                <p className="text-sm md:text-xl text-text-sub whitespace-pre-line mb-10 md:mb-16">
                  {tracks[activeTrack].description}
                </p>
              </div>

              {/* 타임라인 - 모바일 */}
              <div className="md:hidden overflow-visible">
                <div className="pl-2">
                  <div className="space-y-4 border-l-2 border-primary-point2 pl-[23px]">
                    {tracks[activeTrack].steps.map((step) => (
                      <div key={step.number} className="relative">
                        <span className="absolute -left-8 top-2 h-4 w-4 rounded-full border-2 border-primary-point2 bg-primary-bg shadow-primary-glow" />
                        <p
                          className="text-lg font-bold bg-gradient bg-clip-text text-transparent"
                          style={{
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          Step {step.number}
                        </p>
                        <p className="text-base font-semibold text-text-main">
                          {step.title}
                        </p>
                        <p className="text-sm text-text-sub leading-relaxed whitespace-pre-line">
                          {step.subtitle}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 타임라인 - 웹 */}
              <div className="relative mt-14 hidden md:block">
                <div
                  className="absolute left-0 right-8 top-1/2 h-0.75 -translate-y-1/2 bg-primary-point2 shadow-primary-glow"
                  style={{ top: "200px" }}
                />
                <div className="grid grid-cols-5 max-w-[1100px]">
                  {tracks[activeTrack].steps.map((step, index) => (
                    <div
                      key={step.number}
                      className="relative flex justify-center"
                    >
                      <span
                        className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-primary-point2 bg-primary-bg shadow-primary-glow z-10"
                        style={{ top: "200px" }}
                      />
                      <div
                        className={`${
                          index === 0
                            ? "mb-10 ml-20 mt-10" // Step1
                            : index === 1
                            ? "mt-54 " // Step2
                            : index === 2
                            ? "mb-10 mt-10" // Step3
                            : index === 3
                            ? "mt-54" // Step4
                            : "mb-10 mt-10" // Step5
                        } max-w-[300px] text-start`}
                      >
                        <p className="text-[30px] font-bold bg-gradient bg-clip-text text-transparent mb">
                          Step {step.number}
                        </p>
                        <p className="text-[20px] font-semibold w-[450px] text-text-main">
                          {step.title}
                        </p>
                        <p className="text-[15px] text-text-sub w-[350px] h-[100px] whitespace-pre-line">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 아이디어톤, 해커톤, 친목활동 섹션들 */}
      {carouselSections.map((section) => (
        <div
          key={section.id}
          ref={section.ref}
          className="space-y-6 md:space-y-10 mb-20 md:mb-32"
        >
          <div className="mb-4 h-0.5 w-20 md:w-[97px] md:mb-7 bg-gradient" />
          <h4 className="text-2xl md:text-4xl font-semibold text-text-main mb-4 md:mb-6">
            {section.title}
          </h4>
          <p className="text-sm md:text-2xl text-text-sub md:w-[841px] leading-relaxed whitespace-pre-line mb-8 md:mb-12">
            {section.description}
          </p>
          {/* 이미지 캐러셀 */}
          {section.images.length > 0 && (
            <div className="relative flex items-center justify-center">
              {/* 왼쪽 화살표 */}
              <button
                onClick={() => handlePrevSlide(section.id)}
                className="z-30 flex-shrink-0 mr-2.5"
              >
                <img
                  src="../img/모바일왼쪽화살표.png"
                  alt="이전"
                  className="w-6 h-6 md:w-10 md:h-10"
                />
              </button>

              {/* 이미지 컨테이너 */}
              <div className="relative w-[280px] h-[200px] md:w-[600px] md:h-[400px] flex items-center justify-center">
                {/* 메인 이미지 - Framer Motion 적용 */}
                <AnimatePresence mode="wait">
                  {section.images.map((img, index) => {
                    if (index !== currentSlide[section.id]) return null;
                    return (
                      <motion.div
                        key={index}
                        initial={{
                          opacity: 0,
                          x: slideDirection[section.id] * 60,
                        }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{
                          opacity: 0,
                          x: slideDirection[section.id] * -60,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 35,
                        }}
                        className="w-[280px] h-[200px] md:w-[600px] md:h-[400px] overflow-hidden shadow-[0_0_10px_2px_rgba(255,161,0,0.7)] relative z-20"
                      >
                        <img
                          src={img}
                          alt={`${section.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {/* 왼쪽 흐린 이미지 - 데스크탑만 (기존 그대로) */}
                {section.images.map((img, index) => {
                  const currentIndex = currentSlide[section.id];
                  const isPrev =
                    index ===
                    (currentIndex - 1 + section.images.length) %
                      section.images.length;
                  if (!isPrev) return null;
                  return (
                    <div
                      key={`prev-${index}`}
                      className="hidden md:block absolute left-0 w-auto h-[300px] overflow-hidden opacity-40 blur-[3px] z-10"
                      style={{ transform: "translateX(-55%)" }}
                    >
                      <img
                        src={img}
                        alt={`${section.title} ${index + 1}`}
                        className="h-full w-auto object-cover"
                      />
                    </div>
                  );
                })}

                {/* 오른쪽 흐린 이미지 - 데스크탑만 (기존 그대로) */}
                {section.images.map((img, index) => {
                  const currentIndex = currentSlide[section.id];
                  const isNext =
                    index === (currentIndex + 1) % section.images.length;
                  if (!isNext) return null;
                  return (
                    <div
                      key={`next-${index}`}
                      className="hidden md:block absolute right-0 w-auto h-[300px] overflow-hidden opacity-40 blur-[3px] z-10"
                      style={{ transform: "translateX(55%)" }}
                    >
                      <img
                        src={img}
                        alt={`${section.title} ${index + 1}`}
                        className="h-full w-auto object-cover"
                      />
                    </div>
                  );
                })}
              </div>

              {/* 오른쪽 화살표 */}
              <button
                onClick={() => handleNextSlide(section.id)}
                className="z-30 flex-shrink-0 ml-2.5"
              >
                <img
                  src="../img/모바일오른쪽화살표.png"
                  alt="다음"
                  className="w-6 h-6 md:w-10 md:h-10"
                />
              </button>
            </div>
          )}
        </div>
      ))}
      <NextButton to={"/results"}>활동 결과 보기</NextButton>
    </section>
  );
}

export default Activity;
