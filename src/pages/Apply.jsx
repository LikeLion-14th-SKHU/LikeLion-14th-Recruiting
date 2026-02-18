import { useEffect, useMemo, useState } from "react";

const RECRUIT_START = new Date("2026-02-16T00:00:00");
const RECRUIT_END = new Date("2026-03-31T23:59:59");

function Apply() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isActive, setIsActive] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  const howToApply = [
    "지원은 구글 설문조사 폼을 통해 진행됩니다",
    "아래 버튼을 누르면 외부 설문 페이지로 이동합니다",
  ];

  const beforeApply = [
    "지원서는 실력을 평가하기 위한 것이 아닙니다.",
    "동아리에 대한 관심과 생각을 알고 싶습니다.",
    "처음이거나 경험이 부족해도 괜찮습니다.",
    "완벽하지 않아도 솔직하게 작성해주세요.",
  ];

  // 아직 완성되지 않은 FAQ!

  const faqSections = useMemo(
    () => [
      {
        section: "지원 & 자격",
        items: [
          {
            q: "초보(비전공자, 코딩 입문자)인데 가입해도 되나요?",
            a: "물론입니다! 멋쟁이사자처럼 수업은 코딩 경험이 없는 비전공자를 대상으로 하고 있기 때문에 지원 가능합니다. 다만, 모든 활동과 수업에 대해 열심히 임할 열정과 각오는 준비되어 있어야 하고 자신만의 아이디어를 가지고 있다면 누구나 지원할 수 있습니다!",
          },
          {
            q: "다른 동아리와 병행 활동이 가능한가요?",
            a: "강의와 과제 등 멋사에 할애해야 하는 시간이 상당하기 때문에 교내 IT동아리와 중복 지원은 지양하는 것을 추천드립니다.",
          },
        ],
      },
      {
        section: "활동 방식",
        items: [
          {
            q: "정기 세션은 언제, 어떤 방식으로 진행되나요?",
            a: "매주 월, 수 18시 이후 파트별 or 전체 세션이 진행됩니다. 정기 세션에 운영진들이 직접 강의를 진행하며 매주 1회, 강의와 관련된 과제와 이에 대한 피드백을 제공합니다.",
          },
          // {
          //   q: "필수 참여 활동에는 어떤 것들이 있나요?",
          //   a: "나도 몰라요",
          // },
          // {
          //   q: "개인 노트북이 필수인가요? 최소 사양 기준이 있나요?",
          //   a: "멋쟁이사자처럼 14기 활동을 위해서는 반드시 개인 노트북이 필요합니다. 최소 사양은 저도 몰라요!!!",
          // },
        ],
      },
      {
        section: "성과 & 성장",
        items: [
          // {
          //   q: "이 동아리를 통해 무엇을 얻을 수 있나요?",
          //   a: "경험이 남아요",
          // },
          // {
          //   q: "포트폴리오가 남나요?",
          //   a: "안 남으면 지원 안 하게요?",
          // },
        ],
      },
      {
        section: "선발",
        items: [
          // {
          //   q: "모집 인원과 선발 기준은 어떻게 되나요?",
          //   a: "성실",
          // },
          // {
          //   q: "면접은 어떤 분위기와 방식으로 진행되나요?",
          //   a: "운동 좋아하세요?",
          // },
        ],
      },
      {
        section: "운영",
        items: [
          // {
          //   q: "회비가 있나요? 있다면 어디에 사용되나요?",
          //   a: "동아리 유지비로 3만원의 회비가 존재합니다. 제 통장에 입금해주시면 됩니다",
          // },
          // {
          //   q: "중도 탈퇴가 가능한가요?",
          //   a: "그런 생각이 드는 순간 당신은 탈락",
          // },
          // {
          //   q: "회식이 있나요?",
          //   a: "오브 콜스",
          // },
          // {
          //   q: "회식 빈도는 어떻게 되나요?",
          //   a: "맨날",
          // },
          // {
          //   q: "회식은 필참인가요?",
          //   a: "네?",
          // },
        ],
      },
    ],
    [],
  );

  const [openKey, setOpenKey] = useState(null);

  const toggleFaq = (key) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

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
        timeLeft.minutes,
      )}M-${pad(timeLeft.seconds)}S`;

  return (
    <section className="bg-primary-bg pt-18.75 md:mx-30 mx-5  text-text-main md:pt-18.75">
      <h2 className="w-fit font-bold bg-gradient bg-clip-text text-transparent text-4xl md:text-[64px]">
        Apply
      </h2>

      <div className="pt-15 space-y-8.75">
        <article>
          <div className="mb-3 h-0.5 w-25 bg-gradient" />
          <h3 className="text-2xl md:text-4xl font-semibold text-text-main">
            지원 방식 안내
          </h3>
          <ul className="mt-5 text-lg md:text-2xl text-text-sub">
            {howToApply.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>

        <article className="pt-15">
          <div className="mb-3 h-0.5 w-25 bg-gradient" />
          <h3 className="text-2xl md:text-4xl font-semibold text-text-main">
            지원 전에 꼭 읽어주세요
          </h3>
          <ul className="mt-5 list-disc pl-6 text-lg md:text-2xl text-text-sub">
            {beforeApply.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </div>

      <div className="pt-22 flex flex-col md:flex-row md:items-center gap-5">
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

      <article className="pt-30">
        <div className="mb-3 h-0.5 w-25 bg-gradient" />
        <h3 className="text-2xl md:text-4xl font-semibold text-text-main">
          자주 묻는 질문 (FAQ)
        </h3>
        <div className="mt-8 space-y-8">
          {faqSections.map((sec) => (
            <div key={sec.section} className="space-y-4">
              <h4 className="text-xl md:text-2xl font-bold text-text-main">
                [{sec.section}]
              </h4>

              <div className="space-y-3">
                {sec.items.map((item, idx) => {
                  const key = `${sec.section}-${idx}`;
                  const isOpen = openKey === key;

                  return (
                    <div
                      key={key}
                      className="rounded-2xl border border-white/10 bg-white/5"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(key)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="text-base md:text-xl font-semibold text-text-main">
                          Q. {item.q}
                        </span>

                        <span
                          className={[
                            "shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15",
                            "transition-transform duration-300",
                            isOpen
                              ? "rotate-180 text-primary-point2"
                              : "text-white/70",
                          ].join(" ")}
                          aria-hidden="true"
                        >
                          ▾
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5">
                          <div className="h-px w-full bg-white/10 mb-4" />
                          <p className="text-sm md:text-lg leading-relaxed text-text-sub">
                            {item.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="pt-30">
        <div className="mb-3 h-0.5 w-25 bg-gradient" />
        <h3 className="text-2xl md:text-4xl font-semibold text-text-main">
          문의 사항
        </h3>
        <div className="flex pt-5">
          <img
            className="size-8.25 mt-1"
            src="../img/인스타로고.png"
            alt="인스타 로고"
          />
          <a
            className="pl-1 text-3xl"
            href="https://www.instagram.com/likelion_skhu/"
          >
            @likelion_skhu
          </a>
        </div>
      </article>
    </section>
  );
}

export default Apply;
