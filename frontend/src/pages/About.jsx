import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageLayout from "../components/PageLayout";
import { FaEye, FaBullseye, FaClipboardList } from "react-icons/fa6";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  // Get translations from context
  const { t } = useLanguage();

  // Fetch about data from translations
  const aboutData = t("about");

  // Build cards array from translation data
  const aboutCards = [
    {
      id: "vision",
      title: aboutData.vision.title,
      icon: FaEye,
      description: aboutData.vision.description,
    },
    {
      id: "mission",
      title: aboutData.mission.title,
      icon: FaBullseye,
      description: aboutData.mission.description,
    },
    {
      id: "values",
      title: aboutData.values.title,
      icon: FaClipboardList,
      items: aboutData.values.items,
    },
  ];

  return (
    <main className="min-h-screen bg-[#F6FAFD] text-[#2F3E46]">
      <Navbar />
      <PageLayout>
        <div className="space-y-6">
          {aboutCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                style={{ animationDelay: `${index * 120}ms` }}
                className="overflow-hidden rounded-[20px] border border-[#DCECF7] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md opacity-0 animate-fade-up"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF7FD] text-[#0B5AA8]">
                  <Icon className="text-3xl" />
                </div>

                <h2 className="mb-4 text-2xl font-bold text-[#0B5AA8]">
                  {card.title}
                </h2>

                {card.items ? (
                  <ul className="space-y-2">
                    {card.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-[15px] leading-7 text-[#4B5563]"
                      >
                        <span className="h-2 w-2 rounded-full bg-[#43C7F5]"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="whitespace-pre-line text-[15px] leading-7 text-[#4B5563]">
                    {card.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </PageLayout>
      <Footer />
    </main>
  );
};

export default About;
