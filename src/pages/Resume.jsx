import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";

import { alpha } from "@mui/material/styles";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { experiences } from "../constants/experiences";
import { motion } from "framer-motion";

import {
  WorkRounded,
  DownloadRounded,
  EmailRounded,
  CodeRounded,
  StorageRounded,
  TerminalRounded,
  CalendarMonthRounded,
  AutoAwesomeRounded,
  LaptopMacRounded,
  RocketLaunchRounded,
  CheckCircleRounded,
} from "@mui/icons-material";

/* ---------- Theme tokens ---------- */
// همه رنگ‌ها از theme.custom.resume (theme.js) خوانده می‌شوند و بسته به مود لایت/دارک عوض می‌شوند.
// چون از alpha() استفاده می‌شود، توکن‌ها با useTheme() به‌صورت مقدار مستقیم گرفته می‌شوند.
const useResumeTokens = () => {
  const t = useTheme().custom.resume;

  // رنگ‌های داده (مثل experience.color) در لایت کمی تیره می‌شوند تا خوانا بمانند
  const tone = (color) =>
    t.toneMix ? `color-mix(in srgb, ${color} ${t.toneMix}%, ${t.toneWith})` : color;

  return { t, tone };
};

// accent هر گروه به یکی از رنگ‌های t.accents اشاره می‌کند
const skillGroups = [
  {
    title: "Backend Development",
    subtitle: "توسعه سمت سرور",
    icon: <StorageRounded />,
    accent: "primary",
    skills: ["PHP", "Laravel", "REST API"],
  },
  {
    title: "Frontend Development",
    subtitle: "توسعه رابط کاربری",
    icon: <CodeRounded />,
    accent: "secondary",
    skills: ["React", "Redux", "JavaScript", "MUI"],
  },
  {
    title: "Database & Infrastructure",
    subtitle: "پایگاه داده و زیرساخت",
    icon: <TerminalRounded />,
    accent: "success",
    skills: ["MySQL", "Docker", "Linux", "Apache", "Nginx"],
  },
];

const focusAreas = [
  "توسعه API و بک‌اند",
  "طراحی و پیاده‌سازی رابط کاربری",
  "اتصال فرانت‌اند به بک‌اند",
  "توسعه و نگهداری سرویس‌های وب",
];

const getPanelSx = (t) => ({
  position: "relative",
  overflow: "hidden",
  height: "100%",
  border: "1px solid",
  borderColor: t.border,
  borderRadius: { xs: 3, md: 4 },
  background: t.panel.bg,
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  boxShadow: t.panel.shadow,
  transition: "border-color 250ms ease, box-shadow 250ms ease",
  "&:hover": {
    borderColor: t.panel.hoverBorder,
    boxShadow: t.panel.hoverShadow,
  },
});

function SectionTitle({ eyebrow, title, icon }) {
  const { t } = useResumeTokens();
  const { primary, secondary } = t.accents;

  return (
    <Box sx={{ mb: 3 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 1,
          color: primary,
        }}
      >
        {icon}
        <Typography
          variant="overline"
          sx={{
            letterSpacing: 1.2,
            fontWeight: 800,
            color: "inherit",
          }}
        >
          {eyebrow}
        </Typography>
      </Box>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 900,
          color: "text.primary",
          fontSize: { xs: "1.25rem", sm: "1.5rem" },
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          mt: 1.5,
          width: 64,
          height: 3,
          borderRadius: 10,
          background: `linear-gradient(90deg, ${primary}, ${secondary})`,
          boxShadow: `0 0 14px ${alpha(primary, 0.35)}`,
        }}
      />
    </Box>
  );
}

function Resume() {
  const { t, tone } = useResumeTokens();
  const { primary, secondary } = t.accents;
  const panelSx = getPanelSx(t);

  return (
    <Box
      component="section"
      id="resume"
      dir="rtl"
      tabIndex={0}
      sx={{
        position: "relative",
        isolation: "isolate",
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        minHeight: 0,
        overflowY: "auto",
        overflowX: "hidden",
        outline: "none",
        px: { xs: 1.5, sm: 3, md: 4, lg: 6 },
        py: { xs: 3, sm: 4, md: 5 },
        color: "text.primary",
        background: t.sectionBg,
        scrollbarWidth: "thin",
        scrollbarColor: t.scrollbarColor,
        WebkitOverflowScrolling: "touch",
        "&::-webkit-scrollbar": {
          width: 6,
        },
        "&::-webkit-scrollbar-thumb": {
          background: t.scrollbarThumb,
          borderRadius: 10,
        },
        "&:focus-visible": {
          outline: "1px solid",
          outlineColor: t.focusOutline,
          outlineOffset: -2,
        },
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
          opacity: t.dotsOpacity,
          backgroundImage: t.dotsImage,
          backgroundSize: "24px 24px",
        },
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        {/* Header */}
        <Box sx={{ mb: { xs: 5, md: 6 } }}>
          <Chip
            icon={<AutoAwesomeRounded sx={{ fontSize: 17 }} />}
            label="رزومه و مسیر حرفه‌ای"
            sx={{
              mb: 2,
              color: primary,
              border: `1px solid ${alpha(primary, 0.25)}`,
              backgroundColor: alpha(primary, 0.07),
              fontWeight: 700,
              "& .MuiChip-icon": { color: primary },
            }}
          />

          <Grid container spacing={3} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  lineHeight: 1.5,
                  fontSize: {
                    xs: "1.8rem",
                    sm: "2.3rem",
                    md: "2.8rem",
                  },
                }}
              >
                مسیر حرفه‌ای{" "}
                <Box
                  component="span"
                  sx={{
                    background: t.titleGradient,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  من
                </Box>
              </Typography>

              <Typography
                sx={{
                  mt: 1.5,
                  maxWidth: 720,
                  color: "text.secondary",
                  lineHeight: 2.1,
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
              >
                من امیر قادری هستم؛ توسعه‌دهنده فول‌استک و مدرس برنامه‌نویسی با
                تمرکز بر توسعه وب، ساخت API و پیاده‌سازی رابط‌های کاربری. به
                طراحی راهکارهای قابل نگهداری و ساخت محصولات کاربردی علاقه دارم و
                برای موقعیت‌های شغلی و پروژه‌های فریلنسری آماده همکاری هستم.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.5,
                  justifyContent: { xs: "flex-start", md: "flex-end" },
                }}
              >
                <Button
                  component="a"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={<DownloadRounded />}
                  sx={{
                    borderColor: alpha(primary, 0.45),
                    color: primary,
                    borderRadius: 2.5,
                    px: 2,
                    py: 1.2,
                    fontWeight: 800,
                    "&:hover": {
                      borderColor: primary,
                      backgroundColor: alpha(primary, t.outlinedBtn.hoverBg),
                      boxShadow: `0 0 18px ${alpha(primary, t.outlinedBtn.glow)}`,
                    },
                  }}
                >
                  دانلود رزومه
                </Button>

                <Button
                  component="a"
                  href="mailto:amirqaderi381@gmail.com"
                  variant="contained"
                  startIcon={<EmailRounded />}
                  sx={{
                    color: t.containedBtn.color,
                    borderRadius: 2.5,
                    px: 2,
                    py: 1.2,
                    fontWeight: 900,
                    background: t.containedBtn.bg,
                    boxShadow: t.containedBtn.shadow,
                    "&:hover": {
                      background: t.containedBtn.hoverBg,
                      boxShadow: t.containedBtn.hoverShadow,
                    },
                  }}
                >
                  تماس با من
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Experience */}
        <Box sx={{ mb: { xs: 5, md: 6 } }}>
          <SectionTitle
            eyebrow="WORK EXPERIENCE"
            title="تجربه کاری"
            icon={<WorkRounded />}
          />

          <Timeline
            position="right"
            sx={{
              p: 0,
              m: 0,
              "& .MuiTimelineItem-root:before": {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {experiences.map((experience, index) => {
              const isLast = index === experiences.length - 1;

              return (
                <TimelineItem key={`${experience.company}-${experience.role}`}>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        m: 0,
                        mt: 3,
                        p: 0,
                        width: { xs: 12, sm: 16 },
                        height: { xs: 12, sm: 16 },
                        bgcolor: experience.color,
                        border: "3px solid",
                        borderColor: t.dotBorder,
                        boxShadow: `0 0 0 3px ${alpha(
                          experience.color,
                          0.2,
                        )}, 0 0 18px ${alpha(experience.color, 0.7)}`,
                      }}
                    />
                    {!isLast && (
                      <TimelineConnector
                        sx={{
                          width: 2,
                          borderRadius: 5,
                          background: `linear-gradient(180deg, ${experience.color}, ${alpha(
                            secondary,
                            0.25,
                          )})`,
                        }}
                      />
                    )}
                  </TimelineSeparator>

                  <TimelineContent
                    sx={{
                      minWidth: 0,
                      py: 0,
                      paddingInlineStart: { xs: 1.5, sm: 3 },
                      paddingInlineEnd: 0,
                      pb: isLast ? 0 : 4,
                      textAlign: "start",
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.12,
                        ease: "easeOut",
                      }}
                      style={{ height: "100%" }}
                    >
                      <Card
                        sx={{
                          ...panelSx,
                          "&:hover": {
                            ...panelSx["&:hover"],
                            borderColor: alpha(experience.color, 0.45),
                            boxShadow: `0 16px 42px ${alpha(experience.color, 0.12)}`,
                          },
                        }}
                      >
                        <Box
                          sx={{
                            height: 3,
                            background: `linear-gradient(90deg, transparent, ${experience.color}, ${secondary})`,
                          }}
                        />

                        <CardContent sx={{ p: { xs: 2, sm: 3, md: 3.5 } }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "flex-start",
                              justifyContent: "space-between",
                              flexWrap: "wrap",
                              gap: 1.5,
                              mb: 2,
                            }}
                          >
                            <Box>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontWeight: 900,
                                  fontSize: { xs: "1rem", sm: "1.2rem" },
                                }}
                              >
                                {experience.role}
                              </Typography>

                              <Typography
                                sx={{
                                  mt: 0.6,
                                  color: tone(experience.color),
                                  fontWeight: 800,
                                }}
                              >
                                {experience.company}
                              </Typography>
                            </Box>

                            <Chip
                              icon={<CalendarMonthRounded />}
                              label={experience.period}
                              size="small"
                              sx={{
                                maxWidth: "100%",
                                color: "text.secondary",
                                border: "1px solid",
                                borderColor: t.border,
                                backgroundColor: t.periodChipBg,
                                "& .MuiChip-label": {
                                  whiteSpace: "normal",
                                  py: 0.5,
                                },
                                "& .MuiChip-icon": {
                                  color: tone(experience.color),
                                },
                              }}
                            />
                          </Box>

                          <Chip
                            label={experience.type}
                            size="small"
                            sx={{
                              mb: 2,
                              color: tone(experience.color),
                              backgroundColor: alpha(experience.color, 0.09),
                              border: `1px solid ${alpha(experience.color, 0.25)}`,
                              fontWeight: 700,
                            }}
                          />

                          <Typography
                            sx={{
                              color: "text.secondary",
                              lineHeight: 2.1,
                              fontSize: { xs: "0.88rem", sm: "0.95rem" },
                            }}
                          >
                            {experience.description}
                          </Typography>

                          {experience.highlights?.length > 0 && (
                            <Box
                              component="ul"
                              sx={{
                                mt: 2,
                                mb: 0,
                                paddingInlineStart: 2.5,
                                color: "text.secondary",
                                fontSize: { xs: "0.85rem", sm: "0.92rem" },
                                lineHeight: 2,
                                "& li::marker": { color: experience.color },
                              }}
                            >
                              {experience.highlights.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </Box>
                          )}

                          <Divider sx={{ my: 2.5, borderColor: t.border }} />

                          <Typography
                            variant="body2"
                            sx={{
                              mb: 1.5,
                              color: "text.primary",
                              fontWeight: 800,
                            }}
                          >
                            فناوری‌های مورد استفاده
                          </Typography>

                          <Box
                            sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
                          >
                            {experience.technologies.map((technology) => (
                              <Chip
                                key={technology}
                                label={technology}
                                size="small"
                                variant="outlined"
                                sx={{
                                  color: "text.secondary",
                                  borderColor: alpha(experience.color, 0.3),
                                  backgroundColor: alpha(
                                    experience.color,
                                    0.05,
                                  ),
                                }}
                              />
                            ))}
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        </Box>

        {/* Skills */}
        <Box sx={{ mb: { xs: 5, md: 6 } }}>
          <SectionTitle
            eyebrow="TECHNICAL SKILLS"
            title="مهارت‌های فنی"
            icon={<CodeRounded />}
          />

          <Grid container spacing={2.2}>
            {skillGroups.map((group) => {
              const color = t.accents[group.accent];

              return (
                <Grid key={group.title} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Card
                    sx={{
                      ...panelSx,
                      "&:hover": {
                        ...panelSx["&:hover"],
                        borderColor: alpha(color, 0.45),
                        boxShadow: `0 15px 40px ${alpha(color, 0.12)}`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 2.2, sm: 2.5 } }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          mb: 2.5,
                        }}
                      >
                        <Box
                          sx={{
                            width: 46,
                            height: 46,
                            flexShrink: 0,
                            display: "grid",
                            placeItems: "center",
                            borderRadius: 2.5,
                            color,
                            backgroundColor: alpha(color, 0.1),
                            border: `1px solid ${alpha(color, 0.25)}`,
                            "& svg": { fontSize: 25 },
                          }}
                        >
                          {group.icon}
                        </Box>

                        <Box sx={{ minWidth: 0 }}>
                          <Typography
                            sx={{
                              color: "text.primary",
                              fontWeight: 900,
                              fontSize: "0.95rem",
                            }}
                          >
                            {group.title}
                          </Typography>

                          <Typography
                            variant="caption"
                            sx={{ color: "text.secondary" }}
                          >
                            {group.subtitle}
                          </Typography>
                        </Box>
                      </Box>

                      <Divider sx={{ mb: 2, borderColor: t.border }} />

                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {group.skills.map((skill) => (
                          <Chip
                            key={skill}
                            label={skill}
                            size="small"
                            sx={{
                              color,
                              fontWeight: 700,
                              border: `1px solid ${alpha(color, 0.25)}`,
                              backgroundColor: alpha(color, 0.08),
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Collaboration */}
        <Box sx={{ mb: { xs: 4, md: 5 } }}>
          <SectionTitle
            eyebrow="WHAT I DO"
            title="زمینه‌های همکاری"
            icon={<RocketLaunchRounded />}
          />

          <Card sx={panelSx}>
            <CardContent sx={{ p: { xs: 2.2, sm: 3, md: 3.5 } }}>
              <Grid container spacing={3} alignItems="center">
                <Grid size={{ xs: 12, md: 7 }}>
                  <Typography variant="h6" sx={{ fontWeight: 900, mb: 1.5 }}>
                    بیایید ایده‌تان را به محصول تبدیل کنیم
                  </Typography>

                  <Typography
                    sx={{
                      color: "text.secondary",
                      lineHeight: 2,
                      fontSize: "0.92rem",
                    }}
                  >
                    برای همکاری تمام‌وقت، پروژه‌های فریلنسری یا بهبود سرویس‌های
                    موجود در دسترس هستم.
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 5 }}>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                      gap: 1.5,
                    }}
                  >
                    {focusAreas.map((area) => (
                      <Box
                        key={area}
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1,
                          p: 1.2,
                          borderRadius: 2,
                          backgroundColor: t.focusAreaBg,
                          border: "1px solid",
                          borderColor: t.border,
                        }}
                      >
                        <CheckCircleRounded
                          sx={{
                            mt: 0.2,
                            flexShrink: 0,
                            fontSize: 19,
                            color: primary,
                          }}
                        />

                        <Typography
                          variant="body2"
                          sx={{ color: "text.primary", lineHeight: 1.8 }}
                        >
                          {area}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>

        {/* Footer */}
        <Box sx={{ textAlign: "center", pt: 2, pb: 1 }}>
          <LaptopMacRounded
            sx={{ color: alpha(primary, 0.7), fontSize: 25, mb: 1 }}
          />

          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontSize: "0.8rem" }}
          >
            طراحی و توسعه با تمرکز بر کیفیت، سادگی و تجربه کاربری
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Resume;