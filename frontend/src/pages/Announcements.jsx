import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageLayout from "../components/PageLayout";
import { FiDownload, FiCalendar } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import bookImage from "../assets/Images/Book.png";

const Announcements = () => {
  // Get translations from context
  const { t } = useLanguage();

  // Fetch announcements data from translations
  const announcementData = t("announcements");
  const announcementItems = announcementData.items ?? [];

  // Handle file download from public folder
  const handleDownload = (filename) => {
    const fileUrl = `/${filename}`;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-[#F6FAFD] text-[#2F3E46]">
      <Navbar />
      <PageLayout>
        <div className="space-y-6">
          {/* Hero Section */}
          <section className="space-y-6">
            {/* <div className="flex flex-col gap-3">
            <div className="space-y-2">
              <p className="text-sm font-medium text-[#43C7F5] sm:text-base">
                {announcementData.breadcrumb?.join(" / ")}
              </p>
            </div>
          </div> */}

            {/* <div className="overflow-hidden rounded-[20px] border border-[#DCECF7] bg-white shadow-sm">
            <img
              src={bannerImage}
              alt={announcementData.title}
              className="h-[250px] w-full object-cover sm:h-[300px] lg:h-[350px]"
            />
          </div> */}
          </section>

          {/* Description Section */}
          <section
            className="rounded-[20px] border border-[#DCECF7] bg-white p-6 shadow-sm sm:p-8 opacity-0 animate-fade-up"
            style={{ animationDelay: `0ms` }}
          >
            <h1 className="mb-4 text-3xl font-bold text-[#143B69] sm:text-4xl">
              {announcementData.title}
            </h1>
            <p className="text-[15px] leading-7 text-[#4B5563]">
              {announcementData.hero_description}
            </p>
          </section>

          {/* Announcements List */}
          {announcementItems.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-[#143B69]">
                {announcementData.resources_title}
              </h2>

              <div className="space-y-4">
                {announcementItems.map((item, index) => (
                  <div
                    key={item.id}
                    style={{ animationDelay: `${index * 80}ms` }}
                    className="overflow-hidden rounded-[7px] border border-[#DCECF7] bg-white shadow-sm transition-all duration-300 hover:shadow-md opacity-0 animate-fade-up"
                  >
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start ">
                      {/* Book Image */}
                      <div className="overflow-hidden rounded-[7px] bg-[#F8FAFC] sm:min-w-[350px] sm:max-w-[280px] sm:flex-shrink-0">
                        <img
                          src={bookImage}
                          alt={item.title}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col justify-between gap-2 sm:flex-1 p-8">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div className="space-y-4">
                            <div className="inline-flex items-center rounded-full bg-[#EAF7FD] px-3 py-1 text-sm font-medium text-[#0B5AA8]">
                              <FiCalendar className="mr-2 text-base" />
                              {item.date}
                            </div>
                            <h3 className="text-2xl font-bold text-[#143B69]">
                              {item.title}
                            </h3>
                          </div>

                          {item.filename && (
                            <button
                              onClick={() => handleDownload(item.filename)}
                              className="inline-flex items-center gap-2 rounded-[14px] bg-[#0B5AA8] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#143B69] focus:outline-none focus:ring-2 focus:ring-[#43C7F5] focus:ring-offset-2"
                            >
                              <FiDownload aria-hidden="true" />
                              {announcementData.download_label}
                            </button>
                          )}
                        </div>

                        <p className="text-[15px] leading-7 text-[#4B5563]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Empty State */}
          {announcementItems.length === 0 && (
            <section
              className="rounded-[20px] border border-[#DCECF7] bg-white p-8 text-center shadow-sm opacity-0 animate-fade-up"
              style={{ animationDelay: `120ms` }}
            >
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF7FD]">
                  <img
                    src={bookImage}
                    alt="announcement book"
                    className="h-10 w-10 object-contain"
                  />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#143B69]">
                No announcements available
              </h3>
              <p className="mt-2 text-[15px] text-[#4B5563]">
                Check back soon for updates and new announcements.
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
