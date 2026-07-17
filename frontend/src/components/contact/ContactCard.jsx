const ContactCard = ({ item, index }) => {
  // Extract icon component from item
  const Icon = item.icon;

  return (
    <div
      className={`
        flex items-start gap-4 p-6 transition-all duration-300 hover:bg-[#F8FCFF] sm:p-8

        ${index === 0 ? "border-b border-[#E5EEF6] md:border-r" : ""}

        ${index === 1 ? "border-b border-[#E5EEF6]" : ""}

        ${index === 2 ? "md:border-r border-[#E5EEF6]" : ""}
      `}
    >
      {/* Icon Badge */}
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#EAF7FD] text-[#0B5AA8]">
        <Icon className="text-xl" />
      </div>

      {/* Card Content */}
      <div>
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#143B69]">
          {item.title}
        </h3>

        <p className="whitespace-pre-line text-[15px] leading-7 text-[#4B5563]">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
