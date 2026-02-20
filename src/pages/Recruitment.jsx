import NextButton from "../components/NextButton";

function Recruitment() {
  const welcomePoints = [
    "처음이지만 배우고 싶은 분",
    "팀 활동과 협업에 관심 있는 분",
    "아이디어톤, 해커톤 등 여러 프로젝트에 도전해보고 싶은 분",
    "꾸준히 참여할 수 있는 책임감 있는 분",
  ];

  const difficultPoints = [
    "정기 활동 참여가 어려운 경우",
    "개인 작업만을 선호하는 경우",
    "개인 노트북이 없는 경우",
  ];

  const timeline = [
    {
      title: "1차 서류",
      date: "2월 25일 ~ 3월 12일",
    },
    {
      title: "1차 발표",
      date: "3월 15일 일요일",
    },
    {
      title: "2차 면접",
      date: "3월 16일 ~ 3월 18일",
    },
    {
      title: "최종 발표",
      date: "3월 21일 토요일",
    },
  ];

  return (
    <section className="bg-primary-bg pt-5.5 md:mx-30 mx-5  text-text-main md:pt-18.75">
      <h2 className="w-fit font-bold bg-gradient bg-clip-text text-transparent text-4xl md:text-[64px]">
        Recruitment
      </h2>

      <div className="pt-5 md:pt-15 space-y-8.75">
        <article>
          <div className="mb-3 h-0.5 w-25 bg-gradient" />
          <h3 className="text-2xl md:text-4xl font-semibold text-text-main">
            이런 분을 환영합니다
          </h3>
          <ul className="mt-5 list-disc pl-6 text-lg md:text-2xl text-text-sub">
            {welcomePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>

        <article className="pt-15">
          <div className="mb-3 h-0.5 w-25 bg-gradient" />
          <h3 className="text-2xl md:text-4xl font-semibold text-text-main">
            이런 경우는 어려울 수 있어요
          </h3>
          <ul className="mt-5 list-disc pl-6 text-lg md:text-2xl text-text-sub">
            {difficultPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </div>

      <div className=" mt-13 pt-15 grid md:grid-cols-2 gap-6.25 md:gap-0">
        <article className="md:w-[70%] w-[80%] mx-auto rounded-3xl shadow-primary-glow border-[3px] border-primary-point2">
          <h4 className="pt-6.25 text-center text-2xl md:text-3xl font-semibold text-text-main">
            모집 대상
          </h4>
          <div className="mx-auto mt-3 h-0.5 w-44 rounded-3xl bg-primary-point2 shadow-primary-glow" />
          <ul className="mt-6 mb-6 w-fit mx-auto list-disc pl-6 text-xl md:text-2xl text-text-sub">
            <li>성공회대학교 재학생, 휴학생</li>
            <li>전공, 학년 무관</li>
            <li>코딩에 관심있는 사람</li>
          </ul>
        </article>
        <article className="md:w-[70%] w-[80%] mx-auto rounded-3xl shadow-primary-glow border-[3px] border-primary-point2">
          <h4 className="pt-6.25 text-center text-2xl md:text-3xl font-semibold text-text-main">
            활동 조건
          </h4>
          <div className="mx-auto mt-3 h-0.5 w-44 rounded-3xl bg-primary-point2 shadow-primary-glow" />
          <ul className="mt-6 mb-6 w-fit mx-auto list-disc pl-6 text-xl md:text-2xl text-text-sub">
            <li>매주 2회 정기 세션 필참</li>
            <li>아이디어톤, 해커톤 활동 필참</li>
          </ul>
        </article>
      </div>

      <article className="pt-30">
        <div className="mb-3 h-0.5 w-25 bg-gradient" />
        <h3 className="text-2xl md:text-4xl font-semibold text-text-main">
          모집 일정
        </h3>

        <div className="mt-8 md:hidden">
          <div className="space-y-6 border-l-2 border-primary-point2 pl-8">
            {timeline.map((item) => (
              <div key={item.title} className="relative">
                <span className="absolute -left-10.25 top-2 h-4 w-4 rounded-full border-2 border-primary-point2 bg-primary-bg shadow-primary-glow" />
                <p className="text-xl font-semibold text-text-sub">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-text-sub">{item.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-14 hidden md:block">
          <div className="absolute left-0 right-0 top-1/2 h-0.75 -translate-y-1/2 bg-[#ff9800]" />
          <div className="grid grid-cols-4">
            {timeline.map((item, index) => (
              <div key={item.title} className="relative flex justify-center">
                <span className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-primary-point2 bg-primary-bg shadow-primary-glow" />
                <div className={index % 2 === 0 ? "mb-20" : "mt-20"}>
                  <p className="text-2xl font-semibold">{item.title}</p>
                  <p className="text-base text-text-sub">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      <article className="mt-27.5 pb-7.5">
        <p className="text-2xl text-text-main">
          위 내용을 확인하셨다면
          <br />
          지원서를 작성해 주세요
        </p>
        <NextButton to="/apply">지원하러 가기</NextButton>
      </article>
    </section>
  );
}

export default Recruitment;
