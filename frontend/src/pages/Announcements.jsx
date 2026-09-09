import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageLayout from "../components/PageLayout";
import { FiCalendar, FiFileText } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import aradaParkVideo from "../assets/videos/የአራዳ ፓርክ ምርቃት ሥነስርዓት.mp4";

const Announcements = () => {
  const { t } = useLanguage();
  const announcementData = t("announcements");
  const announcementItems = announcementData.items ?? [];
  const featuredItem = announcementItems[0] ?? null;

  return (
    <main className="min-h-screen bg-[#F6FAFD] text-[#2F3E46]">
      <Navbar />
      <PageLayout>
        <div className="space-y-8">
          {/* Hero Section */}
          <section className="space-y-6">
            <div className="rounded-[20px] border border-[#DCECF7] bg-white p-6 shadow-sm sm:p-8 opacity-0 animate-fade-up">
              <h1 className="mb-4 text-3xl font-bold text-[#143B69] sm:text-4xl">
                {announcementData.title}
              </h1>
              <p className="text-[15px] leading-7 text-[#4B5563]">
                {announcementData.hero_description}
              </p>
            </div>
          </section>

          {/* Featured Announcement */}
          {featuredItem && (
            <section
              className="rounded-[20px] border border-[#DCECF7] bg-white p-6 shadow-sm sm:p-8 opacity-0 animate-fade-up"
              style={{ animationDelay: "80ms" }}
            >
              <div className="mb-6 flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-[#0B5AA8] px-4 py-1.5 text-sm font-semibold text-white">
                  {announcementData.featured_title}
                </span>
                {featuredItem.category && (
                  <span className="inline-flex items-center rounded-full bg-[#EAF7FD] px-3 py-1 text-sm font-medium text-[#0B5AA8]">
                    {featuredItem.category}
                  </span>
                )}
              </div>

              {featuredItem.video && (
                <div className="mb-6 overflow-hidden rounded-[20px]">
                  <video
                    controls
                    className="w-full aspect-video object-cover rounded-[20px]"
                    poster=""
                  >
                    <source src={aradaParkVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full bg-[#EAF7FD] px-3 py-1 text-sm font-medium text-[#0B5AA8]">
                  <FiCalendar className="mr-2 text-base" />
                  {featuredItem.date}
                </div>
                <h2 className="text-2xl font-bold text-[#143B69]">
                  {featuredItem.title}
                </h2>
                <p className="text-[15px] leading-7 text-[#4B5563]">
                  {featuredItem.description}
                </p>
              </div>
            </section>
          )}

          {/* Empty State */}
          {announcementItems.length === 0 && (
            <section
              className="rounded-[20px] border border-[#DCECF7] bg-white p-8 text-center shadow-sm opacity-0 animate-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF7FD]">
                  <FiFileText className="h-8 w-8 text-[#0B5AA8]" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#143B69]">
                {announcementData.no_announcements}
              </h3>
              <p className="mt-2 text-[15px] text-[#4B5563]">
                {announcementData.check_back_soon}
              </p>
            </section>
          )}
        </div>
      </PageLayout>
      <Footer />
    </main>
  );
};

export default Announcements;
