import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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

  return (
    <>
      {/* 데스크탑 헤더 */}
      <header className="sticky top-0 z-50 w-full mx-auto border-b border-[#323232] bg-primary-bg/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-360 items-center justify-between px-30 py-5">
          <NavLink to="/" className="flex items-center gap-3">
            <img
              className="size-10"
              src="../img/헤더멋사로고.png"
              alt="멋사 로고"
            />
            <h1 className="text-2xl font-semibold tracking-tight text-text-main">
              LikeLion SKHU
            </h1>
          </NavLink>

          <nav
            className="relative hidden items-center gap-10 md:flex"
            onMouseLeave={() => setHoveredTo(null)}
          >
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onMouseEnter={() => setHoveredTo(to)}
                className={({ isActive }) =>
                  [
                    "relative px-1 py-1 text-xl font-normal tracking-tight transition-colors",
                    isActive
                      ? "text-text-main"
                      : "text-text-sub hover:text-text-main",
                  ].join(" ")
                }
              >
                {({ isActive }) => {
                  const showUnderline = hoveredTo ? hoveredTo === to : isActive;

                  return (
                    <>
                      <span className="relative z-10">{label}</span>

                      {showUnderline && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-white"
                          transition={{
                            type: "spring",
                            stiffness: 600,
                            damping: 45,
                          }}
                        />
                      )}
                    </>
                  );
                }}
              </NavLink>
            ))}

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
            <span className="h-0.5 w-6 bg-text-main" />
            <span className="h-0.5 w-6 bg-text-main" />
            <span className="h-0.5 w-6 bg-text-main" />
          </button>
        </div>
      </header>

      {/* 모바일 사이드 메뉴 */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-primary-bg shadow-xl transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <span className="text-xl font-semibold text-text-main">Menu</span>
          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>

        <nav className="flex flex-col gap-6 px-6 py-8">
          {navItems.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                [
                  "text-lg font-medium transition-colors",
                  isActive
                    ? "text-primary-point2"
                    : "text-text-main/80 hover:text-text-main",
                ].join(" ")
              }
            >
              {label}
            </NavLink>
          ))}

          <NavLink
            to="/apply"
            onClick={() => setIsOpen(false)}
            className="mt-6 inline-flex items-center justify-center rounded-2xl border-2 border-primary-point2 px-6 py-3 text-lg font-semibold text-primary-point2 transition-colors hover:bg-primary-point2 hover:text-primary-bg"
          >
            Apply
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Header;
