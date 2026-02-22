import ApplySection from "../components/ApplySection";

function Home() {
  return (
    <section className="mx-auto bg-primary-bg pt-18.75 flex flex-col justify-center px-5 md:px-30 md:w-360 overflow-hidden">
      {/* 상단 타이틀 */}
      <div className="mb-6 md:mb-10">
        <p className="text-text-main text-2xl md:text-4xl font-bold mb-3 md:mb-4 md:mt-8">
          "GROWL TO GROWTH"
        </p>
        <hr className="border-text-main w-65 md:w-100 border-t-2 md:border-t-4" />
      </div>

      {/* 메인 카피 */}
      <h1 className="text-primary-point2 my-8  text-2xl md:text-5xl font-semibold leading-tight mb-5 md:mb-8 md:my-8 ">
        처음이어도 괜찮습니다
        <br />
        함께 성장하는 경험이 있으니까요
      </h1>

      {/* 서브 텍스트 */}
      <p className="text-text-sub text-[15px] font-medium md:text-[32px] mb-12 md:mb-24 md:mt-8">
        멋쟁이 사자처럼은 프로젝트와 팀 활동 통해
        <br />
        배움이 경험이 되는 동아리입니다.
      </p>

      <ApplySection />
    </section>
  );
}

export default Home;
