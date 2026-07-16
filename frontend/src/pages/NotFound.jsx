import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <div className="mx-auto flex min-h-[calc(100vh-15rem)] max-w-6xl flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-[0_25px_60px_rgba(15,23,42,0.08)] sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-[32px] bg-[#0B5AA8]/10 text-[#0B5AA8] shadow-sm">
              <span className="text-5xl font-semibold">404</span>
            </div>

            <div className="space-y-6 text-left">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#0B5AA8]">
                  {t("not_found.status") || "Page not found"}
                </p>
                <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                  {t("not_found.title") ||
                    "We couldn’t find the page you’re looking for."}
                </h1>
              </div>

              <p className="max-w-2xl text-base leading-8 text-slate-600">
                {t("not_found.message") ||
                  "The requested page may have moved, had its name changed, or is temporarily unavailable. Use the button below to return to the homepage or explore the site from there."}
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#0B5AA8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#143B69] sm:w-auto"
                >
                  {t("not_found.home_button") || "Return Home"}
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:w-auto"
                >
                  {t("not_found.contact_button") || "Contact Support"}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[24px] border border-slate-200 bg-white/80 p-6 text-center text-sm text-slate-500 shadow-sm sm:p-8">
          <p>
            {t("not_found.suggestion") ||
              "If you entered the URL manually, please check it for mistakes. Otherwise, go back to the homepage and continue from there."}
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default NotFound;
