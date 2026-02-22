import NextButton from "../components/NextButton";

function About() {
  const cards = [
    {
      title: "경험 중심",
      description: "배우는 데서 끝나지 않고\n직접 해봅니다",
    },
    {
      title: "협업 중심",
      description: "혼자가 아닌 팀으로\n개발합니다",
    },
    {
      title: "도전 정신",
      description: "새로운 시도를\n두려워하지 않습니다",
    },
  ];

  return (
    <section className="mx-auto bg-primary-bg px-5 py-12 md:px-30 md:py-18.75 md:w-360">
      {/* About 타이틀 */}
      <h2 className="w-fit text-[32px] md:text-[64px] font-bold bg-gradient bg-clip-text text-transparent mb-8 md:mb-15">
        About
      </h2>

      {/* 질문-답변 섹션들 */}
      <div className="space-y-12 md:space-y-15">
        {/* 첫 번째 질문 */}
        <article>
          <div className="mb-3.5 h-0.75 w-20 md:w-24.25 bg-gradient" />
          <h3 className="text-[22px] md:text-[48px] font-semibold text-text-main mb-4 md:mb-6">
            멋쟁이 사자처럼?
          </h3>
          <p className="text-[14px] md:text-2xl text-text-sub leading-relaxed md:mb-25">
            멋쟁이 사자처럼은 자신이 생각했던 아이디어를 구체화하고 프로그래밍
            교육을 통해 <br /> 웹 서비스 구현을 목표로 활동하는 동아리입니다.
          </p>
        </article>

        {/* 두 번째 질문 */}
        <article>
          <div className="mb-3.5 h-0.75 w-20 md:w-24.25 bg-gradient" />
          <h3 className="text-[22px] md:text-[48px] font-semibold text-text-main mb-4 md:mb-6">
            어떤 사람들이 모여있나요?
          </h3>
          <p className="text-[14px] md:text-2xl text-text-sub leading-relaxed md:mb-25">
            전공도, 실력도, 출발선도 전부 다르지만 같이 배우고 같이 만들어보고
            싶은 사람들이 모인 동아리입니다.
          </p>
        </article>

        {/* 세 번째 질문 */}
        <article>
          <div className="mb-3.5 h-0.75 w-20 md:w-24.25 bg-gradient" />
          <h3 className="text-[22px] md:text-[48px] font-semibold text-text-main mb-8 md:mb-10">
            멋사가 중요하게 생각하는 것
          </h3>

          {/* 카드 그리드 - 모바일: 2-1 레이아웃, 웹: 1-1-1 */}
          <div className="flex flex-wrap gap-x-[31px] gap-y-5 md:gap-x-[75px] md:gap-y-0">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`
                  w-[146px] h-[76px] md:w-[350px] md:h-[183px]
                  rounded-2xl md:rounded-3xl border-2 md:border-[3px] 
                  border-primary-point2 shadow-primary-glow 
                  p-4 md:p-8 text-center flex flex-col items-center justify-center
                  ${index === 2 ? "mx-auto md:mx-0" : ""}
                `}
              >
                <h4 className="text-[13px]  md:text-[36px] font-bold text-text-main  ">
                  {card.title}
                </h4>
                <div className="w-16 mt-0.5 md:mt-0.5 md:mb-4 md:w-[176px]  bg-transparent border-t-1 md:border-t-3 border-primary-point2 shadow-primary-glow mb-2 md:mb-2" />
                <p className="text-[10px] md:text-[25px] text-text-sub whitespace-pre-line leading-tight ">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </article>

        {/* 활동 내용 보기 버튼 */}
        <article className="pt-6 md:pt-12">
          <p className="text-[14px] md:text-2xl text-text-main mb-4 md:mb-6 leading-relaxed">
            멋사의 활동 내용을
            <br />
            조금 더 자세히 살펴볼 수 있습니다
          </p>
          <NextButton to={"/activity"}>활동 내용 보기</NextButton>
        </article>
      </div>
    </section>
  );
}

export default About;
