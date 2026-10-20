import { createTheme } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";
import { COLORS } from "./colors";

export { COLORS };

/* =========================================================
   Home page tokens  →  theme.custom.home
   دارک: همان رنگ‌های قبلی صفحه Home
   لایت: ایندیگو + فوشیا + سیان
   ========================================================= */
const homeDark = {
  body: "#a1acc0",
  role: "#67e8f9",

  sectionBg: `
    radial-gradient(ellipse at 80% 20%, rgba(124, 58, 237, 0.18), transparent 42%),
    radial-gradient(ellipse at 12% 82%, rgba(6, 182, 212, 0.12), transparent 38%),
    linear-gradient(135deg, #070a14 0%, #0b1020 52%, #101126 100%)
  `,
  dotsImage:
    "radial-gradient(rgba(148,163,184,0.8) 0.7px, transparent 0.7px)",
  dotsOpacity: 0.16,
  glowA: "rgba(139,92,246,0.13)",
  glowB: "rgba(34,211,238,0.09)",

  welcome: {
    border: "rgba(52,211,153,0.2)",
    bg: "rgba(16,185,129,0.065)",
    text: "#a7f3d0",
    icon: "#6ee7b7",
    dot: "#34d399",
    dotGlow: "0 0 12px rgba(52,211,153,0.65)",
    ring: "rgba(52,211,153,0.6)",
  },

  nameGradient:
    "linear-gradient(100deg, #ffffff 5%, #c4b5fd 52%, #67e8f9 100%)",

  stat: {
    border: "rgba(148,163,184,0.14)",
    bg: "rgba(255,255,255,0.035)",
    gradient: "linear-gradient(100deg, #c4b5fd, #67e8f9)",
    shadow: "none",
  },

  primaryBtn: {
    color: "#080b18",
    bg: "linear-gradient(105deg, #a78bfa, #67e8f9)",
    hoverBg: "linear-gradient(105deg, #c4b5fd, #a5f3fc)",
    hoverFilter: "none",
    shadow: "0 8px 28px rgba(103,232,249,0.12)",
    hoverShadow: "0 12px 32px rgba(103,232,249,0.23)",
    outline: "#67e8f9",
  },

  ghostBtn: {
    color: "#e2e8f0",
    border: "rgba(148,163,184,0.2)",
    bg: "rgba(255,255,255,0.035)",
    hoverBorder: "rgba(167,139,250,0.55)",
    hoverBg: "rgba(139,92,246,0.1)",
    outline: "#a78bfa",
  },

  techBox: {
    border: "rgba(148,163,184,0.15)",
    bg: "rgba(255,255,255,0.04)",
  },
  technologies: {
    Laravel: {
      color: "#c4b5fd",
      hoverBg: "#c4b5fd12",
      hoverShadow: "0 0 20px #c4b5fd18",
    },
    React: {
      color: "#67e8f9",
      hoverBg: "#67e8f912",
      hoverShadow: "0 0 20px #67e8f918",
    },
    PHP: {
      color: "#a5b4fc",
      hoverBg: "#a5b4fc12",
      hoverShadow: "0 0 20px #a5b4fc18",
    },
    MySQL: {
      color: "#7dd3fc",
      hoverBg: "#7dd3fc12",
      hoverShadow: "0 0 20px #7dd3fc18",
    },
  },

  frame: {
    border: "rgba(255,255,255,0.09)",
    bg: "linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.012))",
    shadow:
      "0 30px 90px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.045)",
    topLine:
      "linear-gradient(90deg, transparent, rgba(167,139,250,0.65), rgba(103,232,249,0.65), transparent)",
    innerBorder: "rgba(255,255,255,0.035)",
    glow: "radial-gradient(circle, rgba(139,92,246,0.2), rgba(34,211,238,0.08) 48%, transparent 72%)",
    lighting:
      "radial-gradient(ellipse at 50% 40%, rgba(124,58,237,0.09), transparent 65%)",
    imageShadow: "drop-shadow(0 18px 28px rgba(0,0,0,0.15))",
  },

  badge: {
    bg: "rgba(15,18,37,0.84)",
    shadow: "0 12px 35px rgba(0,0,0,0.2)",
    title: "#f1f5f9",
    sub: "#94a3b8",
    codeBorder: "rgba(167,139,250,0.23)",
    codeColor: "#c4b5fd",
    codeIconBg: "rgba(139,92,246,0.13)",
    techBorder: "rgba(34,211,238,0.2)",
    techColor: "#67e8f9",
    techIconBg: "rgba(34,211,238,0.1)",
  },
};

const homeLight = {
  body: "#3F3F73",
  role: "#4F46E5",

  // Aurora: بلوب‌های فوشیا، سیان، ایندیگو و رز روی زمینه پاستلی
  sectionBg: `
    radial-gradient(ellipse 60% 55% at 88% 12%, rgba(217, 70, 239, 0.42), transparent 62%),
    radial-gradient(ellipse 58% 58% at 8% 88%, rgba(6, 182, 212, 0.45), transparent 62%),
    radial-gradient(ellipse 45% 45% at 52% 48%, rgba(99, 102, 241, 0.24), transparent 70%),
    radial-gradient(ellipse 40% 40% at 96% 92%, rgba(251, 113, 133, 0.28), transparent 65%),
    linear-gradient(135deg, #EEF2FF 0%, #DFF3FF 30%, #F3E3FF 65%, #FFE3F1 100%)
  `,
  dotsImage: "radial-gradient(rgba(79,70,229,0.6) 0.8px, transparent 0.8px)",
  dotsOpacity: 0.24,
  glowA: "rgba(217,70,239,0.40)",
  glowB: "rgba(6,182,212,0.40)",

  welcome: {
    border: "rgba(16,185,129,0.45)",
    bg: "rgba(16,185,129,0.15)",
    text: "#047857",
    icon: "#059669",
    dot: "#10B981",
    dotGlow: "0 0 14px rgba(16,185,129,0.65)",
    ring: "rgba(16,185,129,0.7)",
  },

  nameGradient:
    "linear-gradient(100deg, #4338CA 0%, #C026D3 52%, #0891B2 100%)",

  stat: {
    border: "rgba(99,102,241,0.32)",
    bg: "rgba(255,255,255,0.62)",
    gradient: "linear-gradient(100deg, #4338CA, #C026D3)",
    shadow: "0 10px 30px rgba(99,102,241,0.18)",
  },

  primaryBtn: {
    color: "#FFFFFF",
    bg: "linear-gradient(120deg, #06B6D4 0%, #6366F1 45%, #D946EF 100%)",
    hoverBg: "linear-gradient(120deg, #06B6D4 0%, #6366F1 45%, #D946EF 100%)",
    hoverFilter: "brightness(1.1) saturate(1.1)",
    shadow: "0 10px 30px rgba(99,102,241,0.45)",
    hoverShadow: "0 16px 42px rgba(217,70,239,0.55)",
    outline: "#4F46E5",
  },

  ghostBtn: {
    color: "#312E81",
    border: "rgba(79,70,229,0.38)",
    bg: "rgba(255,255,255,0.62)",
    hoverBorder: "rgba(217,70,239,0.75)",
    hoverBg: "rgba(217,70,239,0.13)",
    outline: "#D946EF",
  },

  techBox: {
    border: "rgba(99,102,241,0.3)",
    bg: "rgba(255,255,255,0.8)",
  },
  technologies: {
    Laravel: {
      color: "#C026D3",
      hoverBg: "#C026D31A",
      hoverShadow: "0 0 24px #C026D350",
    },
    React: {
      color: "#0891B2",
      hoverBg: "#0891B21A",
      hoverShadow: "0 0 24px #0891B250",
    },
    PHP: {
      color: "#4F46E5",
      hoverBg: "#4F46E51A",
      hoverShadow: "0 0 24px #4F46E550",
    },
    MySQL: {
      color: "#0284C7",
      hoverBg: "#0284C71A",
      hoverShadow: "0 0 24px #0284C750",
    },
  },

  frame: {
    border: "rgba(255,255,255,0.9)",
    bg: "linear-gradient(145deg, rgba(255,255,255,0.78), rgba(255,255,255,0.32))",
    shadow:
      "0 30px 90px rgba(99,102,241,0.32), inset 0 1px 0 rgba(255,255,255,0.95)",
    topLine:
      "linear-gradient(90deg, transparent, rgba(6,182,212,0.9), rgba(217,70,239,0.9), transparent)",
    innerBorder: "rgba(99,102,241,0.16)",
    glow: "radial-gradient(circle, rgba(99,102,241,0.38), rgba(217,70,239,0.22) 48%, transparent 72%)",
    lighting:
      "radial-gradient(ellipse at 50% 40%, rgba(217,70,239,0.14), transparent 65%)",
    imageShadow: "drop-shadow(0 22px 32px rgba(79,70,229,0.32))",
  },

  badge: {
    bg: "rgba(255,255,255,0.88)",
    shadow: "0 14px 40px rgba(99,102,241,0.3)",
    title: "#1E1B4B",
    sub: "#5B5F8A",
    codeBorder: "rgba(124,58,237,0.42)",
    codeColor: "#6D28D9",
    codeIconBg: "rgba(124,58,237,0.15)",
    techBorder: "rgba(6,182,212,0.5)",
    techColor: "#0E7490",
    techIconBg: "rgba(6,182,212,0.17)",
  },
};

/* =========================================================
   About page tokens  →  theme.custom.about
   دارک: همان رنگ‌های قبلی صفحه About
   لایت: ایندیگو + فوشیا + سیان (Aurora)
   ========================================================= */
const aboutDark = {
  sectionBg: `
    radial-gradient(ellipse at 10% 10%, rgba(59,130,246,0.13), transparent 40%),
    radial-gradient(ellipse at 90% 85%, rgba(139,92,246,0.12), transparent 38%),
    #080d19
  `,
  dotsImage: "radial-gradient(rgba(148,163,184,0.6) 0.7px, transparent 0.7px)",
  dotsOpacity: 0.13,

  accent: "#8be9fd",
  bodyText: "#cbd5e1",
  divider: "rgba(148,163,184,0.15)",

  pageChip: {
    color: "#8be9fd",
    bg: "rgba(139,233,253,0.08)",
    border: "rgba(139,233,253,0.2)",
  },

  titleGradient: "linear-gradient(90deg, #8be9fd 10%, #a5b4fc 55%, #c4b5fd 100%)",
  underline: {
    bg: "linear-gradient(90deg, #8be9fd, #818cf8)",
    shadow: "0 0 18px rgba(139,233,253,0.4)",
  },

  panel: {
    bg: "rgba(15, 23, 42, 0.76)",
    border: "rgba(148, 163, 184, 0.13)",
    hoverBorder: "rgba(139, 233, 253, 0.3)",
    shadow: "0 15px 45px rgba(0, 0, 0, 0.18)",
  },

  headingChip: {
    bg: "rgba(139, 233, 253, 0.1)",
    color: "#8be9fd",
    border: "rgba(139, 233, 253, 0.2)",
  },
  headingChip2: {
    bg: "rgba(196,181,253,0.09)",
    color: "#c4b5fd",
    border: "rgba(196,181,253,0.22)",
  },

  info: {
    bg: "rgba(255,255,255,0.025)",
    border: "rgba(148,163,184,0.09)",
    hoverBg: "rgba(139,233,253,0.06)",
    hoverBorder: "rgba(139,233,253,0.25)",
    iconBg: "rgba(139,233,253,0.09)",
    iconColor: "#8be9fd",
    value: "#e2e8f0",
  },

  avatar: {
    frame: "linear-gradient(135deg, #8be9fd, #6366f1 55%, #c084fc)",
    shadow: "0 0 30px rgba(99,102,241,0.2), 0 0 60px rgba(139,233,253,0.08)",
    hoverShadow: "0 0 38px rgba(139,233,253,0.28)",
    innerBorder: "#111827",
    innerBg: "#111827",
    badgeBg: "#111827",
    badgeBorder: "rgba(139,233,253,0.4)",
    badgeColor: "#8be9fd",
    badgeShadow: "none",
  },

  skill: {
    name: "#e2e8f0",
    iconBg: "rgba(255,255,255,0.04)",
    iconBorder: "rgba(148,163,184,0.12)",
    track: "rgba(148,163,184,0.14)",
    glow: "66",
    darken: null,
    darkenWith: null,
  },

  skills: {
    iconColor: "#c4b5fd",
    iconBg: "rgba(196,181,253,0.1)",
    iconBorder: "rgba(196,181,253,0.15)",
    chipColor: "#8be9fd",
    chipBg: "rgba(139,233,253,0.07)",
    chipBorder: "rgba(139,233,253,0.15)",
  },
};

const aboutLight = {
  sectionBg: `
    radial-gradient(ellipse 55% 45% at 8% 8%, rgba(6, 182, 212, 0.40), transparent 62%),
    radial-gradient(ellipse 55% 50% at 92% 88%, rgba(217, 70, 239, 0.38), transparent 62%),
    radial-gradient(ellipse 40% 40% at 50% 50%, rgba(99, 102, 241, 0.20), transparent 70%),
    radial-gradient(ellipse 35% 35% at 94% 8%, rgba(251, 113, 133, 0.24), transparent 65%),
    linear-gradient(135deg, #EEF2FF 0%, #DFF3FF 30%, #F3E3FF 65%, #FFE3F1 100%)
  `,
  dotsImage: "radial-gradient(rgba(79,70,229,0.6) 0.8px, transparent 0.8px)",
  dotsOpacity: 0.2,

  accent: "#4F46E5",
  bodyText: "#3F3F73",
  divider: "rgba(99,102,241,0.2)",

  pageChip: {
    color: "#4338CA",
    bg: "rgba(79,70,229,0.1)",
    border: "rgba(79,70,229,0.3)",
  },

  titleGradient: "linear-gradient(90deg, #4338CA 10%, #C026D3 55%, #0891B2 100%)",
  underline: {
    bg: "linear-gradient(90deg, #06B6D4, #6366F1, #D946EF)",
    shadow: "0 0 18px rgba(99,102,241,0.5)",
  },

  panel: {
    bg: "rgba(255, 255, 255, 0.72)",
    border: "rgba(99, 102, 241, 0.25)",
    hoverBorder: "rgba(217, 70, 239, 0.5)",
    shadow: "0 20px 60px rgba(99, 102, 241, 0.2)",
  },

  headingChip: {
    bg: "rgba(79, 70, 229, 0.1)",
    color: "#4338CA",
    border: "rgba(79, 70, 229, 0.3)",
  },
  headingChip2: {
    bg: "rgba(217,70,239,0.1)",
    color: "#A21CAF",
    border: "rgba(217,70,239,0.32)",
  },

  info: {
    bg: "rgba(255,255,255,0.7)",
    border: "rgba(99,102,241,0.2)",
    hoverBg: "rgba(217,70,239,0.08)",
    hoverBorder: "rgba(217,70,239,0.45)",
    iconBg: "rgba(79,70,229,0.12)",
    iconColor: "#4F46E5",
    value: "#1E1B4B",
  },

  avatar: {
    frame: "linear-gradient(135deg, #06B6D4, #6366F1 55%, #D946EF)",
    shadow: "0 0 36px rgba(99,102,241,0.38), 0 0 70px rgba(217,70,239,0.2)",
    hoverShadow: "0 0 44px rgba(217,70,239,0.5)",
    innerBorder: "#FFFFFF",
    innerBg: "#EEF2FF",
    badgeBg: "#FFFFFF",
    badgeBorder: "rgba(79,70,229,0.45)",
    badgeColor: "#4338CA",
    badgeShadow: "0 8px 20px rgba(99,102,241,0.25)",
  },

  skill: {
    name: "#1E1B4B",
    iconBg: "rgba(255,255,255,0.85)",
    iconBorder: "rgba(99,102,241,0.25)",
    track: "rgba(99,102,241,0.14)",
    glow: "55",
    // رنگ هر مهارت برای خوانایی روی زمینه روشن کمی تیره‌تر می‌شود
    darken: 78,
    darkenWith: "#1E1B4B",
  },

  skills: {
    iconColor: "#A21CAF",
    iconBg: "rgba(217,70,239,0.12)",
    iconBorder: "rgba(217,70,239,0.3)",
    chipColor: "#4338CA",
    chipBg: "rgba(79,70,229,0.1)",
    chipBorder: "rgba(79,70,229,0.28)",
  },
};

/* =========================================================
   Resume page tokens  →  theme.custom.resume
   دارک: همان رنگ‌های قبلی صفحه رزومه
   لایت: ایندیگو + فوشیا + سیان (Aurora)
   accents: سه رنگ اصلی (primary / secondary / success) که با alpha() ترکیب می‌شوند
   ========================================================= */
const resumeDark = {
  sectionBg: `
    radial-gradient(ellipse at 8% 8%, rgba(59, 130, 246, 0.14), transparent 36%),
    radial-gradient(ellipse at 92% 48%, rgba(139, 92, 246, 0.12), transparent 38%),
    radial-gradient(ellipse at 45% 100%, rgba(34, 211, 238, 0.06), transparent 35%),
    #080D19
  `,
  dotsImage:
    "radial-gradient(rgba(148, 163, 184, 0.7) 0.7px, transparent 0.7px)",
  dotsOpacity: 0.12,

  scrollbarThumb: "rgba(139, 233, 253, 0.3)",
  scrollbarColor: "rgba(139, 233, 253, 0.35) transparent",
  focusOutline: "rgba(139, 233, 253, 0.3)",

  accents: {
    primary: "#8BE9FD",
    secondary: "#BD93F9",
    success: "#50FA7B",
  },
  border: "rgba(148, 163, 184, 0.14)",
  dotBorder: "#080D19",

  // رنگ‌های داده (experience.color) برای متن در دارک بدون تغییر می‌مانند
  toneMix: null,
  toneWith: null,

  panel: {
    bg: "linear-gradient(145deg, rgba(20, 30, 52, 0.88), rgba(10, 16, 31, 0.82))",
    shadow: "0 16px 50px rgba(0, 0, 0, 0.16)",
    hoverBorder: "rgba(139, 233, 253, 0.3)",
    hoverShadow: "0 16px 48px rgba(59, 130, 246, 0.09)",
  },

  titleGradient: "linear-gradient(90deg, #8BE9FD 5%, #BD93F9 95%)",

  outlinedBtn: {
    hoverBg: 0.08,
    glow: 0.12,
  },
  containedBtn: {
    color: "#08111F",
    bg: "linear-gradient(110deg, #8BE9FD, #BD93F9)",
    hoverBg: "linear-gradient(110deg, #A5F3FC, #D8B4FE)",
    shadow: "0 6px 22px rgba(189, 147, 249, 0.18)",
    hoverShadow: "0 8px 28px rgba(189, 147, 249, 0.28)",
  },

  periodChipBg: "rgba(148, 163, 184, 0.06)",
  focusAreaBg: "rgba(148, 163, 184, 0.045)",
};

const resumeLight = {
  sectionBg: `
    radial-gradient(ellipse 50% 40% at 6% 6%, rgba(6, 182, 212, 0.38), transparent 62%),
    radial-gradient(ellipse 50% 45% at 94% 48%, rgba(217, 70, 239, 0.34), transparent 62%),
    radial-gradient(ellipse 45% 35% at 45% 100%, rgba(99, 102, 241, 0.26), transparent 65%),
    radial-gradient(ellipse 35% 30% at 96% 4%, rgba(251, 113, 133, 0.22), transparent 65%),
    linear-gradient(135deg, #EEF2FF 0%, #DFF3FF 30%, #F3E3FF 65%, #FFE3F1 100%)
  `,
  dotsImage: "radial-gradient(rgba(79, 70, 229, 0.6) 0.8px, transparent 0.8px)",
  dotsOpacity: 0.2,

  scrollbarThumb: "rgba(79, 70, 229, 0.4)",
  scrollbarColor: "rgba(79, 70, 229, 0.45) transparent",
  focusOutline: "rgba(79, 70, 229, 0.4)",

  accents: {
    primary: "#4F46E5",
    secondary: "#C026D3",
    success: "#059669",
  },
  border: "rgba(99, 102, 241, 0.22)",
  dotBorder: "#EEF2FF",

  // رنگ‌های داده (experience.color) برای متن در لایت کمی تیره‌تر می‌شوند
  toneMix: 72,
  toneWith: "#1E1B4B",

  panel: {
    bg: "linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.62))",
    shadow: "0 16px 50px rgba(99, 102, 241, 0.16)",
    hoverBorder: "rgba(217, 70, 239, 0.5)",
    hoverShadow: "0 18px 50px rgba(217, 70, 239, 0.2)",
  },

  titleGradient: "linear-gradient(90deg, #4338CA 5%, #C026D3 55%, #0891B2 100%)",

  outlinedBtn: {
    hoverBg: 0.1,
    glow: 0.25,
  },
  containedBtn: {
    color: "#FFFFFF",
    bg: "linear-gradient(120deg, #06B6D4 0%, #6366F1 50%, #D946EF 100%)",
    hoverBg: "linear-gradient(120deg, #06B6D4 0%, #6366F1 50%, #D946EF 100%)",
    shadow: "0 10px 28px rgba(99, 102, 241, 0.4)",
    hoverShadow: "0 14px 38px rgba(217, 70, 239, 0.5)",
  },

  periodChipBg: "rgba(99, 102, 241, 0.08)",
  focusAreaBg: "rgba(255, 255, 255, 0.7)",
};

/* =========================================================
   Portfolio page tokens  →  theme.custom.portfolio
   دارک: همان رنگ‌های قبلی صفحه نمونه‌کارها
   لایت: ایندیگو + فوشیا + سیان (Aurora)
   accents: رنگ‌های اصلی که با alpha() ترکیب می‌شوند
   ========================================================= */
const portfolioDark = {
  sectionBg: `
    radial-gradient(ellipse at 8% 8%, rgba(59, 130, 246, 0.14), transparent 36%),
    radial-gradient(ellipse at 92% 48%, rgba(139, 92, 246, 0.12), transparent 38%),
    radial-gradient(ellipse at 45% 100%, rgba(34, 211, 238, 0.06), transparent 35%),
    #080D19
  `,
  dotsImage:
    "radial-gradient(rgba(148, 163, 184, 0.7) 0.7px, transparent 0.7px)",
  dotsOpacity: 0.12,
  coverDots:
    "radial-gradient(rgba(148, 163, 184, 0.6) 0.7px, transparent 0.7px)",

  scrollbarThumb: "rgba(139, 233, 253, 0.3)",
  scrollbarColor: "rgba(139, 233, 253, 0.35) transparent",

  accents: {
    primary: "#8BE9FD",
    secondary: "#BD93F9",
    success: "#50FA7B",
    orange: "#FFB86C",
  },
  border: "rgba(148, 163, 184, 0.14)",

  // رنگ‌های داده (project.color) برای متن در دارک بدون تغییر می‌مانند
  toneMix: null,
  toneWith: null,
  spotlight: 0.16,

  panel: {
    bg: "linear-gradient(145deg, rgba(20, 30, 52, 0.88), rgba(10, 16, 31, 0.82))",
    shadow: "0 16px 50px rgba(0, 0, 0, 0.16)",
  },

  titleGradient: "linear-gradient(90deg, #8BE9FD 5%, #BD93F9 95%)",

  pill: {
    bg: "rgba(148, 163, 184, 0.05)",
    activeText: "#08111F",
  },

  containedBtn: {
    color: "#08111F",
    hoverBg: "linear-gradient(110deg, #A5F3FC, #D8B4FE)",
  },

  neutralChipBg: "rgba(148, 163, 184, 0.06)",
  extraChipBg: "rgba(148, 163, 184, 0.08)",
  searchBg: "rgba(148, 163, 184, 0.06)",

  floatingBg: "rgba(8, 13, 25, 0.7)",
  closeBtn: {
    bg: "rgba(8, 13, 25, 0.65)",
    hoverBg: "rgba(8, 13, 25, 0.9)",
  },

  dialog: {
    backdrop: "rgba(4, 7, 15, 0.72)",
    bg: "linear-gradient(145deg, rgba(20, 30, 52, 0.98), rgba(10, 16, 31, 0.98))",
    shadow: "0 30px 80px rgba(0, 0, 0, 0.5)",
    footerBg: "rgba(8, 13, 25, 0.45)",
  },
};

const portfolioLight = {
  sectionBg: `
    radial-gradient(ellipse 50% 40% at 6% 6%, rgba(6, 182, 212, 0.38), transparent 62%),
    radial-gradient(ellipse 50% 45% at 94% 48%, rgba(217, 70, 239, 0.34), transparent 62%),
    radial-gradient(ellipse 45% 35% at 45% 100%, rgba(99, 102, 241, 0.26), transparent 65%),
    radial-gradient(ellipse 35% 30% at 96% 4%, rgba(251, 113, 133, 0.22), transparent 65%),
    linear-gradient(135deg, #EEF2FF 0%, #DFF3FF 30%, #F3E3FF 65%, #FFE3F1 100%)
  `,
  dotsImage: "radial-gradient(rgba(79, 70, 229, 0.6) 0.8px, transparent 0.8px)",
  dotsOpacity: 0.2,
  coverDots: "radial-gradient(rgba(79, 70, 229, 0.5) 0.8px, transparent 0.8px)",

  scrollbarThumb: "rgba(79, 70, 229, 0.4)",
  scrollbarColor: "rgba(79, 70, 229, 0.45) transparent",

  accents: {
    primary: "#4F46E5",
    secondary: "#C026D3",
    success: "#059669",
    orange: "#EA580C",
  },
  border: "rgba(99, 102, 241, 0.22)",

  // رنگ‌های داده (project.color) برای متن در لایت کمی تیره‌تر می‌شوند
  toneMix: 72,
  toneWith: "#1E1B4B",
  spotlight: 0.2,

  panel: {
    bg: "linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.62))",
    shadow: "0 16px 50px rgba(99, 102, 241, 0.16)",
  },

  titleGradient: "linear-gradient(90deg, #4338CA 5%, #C026D3 55%, #0891B2 100%)",

  pill: {
    bg: "rgba(255, 255, 255, 0.65)",
    activeText: "#FFFFFF",
  },

  containedBtn: {
    color: "#FFFFFF",
    hoverBg: "linear-gradient(110deg, #4338CA, #A21CAF)",
  },

  neutralChipBg: "rgba(99, 102, 241, 0.08)",
  extraChipBg: "rgba(99, 102, 241, 0.1)",
  searchBg: "rgba(255, 255, 255, 0.75)",

  floatingBg: "rgba(255, 255, 255, 0.88)",
  closeBtn: {
    bg: "rgba(255, 255, 255, 0.85)",
    hoverBg: "#FFFFFF",
  },

  dialog: {
    backdrop: "rgba(30, 27, 75, 0.45)",
    bg: "linear-gradient(145deg, #FFFFFF, #F3EEFF)",
    shadow: "0 30px 80px rgba(99, 102, 241, 0.3)",
    footerBg: "rgba(238, 242, 255, 0.85)",
  },
};

// NOTE: Create Custom Theme
export const darkTheme = createTheme({
  direction: "rtl",

  palette: {
    mode: "dark",

    primary: {
      main: "#8BE9FD",
      light: "#A5F3FC",
      dark: "#06B6D4",
      contrastText: "#080D19",
    },

    secondary: {
      main: "#BD93F9",
      light: "#D8B4FE",
      dark: "#8B5CF6",
      contrastText: "#080D19",
    },

    background: {
      default: "#080D19",
      paper: "#0F172A",
    },

    text: {
      primary: "#F1F5F9",
      secondary: "#94A3B8",
    },

    divider: "rgba(148, 163, 184, 0.14)",

    error: {
      main: "#FB7185",
    },

    success: {
      main: "#34D399",
    },

    info: {
      main: "#67E8F9",
    },

    warning: {
      main: "#FCD34D",
    },
  },

  typography: {
    fontFamily: "Vazirmatn, vazir, Roboto, sans-serif",
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 800,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    //borderRadius: 12,
  },

  // Portfolio Gradients
  custom: {
    gradients: {
      primary: "linear-gradient(135deg, #8BE9FD 0%, #8B5CF6 55%, #BD93F9 100%)",

      background:
        "linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #312E81 100%)",

      neon: "linear-gradient(90deg, #8BE9FD 0%, #A78BFA 50%, #F0ABFC 100%)",

      glass:
        "linear-gradient(145deg, rgba(139,233,253,0.18), rgba(189,147,249,0.12), rgba(8,13,25,0.92))",

      button: "linear-gradient(135deg, #06B6D4 0%, #6366F1 50%, #A855F7 100%)",
    },

    // Home page
    home: homeDark,

    // About page
    about: aboutDark,

    // Resume page
    resume: resumeDark,

    // Portfolio page
    portfolio: portfolioDark,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#080D19",
          color: "#F1F5F9",
        },

        "::selection": {
          backgroundColor: "rgba(139, 233, 253, 0.3)",
          color: "#F1F5F9",
        },

        "*::-webkit-scrollbar": {
          width: "6px",
          height: "6px",
        },

        "*::-webkit-scrollbar-track": {
          background: "#080D19",
        },

        "*::-webkit-scrollbar-thumb": {
          background: "linear-gradient(180deg, #8BE9FD, #8B5CF6)",
          borderRadius: "10px",
        },
      },
    },

    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          transition: "all 0.25s ease",
        },

        containedPrimary: {
          color: "#080D19",
          background: "linear-gradient(135deg, #8BE9FD 0%, #8B5CF6 100%)",

          "&:hover": {
            boxShadow: "0 0 20px rgba(139, 233, 253, 0.25)",
            filter: "brightness(1.08)",
          },
        },

        containedSecondary: {
          color: "#080D19",
          background: "linear-gradient(135deg, #BD93F9 0%, #8B5CF6 100%)",

          "&:hover": {
            boxShadow: "0 0 20px rgba(189, 147, 249, 0.25)",
            filter: "brightness(1.08)",
          },
        },
      },

      variants: [
        {
          props: { variant: "dashed" },
          style: {
            textTransform: "none",
            border: `2px dashed ${blue[500]}`,
          },
        },

        {
          props: { variant: "dashed", color: "secondary" },
          style: {
            border: `2px dashed ${red[500]}`,
          },
        },
      ],
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(15, 23, 42, 0.72)",
          backgroundImage: "none",
          border: "1px solid rgba(148, 163, 184, 0.14)",
          borderRadius: 16,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(148, 163, 184, 0.14)",
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  direction: "rtl",

  palette: {
    mode: "light",

    // ایندیگو الکتریک
    primary: {
      main: "#4F46E5",
      light: "#818CF8",
      dark: "#3730A3",
      contrastText: "#FFFFFF",
    },

    // فوشیا / ارکیده
    secondary: {
      main: "#D946EF",
      light: "#E879F9",
      dark: "#A21CAF",
      contrastText: "#FFFFFF",
    },

    background: {
      default: "#F5F7FF",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#1E1B4B",
      secondary: "#5B5F8A",
    },

    divider: "rgba(79, 70, 229, 0.14)",

    error: {
      main: "#F43F5E",
    },

    success: {
      main: "#10B981",
    },

    info: {
      main: "#06B6D4",
    },

    warning: {
      main: "#F59E0B",
    },
  },

  typography: {
    fontFamily: "Vazirmatn, vazir, Roboto, sans-serif",
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    //borderRadius: 12,
  },

  // Portfolio Gradients
  custom: {
    gradients: {
      // سیان → ایندیگو → فوشیا
      primary: "linear-gradient(135deg, #06B6D4 0%, #4F46E5 50%, #D946EF 100%)",

      // پس‌زمینه پاستلی رنگی
      background:
        "linear-gradient(135deg, #EEF2FF 0%, #DFF3FF 30%, #F3E3FF 65%, #FFE3F1 100%)",

      // برای متن‌ها و خط‌های درخشان
      neon: "linear-gradient(90deg, #06B6D4 0%, #6366F1 40%, #D946EF 75%, #FB7185 100%)",

      glass:
        "linear-gradient(145deg, rgba(6,182,212,0.18), rgba(217,70,239,0.14), rgba(255,255,255,0.90))",

      button: "linear-gradient(135deg, #06B6D4 0%, #4F46E5 50%, #D946EF 100%)",
    },

    // Home page
    home: homeLight,

    // About page
    about: aboutLight,

    // Resume page
    resume: resumeLight,

    // Portfolio page
    portfolio: portfolioLight,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#F5F7FF",
          color: "#1E1B4B",
        },

        "::selection": {
          backgroundColor: "rgba(217, 70, 239, 0.25)",
          color: "#1E1B4B",
        },

        "*::-webkit-scrollbar": {
          width: "6px",
          height: "6px",
        },

        "*::-webkit-scrollbar-track": {
          background: "#F5F7FF",
        },

        "*::-webkit-scrollbar-thumb": {
          background: "linear-gradient(180deg, #06B6D4, #4F46E5, #D946EF)",
          borderRadius: "10px",
        },
      },
    },

    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          transition: "all 0.25s ease",
        },

        containedPrimary: {
          color: "#FFFFFF",
          background: "linear-gradient(135deg, #06B6D4 0%, #4F46E5 100%)",
          boxShadow: "0 6px 18px rgba(79, 70, 229, 0.28)",

          "&:hover": {
            boxShadow: "0 8px 26px rgba(79, 70, 229, 0.42)",
            filter: "brightness(1.08)",
            transform: "translateY(-1px)",
          },
        },

        containedSecondary: {
          color: "#FFFFFF",
          background: "linear-gradient(135deg, #D946EF 0%, #6366F1 100%)",
          boxShadow: "0 6px 18px rgba(217, 70, 239, 0.28)",

          "&:hover": {
            boxShadow: "0 8px 26px rgba(217, 70, 239, 0.42)",
            filter: "brightness(1.08)",
            transform: "translateY(-1px)",
          },
        },
      },

      variants: [
        {
          props: { variant: "dashed" },
          style: {
            textTransform: "none",
            border: `2px dashed ${blue[500]}`,
          },
        },

        {
          props: { variant: "dashed", color: "secondary" },
          style: {
            border: `2px dashed ${red[500]}`,
          },
        },
      ],
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.78)",
          backgroundImage: "none",
          border: "1px solid rgba(99, 102, 241, 0.22)",
          borderRadius: 16,
          boxShadow: "0 10px 40px rgba(79, 70, 229, 0.10)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          transition: "all 0.25s ease",

          "&:hover": {
            borderColor: "rgba(217, 70, 239, 0.45)",
            boxShadow: "0 14px 48px rgba(217, 70, 239, 0.18)",
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(79, 70, 229, 0.14)",
        },
      },
    },
  },
});