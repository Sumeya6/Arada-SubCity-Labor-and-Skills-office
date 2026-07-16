import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageLayout from "../components/PageLayout";
import { useLanguage } from "../context/LanguageContext";
import img1 from "../assets/Images/gallery1.jpg";
import img2 from "../assets/Images/gallery2.jpg";
import img3 from "../assets/Images/gallery 3.jpg";
import img4 from "../assets/Images/gallery 4.jpg";
import img5 from "../assets/Images/gallery 5.jpg";
import img6 from "../assets/Images/gallery 6.jpg";

const galleryItems = [
  {
    id: 1,
    src: img1,
    caption: {
      am: "የ2018 ዓ.ም የአረንጓዴ አሻራ ችግኝ ተከላ መርሃ ግብር",
      en: "2018 E.C. Green Legacy Tree Planting Program",
    },
    date: { am: "ሰኔ ፳፩ ቀን ፳፻፲፰ ዓ.ም.", en: "Jun 21, 2018 E.C." },
  },
  {
    id: 2,
    src: img2,
    caption: {
      am: "የአረንጓዴ አሻራ ችግኝ ተከላ የምረቃ ስነ ስርዓት",
      en: "Green Legacy Planting Closing Ceremony",
    },
    date: { am: "ሰኔ ፳፩ ቀን ፳፻፲፰ ዓ.ም.", en: "Jun 21, 2018 E.C." },
  },
  {
    id: 3,
    src: img3,
    caption: {
      am: "የአረንጓዴ አሻራ ችግኝ ተከላ እንቅስቃሴ",
      en: "Green Legacy Tree Planting Activity",
    },
    date: { am: "ሰኔ ፳፩ ቀን ፳፻፲፰ ዓ.ም.", en: "Jun 21, 2018 E.C." },
  },
  {
    id: 4,
    src: img4,
    caption: {
      am: "የአረንጓዴ አሻራ ችግኝ ተከላ የመክፈቻ ስነ ስርዓት",
      en: "Green Legacy Planting Opening Ceremony",
    },
    date: { am: "ሰኔ ፳፩ ቀን ፳፻፲፰ ዓ.ም.", en: "Jun 21, 2018 E.C." },
  },
  {
    id: 5,
    src: img5,
    caption: {
      am: "የአረንጓዴ አሻራ ችግኝ ተከላ ፕሮግራም",
      en: "Green Legacy Planting Program",
    },
    date: { am: "ሰኔ ፳፩ ቀን ፳፻፲፰ ዓ.ም.", en: "Jun 21, 2018 E.C." },
  },
  {
    id: 6,
    src: img6,
    caption: {
      am: "የ2018 ዓ.ም የአረንጓዴ አሻራ ችግኝ ተከላ ዝግጅት",
      en: "2018 E.C. Green Legacy Planting Event",
    },
    date: { am: "ሰኔ ፳፩ ቀን ፳፻፲፰ ዓ.ም.", en: "Jun 21, 2018 E.C." },
  },
];

function GalleryPage() {
  const { t, language } = useLanguage();
  const [activeId, setActiveId] = useState(null);

  const activeItem = galleryItems.find((item) => item.id === activeId) ?? null;
  const close = useCallback(() => setActiveId(null), []);

  useEffect(() => {
    if (activeId === null) return;

    const handler = (e) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [activeId, close]);

  return (
    <div className="min-h-screen bg-[#F2F8FC] text-slate-900 animate-fade-up">
      <Navbar />

      <PageLayout>
        <div>
          <div className="mb-2 flex flex-col">
            <span className="mb-2 inline-block w-fit rounded-full border border-[#5BC5E6]/30 bg-[#5BC5E6]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#5BC5E6]">
              {t("gallery.tag")}
            </span>
            <h1 className="text-3xl font-extrabold leading-tight text-[#0B5DA7]">
              {t("gallery.title")}
            </h1>
            <div className="mt-3 h-1 w-16 rounded-full bg-[#5BC5E6] mb-8" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className="group relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-100 shadow-md outline-none focus-visible:ring-2 focus-visible:ring-[#5BC5E6] focus-visible:ring-offset-2"
              >
                <img
                  src={item.src}
                  alt={item.caption[language]}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-black/0 p-4 text-left text-white opacity-0 transition-all duration-300 group-hover:bg-black/60 group-hover:opacity-100">
                  <p className="text-sm font-bold leading-tight">{item.caption[language]}</p>
                  <p className="mt-1 text-xs font-medium text-slate-300">{item.date[language]}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </PageLayout>

      <Footer />

      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.caption[language]}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label={t("gallery.close")}
          >
            &times;
          </button>

          <div className="flex max-h-full max-w-5xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={activeItem.src}
              alt={activeItem.caption[language]}
              className="max-h-[80vh] w-auto rounded-xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-lg font-bold text-white">{activeItem.caption[language]}</p>
              <p className="mt-1 text-sm text-slate-400">{activeItem.date[language]}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;
