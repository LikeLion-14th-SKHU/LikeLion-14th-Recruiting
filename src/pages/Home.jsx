import { useState, useEffect } from "react";

// ✅ 모집 시작일 / 마감일 여기서 수정하세요
const RECRUIT_START = new Date("2026-02-16T00:00:00");
const RECRUIT_END = new Date("2026-03-06T23:59:59");

function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isActive, setIsActive] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();

      if (now < RECRUIT_START) {
        setIsActive(false);
        setIsEnded(false);
        const diff = RECRUIT_START - now;
        setTimeLeft(calcTime(diff));
      } else if (now >= RECRUIT_START && now <= RECRUIT_END) {
        setIsActive(true);
        setIsEnded(false);
        const diff = RECRUIT_END - now;
        setTimeLeft(calcTime(diff));
      } else {
        setIsActive(false);
        setIsEnded(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const calcTime = (diff) => ({
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  });

  const pad = (n) => String(n).padStart(2, "0");

  const countdownText = isEnded
    ? "모집이 종료되었습니다"
    : `마감까지 ${pad(timeLeft.days)}D-${pad(timeLeft.hours)}H-${pad(
        timeLeft.minutes
      )}M-${pad(timeLeft.seconds)}S`;

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

      {/* 버튼 영역 - 모바일: 세로, 웹: 가로 */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-5 md:mb-31 md:mt-15">
        {/* 지원하기 버튼 */}
        <button
          disabled={!isActive}
          className={`
            w-[118px] md:w-[289px] h-[42px] md:h-[97px] px-2 md:px-10 py-2 md:py-5 
            rounded-xl text-white text-[15px] md:text-[30px] font-bold 
            transition-all duration-300
            ${
              isActive
                ? "bg-gradient cursor-pointer hover:opacity-90 hover:scale-[1.02] shadow-primary-glow"
                : "bg-gray-600 cursor-not-allowed opacity-50"
            }
          `}
        >
          14기 지원하기
        </button>

        {/* 말풍선 이미지 + 카운트다운 텍스트 오버레이 */}
        <div className="relative flex justify-start w-full md:w-auto justify-center md:justify-start md:items-center">
          {/* 모바일용 (홈모바일말풍선.png) */}
          <img
            src="../img/홈모바일말풍선.png"
            alt="말풍선"
            className="block md:hidden h-[45px] w-auto object-contain"
          />

          {/* 웹용 (홈말풍선.png) */}
          <img
            src="../img/홈말풍선.png"
            alt="말풍선"
            className="hidden md:block h-[75px] w-auto object-contain"
          />
          <span
            className="absolute inset-0 flex md:items-center justify-start md:justify-center md:mb-1  text-base md:text-[30px] pt-4 pl-3.5 md:pl-7"
            style={{
              background: "linear-gradient(to left, #FF4D00, #FFA100)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {countdownText}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Home;
