import logoLeft from "../assets/Images/logo.jpg";
import logoRight from "../assets/Images/logo2.jpg";
import { useLanguage } from "../context/LanguageContext";
import { FiCalendar, FiGlobe } from "react-icons/fi";

const navItems = [
  { key: "home", id: "home" },
  { key: "about", id: "about" },
  { key: "announcement", id: "announcements" },
  { key: "contact", id: "contact" },
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/15 bg-white shadow-[0_12px_40px_rgba(11,93,167,0.12)] backdrop-blur font-sans">
      <div className="px-4 py-2 text-sm text-[#0B5DA7] sm:px-6 lg:px-8 font-sans">
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
              src={logoLeft}
              alt="Arada Sub-City logo"
              className="h-80 w-80 object-contain sm:h-24 sm:w-24 lg:h-28 lg:w-28"
            />
          </div>

          <div className="text-center leading-tight font-sans lg:mt-0">
            <p
              lang="en"
              className="font-en text-lg font-extrabold text-white sm:text-5xl lg:text-5xl mt-5"
            >
              Arada Sub-City Labour and Skills Office
            </p>
            <p
              lang="am"
              className="font-sans mt-8 text-sm font-semibold text-white sm:text-3xl lg:text-4xl"
            >
              የአራዳ ክፍለ ከተማ ስራና ክህሎት ጽ/ቤት
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={logoRight}
              alt="Addis Ababa City Administration logo"
              className="h-80 w-80 object-contain sm:h-24 sm:w-24 lg:h-28 lg:w-28"
            />
          </div>
        </div>
      </div>

      <nav
        className="bg-[#125aa6] px-4 sm:px-6 lg:px-8 font-sans"
        aria-label="Primary"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-2 py-3 text-sm font-semibold uppercase tracking-wide text-white sm:gap-4 lg:justify-start font-sans">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={`#${item.id}`}
              className="rounded-full px-4 py-2 transition-colors duration-200 hover:bg-white/15 hover:text-[#5BC5E6] focus:outline-none focus:ring-2 focus:ring-white/70 font-sans"
            >
              {copy.nav[item.key]}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
