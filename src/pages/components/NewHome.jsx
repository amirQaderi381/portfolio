import { useEffect, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import TerminalIcon from "@mui/icons-material/Terminal";
import CodeIcon from "@mui/icons-material/Code";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Typed from "typed.js";
import homeImage from "../../assets/main.png";
import { SiLaravel, SiReact, SiPhp, SiMysql } from "react-icons/si";

const strings = [
  "توسعه‌دهنده فول‌استک",
  "مدرس برنامه‌نویسی",
  "فریلنسر",
  "تولیدکننده محتوای برنامه‌نویسی",
];

const technologies = [
  { label: "Laravel", color: "#fb7185", Icon: SiLaravel },
  { label: "React", color: "#67e8f9", Icon: SiReact },
  { label: "PHP", color: "#a5b4fc", Icon: SiPhp },
  { label: "MySQL", color: "#fcd34d", Icon: SiMysql },
];
export default function NewHome() {
  const nameEl = useRef(null);
  const infoEl = useRef(null);

  useEffect(() => {
    if (!nameEl.current || !infoEl.current) return;

    const typedName = new Typed(nameEl.current, {
      strings: ["امیر قادری"],
      typeSpeed: 75,
      showCursor: false,
    });

    const typedInfo = new Typed(infoEl.current, {
      strings,
      startDelay: 900,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1700,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typedName.destroy();
      typedInfo.destroy();
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
        height:'100vh',
        overflowY: "auto",
        overflowX: "hidden",
        boxSizing: "border-box",
        px: { xs: 2, sm: 4, md: 6, lg: 10, xl: 14 },
        py: { xs: 5, sm: 7, md: 8 },
        color: "#f8fafc",
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
          right: "-130px",
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
          left: "20%",
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
            textAlign: "left",
            animation: "heroEnter 0.8s ease both",

            "@keyframes heroEnter": {
              from: {
                opacity: 0,
                transform: "translateY(22px)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          {/* Welcome badge */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.2,
              px: 1.8,
              py: 1,
              mb: { xs: 3, md: 4 },
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
                  inset: -4,
                  border: "1px solid rgba(52,211,153,0.3)",
                  borderRadius: "50%",
                },
              }}
            />

            <Typography
              sx={{
                color: "#a7f3d0",
                fontSize: { xs: 11, sm: 12 },
                fontWeight: 600,
                letterSpacing: 0.1,
              }}
            >
              سلام، به دنیای من خوش اومدی
            </Typography>

            <AutoAwesomeIcon sx={{ color: "#6ee7b7", fontSize: 15 }} />
          </Box>

          <Typography
            component="p"
            sx={{
              color: "#94a3b8",
              fontSize: { xs: 15, md: 18 },
              fontWeight: 500,
              mb: 0.5,
            }}
          >
            من هستم،
          </Typography>

          <Typography
            ref={nameEl}
            component="h1"
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

          {/* Animated role */}
          <Box
            sx={{
              display: "flex",
              alignItems: "stretch",
              gap: 1.5,
              mb: 3,
              minWidth: 0,
            }}
          >
            <Box
              aria-hidden="true"
              sx={{
                width: 4,
                minHeight: 40,
                flexShrink: 0,
                borderRadius: 5,
                background: "linear-gradient(180deg, #a78bfa, #22d3ee)",
                boxShadow: "0 0 18px rgba(139,92,246,0.28)",
              }}
            />

            <Typography
              ref={infoEl}
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

                "& .typed-cursor": {
                  color: "#a78bfa",
                  fontWeight: 300,
                },
              }}
            />
          </Box>

          <Typography
            component="p"
            sx={{
              maxWidth: 540,
              color: "#a1acc0",
              fontSize: { xs: 13.5, sm: 14.5, md: 15.5 },
              lineHeight: { xs: 2, md: 2.15 },
              mb: { xs: 3, md: 4 },
            }}
          >
            عاشق ساختن محصولات دیجیتال، حل چالش‌های فنی و تبدیل ایده‌ها به
            تجربه‌های کاربردی هستم. اینجا جاییه که خلاقیت و کدنویسی به هم
            می‌رسن.
          </Typography>

          {/* Actions */}
          <Box
            sx={{
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
              href="https://github.com/amirQaderi381"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon />}
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
              گیت‌هاب من
            </Button>
          </Box>

          {/* Tech stack */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <TerminalIcon sx={{ color: "#64748b", fontSize: 21, ml: 0.5 }} />

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
            flex: "1 1 0",
            minWidth: 0,
            width: "100%",
            maxWidth: { xs: 440, md: 600, lg: 660 },
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            animation: "imageEnter 1s ease 0.1s both",

            "@keyframes imageEnter": {
              from: {
                opacity: 0,
                transform: "translateY(18px) scale(0.98)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0) scale(1)",
              },
            },
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
                left: "15%",
                right: "15%",
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
              right: { xs: -5, sm: -14, md: -20 },
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
              animation: "floatBadge 4s ease-in-out infinite",

              "@keyframes floatBadge": {
                "0%, 100%": { transform: "translateY(0)" },
                "50%": { transform: "translateY(-7px)" },
              },
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

            <Box>
              <Typography
                sx={{ color: "#f1f5f9", fontSize: 11, fontWeight: 800 }}
              >
                Developer
              </Typography>
              <Typography sx={{ color: "#94a3b8", fontSize: 10 }}>
                Building ideas
              </Typography>
            </Box>
          </Box>

          {/* Floating technology badge */}
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: 12, md: 30 },
              left: { xs: -4, sm: -12, md: -20 },
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
              animation: "floatBadge 4.5s ease-in-out 0.5s infinite",
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

            <Box>
              <Typography
                sx={{ color: "#f1f5f9", fontSize: 11, fontWeight: 800 }}
              >
                Full Stack
              </Typography>
              <Typography sx={{ color: "#94a3b8", fontSize: 10 }}>
                Laravel & React
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
