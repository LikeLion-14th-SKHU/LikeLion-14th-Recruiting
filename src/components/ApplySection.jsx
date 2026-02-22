import { useEffect, useState, memo } from "react";

const RECRUIT_START = new Date("2026-02-16T00:00:00");
const RECRUIT_END = new Date("2026-03-31T23:59:59");

function ApplySection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isActive, setIsActive] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  const calcTime = (diff) => ({
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  });

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

  const pad = (n) => String(n).padStart(2, "0");

  const countdownText = isEnded
    ? "모집이 종료되었습니다"
    : `마감까지 ${pad(timeLeft.days)}D-${pad(timeLeft.hours)}H-${pad(
        timeLeft.minutes,
      )}M-${pad(timeLeft.seconds)}S`;

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-5">
      {/* 지원하기 버튼 */}
      <button
        disabled={!isActive}
        className={`
            w-29.5 md:w-72.25 h-10.5 md:h-24.25 px-2 md:px-10 py-2 md:py-5 
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
      <div className="relative flex justify-start w-full md:w-auto md:justify-start md:items-center">
        {/* 모바일용 (홈모바일말풍선.png) */}
        <img
          src="../img/홈모바일말풍선.png"
          alt="말풍선"
          className="block md:hidden h-11.25 w-auto object-contain"
        />

        {/* 웹용 (홈말풍선.png) */}
        <img
          src="../img/홈말풍선.png"
          alt="말풍선"
          className="hidden md:block h-18.75 w-auto object-contain"
        />
        <span
          className="absolute inset-0 flex md:items-center justify-start md:justify-center md:mb-3  text-base md:text-[30px] pt-4 pl-3.5 md:pl-7"
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
  );
}

export default memo(ApplySection);
