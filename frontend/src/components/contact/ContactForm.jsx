import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { useLanguage } from "../../context/LanguageContext";

const ContactForm = () => {
  // Get translations from context
  const { t } = useLanguage();

  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");

  // Build form fields array from translation data
  const formFields = [
    {
      id: "name",
      label: t("contact.form.name.label"),
      placeholder: t("contact.form.name.placeholder"),
      type: "text",
      required: true,
    },
    {
      id: "email",
      label: t("contact.form.email.label"),
      placeholder: t("contact.form.email.placeholder"),
      type: "email",
      required: true,
    },
    {
      id: "phone",
      label: t("contact.form.phone.label"),
      placeholder: t("contact.form.phone.placeholder"),
      type: "tel",
      required: false,
    },
    {
      id: "subject",
      label: t("contact.form.subject.label"),
      placeholder: t("contact.form.subject.placeholder"),
      type: "text",
      required: false,
    },
    {
      id: "message",
      label: t("contact.form.message.label"),
      placeholder: t("contact.form.message.placeholder"),
      type: "textarea",
      required: true,
    },
  ];

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setError(t("contact.form.error"));
      return;
    }

    setError("");
    console.log("Contact form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section className="rounded-[20px] border border-[#DCECF7] bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6 space-y-2">
        <h2 className="text-2xl font-semibold text-[#143B69] sm:text-3xl">
          {t("contact.send_message_title")}
        </h2>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5">
          {formFields.map((field) => (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                className="mb-2 block text-sm font-medium text-[#143B69]"
              >
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  required={field.required}
                  value={formData[field.id]}
                  onChange={handleChange}
                  rows="5"
                  className="w-full rounded-[14px] border border-[#DCECF7] bg-[#F6FAFD] px-4 py-3 text-sm text-[#2F3E46] outline-none transition focus:border-[#43C7F5] focus:ring-2 focus:ring-[#43C7F5]/30"
                />
              ) : (
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  value={formData[field.id]}
                  onChange={handleChange}
                  className="w-full rounded-[14px] border border-[#DCECF7] bg-[#F6FAFD] px-4 py-3 text-sm text-[#2F3E46] outline-none transition focus:border-[#43C7F5] focus:ring-2 focus:ring-[#43C7F5]/30"
                />
              )}
            </div>
          ))}
        </div>

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-[14px] bg-[#0B5AA8] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#143B69] focus:outline-none focus:ring-2 focus:ring-[#43C7F5] focus:ring-offset-2"
        >
          <FaPaperPlane aria-hidden="true" />
          {t("contact.form.submit")}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
