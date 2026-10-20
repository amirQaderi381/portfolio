import { useEffect, useRef, useState } from "react";
import {
  CodeRounded,
  SelfImprovementRounded,
  PersonRounded,
  LocationOnRounded,
  EmailRounded,
  CakeRounded,
  AutoAwesomeRounded,
  TerminalRounded,
} from "@mui/icons-material";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";

import avatar from "../assets/guy3.jpeg";
import DevInfo from "./components/DevInfo";
import Skill from "./components/Skill";
import { devSkills } from "../constants/Skills";

/* ---------- Theme helper ---------- */
// a("panel.bg")  ==  (theme) => theme.custom.about.panel.bg
// همه رنگ‌ها در theme.js (custom.about) تعریف شده‌اند و بسته به مود لایت/دارک خوانده می‌شوند.
const a = (path) => (theme) =>
  path.split(".").reduce((obj, key) => obj?.[key], theme.custom.about);

const About = () => {
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [js, setJs] = useState(0);
  const [tailwind, setTailwind] = useState(0);
  const [react, setReact] = useState(0);
  const [php, setPhp] = useState(0);
  const [laravel, setLaravel] = useState(0);

  const sectionRef = useRef(null);

  // فوکوس خودکار تا کلیدهای جهت‌دار، PageUp/PageDown و Space بدون کلیک کار کنند
  useEffect(() => {
    sectionRef.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setHtml((prevProgress) => {
        const diff = Math.random() * 10;
        return Math.min(prevProgress + diff, 85);
      });

      setCss((prevProgress) => {
        const diff = Math.random() * 10;
        return Math.min(prevProgress + diff, 74);
      });

      setJs((prevProgress) => {
        const diff = Math.random() * 10;
        return Math.min(prevProgress + diff, 68);
      });

      setTailwind((prevProgress) => {
        const diff = Math.random() * 10;
        return Math.min(prevProgress + diff, 90);
      });

      setReact((prevProgress) => {
        const diff = Math.random() * 10;
        return Math.min(prevProgress + diff, 71);
      });

      setPhp((prevProgress) => {
        const diff = Math.random() * 10;
        return Math.min(prevProgress + diff, 80);
      });

      setLaravel((prevProgress) => {
        const diff = Math.random() * 10;
        return Math.min(prevProgress + diff, 88);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const {
    htmlSkill,
    cssSkill,
    jsSkill,
    TailwindSkill,
    ReactSkill,
    phpSkill,
    laravelSkill,
  } = devSkills;

  const infoItems = [
    {
      icon: <PersonRounded />,
      label: "نام و نام خانوادگی",
      content: "امیر قادری",
    },
    {
      icon: <CakeRounded />,
      label: "سن",
      content: "۲۵ سال",
    },
    {
      icon: <LocationOnRounded />,
      label: "شهر",
      content: "تهران",
    },
    {
      icon: <EmailRounded />,
      label: "ایمیل",
      content: "amirqaderi381@gmail.com",
      href: "mailto:amirqaderi381@gmail.com",
    },
  ];

  const panelSx = {
    backgroundColor: a("panel.bg"),
    border: "1px solid",
    borderColor: a("panel.border"),
    borderRadius: 4,
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    boxShadow: a("panel.shadow"),
    transition: "border-color 0.3s ease, transform 0.3s ease",
    "&:hover": {
      borderColor: a("panel.hoverBorder"),
    },
  };

  const headingChipSx = {
    height: "auto",
    borderRadius: 2.5,
    backgroundColor: a("headingChip.bg"),
    color: a("headingChip.color"),
    border: "1px solid",
    borderColor: a("headingChip.border"),
    "& .MuiChip-label": {
      px: 1.5,
      py: 1,
      whiteSpace: "normal",
    },
    "& .MuiChip-icon": {
      color: a("headingChip.color"),
    },
  };

  return (
    <Box
      component="section"
      ref={sectionRef}
      tabIndex={0}
      id="about"
      dir="rtl"
      sx={{
        position: "relative",
        isolation: "isolate",
        height: "100vh",
        overflowX: "hidden",
        overflowY: "auto",
        outline: "none",
        overscrollBehavior: "contain",
        boxSizing: "border-box",
        px: { xs: 1.5, sm: 3, md: 5, lg: 8 },
        py: { xs: 3, sm: 4, md: 6 },
        background: a("sectionBg"),
        color: "text.primary",
        fontFamily: "'Vazirmatn', 'Estedad', Tahoma, sans-serif",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
          opacity: a("dotsOpacity"),
          backgroundImage: a("dotsImage"),
          backgroundSize: "24px 24px",
        },
      }}
    >
      <Box sx={{ maxWidth: 1250, mx: "auto" }}>
        {/* عنوان صفحه */}
        <Box sx={{ textAlign: "center", mb: { xs: 3, md: 5 } }}>
          <Chip
            icon={<AutoAwesomeRounded />}
            label="کمی بیشتر درباره من"
            sx={{
              mb: 2,
              color: a("pageChip.color"),
              bgcolor: a("pageChip.bg"),
              border: "1px solid",
              borderColor: a("pageChip.border"),
              "& .MuiChip-icon": { color: a("pageChip.color") },
            }}
          />

          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.3rem", md: "3rem" },
              fontWeight: 900,
              letterSpacing: "-1px",
              lineHeight: 1.5,
              background: a("titleGradient"),
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            درباره من
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "text.secondary",
              fontSize: { xs: "0.85rem", sm: "1rem" },
              lineHeight: 2,
            }}
          >
            ترکیبی از خلاقیت، کدنویسی و علاقه به یادگیری
          </Typography>

          <Box
            sx={{
              width: 75,
              height: 3,
              mx: "auto",
              mt: 2,
              borderRadius: 5,
              background: a("underline.bg"),
              boxShadow: a("underline.shadow"),
            }}
          />
        </Box>

        {/* اطلاعات شخصی */}
        <Card
          elevation={0}
          sx={{
            ...panelSx,
            overflow: "hidden",
            mb: 3,
          }}
        >
          <CardContent
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              "&:last-child": {
                pb: { xs: 2, sm: 3, md: 4 },
              },
            }}
          >
            <Grid
              container
              spacing={{ xs: 3, md: 4 }}
              alignItems="center"
              direction={{ xs: "column", md: "row" }}
            >
              {/* تصویر پروفایل */}
              <Grid
                size={{ xs: 12, md: 4 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: 170, sm: 200, md: 220, lg: 250 },
                    maxWidth: "100%",
                    aspectRatio: "1",
                    p: "5px",
                    borderRadius: "30px",
                    background: a("avatar.frame"),
                    boxShadow: a("avatar.shadow"),
                    transition: "transform 0.35s ease, box-shadow 0.35s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: a("avatar.hoverShadow"),
                    },
                  }}
                >
                  <Avatar
                    src={avatar}
                    alt="امیر قادری"
                    variant="rounded"
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "26px",
                      border: "3px solid",
                      borderColor: a("avatar.innerBorder"),
                      bgcolor: a("avatar.innerBg"),
                    }}
                  >
                    AQ
                  </Avatar>

                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      px: 2,
                      py: 0.7,
                      borderRadius: 10,
                      bgcolor: a("avatar.badgeBg"),
                      border: "1px solid",
                      borderColor: a("avatar.badgeBorder"),
                      boxShadow: a("avatar.badgeShadow"),
                      color: a("avatar.badgeColor"),
                      whiteSpace: "nowrap",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                    }}
                  >
                    Full-Stack Developer
                  </Box>
                </Box>
              </Grid>

              {/* مشخصات توسعه‌دهنده */}
              <Grid size={{ xs: 12, md: 8 }} sx={{ minWidth: 0 }}>
                <Box sx={{ textAlign: "right", mb: 2.5 }}>
                  <Typography
                    sx={{
                      color: a("accent"),
                      fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    معرفی
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: 1,
                      mt: 1,
                    }}
                  >
                    <Chip
                      icon={<CodeRounded />}
                      label="توسعه‌دهنده فول‌استک"
                      sx={headingChipSx}
                    />

                    <Chip
                      icon={<SelfImprovementRounded />}
                      label="مدرس برنامه‌نویسی"
                      sx={{
                        ...headingChipSx,
                        bgcolor: a("headingChip2.bg"),
                        color: a("headingChip2.color"),
                        borderColor: a("headingChip2.border"),
                        "& .MuiChip-icon": { color: a("headingChip2.color") },
                      }}
                    />
                  </Box>
                </Box>

                <Typography
                  sx={{
                    color: a("bodyText"),
                    fontSize: { xs: "0.88rem", sm: "0.95rem" },
                    lineHeight: 2.1,
                    mb: 2.5,
                    textAlign: "justify",
                  }}
                >
                  من امیر قادری هستم؛ توسعه‌دهنده‌ی فول‌استک و مدرس
                  برنامه‌نویسی. عاشق ساخت وب‌سایت‌های تمیز، سریع و کاربردی‌ام و
                  در بک‌اند با PHP و Laravel و در فرانت‌اند با JavaScript و
                  Tailwind CSS کار می‌کنم. یادگیری مداوم و انتقال تجربه‌هایم به
                  دیگران برایم لذت‌بخش است.
                </Typography>

                <Divider
                  sx={{
                    mb: 2.5,
                    borderColor: a("divider"),
                  }}
                />

                <Grid container spacing={1.5}>
                  {infoItems.map((item) => (
                    <Grid
                      key={item.label}
                      size={{ xs: 12, sm: 6 }}
                      sx={{ minWidth: 0 }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          p: 1.5,
                          minHeight: 70,
                          boxSizing: "border-box",
                          borderRadius: 2.5,
                          bgcolor: a("info.bg"),
                          border: "1px solid",
                          borderColor: a("info.border"),
                          transition: "all 0.25s ease",
                          "&:hover": {
                            bgcolor: a("info.hoverBg"),
                            borderColor: a("info.hoverBorder"),
                            transform: "translateY(-2px)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            flexShrink: 0,
                            display: "grid",
                            placeItems: "center",
                            borderRadius: 2,
                            bgcolor: a("info.iconBg"),
                            color: a("info.iconColor"),
                            "& svg": { fontSize: 21 },
                          }}
                        >
                          {item.icon}
                        </Box>

                        <Box sx={{ minWidth: 0, flex: 1 }}>
                          <Typography
                            sx={{
                              color: "text.secondary",
                              fontSize: "0.75rem",
                              mb: 0.5,
                            }}
                          >
                            {item.label}
                          </Typography>

                          <Box
                            sx={{
                              color: a("info.value"),
                              fontSize: "0.85rem",
                              fontWeight: 600,
                              overflowWrap: "anywhere",
                              lineHeight: 1.9,
                              "& p": {
                                color: "inherit",
                                fontSize: "inherit",
                              },
                            }}
                          >
                            <DevInfo>
                              {item.href ? (
                                <Link
                                  href={item.href}
                                  underline="none"
                                  sx={{
                                    color: "inherit",
                                    direction: "ltr",
                                    display: "inline-block",
                                    transition: "color 0.2s ease",
                                    "&:hover": { color: a("accent") },
                                  }}
                                >
                                  {item.content}
                                </Link>
                              ) : (
                                item.content
                              )}
                            </DevInfo>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* مهارت‌ها */}
        <Card
          elevation={0}
          sx={{
            ...panelSx,
            overflow: "hidden",
          }}
        >
          <CardContent
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              "&:last-child": {
                pb: { xs: 2, sm: 3, md: 4 },
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 2,
                mb: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    placeItems: "center",
                    width: 45,
                    height: 45,
                    borderRadius: 2.5,
                    color: a("skills.iconColor"),
                    bgcolor: a("skills.iconBg"),
                    border: "1px solid",
                    borderColor: a("skills.iconBorder"),
                  }}
                >
                  <TerminalRounded />
                </Box>

                <Box>
                  <Typography
                    component="h2"
                    sx={{
                      fontSize: { xs: "1.15rem", sm: "1.4rem" },
                      fontWeight: 800,
                      color: "text.primary",
                    }}
                  >
                    مهارت‌های من
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.5,
                      color: "text.secondary",
                      fontSize: "0.8rem",
                    }}
                  >
                    تکنولوژی‌هایی که با آن‌ها کار می‌کنم
                  </Typography>
                </Box>
              </Box>

              <Chip
                label="My Tech Stack"
                size="small"
                sx={{
                  color: a("skills.chipColor"),
                  bgcolor: a("skills.chipBg"),
                  border: "1px solid",
                  borderColor: a("skills.chipBorder"),
                  fontSize: "0.7rem",
                }}
              />
            </Box>

            <Divider
              sx={{
                mb: 3,
                borderColor: a("divider"),
              }}
            />

            <Box
              sx={{
                width: "100%",
                minWidth: 0,
                "& > *": {
                  minWidth: 0,
                },
              }}
            >
              <Skill
                name={htmlSkill.name}
                icon={htmlSkill.icon}
                color={htmlSkill.color}
                value={html}
              />

              <Skill
                name={cssSkill.name}
                icon={cssSkill.icon}
                color={cssSkill.color}
                value={css}
              />

              <Skill
                name={TailwindSkill.name}
                icon={TailwindSkill.icon}
                color={TailwindSkill.color}
                value={tailwind}
              />

              <Skill
                name={jsSkill.name}
                icon={jsSkill.icon}
                color={jsSkill.color}
                value={js}
              />

              <Skill
                name={ReactSkill.name}
                icon={ReactSkill.icon}
                color={ReactSkill.color}
                value={react}
              />

              <Skill
                name={phpSkill.name}
                icon={phpSkill.icon}
                color={phpSkill.color}
                value={php}
              />

              <Skill
                name={laravelSkill.name}
                icon={laravelSkill.icon}
                color={laravelSkill.color}
                value={laravel}
              />
            </Box>
          </CardContent>
        </Card>

        {/* فوتر */}
        <Typography
          sx={{
            mt: 3,
            textAlign: "center",
            color: "text.secondary",
            fontSize: "0.75rem",
            lineHeight: 2,
          }}
        >
          ساخته‌شده با علاقه به کدنویسی و یادگیری مداوم
          <Box component="span" sx={{ color: a("accent"), mx: 0.75 }}>
            {"</>"}
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default About;