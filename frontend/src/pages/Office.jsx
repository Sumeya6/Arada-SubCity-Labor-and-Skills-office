import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { useMemo, useState } from "react";

import {
  FiSearch,
  FiMapPin,
  FiShoppingBag,
  FiShield,
  FiHeart,
  FiHome,
  FiBriefcase,
  FiUsers,
  FiBookOpen,
  FiTool,
  FiImage,
  FiClipboard,
  FiCheckSquare,
  FiTrash2,
  FiDollarSign,
  FiAward,
  FiTrendingUp,
  FiCreditCard,
  FiChevronRight,
  FiInfo,
} from "react-icons/fi";

import {
  FaBuilding as FiBuilding,
  FaIndustry as FiFactory,
  FaBalanceScale as FiScale,
} from "react-icons/fa";

const FiCommunity = FiUsers;

const offices = [
  {
    id: 1,
    nameEn: "Administration Office",
    nameAm: "አስተዳደር ጽ/ቤት",
    descriptionEn:
      "Provides administrative leadership, coordination, and public service management across Arada Sub-city.",
    descriptionAm:
      "በአራዳ ክፍለ ከተማ የአስተዳደር፣ የማስተባበርና የህዝብ አገልግሎት ሥራዎችን ይመራል።",
    category: "administration",
    icon: FiBuilding,
  },
  {
    id: 2,
    nameEn: "Finance Office",
    nameAm: "ፋይናንስ ጽ/ቤት",
    descriptionEn:
      "Manages financial planning, budgeting, accounting, and public financial resources.",
    descriptionAm:
      "የፋይናንስ ዕቅድ፣ በጀት፣ ሂሳብ አያያዝና የህዝብ ሀብትን ያስተዳድራል።",
    category: "administration",
    icon: FiDollarSign,
  },
  {
    id: 3,
    nameEn: "Human Resources Office",
    nameAm: "ሰው ኃይል ጽ/ቤት",
    descriptionEn:
      "Supports employee management, development, recruitment, and workplace administration.",
    descriptionAm:
      "የሰራተኞችን አስተዳደር፣ ልማት፣ ቅጥርና የሥራ ቦታ አስተዳደርን ይደግፋል።",
    category: "administration",
    icon: FiUsers,
  },
  {
    id: 4,
    nameEn: "Labour and Skill Office",
    nameAm: "ሥራና ክህሎት ጽ/ቤት",
    descriptionEn:
      "Works to make employment opportunities more accessible and improve citizens' skills and capabilities.",
    descriptionAm:
      "የሥራ ዕድሎችን ተደራሽ ለማድረግና የዜጎችን ክህሎትና ችሎታ ለማሻሻል ይሰራል።",
    category: "social",
    icon: FiBriefcase,
  },
  {
    id: 5,
    nameEn: "Women and Social Affairs Office",
    nameAm: "ሴቶችና ማህበራዊ ጉዳይ ጽ/ቤት",
    descriptionEn:
      "Promotes women's participation, social protection, inclusion, and community wellbeing.",
    descriptionAm:
      "የሴቶችን ተሳትፎ፣ ማህበራዊ ጥበቃ፣ አካታችነትና የማህበረሰብ ደህንነትን ያበረታታል።",
    category: "social",
    icon: FiHeart,
  },
  {
    id: 6,
    nameEn: "Education Office",
    nameAm: "ትምህርት ጽ/ቤት",
    descriptionEn:
      "Coordinates educational services and supports quality education across the sub-city.",
    descriptionAm:
      "የትምህርት አገልግሎቶችን ያስተባብራል፣ በክፍለ ከተማውም የትምህርት ጥራትን ይደግፋል።",
    category: "social",
    icon: FiBookOpen,
  },
  {
    id: 7,
    nameEn: "Health Office",
    nameAm: "ጤና ጽ/ቤት",
    descriptionEn:
      "Coordinates public health programs and promotes accessible health services for residents.",
    descriptionAm:
      "የህዝብ ጤና ፕሮግራሞችን ያስተባብራል፣ ተደራሽ የጤና አገልግሎትንም ያበረታታል።",
    category: "social",
    icon: FiShield,
  },
  {
    id: 8,
    nameEn: "Youth and Sports Office",
    nameAm: "ወጣቶችና ስፖርት ጽ/ቤት",
    descriptionEn:
      "Supports youth development, sports participation, and recreational activities.",
    descriptionAm:
      "የወጣቶችን ልማት፣ የስፖርት ተሳትፎና የመዝናኛ እንቅስቃሴዎችን ይደግፋል።",
    category: "social",
    icon: FiAward,
  },
  {
    id: 9,
    nameEn: "Urban Development Office",
    nameAm: "ከተማ ልማት ጽ/ቤት",
    descriptionEn:
      "Coordinates urban development planning, infrastructure, and sustainable city growth.",
    descriptionAm:
      "የከተማ ልማት ዕቅድን፣ መሰረተ ልማትንና ዘላቂ የከተማ ዕድገትን ያስተባብራል።",
    category: "urban",
    icon: FiTrendingUp,
  },
  {
    id: 10,
    nameEn: "Land Management Office",
    nameAm: "መሬት አስተዳደር ጽ/ቤት",
    descriptionEn:
      "Manages urban land resources and supports transparent and efficient land administration.",
    descriptionAm:
      "የከተማ መሬት ሀብትን ያስተዳድራል፣ ግልጽና ቀልጣፋ የመሬት አስተዳደርንም ይደግፋል።",
    category: "urban",
    icon: FiMapPin,
  },
  {
    id: 11,
    nameEn: "Construction Office",
    nameAm: "ግንባታ ጽ/ቤት",
    descriptionEn:
      "Oversees construction activities and supports compliance with urban building standards.",
    descriptionAm:
      "የግንባታ ሥራዎችን ይቆጣጠራል፣ የከተማ የግንባታ ደረጃዎችንም እንዲከተሉ ያደርጋል።",
    category: "urban",
    icon: FiTool,
  },
  {
    id: 12,
    nameEn: "Road and Transport Office",
    nameAm: "መንገድና ትራንስፖርት ጽ/ቤት",
    descriptionEn:
      "Supports road infrastructure, transportation planning, and improved urban mobility.",
    descriptionAm:
      "የመንገድ መሰረተ ልማትን፣ የትራንስፖርት ዕቅድንና የከተማ ተንቀሳቃሽነትን ይደግፋል።",
    category: "urban",
    icon: FiHome,
  },
  {
    id: 13,
    nameEn: "Trade Office",
    nameAm: "ንግድ ጽ/ቤት",
    descriptionEn:
      "Provides trade-related services and supports a fair and organized business environment.",
    descriptionAm:
      "ከንግድ ጋር የተያያዙ አገልግሎቶችን ይሰጣል፣ ፍትሃዊና የተደራጀ የንግድ አካባቢንም ይደግፋል።",
    category: "trade",
    icon: FiShoppingBag,
  },
  {
    id: 14,
    nameEn: "Industry Office",
    nameAm: "ኢንዱስትሪ ጽ/ቤት",
    descriptionEn:
      "Promotes industrial development, investment, and productive economic activities.",
    descriptionAm:
      "የኢንዱስትሪ ልማትን፣ ኢንቨስትመንትንና ምርታማ የኢኮኖሚ እንቅስቃሴዎችን ያበረታታል።",
    category: "trade",
    icon: FiFactory,
  },
  {
    id: 15,
    nameEn: "Micro and Small Enterprise Office",
    nameAm: "አነስተኛና ጥቃቅን ኢንተርፕራይዝ ጽ/ቤት",
    descriptionEn:
      "Supports entrepreneurs and small businesses through training, services, and development programs.",
    descriptionAm:
      "ለሥራ ፈጣሪዎችና ለአነስተኛ ንግዶች በስልጠና፣ በአገልግሎትና በልማት ፕሮግራሞች ድጋፍ ይሰጣል።",
    category: "trade",
    icon: FiBriefcase,
  },
  {
    id: 16,
    nameEn: "Revenue Office",
    nameAm: "ገቢ ጽ/ቤት",
    descriptionEn:
      "Administers local revenue collection and supports efficient taxpayer services.",
    descriptionAm:
      "የአካባቢ ገቢ አሰባሰብን ያስተዳድራል፣ ቀልጣፋ የግብር ከፋይ አገልግሎትንም ይደግፋል።",
    category: "administration",
    icon: FiCreditCard,
  },
  {
    id: 17,
    nameEn: "Legal Office",
    nameAm: "ሕግ ጉዳይ ጽ/ቤት",
    descriptionEn:
      "Provides legal guidance and supports lawful administrative decision-making.",
    descriptionAm:
      "የሕግ ምክር ይሰጣል፣ ሕጋዊ የአስተዳደር ውሳኔ እንዲሰጥም ይደግፋል።",
    category: "administration",
    icon: FiScale,
  },
  {
    id: 18,
    nameEn: "Community Development Office",
    nameAm: "ማህበረሰብ ልማት ጽ/ቤት",
    descriptionEn:
      "Works with communities to support local development and improve residents' quality of life.",
    descriptionAm:
      "ከማህበረሰቡ ጋር በመስራት የአካባቢ ልማትንና የነዋሪዎችን የኑሮ ጥራት ለማሻሻል ይሰራል።",
    category: "social",
    icon: FiCommunity,
  },
  {
    id: 19,
    nameEn: "Property Management Office",
    nameAm: "ንብረት አስተዳደር ጽ/ቤት",
    descriptionEn:
      "Manages public properties and supports proper utilization and maintenance of assets.",
    descriptionAm:
      "የህዝብ ንብረቶችን ያስተዳድራል፣ ንብረቶች በአግባቡ እንዲጠቀሙና እንዲጠበቁ ያደርጋል።",
    category: "administration",
    icon: FiHome,
  },
  {
    id: 20,
    nameEn: "Procurement Office",
    nameAm: "ግዥ ጽ/ቤት",
    descriptionEn:
      "Coordinates procurement processes and supports transparent purchasing of goods and services.",
    descriptionAm:
      "የግዥ ሂደቶችን ያስተባብራል፣ ግልጽ የሆነ የዕቃና የአገልግሎት ግዥን ይደግፋል።",
    category: "administration",
    icon: FiClipboard,
  },
  {
    id: 21,
    nameEn: "Information and Communication Technology Office",
    nameAm: "የኢንፎርሜሽንና ኮሙኒኬሽን ቴክኖሎጂ ጽ/ቤት",
    descriptionEn:
      "Supports digital services, information systems, technology infrastructure, and ICT operations.",
    descriptionAm:
      "ዲጂታል አገልግሎቶችን፣ የመረጃ ስርዓቶችን፣ የቴክኖሎጂ መሰረተ ልማትንና የICT ሥራዎችን ይደግፋል።",
    category: "administration",
    icon: FiTool,
  },
  {
    id: 22,
    nameEn: "Public Relations Office",
    nameAm: "ህዝብ ግንኙነት ጽ/ቤት",
    descriptionEn:
      "Shares public information and strengthens communication between the administration and residents.",
    descriptionAm:
      "የህዝብ መረጃን ያሰራጫል፣ በአስተዳደሩና በነዋሪዎች መካከልም ግንኙነትን ያጠናክራል።",
    category: "administration",
    icon: FiImage,
  },
  {
    id: 23,
    nameEn: "Environmental Protection Office",
    nameAm: "አካባቢ ጥበቃ ጽ/ቤት",
    descriptionEn:
      "Promotes environmental protection, cleanliness, green development, and sustainable urban living.",
    descriptionAm:
      "የአካባቢ ጥበቃን፣ ንጽህናን፣ አረንጓዴ ልማትንና ዘላቂ የከተማ ኑሮን ያበረታታል።",
    category: "urban",
    icon: FiShield,
  },
  {
    id: 24,
    nameEn: "Culture and Tourism Office",
    nameAm: "ባህልና ቱሪዝም ጽ/ቤት",
    descriptionEn:
      "Promotes cultural heritage, tourism development, and local cultural activities.",
    descriptionAm:
      "የባህል ቅርስን፣ የቱሪዝም ልማትንና የአካባቢ ባህላዊ እንቅስቃሴዎችን ያበረታታል።",
    category: "social",
    icon: FiImage,
  },
  {
    id: 25,
    nameEn: "Peace and Security Office",
    nameAm: "ሰላምና ደህንነት ጽ/ቤት",
    descriptionEn:
      "Supports peace, public safety, conflict prevention, and community security initiatives.",
    descriptionAm:
      "ሰላምን፣ የህዝብ ደህንነትን፣ ግጭትን መከላከልና የማህበረሰብ ደህንነት ሥራዎችን ይደግፋል።",
    category: "administration",
    icon: FiShield,
  },
  {
    id: 26,
    nameEn: "Audit Office",
    nameAm: "ኦዲት ጽ/ቤት",
    descriptionEn:
      "Reviews financial and administrative activities to support accountability and proper resource management.",
    descriptionAm:
      "የፋይናንስና የአስተዳደር ሥራዎችን በመመርመር ተጠያቂነትንና ትክክለኛ የሀብት አጠቃቀምን ይደግፋል።",
    category: "administration",
    icon: FiCheckSquare,
  },
];

const categories = [
  { id: "all", labelEn: "All Offices", labelAm: "ሁሉም ጽ/ቤቶች" },
  {
    id: "administration",
    labelEn: "Administration",
    labelAm: "አስተዳደር",
  },
  {
    id: "social",
    labelEn: "Social Services",
    labelAm: "ማህበራዊ አገልግሎቶች",
  },
  {
    id: "urban",
    labelEn: "Urban Development",
    labelAm: "ከተማ ልማት",
  },
  {
    id: "trade",
    labelEn: "Trade & Industry",
    labelAm: "ንግድና ኢንዱስትሪ",
  },
];

const Office = () => {
  const { t } = useLanguage();

  const language =
    t("nav.home") === "ዋና ገጽ" || t("common.home") === "መነሻ"
      ? "am"
      : "en";

  const isAmharic = language === "am";

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredOffices = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return offices.filter((office) => {
      const matchesCategory =
        activeCategory === "all" || office.category === activeCategory;

      const matchesSearch =
        !query ||
        office.nameEn.toLowerCase().includes(query) ||
        office.nameAm.toLowerCase().includes(query) ||
        office.descriptionEn.toLowerCase().includes(query) ||
        office.descriptionAm.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  return (
    <main className="min-h-screen bg-[#F6FAFD] text-[#2F3E46]">
      <Navbar />

      {/* Page Header */}
      <section className="border-b border-[#E4EDF5] bg-white px-4 py-7 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* <div className="mb-3 flex items-center gap-1.5 text-[11px] font-medium text-[#8298B2]">
            <span>{t("nav.home")}</span>
            <FiChevronRight size={13} />
            <span className="text-[#0671CE]">
              {isAmharic ? "ጽ/ቤቶች" : "Offices"}
            </span>
          </div> */}

          <h1 className="text-[25px] font-bold leading-tight text-[#0B2341] sm:text-[28px]">
            {isAmharic ? "የአራዳ ክፍለ ከተማ ጽ/ቤቶች" : "Arada Sub-city Offices"}
          </h1>

          <p className="mt-1.5 max-w-2xl text-[13px] leading-5 text-[#7890AC]">
            {isAmharic
              ? "የአራዳ ክፍለ ከተማ የተለያዩ ጽ/ቤቶችን እና የሚሰጡትን አገልግሎቶች ያግኙ።"
              : "Explore the different offices of Arada Sub-city and the services they provide."}
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="px-4 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-sm">
              <FiSearch
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#91A5B9]"
                size={16}
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={
                  isAmharic ? "ጽ/ቤት ይፈልጉ..." : "Search offices..."
                }
                className="h-10 w-full rounded-lg border border-[#DCE6F0] bg-white pl-9 pr-3 text-[12px] text-[#2F3E46] outline-none transition focus:border-[#A9DCFF] focus:ring-2 focus:ring-[#E7F4FF]"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((category) => {
                const isActive = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`rounded-md px-3 py-1.5 text-[11px] font-medium transition-all ${
                      isActive
                        ? "bg-[#0671CE] text-white shadow-sm"
                        : "border border-[#DCE6F0] bg-white text-[#71869D] hover:border-[#B9D9F5] hover:text-[#0671CE]"
                    }`}
                  >
                    {isAmharic ? category.labelAm : category.labelEn}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Count */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[11px] text-[#8298B2]">
              <FiInfo size={14} />
              <span>
                {isAmharic
                  ? `${filteredOffices.length} ጽ/ቤቶች ተገኝተዋል`
                  : `${filteredOffices.length} offices found`}
              </span>
            </div>
          </div>

          {/* Office Cards */}
          <section className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredOffices.map((office) => {
              const Icon = office.icon;

              return (
                <article
                  key={office.id}
                  className="group flex min-h-[330px] cursor-pointer flex-col rounded-[16px] border border-[#DCE6F0] bg-white p-5 shadow-[0_2px_8px_rgba(26,63,99,0.025)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B9D9F5] hover:shadow-[0_10px_24px_rgba(24,91,145,0.10)] sm:p-6"
                >
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[11px] border border-[#A9DCFF] bg-[#F0F8FF] text-[#0671CE] transition-all duration-300 group-hover:bg-[#E7F4FF]">
                      <Icon size={23} strokeWidth={2} />
                    </div>

                    <span className="rounded-md bg-[#F3F6F9] px-2.5 py-1 text-[11px] font-medium text-[#8298B2]">
                      {isAmharic
                        ? categories.find(
                            (category) => category.id === office.category
                          )?.labelAm
                        : categories.find(
                            (category) => category.id === office.category
                          )?.labelEn}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-5 flex-1">
                    <h2 className="text-[17px] font-bold leading-[1.35] text-[#0B2341]">
                      {isAmharic ? office.nameAm : office.nameAm}
                    </h2>

                    <p className="mt-1.5 text-[12px] font-medium leading-5 text-[#7890AC]">
                      {isAmharic ? office.nameAm : office.nameEn}
                    </p>

                    <p className="mt-3 text-[13px] leading-6 text-[#344F6B]">
                      {isAmharic
                        ? office.descriptionAm
                        : office.descriptionEn}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-5 flex items-center justify-between border-t border-[#EDF1F5] pt-4">
                    <button
                      type="button"
                      className="flex items-center gap-1 text-[13px] font-semibold text-[#0671CE] transition-colors hover:text-[#045A9F]"
                    >
                      {isAmharic ? "ተጨማሪ ይመልከቱ" : "View details"}
                      <FiChevronRight
                        size={15}
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </button>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3F8FC] text-[#0671CE] transition-all duration-200 group-hover:bg-[#E7F4FF]">
                      <FiChevronRight size={16} />
                    </span>
                  </div>
                </article>
              );
            })}
          </section>

          {/* Empty State */}
          {filteredOffices.length === 0 && (
            <div className="flex min-h-[250px] flex-col items-center justify-center py-12 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0F8FF] text-[#0671CE]">
                <FiSearch size={20} />
              </div>

              <h3 className="mt-3 text-[16px] font-semibold text-[#0B2341]">
                {isAmharic ? "ምንም ጽ/ቤት አልተገኘም" : "No offices found"}
              </h3>

              <p className="mt-1 max-w-sm text-[12px] leading-5 text-[#8298B2]">
                {isAmharic
                  ? "የፍለጋ ቃልዎን ወይም የምድብ ምርጫዎን ይቀይሩ።"
                  : "Try changing your search term or category filter."}
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("all");
                }}
                className="mt-4 flex items-center gap-1.5 rounded-md bg-[#0671CE] px-3 py-2 text-[11px] font-semibold text-white transition hover:bg-[#045A9F]"
              >
                <FiTrash2 size={13} />
                {isAmharic ? "ማጣሪያዎችን አጽዳ" : "Clear filters"}
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Office;