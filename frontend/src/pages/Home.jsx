import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageLayout from "../components/PageLayout";
import { useLanguage } from "../context/LanguageContext";
import heroImage from "../assets/Images/527259033_1201903588647920_4997134224391430624_n.jpg";
import leaderOneImage from "../assets/Images/mikitilwana.jpg";
import leaderTwoImage from "../assets/Images/mikitilhalafi.jpg";
import videoOneSrc from "../assets/videos/document_5965362897268776495.mp4";
import videoTwoSrc from "../assets/videos/document_5965362897268776496.mp4";

function LeaderCard({ image, imageAlt, name, title, quote }) {
  return (
    <article className="group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(15,23,42,0.1)]">
      <div className="inline-flex items-center gap-4">
        <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-[#0B5DA7] bg-slate-100 ring-4 ring-[#5BC5E6]/15">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0">
          <h3 className="text-lg font-extrabold leading-snug text-[#0B5DA7] md:text-xl">
            {name}
          </h3>
          <p className="mt-1 text-sm font-medium leading-6 text-slate-600">
            {title}
          </p>
        </div>
      </div>

      <blockquote className="mt-5 rounded-2xl border-l-4 border-[#5BC5E6] bg-linear-to-r from-slate-50 to-white p-4 text-sm leading-relaxed text-slate-700 shadow-sm">
        <span className="mb-2 block text-lg leading-none text-[#5BC5E6]">
          “
        </span>
        <p className="italic">{quote}</p>
      </blockquote>
    </article>
  );
}

function VideoFrame({ src, title }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md">
      <div className="aspect-video bg-black">
        <video
          src={src}
          title={title}
          className="h-full w-full object-contain"
          controls
          playsInline
        />
      </div>
    </div>
  );
}

function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#F2F8FC] text-slate-900">
      <Navbar />

      <PageLayout>
        <section
          className="relative h-87.5 w-full overflow-hidden rounded-2xl bg-cover bg-center shadow-lg md:h-112.5"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex h-full items-center px-6 py-8 md:px-10">
            <div className="max-w-3xl text-left text-white">
              <span className="mb-3 inline-block rounded-full border border-[#5BC5E6]/30 bg-[#5BC5E6]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#5BC5E6] shadow-[0_0_18px_rgba(91,197,230,0.28)]">
                {t("home.hero_tag")}
              </span>
              <h1 className="text-2xl font-extrabold leading-tight tracking-tight md:text-5xl">
                {t("home.hero_heading")}
              </h1>
            </div>
          </div>
        </section>
      </PageLayout>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#5BC5E6]">
            {t("home.leadership_tag")}
          </p>
          <h2 className="relative pb-4 text-3xl font-extrabold text-[#0B5DA7] md:text-4xl">
            {t("home.leadership_title")}
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-[#5BC5E6]" />
        </div>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 xl:items-stretch xl:gap-10">
          <LeaderCard
            image={leaderOneImage}
            imageAlt={t("home.leaders.abdi_name")}
            name={t("home.leaders.abdi_name")}
            title={t("home.leaders.abdi_title")}
            quote={t("home.leaders.abdi_quote")}
          />
          <LeaderCard
            image={leaderTwoImage}
            imageAlt={t("home.leaders.sofonias_name")}
            name={t("home.leaders.sofonias_name")}
            title={t("home.leaders.sofonias_title")}
            quote={t("home.leaders.sofonias_quote")}
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-[#0B5DA7]">
          {t("home.videos_title")}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold text-slate-600">
              {t("home.video_1_title")}
            </p>
            <VideoFrame src={videoOneSrc} title={t("home.video_1_title")} />
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-slate-600">
              {t("home.video_2_title")}
            </p>
            <VideoFrame src={videoTwoSrc} title={t("home.video_2_title")} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
