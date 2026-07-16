import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageLayout from "../components/PageLayout";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";
import bannerImage from "../assets/Images/contactus.png";

const Contact = () => {
  // Logo SVG as data URI
  const logoImage =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'%3E%3Crect width='240' height='240' rx='56' fill='%230B5AA8'/%3E%3Ccircle cx='120' cy='120' r='74' fill='%23F6FAFD'/%3E%3Cpath d='M120 58l18 38 42 6-31 30 8 42-37-20-37 20 8-42-31-30 42-6z' fill='%2343C7F5'/%3E%3C/svg%3E";

  return (
    <main className="min-h-screen bg-[#F6FAFD] text-[#2F3E46]">
      <Navbar />
      <PageLayout>
        <div className="space-y-6">
          <div
            className="overflow-hidden rounded-[20px] opacity-0 animate-fade-up"
            style={{ animationDelay: `0ms` }}
          >
            <ContactHero bannerImage={bannerImage} logoImage={logoImage} />
          </div>

          <div
            className="overflow-hidden opacity-0 animate-fade-up"
            style={{ animationDelay: `120ms` }}
          >
            <ContactInfo />
          </div>

          <div
            className="overflow-hidden opacity-0 animate-fade-up"
            style={{ animationDelay: `240ms` }}
          >
            <ContactForm />
          </div>

          <div
            className="overflow-hidden opacity-0 animate-fade-up"
            style={{ animationDelay: `360ms` }}
          >
            <ContactMap />
          </div>
        </div>
      </PageLayout>
      <Footer />
    </main>
  );
};

export default Contact;
