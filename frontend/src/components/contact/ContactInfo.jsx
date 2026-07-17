import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import ContactCard from "./ContactCard";

const ContactInfo = () => {
  // Get translations from context
  const { t } = useLanguage();

  // Build contact cards array from translation data
  const contactCards = [
    {
      title: t("contact.cards.address.title"),
      description: t("contact.cards.address.description"),
      icon: FiMapPin,
    },
    {
      title: t("contact.cards.phone.title"),
      description: t("contact.cards.phone.description"),
      icon: FiPhone,
    },
    {
      title: t("contact.cards.email.title"),
      description: t("contact.cards.email.description"),
      icon: FiMail,
    },
    {
      title: t("contact.cards.working_hours.title"),
      description: t("contact.cards.working_hours.description"),
      icon: FiClock,
    },
  ];

  return (
    <section>
      {/* Contact Information Cards Grid */}
      <div className="overflow-hidden rounded-[20px] border border-[#DCECF7] bg-white shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {contactCards.map((item, index) => (
            <ContactCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
