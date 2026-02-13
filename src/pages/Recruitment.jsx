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

  /*
  Todo
  컴포넌트 제작 후 적용
  */

  return (
    <section className="bg-primary-bg px-6 pt-18.75 text-text-main md:px-14 md:pt-18.75">
      <h2 className="w-fit text-5xl font-extrabold bg-gradient bg-clip-text text-transparent">
        Recruitment
      </h2>

      <div className="mt-30 space-y-8.75">
        <article>
          <div className="mb-3 h-0.5 w-14 bg-gradient" />
          <h3 className="text-3xl font-semibold text-text-main">
            이런 분을 환영합니다
          </h3>
          <ul className="mt-2 list-disc space-y-1.5 pl-6 text-lg text-text-sub">
            {welcomePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>

        <article>
          <div className="mb-3 h-0.5 w-14 bg-gradient" />
          <h3 className="text-3xl font-semibold text-text-main">
            이런 경우는 어려울 수 있어요
          </h3>
          <ul className="mt-8 list-disc space-y-1.5 pl-6 text-lg text-text-sub">
            {difficultPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mt-13 grid gap-5 md:grid-cols-2 md:gap-14">
        <article className="rounded-3xl border-2 border-[#ff9800] bg-[#101114] px-7 py-8">
          <h4 className="text-center text-3xl font-semibold text-text-main">
            모집 대상
          </h4>
          <div className="mx-auto mt-3 h-0.5 w-24 bg-[#ff9800]" />
          <ul className="mt-8 list-disc space-y-1.5 pl-6 text-xl text-text-sub">
            <li>성공회대학교 재학생, 휴학생</li>
            <li>전공, 학년 무관</li>
            <li>코딩에 관심있는 사람</li>
          </ul>
        </article>

        <article className="rounded-3xl border-2 border-[#ff9800] bg-[#101114] px-7 py-8">
          <h4 className="text-center text-3xl font-semibold text-text-main">
            활동 조건
          </h4>
          <div className="mx-auto mt-3 h-0.5 w-24 bg-[#ff9800]" />
          <ul className="mt-8 list-disc space-y-1.5 pl-6 text-xl text-text-sub">
            <li>매주 2회 정기 세션 필참</li>
            <li>아이디어톤, 해커톤 활동 필참</li>
          </ul>
        </article>
      </div>

      <article className="mt-30">
        <div className="mb-3 h-0.5 w-14 bg-gradient" />
        <h3 className="text-4xl font-semibold text-text-main">모집 일정</h3>

        <div className="mt-8 md:hidden">
          <div className="space-y-4 border-l-2 border-[#ff9800] pl-5">
            {timeline.map((item) => (
              <div key={item.title}>
                <p className="text-xl font-semibold text-text-sub">
                  {item.title}
                </p>
                <p className="text-sm text-text-sub">{item.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-14 hidden md:block">
          <div className="absolute left-0 right-0 top-1/2 h-0.75 -translate-y-1/2 bg-[#ff9800]" />
          <div className="grid grid-cols-4">
            {timeline.map((item, index) => (
              <div key={item.title} className="relative flex justify-center">
                <span className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-[#ff9800] bg-[#0b0c0e]" />
                <div className={index % 2 === 0 ? "mb-20" : "mt-20"}>
                  <p className="text-2xl font-semibold">{item.title}</p>
                  <p className="text-base text-text-sub">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      <article className="mt-27.5 pb-12.5">
        <p className="text-2xl leading-relaxed text-text-main">
          위 내용을 확인하셨다면
          <br />
          지원서를 작성해 주세요
        </p>
        <button
          type="button"
          className="mt-4.25 rounded-lg border px-7 py-3 text-xl font-semibold text-[#ff9800] transition-colors hover:bg-[#ff9800] hover:text-[#0b0c0e]"
        >
          지원하러 가기
        </button>
      </article>
    </section>
  );
}

export default Recruitment;
