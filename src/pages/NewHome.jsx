import { useEffect, useRef, useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { keyframes } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import TerminalIcon from "@mui/icons-material/Terminal";
import CodeIcon from "@mui/icons-material/Code";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Typed from "typed.js";
import homeImage from "../assets/main.png";
import { SiLaravel, SiReact, SiPhp, SiMysql } from "react-icons/si";
import TextTransition from "../components/TextTransition";

const strings = [
  "توسعه‌دهنده فول‌استک",
  "مدرس برنامه‌نویسی",
  "فریلنسر",
  "تولیدکننده محتوای برنامه‌نویسی",
];

// رنگ‌ها از همان طیف فیروزه‌ای ← نیلی ← بنفش صفحه هستند
const technologies = [
  { label: "Laravel", color: "#c4b5fd", Icon: SiLaravel },
  { label: "React", color: "#67e8f9", Icon: SiReact },
  { label: "PHP", color: "#a5b4fc", Icon: SiPhp },
  { label: "MySQL", color: "#7dd3fc", Icon: SiMysql },
];

// ⚠️ این اعداد نمونه هستند؛ با اعداد واقعی خودتان جایگزین کنید
// (اگر آرایه را خالی بگذارید، این بخش نمایش داده نمی‌شود)
const stats = [
  { value: "۳+", label: "سال تجربه" },
  { value: "۲۰+", label: "پروژه" },
  { value: "۱۰۰+", label: "دانشجو" },
];

/* ---------- Keyframes ---------- */
// از ویژگی `translate` استفاده شده تا با پلاگین RTL (در صورت وجود) برعکس نشود.
// متن از سمت راست و تصویر از سمت چپ وارد می‌شود (چینش RTL).
const fromRight = keyframes`
  from { opacity: 0; translate: 44px 0; }
  to   { opacity: 1; translate: 0 0; }
`;

const fromLeft = keyframes`
  from { opacity: 0; translate: -44px 0; }
  to   { opacity: 1; translate: 0 0; }
`;

const floatBadge = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-7px); }
`;

const pulseRing = keyframes`
  0%   { transform: scale(1);   opacity: 0.8; }
  100% { transform: scale(2.4); opacity: 0; }
`;

const bounceDown = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(6px); }
`;

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

const slideFromRight = (i = 0) => ({
  animation: `${fromRight} 0.85s ${EASE} ${i * 0.11}s both`,
});

const slideFromLeft = (i = 0) => ({
  animation: `${fromLeft} 0.95s ${EASE} ${i * 0.11}s both`,
});

export const presets = {
  default: { type: "spring", stiffness: 170, damping: 26 },
  gentle: { type: "spring", stiffness: 120, damping: 14 },
  wobbly: { type: "spring", stiffness: 180, damping: 12 },
  stiff: { type: "spring", stiffness: 210, damping: 20 },
  slow: { type: "spring", stiffness: 280, damping: 60 },
};

export default function NewHome() {
  const nameEl = useRef(null);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["امیر قادری"],
      typeSpeed: 110,
      backSpeed: 80,
      backDelay: 50,
      showCursor: false,
    });

    const id = setInterval(
      () => setIndex((i) => (i + 1) % strings.length),
      3000,
    );

    return () => {
      typedName.destroy();
      clearInterval(id);
    };
  }, []);

  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        minHeight: "100vh",
        "@supports (height: 100dvh)": { minHeight: "100dvh" },
        overflowX: "hidden",
        boxSizing: "border-box",
        px: { xs: 2, sm: 4, md: 6, lg: 10, xl: 14 },
        pt: { xs: 5, sm: 7, md: 8 },
        pb: { xs: 10, sm: 11, md: 12 },
        color: "#f8fafc",
        isolation: "isolate",
        background: `
          radial-gradient(
            ellipse at 80% 20%,
            rgba(124, 58, 237, 0.18),
            transparent 42%
          ),
          radial-gradient(
            ellipse at 12% 82%,
            rgba(6, 182, 212, 0.12),
            transparent 38%
          ),
          linear-gradient(
            135deg,
            #070a14 0%,
            #0b1020 52%,
            #101126 100%
          )
        `,

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
          opacity: 0.16,
          backgroundImage:
            "radial-gradient(rgba(148,163,184,0.8) 0.7px, transparent 0.7px)",
          backgroundSize: "25px 25px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 90%)",
        },

        "@media (prefers-reduced-motion: reduce)": {
          "& *, & *::before, & *::after": {
            animationDuration: "0.01ms !important",
            animationIterationCount: "1 !important",
            animationDelay: "0s !important",
            scrollBehavior: "auto !important",
          },
        },
      }}
    >
      {/* Ambient lights */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: "5%",
          insetInlineEnd: "-130px",
          width: { xs: 200, md: 340 },
          height: { xs: 200, md: 340 },
          borderRadius: "50%",
          background: "rgba(139,92,246,0.13)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />

      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          bottom: 0,
          insetInlineStart: "20%",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(34,211,238,0.09)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />

      {/* Main content */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 1400,
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column-reverse", lg: "row" },
          gap: { xs: 5, sm: 6, md: 5, lg: 8 },
        }}
      >
        {/* Introduction */}
        <Box
          sx={{
            flex: "1 1 0",
            minWidth: 0,
            width: "100%",
            textAlign: "start",
          }}
        >
          {/* Welcome badge */}
          <Box sx={{ ...slideFromRight(0), mb: { xs: 3, md: 4 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                px: 1.8,
                py: 1,
                border: "1px solid rgba(52,211,153,0.2)",
                borderRadius: "999px",
                background: "rgba(16,185,129,0.065)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                maxWidth: "100%",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: 8,
                  height: 8,
                  flexShrink: 0,
                  borderRadius: "50%",
                  bgcolor: "#34d399",
                  boxShadow: "0 0 12px rgba(52,211,153,0.65)",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    border: "1px solid rgba(52,211,153,0.6)",
                    borderRadius: "50%",
                    animation: `${pulseRing} 2s ease-out infinite`,
                  },
                }}
              />

              <Typography
                sx={{
                  color: "#a7f3d0",
                  fontSize: { xs: 12, sm: 12.5 },
                  fontWeight: 600,
                  letterSpacing: 0.1,
                }}
              >
                سلام، به دنیای من خوش آمدید
              </Typography>

              <AutoAwesomeIcon sx={{ color: "#6ee7b7", fontSize: 15 }} />
            </Box>
          </Box>

          <Typography
            component="p"
            sx={{
              ...slideFromRight(1),
              color: "#94a3b8",
              fontSize: { xs: 15, md: 18 },
              fontWeight: 500,
              mb: 0.5,
            }}
          >
            من هستم،
          </Typography>

          <Box sx={{ ...slideFromRight(2) }}>
            <Typography
              ref={nameEl}
              component="h1"
              aria-label="امیر قادری"
              sx={{
                minHeight: { xs: "3.8rem", sm: "4.8rem", md: "5.3rem" },
                display: "flex",
                alignItems: "center",
                fontSize: {
                  xs: "2.45rem",
                  sm: "3.2rem",
                  md: "3.6rem",
                  lg: "4.25rem",
                },
                lineHeight: 1.45,
                fontWeight: 900,
                letterSpacing: { xs: "-1px", md: "-1.8px" },
                mb: 2,
                overflowWrap: "anywhere",
                background:
                  "linear-gradient(100deg, #ffffff 5%, #c4b5fd 52%, #67e8f9 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            />
          </Box>

          {/* Animated role */}
          <Box
            sx={{
              ...slideFromRight(3),
              display: "flex",
              alignItems: "stretch",
              gap: 1.5,
              mb: 3,
              minWidth: 0,
            }}
          >
            <Typography
              component="div"
              aria-label="عناوین شغلی"
              sx={{
                minWidth: 0,
                minHeight: { xs: 64, sm: 48 },
                display: "flex",
                alignItems: "center",
                fontSize: {
                  xs: "1.15rem",
                  sm: "1.4rem",
                  md: "1.6rem",
                  lg: "1.8rem",
                },
                fontWeight: 750,
                color: "#67e8f9",
                lineHeight: 1.8,
                overflowWrap: "anywhere",
              }}
            >
              <TextTransition text={strings[index]} spring={presets.gentle} />
            </Typography>
          </Box>

          <Typography
            component="p"
            sx={{
              ...slideFromRight(4),
              maxWidth: 540,
              color: "#a1acc0",
              fontSize: { xs: 13.5, sm: 14.5, md: 15.5 },
              lineHeight: { xs: 2, md: 2.15 },
              mb: { xs: 3, md: 3.5 },
            }}
          >
            عاشق ساختن محصولات دیجیتال، حل چالش‌های فنی و تبدیل ایده‌ها به
            تجربه‌های کاربردی هستم. اینجا جایی است که خلاقیت و کدنویسی به هم
            می‌رسند.
          </Typography>

          {/* Stats */}
          {stats.length > 0 && (
            <Box
              sx={{
                ...slideFromRight(5),
                display: "flex",
                flexWrap: "wrap",
                gap: { xs: 1.5, sm: 2 },
                mb: { xs: 3, md: 3.5 },
              }}
            >
              {stats.map(({ value, label }) => (
                <Box
                  key={label}
                  sx={{
                    minWidth: { xs: 92, sm: 108 },
                    px: 2,
                    py: 1.2,
                    borderRadius: "14px",
                    border: "1px solid rgba(148,163,184,0.14)",
                    background: "rgba(255,255,255,0.035)",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "1.25rem", sm: "1.45rem" },
                      fontWeight: 900,
                      lineHeight: 1.5,
                      background: "linear-gradient(100deg, #c4b5fd, #67e8f9)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {value}
                  </Typography>
                  <Typography sx={{ color: "#94a3b8", fontSize: 12 }}>
                    {label}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}

          {/* Actions */}
          <Box
            sx={{
              ...slideFromRight(6),
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1.5,
              mb: { xs: 3.5, md: 4.5 },
            }}
          >
            <Button
              component="a"
              href="#contact"
              endIcon={<ArrowOutwardIcon />}
              sx={{
                minHeight: 48,
                px: { xs: 2.2, sm: 3 },
                borderRadius: "13px",
                color: "#080b18",
                fontWeight: 800,
                fontSize: 13.5,
                textTransform: "none",
                background: "linear-gradient(105deg, #a78bfa, #67e8f9)",
                boxShadow: "0 8px 28px rgba(103,232,249,0.12)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 12px 32px rgba(103,232,249,0.23)",
                  background: "linear-gradient(105deg, #c4b5fd, #a5f3fc)",
                },
                "&:focus-visible": {
                  outline: "2px solid #67e8f9",
                  outlineOffset: 4,
                },
              }}
            >
              ارتباط با من
            </Button>

            <Button
              component="a"
              href="#projects"
              sx={{
                minHeight: 48,
                px: { xs: 2.2, sm: 3 },
                borderRadius: "13px",
                color: "#e2e8f0",
                fontWeight: 700,
                fontSize: 13.5,
                textTransform: "none",
                border: "1px solid rgba(148,163,184,0.2)",
                background: "rgba(255,255,255,0.035)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                transition: "all 0.25s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  borderColor: "rgba(167,139,250,0.55)",
                  background: "rgba(139,92,246,0.1)",
                },
                "&:focus-visible": {
                  outline: "2px solid #a78bfa",
                  outlineOffset: 4,
                },
              }}
            >
              مشاهده نمونه‌کارها
            </Button>

          </Box>

          {/* Tech stack */}
          <Box
            sx={{
              ...slideFromRight(7),
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <TerminalIcon sx={{ color: "#94a3b8", fontSize: 21, mx: 0.5 }} />

            {technologies.map(({ label, color, Icon }) => (
              <Box
                key={label}
                title={label}
                aria-label={label}
                sx={{
                  width: 44,
                  height: 44,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "12px",
                  border: "1px solid rgba(148,163,184,0.15)",
                  background: "rgba(255,255,255,0.04)",
                  color,
                  cursor: "default",
                  transition: "all 0.25s ease",

                  "& svg": {
                    fontSize: 23,
                    transition: "transform 0.25s ease",
                  },

                  "&:hover": {
                    borderColor: color,
                    background: `${color}12`,
                    boxShadow: `0 0 20px ${color}18`,
                    transform: "translateY(-4px)",
                  },

                  "&:hover svg": {
                    transform: "scale(1.12)",
                  },
                }}
              >
                <Icon />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Character / Hero image */}
        <Box
          sx={{
            ...slideFromLeft(2),
            flex: "1 1 0",
            minWidth: 0,
            width: "100%",
            maxWidth: { xs: 440, md: 600, lg: 660 },
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
          }}
        >
          {/* Ambient glow */}
          <Box
            aria-hidden="true"
            sx={{
              position: "absolute",
              width: "85%",
              aspectRatio: "1",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(139,92,246,0.2), rgba(34,211,238,0.08) 48%, transparent 72%)",
              filter: "blur(12px)",
              pointerEvents: "none",
            }}
          />

          {/* Glass frame */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: "0.94 / 1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: { xs: "28px", md: "38px" },
              border: "1px solid rgba(255,255,255,0.09)",
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.012))",
              boxShadow:
                "0 30px 90px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.045)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              overflow: "hidden",

              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                insetInline: "15%",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(167,139,250,0.65), rgba(103,232,249,0.65), transparent)",
              },

              "&::after": {
                content: '""',
                position: "absolute",
                inset: 12,
                borderRadius: { xs: "21px", md: "30px" },
                border: "1px solid rgba(255,255,255,0.035)",
                pointerEvents: "none",
              },
            }}
          >
            {/* Image lighting */}
            <Box
              aria-hidden="true"
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at 50% 40%, rgba(124,58,237,0.09), transparent 65%)",
                pointerEvents: "none",
              }}
            />

            <Box
              component="img"
              src={homeImage}
              alt="تصویر امیر قادری، توسعه‌دهنده فول‌استک"
              loading="eager"
              sx={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "center center",
                p: 0,
                boxSizing: "border-box",
                transform: {
                  xs: "translateX(3%) scale(1.08)",
                  sm: "translateX(4%) scale(1.12)",
                  md: "translateX(-15%) scale(1.16)",
                },
                transformOrigin: "center center",
                filter: "drop-shadow(0 18px 28px rgba(0,0,0,0.15))",
              }}
            />
          </Box>

          {/* Floating code badge */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: 12, md: 32 },
              insetInlineEnd: { xs: -5, sm: -14, md: -20 },
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
              px: 1.6,
              py: 1.15,
              border: "1px solid rgba(167,139,250,0.23)",
              borderRadius: "14px",
              background: "rgba(15,18,37,0.82)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              boxShadow: "0 12px 35px rgba(0,0,0,0.2)",
              animation: `${floatBadge} 4s ease-in-out infinite`,
            }}
          >
            <Box
              sx={{
                display: "grid",
                placeItems: "center",
                width: 34,
                height: 34,
                borderRadius: "10px",
                color: "#c4b5fd",
                background: "rgba(139,92,246,0.13)",
              }}
            >
              <TerminalIcon sx={{ fontSize: 19 }} />
            </Box>

            <Box sx={{ direction: "ltr", textAlign: "left" }}>
              <Typography
                sx={{ color: "#f1f5f9", fontSize: 12, fontWeight: 800 }}
              >
                Developer
              </Typography>
              <Typography sx={{ color: "#94a3b8", fontSize: 11 }}>
                Building ideas
              </Typography>
            </Box>
          </Box>

          {/* Floating technology badge */}
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: 12, md: 30 },
              insetInlineStart: { xs: -4, sm: -12, md: -20 },
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
              px: 1.6,
              py: 1.15,
              border: "1px solid rgba(34,211,238,0.2)",
              borderRadius: "14px",
              background: "rgba(15,18,37,0.85)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              boxShadow: "0 12px 35px rgba(0,0,0,0.2)",
              animation: `${floatBadge} 4.5s ease-in-out 0.5s infinite`,
            }}
          >
            <Box
              sx={{
                display: "grid",
                placeItems: "center",
                width: 34,
                height: 34,
                borderRadius: "10px",
                color: "#67e8f9",
                background: "rgba(34,211,238,0.1)",
              }}
            >
              <CodeIcon sx={{ fontSize: 19 }} />
            </Box>

            <Box sx={{ direction: "ltr", textAlign: "left" }}>
              <Typography
                sx={{ color: "#f1f5f9", fontSize: 12, fontWeight: 800 }}
              >
                Full Stack
              </Typography>
              <Typography sx={{ color: "#94a3b8", fontSize: 11 }}>
                Laravel & React
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
