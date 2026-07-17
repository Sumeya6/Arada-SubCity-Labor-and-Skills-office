import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

const Woreda = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#F6FAFD] px-4 py-8 text-[#2F3E46] sm:px-6 lg:px-8 animate-fade-up">
      <Navbar />
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="rounded-[20px] border border-[#DCECF7] bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-2xl font-bold text-[#143B69] sm:text-3xl">
            {t("woreda.title") || "Woreda"}
          </h1>
          <p className="mt-4 text-[15px] leading-7 text-[#4B5563]">
            {t("woreda.description") ||
              "Information about the woreda and its services."}
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Woreda;
