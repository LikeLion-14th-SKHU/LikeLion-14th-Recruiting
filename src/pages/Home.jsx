import { useState, useEffect } from "react";

// ✅ 모집 시작일 / 마감일 여기서 수정하세요
const RECRUIT_START = new Date("2026-02-16T00:00:00");
const RECRUIT_END = new Date("2026-03-31T23:59:59");

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
        <p className="text-text-main text-2xl font-bold tracking-widest mb-4">
          "GROWL TO GROWTH"
        </p>
        <hr className="border-text-main w-72" />
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

        {/* 말풍선 카운트다운 */}
        <div className="relative flex items-center ">
          {/* 화살표 (말풍선 꼬리) */}
          <div
            className="w-0 h-0 "
            style={{
              borderTop: "12px solid transparent",
              borderBottom: "12px solid transparent",
              borderRight: "16px solid #FFA100",
            }}
          />
          {/* 말풍선 본체 */}
          <div
            className="px-8 py-5 rounded-xl border-2 text-xl font-bold "
            style={{
              borderImage: "linear-gradient(to left, #FF4D00, #FFA100) 1",
              color: "#FFA100",
            }}
          >
            {countdownText}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
