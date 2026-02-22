import { useMemo } from "react";
import ApplySection from "../components/ApplySection";
import FaqSection from "../components/FaqSection";

function Apply() {
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
            a: "물론입니다! 멋쟁이 사자처럼 수업은 코딩 경험이 없는 비전공자를 대상으로 하고 있기 때문에 지원가능합니다. 다만, 모든 활동과 수업에 대해 열심히 임할 열정과 각오는 준비되어 있어야 하고 자신만의 아이디어를 가지고 있다면 누구나 지원할 수 있습니다.",
          },
          {
            q: "다른 동아리와 병행 활동이 가능한가요?",
            a: "강의와 과제 등, 멋사에 할애해야하는 시간이 상당하기 때문에 타동아리와 중복 지원은 지양하는 것을 추천드립니다.",
          },
        ],
      },
      {
        section: "활동 방식",
        items: [
          {
            q: "정기 세션은 언제, 어떤 방식으로 진행되나요?",
            a: "매주 월요일, 수요일 18:00에 정기모임이 진행될 예정입니다. 그 날 커리큘럼에 따라 1시간에서 1시간 반 정도 소요되며,  전체 세션, 파트별 세션으로 운영진들이 직접 강의하는 방식입니다. 또한 매주 1회, 강의와 관련된 과제와 이에 대한 피드백이 진행됩니다.",
          },
          {
            q: "필수 참여 활동에는 어떤 것들이 있나요?",
            a: "아이디어톤, 해커톤, 연합 해커톤 중 하나라도 참여하지 못하면 수료증이 발급되지 않습니다. 참여 못하시는 분들은 아쉽게도 지원조건에 해당되지 않습니다.",
          },
          {
            q: "개인 노트북이 필수인가요?",
            a: "멋쟁이사자처럼 14기 활동을 위해서는 반드시 개인 노트북이 필요합니다.",
          },
        ],
      },
      {
        section: "성과 & 성장",
        items: [
          {
            q: "이 동아리를 통해 무엇을 얻을 수 있나요?",
            a: "우선 당연히 개발 역량이 생깁니다. 하지만 단순한 개발 역량을 넘어 저희 멋사는 다양한 협업 활동을 통해 협업 능력을 증진시켜드립니다. 부수적으로 선후배들과의 네트워킹으로 인한 즐거운 학교 생활 정도가 있습니다.",
          },
          {
            q: "포트폴리오가 남나요?",
            a: "아쉽지만 저희가 따로 포트폴리오를 챙겨드리진 않습니다. 대신 본인이 하기에 따라 여러 대회에서의 활동 사진, 서비스, 협업 경험, 깃허브 등의 과정들이 훌륭한 재료로 남기 때문에 많은 도움이 될 것이라 생각합니다.",
          },
        ],
      },
      {
        section: "선발",
        items: [
          {
            q: "모집 인원과 선발 기준은 어떻게 되나요?",
            a: "모집 인원같은 경우는 기본적으로 파트 당 10명 내외 정도로 생각하고 있으나 여건에 따라 더 적거나 많이 뽑을 수도 있습니다. 선발 기준은 앞서 말씀드렸다시피 열심히 하고자하는 열정만 있다면 누구든 선발 대상입니다.",
          },
          {
            q: "면접은 어떤 분위기와 방식으로 진행되나요?",
            a: "1차 서류 모집에서 합격하신 분들에게 2차 대면 면접 안내 문자가 갈 예정입니다. 안내에 따라 희망  요일과 시간을 고르시면 됩니다. 대기실과 면접실로 나뉘어있으며, 해당 파트 운영진들과 다대일로 진행하게 됩니다.",
          },
        ],
      },
      {
        section: "운영",
        items: [
          {
            q: "회비가 있나요? 있다면 어디에 사용되나요?",
            a: "회비는 3만원입니다. 모두 참여하는 활동에서의 회식비, 숙소비, 교통비, 다과 비용 등으로 쓰입니다. 모두가 볼 수 있는 공동 회계장부를 통해 엄격하게 관리되며 회비의 사용처를 언제든 확인하실 수 있습니다.",
          },

          {
            q: "회식이 있나요?",
            a: "네, 있습니다.",
          },
          {
            q: "회식 빈도는 어떻게 되나요?",
            a: "달에  1회, 시험 끝나고 1회",
          },
          {
            q: "회식은 필참인가요?",
            a: "아니요, 하지만 첫 OT 회식은 필수로 참여하셔야 합니다.",
          },
        ],
      },
    ],
    [],
  );

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

      <div className="pl-10 py-10 md:py-0">
        <ApplySection />
      </div>

      <FaqSection faqSections={faqSections} />

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
