import React, { useMemo } from "react";
import NextButton from "../components/NextButton";
import IdeathonCarousel from "../components/IdeathonCarousel";
import HackathonCarousel from "../components/HackathonCarousel";
import AlumniQuotesCarousel from "../components/AlumniQuotesCarousel";

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function Results() {
  const ideathonProjects = useMemo(() => {
    const allIdeatonProjects = [
      {
        id: "idea-1",
        imgSrc: "/img/SpeechFit.png",
        title: "SpeechFit",
        subtitle:
          "면접·발표 전, 말하기 실력을 빠르게 단련해주는 \nAI 말하기 트레이너",
        members: "이다정, 이민준, 장대영, 조규림, 최성혁, 홍효정",
      },
      {
        id: "idea-2",
        imgSrc: "/img/동행.png",
        title: "동행",
        subtitle: "반려동물이 걱정되는 순간 \n당신의 판단을 도와주는 도구",
        members: "김수정, 서연진, 유하영, 박성준, 양라윤, 이하늘",
      },
      {
        id: "idea-3",
        imgSrc: "/img/두리번.png",
        title: "두리번",
        subtitle:
          "현 위치 기반으로 주변 공공 편의 시설을 \n실시간 안내하는 AI 위치 기반 안내 서비스",
        members: "강미소, 김지안, 박동준, 백하윤, 전승빈, 정다운",
      },
      {
        id: "idea-4",
        imgSrc: "/img/코스쓱.png",
        title: "코스쓱",
        subtitle:
          "사용자가 가고자 하는 위치와 그 날의 무드를 입력하면 AI가 맞춤 코스를 구성해 주는 AI 기반 \n코스 추천 서비스",
        members: "박예은, 이가은, 이예은, 이한용, 조성수, 최진원",
      },
      {
        id: "idea-5",
        imgSrc: "/img/약지기.png",
        title: "약지기",
        subtitle: "사진 한 장으로 쉽게 알아보는 약 정보 서비스",
        members: "김민우, 김재훈, 김현민, 신수연, 안준영, 현정빈",
      },
      {
        id: "idea-6",
        imgSrc: "/img/DeepGuard.png",
        title: "Deep Guard",
        subtitle:
          "딥페이크 이미지·영상 탐지와 예방 기능을 통해 \n개인을 디지털 범죄로부터 보호하는 통합 보안 서비스",
        members: "김규빈, 박세은, 손솔하, 이정혁, 박종범, 이창현",
      },
      {
        id: "idea-7",
        imgSrc: "/img/AiDo.png",
        title: "AiDo",
        subtitle:
          "대학교 과제와 사용자의 특성을 분석해 \n일정을 관리해주는 AI 서비스",
        members: "권하연, 김태현, 윤현승, 이슬아, 이아림, 홍다보미",
      },
    ];
    return shuffleArray(allIdeatonProjects);
  }, []);

  const hackathonProjects = useMemo(() => {
    const allHackathonProjects = [
      {
        id: "hack-1",
        imgSrc: "/img/EVENTORY.png",
        title: "EVENTORY",
        subtitle: "AI가 도와주는 행사 기획 및 홍보",
        members: "강미소, 김수정, 이아림, 이예은, 박예은",
        frame: "phone",
      },
      {
        id: "hack-2",
        imgSrc: "/img/NEEZY.png",
        title: "NEEZY",
        subtitle: "AI가 자동으로 '이 동네에 부족한 업종'을 제안 및 추천",
        members: "안준영, 김민우, 윤현승, 최성혁, 이민준",
        frame: "phone",
      },
      {
        id: "hack-3",
        imgSrc: "/img/어디가게.png",
        title: "어디가게?",
        subtitle:
          "서울 소상공인 지역·업종 \n종합 분석 리포트(최적의 입지, 지원정책 추천) \nAI 서비스",
        members: "박세은, 박동준, 이정혁, 현정빈, 이창현",
        frame: "phone",
      },
      {
        id: "hack-4",
        imgSrc: "/img/ARTIPIC.png",
        title: "ARTIPIC",
        subtitle:
          "위치/날씨 기반, AI추천으로 \n지금 즐길 수 있는 문화 콘텐츠를 한눈에 보여줌",
        members: "최진원, 백하윤, 김태헌, 박종범, 손솔하, 이하늘",
        frame: "phone",
      },
      {
        id: "hack-5",
        imgSrc: "/img/청상회.png",
        title: "청상회 : 청년과 상인의 회",
        subtitle: "지역 대학생/청년과 소상공인의 니즈에 맞춰 \nAI로 매칭",
        members: "정다운, 최기웅, 이한용, 홍다보미, 이가은, 박성준",
        frame: "desktop",
      },
      {
        id: "hack-6",
        imgSrc: "/img/동네링.png",
        title: "동네링",
        subtitle:
          "지역별 맞춤 소식을 AI로 큐레이션해주는, \n나만을 위한 로컬 뉴스 요약 플랫폼",
        members: "유하영, 김현민, 김지안, 김은혜, 서연진, 장대영",
        frame: "phone",
      },
      {
        id: "hack-7",
        imgSrc: "/img/이음.png",
        title: "이음",
        subtitle: "지역 기반 자원과 커뮤니티를 연결하는 플랫폼",
        members: "조정수, 이슬아, 조규림, 양라윤, 이다정",
        frame: "phone",
      },
    ];
    return shuffleArray(allHackathonProjects);
  }, []);

  const alumniQuotes = useMemo(() => {
    const allAlumniQuotes = [
      {
        id: "alumni-1",
        content:
          "많은 사람들과 협업하며 개발 경험을 쌓을 수 있는 소중한 기회였습니다. 아기사자로서도, 운영진으로서도 배울 점이 많았던 동아리예요!",
        generation: "12기",
        position: "Frontend",
        name: "박예은",
      },
      {
        id: "alumni-2",
        content:
          "전공 수업에도 도움이 되어 좋았고, 선배들이랑 친해질 수 있었어요!",
        generation: "13기",
        position: "Frontend",
        name: "김지안",
      },
      {
        id: "alumni-3",
        content: "체계적인 커리큘럼 덕분에 많은 것을 배울 수 있었습니다",
        generation: "13기",
        position: "Frontend",
        name: "최성혁",
      },
      {
        id: "alumni-4",
        content:
          "혼자였다면 막막했을 프론트엔드 공부를 스터디와 프로젝트로 하니까 차근차근 성장할 수 있었어요!",
        generation: "13기",
        position: "Frontend",
        name: "현정빈",
      },
      {
        id: "alumni-5",
        content:
          "막막했던 저에게 멋사는 방향을 잡아 주었습니다. 체계적인 학습과 다양한 경험 덕분에 한 단계 성장했습니다. 모두 도전해보세요 화이팅입니다! 💪",
        generation: "12기",
        position: "Backend",
        name: "조규림",
      },
      {
        id: "alumni-6",
        content: "힘들더라도 포기하지 않으면 좋은 경험이 남을 거예요.",
        generation: "13기",
        position: "Backend",
        name: "김수정",
      },
      {
        id: "alumni-7",
        content:
          "운영진의 코드 리뷰를 통해 제 코드를 더 깊이 생각해볼 수 있었고 이를 통해 많이 배웠습니다. 여러분도 피드백을 두려워하지 마세요!",
        generation: "13기",
        position: "Backend",
        name: "김태헌",
      },
      {
        id: "alumni-8",
        content:
          "서비스를 처음부터 끝까지 온전히 만드는 경험이 좋았어요. 그 과정에서 오류를 선후배들과 함께 고치며 같이 성장할 수 있었어요.",
        generation: "13기",
        position: "AI",
        name: "조성수",
      },
      {
        id: "alumni-9",
        content:
          "멋사를 하면서 다양한 사람들을 만나 좋은 경험을 쌓았고, 개발 실력도 확실히 늘어서 가는 것 같아요",
        generation: "13기",
        position: "AI",
        name: "김규빈",
      },
    ];

    return shuffleArray(allAlumniQuotes);
  }, []);

  return (
    <section className="mx-auto bg-primary-bg px-5 py-12 md:px-30 md:py-18.75 md:w-360">
      <h2 className="w-fit text-[32px] md:text-6xl font-bold bg-gradient bg-clip-text text-transparent">
        Results
      </h2>

      <div className="pt-5 md:pt-15 space-y-8.75">
        <IdeathonCarousel
          title="아이디어톤 결과물"
          projects={ideathonProjects}
        />
        <HackathonCarousel title="해커톤 결과물" projects={hackathonProjects} />
      </div>

      <article className="pt-20 md:pt-30">
        <div className="mb-3 h-0.5 w-25 bg-gradient" />
        <h3 className="text-3xl md:text-4xl font-semibold text-text-main">
          선배들의 한 마디
        </h3>

        <div>
          <AlumniQuotesCarousel alumniQuotes={alumniQuotes} />
        </div>
      </article>

      <article className="mt-15 pb-7.5">
        <p className="text-text-main md:text-[24px] text-[12px] md:mb-1">
          이 기록을
          <br />
          다음 이야기로 이어갈 분들을 찾고 있습니다
        </p>
        <NextButton to="/recruitment">모집 안내 보기</NextButton>
      </article>
    </section>
  );
}

export default Results;
