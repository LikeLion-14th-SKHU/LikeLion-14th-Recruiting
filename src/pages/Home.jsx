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
        // 모집 전: 버튼 비활성화, 시작까지 카운트다운
        setIsActive(false);
        setIsEnded(false);
        const diff = RECRUIT_START - now;
        setTimeLeft(calcTime(diff));
      } else if (now >= RECRUIT_START && now <= RECRUIT_END) {
        // 모집 중: 버튼 활성화, 마감까지 카운트다운
        setIsActive(true);
        setIsEnded(false);
        const diff = RECRUIT_END - now;
        setTimeLeft(calcTime(diff));
      } else {
        // 모집 종료
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
    <section className="w-[1440px] mx-auto bg-primary-bg min-h-screen flex flex-col justify-center px-[120px] py-24">
      {/* 상단 타이틀 */}
      <div className="mb-10">
        <p className="text-text-main text-4xl font-bold tracking-widest mb-4">
          "GROWL TO GROWTH"
        </p>
        <hr className="border-text-main w-115 border-t-3" />
      </div>
      {/* 메인 카피 */}
      <h1 className="text-primary-point2 text-5xl font-extrabold leading-tight mb-8">
        처음이어도 괜찮습니다
        <br />
        함께 성장하는 경험이 있으니까요
      </h1>
      {/* 서브 텍스트 */}
      <p className="text-text-sub text-lg leading-relaxed mb-24">
        멋쟁이 사자처럼은 프로젝트와 팀 활동 통해
        <br />
        배움이 경험이 되는 동아리입니다.
      </p>
      {/* 버튼 영역 */}
      <div className="flex items-center gap-5">
        {/* 지원하기 버튼 */}
        <button
          disabled={!isActive}
          className={`
            h-[97px] w-[289px] px-10 py-5 rounded-xl text-white text-[30px] font-extrabold transition-all duration-300
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
        <div className="relative flex items-center">
          <img
            src="../img/홈말풍선.png"
            alt="말풍선"
            className="h-[75px] w-auto object-contain"
          />
          <span
            className="absolute inset-0 flex items-center justify-center text-[1.6rem] font-semibold pl-7"
            style={{
              background: "linear-gradient(to left, #FF4D00, #FFA100)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {countdownText}
          </span>
        </div>
      </div>{" "}
    </section>
  );
}

export default Home;
