import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

const GOOGLE_MAPS_URL =
  "https://maps.google.com/?q=Arada%20Sub-city%20Administration%20Addis%20Ababa";

// Update href values here when real social-media URLs become available.
const socialLinks = [
  { key: "facebook", label: "Facebook", href: "#", icon: FaFacebookF },
  { key: "telegram", label: "Telegram", href: "#", icon: FaTelegramPlane },
  { key: "whatsapp", label: "WhatsApp", href: "#", icon: FaWhatsapp },
];

const usefulLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "announcements", href: "/announcements" },
  { key: "privacy_policy", href: "#" },
  { key: "map", href: "/contact" },
];

const secondaryLinks = usefulLinks.slice(3);

function SocialButton({ href, label, icon: Icon }) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-500/60 text-slate-300 transition hover:border-white hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50"
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

function FooterLink({ href, children }) {
  const location = useLocation();

  if (href.startsWith("/")) {
    const isCurrentPage = location.pathname === href;
    return (
      <Link
        to={href}
        onClick={() => {
          if (isCurrentPage) {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        className="inline-flex w-fit border-b border-slate-500/40 pb-1 text-slate-300 transition hover:border-white hover:text-white"
      >
        {children}
      </Link>
    );
  }

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

  const phoneRaw = t("footer.phone");
  const phoneNumbers = phoneRaw
    .split("/")
    .map((num) => num.trim())
    .filter(Boolean);
  const email = t("footer.email");

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
              {socialLinks.map((social) => (
                <SocialButton
                  key={social.key}
                  href={social.href}
                  label={social.label}
                  icon={social.icon}
                />
              ))}
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
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-slate-500/40 transition hover:border-white hover:text-white"
                >
                  {t("footer.address")}
                </a>
              </li>
              <li className="inline-flex items-start gap-3 leading-6">
                <FiPhone
                  className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                  aria-hidden="true"
                />
                <span>
                  {phoneNumbers.map((num, i) => (
                    <span key={num}>
                      <a
                        href={`tel:${num.replace(/\s/g, "")}`}
                        className="border-b border-slate-500/40 transition hover:border-white hover:text-white"
                      >
                        {num}
                      </a>
                      {i < phoneNumbers.length - 1 && (
                        <span className="mx-1">/</span>
                      )}
                    </span>
                  ))}
                </span>
              </li>
              <li className="inline-flex items-start gap-3 leading-6">
                <FiMail
                  className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${email}`}
                  className="border-b border-slate-500/40 transition hover:border-white hover:text-white"
                >
                  {email}
                </a>
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
