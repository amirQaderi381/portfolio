import { useEffect, useRef, useState } from "react";
import {
  CodeRounded,
  SelfImprovementRounded,
  PersonRounded,
  LocationOnRounded,
  EmailRounded,
  PhoneRounded,
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

const About = () => {
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [js, setJs] = useState(0);
  const [tailwind, setTailwind] = useState(0);
  const [react , setReact] = useState(0);
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

      return () => {
        clearInterval(timer);
      };
    }, 200);
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
    }
  ];

  const panelSx = {
    backgroundColor: "rgba(15, 23, 42, 0.76)",
    border: "1px solid rgba(148, 163, 184, 0.13)",
    borderRadius: 4,
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    boxShadow: "0 15px 45px rgba(0, 0, 0, 0.18)",
    transition: "border-color 0.3s ease, transform 0.3s ease",
    "&:hover": {
      borderColor: "rgba(139, 233, 253, 0.3)",
    },
  };

  const headingChipSx = {
    height: "auto",
    borderRadius: 2.5,
    backgroundColor: "rgba(139, 233, 253, 0.1)",
    color: "#8be9fd",
    border: "1px solid rgba(139, 233, 253, 0.2)",
    "& .MuiChip-label": {
      px: 1.5,
      py: 1,
      whiteSpace: "normal",
    },
    "& .MuiChip-icon": {
      color: "#8be9fd",
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
        background:
          "radial-gradient(ellipse at 10% 10%, rgba(59,130,246,0.13), transparent 40%), radial-gradient(ellipse at 90% 85%, rgba(139,92,246,0.12), transparent 38%), #080d19",
        color: "#f1f5f9",
        fontFamily: "'Vazirmatn', 'Estedad', Tahoma, sans-serif",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
          opacity: 0.13,
          backgroundImage:
            "radial-gradient(rgba(148,163,184,0.6) 0.7px, transparent 0.7px)",
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
              color: "#8be9fd",
              bgcolor: "rgba(139,233,253,0.08)",
              border: "1px solid rgba(139,233,253,0.2)",
              "& .MuiChip-icon": { color: "#8be9fd" },
            }}
          />

          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.3rem", md: "3rem" },
              fontWeight: 900,
              letterSpacing: "-1px",
              lineHeight: 1.5,
              background:
                "linear-gradient(90deg, #8be9fd 10%, #a5b4fc 55%, #c4b5fd 100%)",
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
              color: "#94a3b8",
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
              background: "linear-gradient(90deg, #8be9fd, #818cf8)",
              boxShadow: "0 0 18px rgba(139,233,253,0.4)",
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
                    background:
                      "linear-gradient(135deg, #8be9fd, #6366f1 55%, #c084fc)",
                    boxShadow:
                      "0 0 30px rgba(99,102,241,0.2), 0 0 60px rgba(139,233,253,0.08)",
                    transition: "transform 0.35s ease, box-shadow 0.35s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 0 38px rgba(139,233,253,0.28)",
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
                      border: "3px solid #111827",
                      bgcolor: "#111827",
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
                      bgcolor: "#111827",
                      border: "1px solid rgba(139,233,253,0.4)",
                      color: "#8be9fd",
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
                      color: "#8be9fd",
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
                        bgcolor: "rgba(196,181,253,0.09)",
                        color: "#c4b5fd",
                        borderColor: "rgba(196,181,253,0.22)",
                        "& .MuiChip-icon": { color: "#c4b5fd" },
                      }}
                    />
                  </Box>
                </Box>

                <Typography
                  sx={{
                    color: "#cbd5e1",
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
                    borderColor: "rgba(148,163,184,0.15)",
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
                          bgcolor: "rgba(255,255,255,0.025)",
                          border: "1px solid rgba(148,163,184,0.09)",
                          transition: "all 0.25s ease",
                          "&:hover": {
                            bgcolor: "rgba(139,233,253,0.06)",
                            borderColor: "rgba(139,233,253,0.25)",
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
                            bgcolor: "rgba(139,233,253,0.09)",
                            color: "#8be9fd",
                            "& svg": { fontSize: 21 },
                          }}
                        >
                          {item.icon}
                        </Box>

                        <Box sx={{ minWidth: 0, flex: 1 }}>
                          <Typography
                            sx={{
                              color: "#94a3b8",
                              fontSize: "0.75rem",
                              mb: 0.5,
                            }}
                          >
                            {item.label}
                          </Typography>

                          <Box
                            sx={{
                              color: "#e2e8f0",
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
                                    "&:hover": { color: "#8be9fd" },
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
                    color: "#c4b5fd",
                    bgcolor: "rgba(196,181,253,0.1)",
                    border: "1px solid rgba(196,181,253,0.15)",
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
                      color: "#f1f5f9",
                    }}
                  >
                    مهارت‌های من
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.5,
                      color: "#94a3b8",
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
                  color: "#8be9fd",
                  bgcolor: "rgba(139,233,253,0.07)",
                  border: "1px solid rgba(139,233,253,0.15)",
                  fontSize: "0.7rem",
                }}
              />
            </Box>

            <Divider
              sx={{
                mb: 3,
                borderColor: "rgba(148,163,184,0.13)",
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
            color: "#94a3b8",
            fontSize: "0.75rem",
            lineHeight: 2,
          }}
        >
          ساخته‌شده با علاقه به کدنویسی و یادگیری مداوم
          <Box component="span" sx={{ color: "#8be9fd", mx: 0.75 }}>
            {"</>"}
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
