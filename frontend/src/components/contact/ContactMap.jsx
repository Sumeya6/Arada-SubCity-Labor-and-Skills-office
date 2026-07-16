import { FaMapMarkedAlt, FaLocationArrow } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

const ContactMap = () => {
  // Get translations from context
  const { t } = useLanguage();

  // Fetch map data from translations
  const mapData = t("contact.map");

  return (
    <section className="relative left-1/2 right-1/2 mx-[-50vw] w-screen px-4 sm:px-6 lg:px-8 py-12">
      {/* Map Container */}
      <div className="relative mx-auto h-[600px] w-full overflow-hidden rounded-[28px] border border-[#DCECF7] shadow-lg">
        {/* Embedded Google Map */}
        <iframe
          title={mapData.location_title}
          src="https://www.google.com/maps?q=Arada%20Sub-City%20Labor%20and%20Skills%20Office%2C%20Addis%20Ababa%2C%20Ethiopia&output=embed"
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />

        {/* Location Card */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="w-full max-w-sm rounded-[24px] bg-white p-10 text-center shadow-2xl">
            {/* Icon */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EAF7FD]">
              <FaMapMarkedAlt className="text-5xl text-[#0B5AA8]" />
            </div>

            {/* Title */}
            <h3 className="mt-6 text-2xl font-bold text-[#143B69]">
              {mapData.location_title}
            </h3>

            {/* Description */}
            <p className="mt-4 leading-4 text-gray-600 text-[15px]">
              {mapData.location_description.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < mapData.location_description.split("\n").length - 1 && (
                    <br />
                  )}
                </span>
              ))}
            </p>

            {/* Google Maps Link Button */}
            <a
              href="https://maps.google.com/?q=Arada%20Sub-City%20Labor%20and%20Skills%20Office%20Addis%20Ababa"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0B5AA8] px-7 py-3 font-semibold text-white transition duration-300 hover:bg-[#143B69]"
            >
              <FaLocationArrow />
              {mapData.open_map}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
