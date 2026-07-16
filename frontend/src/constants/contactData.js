import {
  FaClock,
  FaEnvelope,
  FaLocationDot,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa6";

export const heroContent = {
  title: "ያግኙን",
  breadcrumb: ["መነሻ", "ያግኙን"],
  description:
    "ለማንኛውም ጥያቄ፣ አስተያየት ወይም የአገልግሎት ጥያቄ በቀጥታ ማግኘት ይችላሉ።",
};

export const contactCards = [
  {
    title: "አድራሻ",
    icon: FaLocationDot,
    description:
      "አራዳ ክፍለ ከተማ ሠራተኛና ክህሎት ጽሕፈት ቤት\nአዲስ አበባ፣ ኢትዮጵያ",
  },
  {
    title: "ስልክ",
    icon: FaPhone,
    description:
      "+251 11 123 4567\n+251 11 123 4568",
  },
  {
    title: "ኢሜይል",
    icon: FaEnvelope,
    description:
      "info@aradalaborskills.gov.et",
  },
  {
    title: "የሥራ ሰዓት",
    icon: FaClock,
    description:
      "ሰኞ - ዓርብ\nከጠዋቱ 2:30 እስከ 11:30",
  },
];

export const formFields = [
  {
    id: "name",
    label: "ሙሉ ስም",
    type: "text",
    placeholder: "ሙሉ ስምዎን ያስገቡ",
    required: true,
  },
  {
    id: "email",
    label: "ኢሜይል",
    type: "email",
    placeholder: "ኢሜይልዎን ያስገቡ",
    required: true,
  },
  {
    id: "phone",
    label: "ስልክ ቁጥር",
    type: "tel",
    placeholder: "+251...",
    required: false,
  },
  {
    id: "subject",
    label: "ርዕሰ ጉዳይ",
    type: "text",
    placeholder: "ርዕሰ ጉዳዩን ያስገቡ",
    required: false,
  },
  {
    id: "message",
    label: "መልዕክት",
    type: "textarea",
    placeholder: "መልዕክትዎን ይጻፉ...",
    required: true,
  },
];

export const primaryAction = {
  label: "መልዕክት ላክ",
  icon: FaPaperPlane,
};