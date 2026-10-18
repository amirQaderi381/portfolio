
const COLORS = {
  background: "#080D19",
  surface: "rgba(15, 23, 42, 0.72)",
  primary: "#8BE9FD",
  secondary: "#BD93F9",
  success: "#50FA7B",
  text: "#F1F5F9",
  muted: "#94A3B8",
  border: "rgba(148, 163, 184, 0.14)",
};


export const experiences = [
  {
    role: "توسعه‌دهنده فول‌استک",
    company: "Yekpay",
    period: "اردیبهشت ۱۴۰۳ تا خرداد ۱۴۰۴",
    type: "تجربه کاری",
    description:
      "توسعه و نگهداری سیستم‌های مالی شامل کارت و کیف پول دیجیتال، پرداخت آنلاین و اتصال به درگاه‌های پرداخت، به‌همراه راه‌اندازی زیرساخت و فرآیندهای استقرار.",
    highlights: [
      "پیاده‌سازی و مدیریت سیستم کارت و کیف پول دیجیتال با سرویس PEP (شارژ، صدور، فعال‌سازی)",
      "طراحی و پیاده‌سازی وب‌هوک‌های مدیریت کارت (فعال‌سازی، شارژ، جزئیات هزینه)",
      "پیاده‌سازی فرایند KYC برای بهبود دقت و سرعت احراز هویت مالی",
      "پردازش پرداخت آنلاین و مدیریت کیف پول دیجیتال با DixiPay",
      "توسعه APIهای پرداخت برای اتصال به درگاه‌های مالی مختلف",
      "پیاده‌سازی اتصال امن به درگاه Sber برای شارژ کیف پول و انجام تراکنش‌ها",
      "توسعه رابط کاربری و API با استفاده از Laravel و React همراه با Redux",
      "پیکربندی سرورهای اوبونتو و پیاده‌سازی فرآیندهای CI/CD",
      "داکرایز کردن پروژه برای افزایش قابلیت حمل و مقیاس‌پذیری",
      "راه‌اندازی HAProxy روی ماشین مجازی برای دریافت درخواست‌های کاربران از طریق دامنه و انتقال آن‌ها به اپلیکیشن داکری (HTTP/HTTPS به Docker)",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "React",
      "Redux",
      "Docker",
      "HAProxy",
      "Ubuntu",
      "CI/CD",
      "REST API",
    ],
    color: COLORS.primary,
  },
  {
    role: "توسعه‌دهنده فول‌استک",
    company: "Pishro Fanavar (پیشرو فناور)",
    period: "بهمن ۱۴۰۲ تا اردیبهشت ۱۴۰۳",
    type: "تجربه کاری",
    description:
      "مسئول توسعه یک سیستم مدیریت محتوا (CMS) مبتنی بر PHP و Laravel با امکاناتی مانند post types و magic editor. همچنین مشارکت در پروژه‌های مختلف با React.js، Next.js، PHP و Laravel و ساخت RESTful APIها و اتصال آن‌ها به Next.js.",
    technologies: ["PHP", "Laravel", "React.js", "Next.js", "REST API"],
    color: COLORS.secondary,
  },
  {
    role: "توسعه‌دهنده فول‌استک",
    company: "Langeek",
    period: "مرداد ۱۴۰۲ تا بهمن ۱۴۰۲",
    type: "تجربه کاری",
    description:
      "طراحی و پیاده‌سازی پنل مدیریت (فرانت‌اند: Tailwind CSS و JavaScript، بک‌اند: Laravel با Docker). همچنین مشارکت در توسعه پروژه دیکشنری با Redux، Next.js، TypeScript و Laravel (Docker).",
    technologies: [
      "Laravel",
      "Docker",
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "JavaScript",
    ],
    color: COLORS.success,
  },
];