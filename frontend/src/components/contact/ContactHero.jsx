import { useLanguage } from "../../context/LanguageContext";

const ContactHero = ({ bannerImage }) => {
  // Get translations from context
  const { t } = useLanguage();

  return (
    <section className="space-y-6">
      {/* Hero Banner Image */}
   
      <div className="overflow-hidden rounded-[20px] border border-[#71bcf0] bg-white shadow-sm opacity-0 animate-fade-up accent-inherit-50" style={{ animationDelay: `0ms` }}>
        <img
          src={bannerImage}
          alt={t("contact.title")}
          className="h-[250px] w-full object-cover sm:h-[300px] lg:h-[350px]"
        />
      </div>
    </section>
  );
};

export default ContactHero;
