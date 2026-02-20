import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { to: "/about", label: "About" },
  { to: "/activity", label: "Activity" },
  { to: "/results", label: "Results" },
  { to: "/recruitment", label: "Recruitment" },
];

function Header() {
  const [hoveredTo, setHoveredTo] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navRef = useRef(null);
  const linkRefs = useRef({});
  const [underline, setUnderline] = useState({ x: 0, width: 0, opacity: 0 });

  React.useEffect(() => {
    setHoveredTo(null);
  }, [location.pathname]);

  const activeTo =
    navItems.find((it) => it.to === location.pathname)?.to ?? null;

  const updateUnderline = () => {
    const navEl = navRef.current;
    const to = hoveredTo ?? activeTo;
    const linkEl = to ? linkRefs.current[to] : null;

    if (!navEl || !linkEl) {
      setUnderline((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    const navRect = navEl.getBoundingClientRect();
    const linkRect = linkEl.getBoundingClientRect();

    setUnderline({
      x: linkRect.left - navRect.left,
      width: linkRect.width,
      opacity: 1,
    });
  };

  useLayoutEffect(() => {
    updateUnderline();
    requestAnimationFrame(updateUnderline);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, hoveredTo]);

  useEffect(() => {
    const onResize = () => updateUnderline();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, hoveredTo]);

  return (
    <>
      {/* 데스크탑 헤더 */}
      <header className="sticky top-0 z-100 w-full mx-auto border-b border-[#323232] bg-primary-bg/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-360 items-center justify-between md:px-30 px-4.5 py-5">
          <NavLink to="/" className="flex items-center gap-3">
            <img
              className="size-10"
              src="../img/헤더멋사로고.png"
              alt="멋사 로고"
            />
            <h1 className="md:text-2xl text-lg font-semibold tracking-tight text-text-main">
              LikeLion SKHU
            </h1>
          </NavLink>

          <nav
            ref={navRef}
            className="relative hidden items-center gap-10 md:flex"
            onMouseLeave={() => setHoveredTo(null)}
          >
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onMouseEnter={() => setHoveredTo(to)}
                ref={(el) => {
                  if (el) linkRefs.current[to] = el;
                }}
                className={({ isActive }) =>
                  [
                    "relative px-1 py-1 text-xl font-normal tracking-tight transition-colors",
                    isActive
                      ? "text-text-main"
                      : "text-text-sub hover:text-text-main",
                  ].join(" ")
                }
              >
                <span className="relative z-10">{label}</span>
              </NavLink>
            ))}

            <motion.div
              className="absolute -bottom-1 h-0.5 rounded-full bg-white"
              animate={{
                x: underline.x,
                width: underline.width,
                opacity: underline.opacity,
              }}
              transition={{ type: "spring", stiffness: 600, damping: 45 }}
            />

            <div className="inline-block rounded-lg bg-gradient p-0.5">
              <NavLink
                to="/apply"
                className="hidden md:block rounded-lg bg-primary-bg px-5 pt-1 pb-2 text-xl font-semibold text-primary-point2 transition duration-600 hover:bg-gradient hover:text-primary-bg"
              >
                Apply
              </NavLink>
            </div>
          </nav>

          {/* 모바일 햄버거 */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <span className="h-0.5 w-6 rounded-xl bg-text-main" />
            <span className="h-0.5 w-6 rounded-xl bg-text-main" />
            <span className="h-0.5 w-6 rounded-xl bg-text-main" />
          </button>
        </div>
      </header>

      {/* 모바일 사이드 메뉴 */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-58 bg-primary-bg shadow-xl transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 ">
          <span className="text-xl font-semibold text-text-main"></span>
          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>

        <nav className="flex flex-col gap-4 px-8 pt-8">
          {navItems.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setIsOpen(false)}
              className="w-40 mx-auto text-lg font-medium transition-colors inline-flex items-center justify-center border-b pb-4 text-text-main"
            >
              {label}
            </NavLink>
          ))}

          <NavLink
            to="/apply"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center px-6 text-lg font-semibold bg-gradient bg-clip-text text-transparent"
          >
            Apply
          </NavLink>
        </nav>

        <div className="pt-37">
          <div className="text-center">
            <div className="text-primary-point2 font-bold text-lg">Credits</div>
            <div className="pt-1.5">윤현승 이정혁 이다정</div>
            <div>최진원 이아림</div>
          </div>
          <div className="text-primary-point2 font-bold text-lg text-center pt-5.75">
            Contact
          </div>
          <div className="flex justify-center">
            <img src="../img/푸터인스타로고.png" alt="인스타로고" />
            <a href="">@likelion_skhu</a>
          </div>
          <div className="flex justify-center">
            <img src="../img/푸터깃허브로고.png" alt="깃허브로고" />
            <a href="">@LikeLion-14th-SKHU</a>
          </div>
        </div>
        <div className="flex justify-center pt-17">
          <img
            className="size-15"
            src="../img/헤더멋사로고.png"
            alt="멋사로고"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
