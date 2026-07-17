import { FaFacebookF, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

const usefulLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "announcements", href: "#announcements" },
  { key: "privacy_policy", href: "#privacy" },
  { key: "map", href: "#map" },
];

const secondaryLinks = usefulLinks.slice(3);

function SocialButton({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-500/60 text-slate-300 transition hover:border-white hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50"
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex w-fit border-b border-slate-500/40 pb-1 text-slate-300 transition hover:border-white hover:text-white"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1e2d3d] font-sans text-white">
      <div className="px-4 py-10 sm:px-6 md:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <section className="space-y-4 text-left">
            <h2 className="text-lg font-bold text-white md:text-xl">
              {t("footer.about_title")}
            </h2>
            <p className="max-w-sm text-sm leading-7 text-slate-300">
              {t("footer.about_description")}
            </p>
            <div className="flex items-center gap-3 pt-1">
              <SocialButton href="#" label="Facebook" icon={FaFacebookF} />
              <SocialButton href="#" label="Telegram" icon={FaTelegramPlane} />
              <SocialButton href="#" label="WhatsApp" icon={FaWhatsapp} />
            </div>
          </section>

          <section className="space-y-4 text-left">
            <h2 className="text-lg font-bold text-white">
              {t("footer.contact_title")}
            </h2>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="inline-flex items-start gap-3 leading-6">
                <FiMapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                  aria-hidden="true"
                />
                <span>{t("footer.address")}</span>
              </li>
              <li className="inline-flex items-start gap-3 leading-6">
                <FiPhone
                  className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                  aria-hidden="true"
                />
                <span>{t("footer.phone")}</span>
              </li>
              <li className="inline-flex items-start gap-3 leading-6">
                <FiMail
                  className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                  aria-hidden="true"
                />
                <span>{t("footer.email")}</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4 text-left">
            <h2 className="text-lg font-bold text-white">
              {t("footer.links_title")}
            </h2>
            <div className="flex flex-col gap-3 text-sm text-slate-300">
              {usefulLinks.slice(0, 3).map((link) => (
                <FooterLink key={link.key} href={link.href}>
                  {t(`footer.${link.key}`)}
                </FooterLink>
              ))}
            </div>
          </section>

          <section className="space-y-4 text-left md:pt-10">
            <div className="flex flex-col gap-3 text-sm text-slate-300">
              {secondaryLinks.map((link) => (
                <FooterLink key={link.key} href={link.href}>
                  {t(`footer.${link.key}`)}
                </FooterLink>
              ))}
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
