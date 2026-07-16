import { useLanguage } from "../context/LanguageContext";

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function SidebarCard({ children, className = "" }) {
  return (
    <section className={`w-full rounded-xl ${className}`}>{children}</section>
  );
}

export default function Sidebar() {
  const { t } = useLanguage();

  return (
    <aside className="w-full space-y-6 font-sans">
      <SidebarCard className="border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-lg font-bold text-slate-700">
          {t("sidebar.search_title")}
        </h2>
        <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-[#F0F4F8] p-2">
          <input
            type="text"
            placeholder={t("sidebar.search_placeholder")}
            className="min-w-0 flex-1 bg-transparent px-2 py-2 placeholder:text-slate-500 focus:outline-none"
          />
          <button
            type="button"
            aria-label={t("sidebar.search_title")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#0B5DA7] text-white transition hover:bg-[#094d8a] focus:outline-none focus:ring-2 focus:ring-[#0B5DA7]/40"
          >
            <SearchIcon />
          </button>
        </div>
      </SidebarCard>

      <SidebarCard className="bg-[#0B5DA7] p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold text-white">
          {t("sidebar.profile_title")}
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-slate-200">
          {t("sidebar.profile_description")}
        </p>
        <a
          href="#about"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/60 underline-offset-4 transition hover:gap-3 hover:decoration-white"
        >
          <span>{t("sidebar.read_more")}</span>
          <ArrowRightIcon />
        </a>
      </SidebarCard>
    </aside>
  );
}
