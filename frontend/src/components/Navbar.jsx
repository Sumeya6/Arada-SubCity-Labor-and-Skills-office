import { useState } from "react";
import { Link } from "react-router-dom";
// import logoLeft from "../assets/Images/logo.jpg";
import logoRight from "../assets/Images/logo2.jpg";
import { useLanguage } from "../context/LanguageContext";
import { FiCalendar, FiGlobe, FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "services", path: "/services" },
  { key: "gallery", path: "/gallery" },
  { key: "announcement", path: "/announcements" },
  { key: "contact", path: "/contact" },
  { key: "woreda", path: "/office" },
];

function formatDate(language) {
  return new Intl.DateTimeFormat(language === "am" ? "am-ET" : "en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());
}

export default function Navbar() {
  const { language, toggleLanguage, copy } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-white/15 bg-white font-sans">
      <div className="bg-[#F2F8FC] border-b border-slate-200/50 px-4 py-2 text-sm text-[#0B5DA7] sm:px-6 lg:px-8 font-sans">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 font-sans">
          <div className="inline-flex items-center gap-2 font-sans font-medium tracking-wide text-[#0B5DA7]">
            <FiCalendar className="h-4 w-4" aria-hidden="true" />
            <p lang={language === "am" ? "am" : "en"}>{formatDate(language)}</p>
          </div>
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold text-[#0B5DA7] transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60 font-sans"
            aria-label="Toggle language"
          >
            <FiGlobe className="h-4 w-4" aria-hidden="true" />
            <span>{language === "am" ? "EN" : "አማ"}</span>
          </button>
        </div>
      </div>

      <div className="border-b border-[#5BC5E6]/40 bg-[#5fc9df] px-4 py-4 sm:px-6 lg:px-8 lg:py-5 font-sans">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[auto_minmax(0,1fr)_auto] font-sans">
          <div className="flex justify-center lg:justify-start">
            <img
              src={logoRight}
              alt="Arada Sub-city Administration logo"
              className="h-24 w-24 object-contain sm:h-32 sm:w-32 lg:h-40 lg:w-40"
            />
          </div>

          <div className="text-center leading-tight font-sans lg:mt-0">
            <p
              lang={language}
              className="font-en text-2xl font-extrabold text-white sm:text-4xl lg:text-5xl mt-5"
            >
              {copy.title}
            </p>
          </div>

          {/* <div className="flex justify-center lg:justify-end">
            <img
              src={logoLeft}
              alt="Addis Ababa City Administration logo"
              className="h-16 w-16 object-contain sm:h-24 sm:w-24 lg:h-28 lg:w-28"
            />
          </div> */}
        </div>
      </div>

      <nav
        className="sticky top-0 z-50 border-b border-[#0b4e8b]/30 bg-[#125aa6] px-2 font-sans shadow-[0_12px_40px_rgba(11,93,167,0.12)] backdrop-blur sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between py-2 lg:justify-start font-sans">
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-full p-2 text-white transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/70 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation-links"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>

          <div
            id="primary-navigation-links"
            className={`${isMenuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 border-t border-white/15 bg-[#125aa6] px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg lg:static lg:flex lg:flex-row lg:items-center lg:justify-start lg:gap-4 lg:border-0 lg:bg-transparent lg:px-0 lg:py-3 lg:shadow-none`}
          >
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-3 py-3 text-xs transition-colors duration-200 hover:bg-white/15 hover:text-[#5BC5E6] focus:outline-none focus:ring-2 focus:ring-white/70 sm:px-4 sm:text-sm lg:rounded-full lg:py-2 font-sans"
              >
                {copy.nav[item.key]}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
