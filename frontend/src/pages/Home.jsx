import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageLayout from "../components/PageLayout";
import { useLanguage } from "../context/LanguageContext";
import heroImage from "../assets/Images/aradasubcity.png";
import leaderOneImage from "../assets/Images/wana.png";
// import leaderTwoImage from "../assets/Images/mikitilhalafi.jpg";
// import videoOneSrc from "../assets/videos/document_5965362897268776495.mp4";
// import videoTwoSrc from "../assets/videos/document_5965362897268776496.mp4";



function LeaderCard({ image, imageAlt, name, title }) {
  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="grid md:grid-cols-[37%_1fr]">
        
        {/* Leader Photo */}
        <div className="relative h-72 bg-slate-100 md:h-[332px]">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* Leader Information */}
        <div className="flex flex-col justify-center px-7 py-7 sm:px-8 md:px-8">
          
          {/* Small Label */}
          <span className="mb-3 w-fit rounded-md bg-[#E8F5FC] px-3 py-1 text-[10px] font-semibold text-[#0B5DA7]">
            Official Leadership
          </span>

          {/* Name */}
          <h3 className="text-xl font-extrabold leading-tight text-slate-900 sm:text-2xl md:text-[1.45rem]">
            {name}
          </h3>

          {/* Position */}
          <p className="mt-2 text-sm font-medium leading-relaxed text-[#005EB8] sm:text-[15px]">
            {title}
          </p>

          {/* Divider */}
          <div className="my-5 h-px w-full bg-slate-200" />

          {/* Executive Office */}
          <div className="flex items-center gap-3">
            <div className="h-1 w-8 rounded-full bg-[#18B6D9]" />
            <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">
              Executive Office
            </span>
          </div>

          {/* Quote - kept unchanged / unused */}
          {/* 
          <blockquote className="relative border-l-2 border-[#5BC5E6] pl-5">
            <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
              {quote}
            </p>
          </blockquote> 
          */}
        </div>
      </div>
    </article>
  );
}



// function VideoFrame({ src, title }) {
//   return (
//     <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md">
//       <div className="aspect-video bg-black">
//         <video
//           src={src}
//           title={title}
//           className="h-full w-full object-contain"
//           controls
//           playsInline
//         />
//       </div>
//     </div>
//   );
// }

function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#F2F8FC] text-slate-900 animate-fade-up">
      <Navbar />

      <PageLayout>
        <section
          className="relative h-87.5 w-full overflow-hidden rounded-2xl bg-coverbg-center shadow-lg md:h-112.5"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50 " />
          <div className="relative z-10 flex h-full items-center px-6 py-8 md:px-10 ">
            <div className="max-w-3xl text-left text-white ">
              <span className="mb-3 inline-block rounded-full border border-[#5BC5E6]/30 bg-[#5BC5E6]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#5BC5E6] shadow-[0_0_18px_rgba(91,197,230,0.28)]">
                {t("home.hero_tag")}
              </span>
              <h1 className="text-xl  font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl">
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
          <h2 className="relative pb-4 text-2xl font-extrabold text-[#0B5DA7] sm:text-3xl md:text-4xl">
            {t("home.leadership_title")}
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-[#5BC5E6]" />
        </div>

        {/* <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 xl:items-stretch xl:gap-10">
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
        </div> */}
        <div>
           <LeaderCard
            image={leaderOneImage}
            imageAlt={t("home.leaders.abdi_name")}
            name={t("home.leaders.abdi_name")}
            title={t("home.leaders.abdi_title")}
            quote={t("home.leaders.abdi_quote")}
          />

        </div>
      </section>

      {/* <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
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
      </section> */}

      <Footer />
    </div>
  );
}

export default HomePage;
