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
    <div className="pt-22 pl-13 flex flex-col md:flex-row md:items-center gap-5">
      <button
        disabled={!isActive}
        className={`
          px-10 py-5 rounded-xl text-white text-2xl font-extrabold transition-all duration-300
          ${
            isActive
              ? "bg-gradient cursor-pointer hover:opacity-90 hover:scale-[1.02] shadow-primary-glow"
              : "bg-gray-600 cursor-not-allowed opacity-50"
          }
        `}
      >
        14기 지원하기
      </button>

      <div className="relative flex items-center">
        <div
          className="w-0 h-0"
          style={{
            borderTop: "12px solid transparent",
            borderBottom: "12px solid transparent",
            borderRight: "16px solid #FFA100",
          }}
        />
        <div
          className="px-8 py-5 rounded-xl border-2 text-xl font-bold"
          style={{
            borderImage: "linear-gradient(to left, #FF4D00, #FFA100) 1",
            color: "#FFA100",
          }}
        >
          {countdownText}
        </div>
      </div>
    </div>
  );
}

export default memo(ApplySection);
