import { memo, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

function FaqSection({ faqSections }) {
  const [openKey, setOpenKey] = useState(null);

  const toggleFaq = (key) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  return (
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
                        <FaCaretDown />
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
  );
}

export default memo(FaqSection);
