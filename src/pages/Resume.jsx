import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

import { alpha } from "@mui/material/styles";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { experiences } from "../constants/experiences";

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

const skillGroups = [
  {
    title: "Backend Development",
    subtitle: "توسعه سمت سرور",
    icon: <StorageRounded />,
    color: COLORS.primary,
    skills: ["PHP", "Laravel", "REST API"],
  },
  {
    title: "Frontend Development",
    subtitle: "توسعه رابط کاربری",
    icon: <CodeRounded />,
    color: COLORS.secondary,
    skills: ["React", "Redux", "JavaScript", "MUI"],
  },
  {
    title: "Database & Infrastructure",
    subtitle: "پایگاه داده و زیرساخت",
    icon: <TerminalRounded />,
    color: COLORS.success,
    skills: ["MySQL", "Docker", "Linux", "Apache", "Nginx"],
  },
];

const focusAreas = [
  "توسعه API و بک‌اند",
  "طراحی و پیاده‌سازی رابط کاربری",
  "اتصال فرانت‌اند به بک‌اند",
  "توسعه و نگهداری سرویس‌های وب",
];

const panelSx = {
  position: "relative",
  overflow: "hidden",
  height: "100%",
  border: `1px solid ${COLORS.border}`,
  borderRadius: { xs: 3, md: 4 },
  background:
    "linear-gradient(145deg, rgba(20, 30, 52, 0.88), rgba(10, 16, 31, 0.82))",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  boxShadow: "0 16px 50px rgba(0, 0, 0, 0.16)",
  transition: "border-color 250ms ease, box-shadow 250ms ease",
  "&:hover": {
    borderColor: "rgba(139, 233, 253, 0.3)",
    boxShadow: "0 16px 48px rgba(59, 130, 246, 0.09)",
  },
};

function SectionTitle({ eyebrow, title, icon }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 1,
          color: COLORS.primary,
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
          color: COLORS.text,
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
          background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})`,
          boxShadow: `0 0 14px ${alpha(COLORS.primary, 0.35)}`,
        }}
      />
    </Box>
  );
}

function Resume() {
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
        color: COLORS.text,
        background: `
          radial-gradient(ellipse at 8% 8%, rgba(59, 130, 246, 0.14), transparent 36%),
          radial-gradient(ellipse at 92% 48%, rgba(139, 92, 246, 0.12), transparent 38%),
          radial-gradient(ellipse at 45% 100%, rgba(34, 211, 238, 0.06), transparent 35%),
          ${COLORS.background}
        `,
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(139, 233, 253, 0.35) transparent",
        WebkitOverflowScrolling: "touch",
        "&::-webkit-scrollbar": {
          width: 6,
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(139, 233, 253, 0.3)",
          borderRadius: 10,
        },
        "&:focus-visible": {
          outline: "1px solid rgba(139, 233, 253, 0.3)",
          outlineOffset: -2,
        },
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
          opacity: 0.12,
          backgroundImage:
            "radial-gradient(rgba(148, 163, 184, 0.7) 0.7px, transparent 0.7px)",
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
              color: COLORS.primary,
              border: `1px solid ${alpha(COLORS.primary, 0.25)}`,
              backgroundColor: alpha(COLORS.primary, 0.07),
              fontWeight: 700,
              "& .MuiChip-icon": { color: COLORS.primary },
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
                    background:
                      "linear-gradient(90deg, #8BE9FD 5%, #BD93F9 95%)",
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
                  color: COLORS.muted,
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
                    borderColor: alpha(COLORS.primary, 0.45),
                    color: COLORS.primary,
                    borderRadius: 2.5,
                    px: 2,
                    py: 1.2,
                    fontWeight: 800,
                    "&:hover": {
                      borderColor: COLORS.primary,
                      backgroundColor: alpha(COLORS.primary, 0.08),
                      boxShadow: `0 0 18px ${alpha(COLORS.primary, 0.12)}`,
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
                    color: "#08111F",
                    borderRadius: 2.5,
                    px: 2,
                    py: 1.2,
                    fontWeight: 900,
                    background: "linear-gradient(110deg, #8BE9FD, #BD93F9)",
                    boxShadow: `0 6px 22px ${alpha(COLORS.secondary, 0.18)}`,
                    "&:hover": {
                      background: "linear-gradient(110deg, #A5F3FC, #D8B4FE)",
                      boxShadow: `0 8px 28px ${alpha(COLORS.secondary, 0.28)}`,
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
                        border: `3px solid ${COLORS.background}`,
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
                            COLORS.secondary,
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
                    <Card
                      sx={{
                        ...panelSx,
                        "&:hover": {
                          ...panelSx["&:hover"],
                          borderColor: alpha(experience.color, 0.4),
                          boxShadow: `0 16px 42px ${alpha(experience.color, 0.08)}`,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          height: 3,
                          background: `linear-gradient(90deg, transparent, ${experience.color}, ${COLORS.secondary})`,
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
                                color: experience.color,
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
                              color: COLORS.muted,
                              border: `1px solid ${COLORS.border}`,
                              backgroundColor: "rgba(148, 163, 184, 0.06)",
                              "& .MuiChip-label": {
                                whiteSpace: "normal",
                                py: 0.5,
                              },
                              "& .MuiChip-icon": {
                                color: experience.color,
                              },
                            }}
                          />
                        </Box>

                        <Chip
                          label={experience.type}
                          size="small"
                          sx={{
                            mb: 2,
                            color: experience.color,
                            backgroundColor: alpha(experience.color, 0.09),
                            border: `1px solid ${alpha(experience.color, 0.2)}`,
                            fontWeight: 700,
                          }}
                        />

                        <Typography
                          sx={{
                            color: COLORS.muted,
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
                              color: COLORS.muted,
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

                        <Divider sx={{ my: 2.5, borderColor: COLORS.border }} />

                        <Typography
                          variant="body2"
                          sx={{ mb: 1.5, color: COLORS.text, fontWeight: 800 }}
                        >
                          فناوری‌های مورد استفاده
                        </Typography>

                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                          {experience.technologies.map((technology) => (
                            <Chip
                              key={technology}
                              label={technology}
                              size="small"
                              variant="outlined"
                              sx={{
                                color: COLORS.muted,
                                borderColor: alpha(experience.color, 0.24),
                                backgroundColor: alpha(experience.color, 0.035),
                              }}
                            />
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
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
            {skillGroups.map((group) => (
              <Grid key={group.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  sx={{
                    ...panelSx,
                    "&:hover": {
                      ...panelSx["&:hover"],
                      borderColor: alpha(group.color, 0.42),
                      boxShadow: `0 15px 40px ${alpha(group.color, 0.08)}`,
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
                          color: group.color,
                          backgroundColor: alpha(group.color, 0.1),
                          border: `1px solid ${alpha(group.color, 0.2)}`,
                          "& svg": { fontSize: 25 },
                        }}
                      >
                        {group.icon}
                      </Box>

                      <Box sx={{ minWidth: 0 }}>
                        <Typography
                          sx={{
                            color: COLORS.text,
                            fontWeight: 900,
                            fontSize: "0.95rem",
                          }}
                        >
                          {group.title}
                        </Typography>

                        <Typography
                          variant="caption"
                          sx={{ color: COLORS.muted }}
                        >
                          {group.subtitle}
                        </Typography>
                      </Box>
                    </Box>

                    <Divider sx={{ mb: 2, borderColor: COLORS.border }} />

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {group.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{
                            color: group.color,
                            fontWeight: 700,
                            border: `1px solid ${alpha(group.color, 0.2)}`,
                            backgroundColor: alpha(group.color, 0.07),
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
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
                      color: COLORS.muted,
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
                          backgroundColor: "rgba(148, 163, 184, 0.045)",
                          border: `1px solid ${COLORS.border}`,
                        }}
                      >
                        <CheckCircleRounded
                          sx={{
                            mt: 0.2,
                            flexShrink: 0,
                            fontSize: 19,
                            color: COLORS.primary,
                          }}
                        />

                        <Typography
                          variant="body2"
                          sx={{ color: COLORS.text, lineHeight: 1.8 }}
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
            sx={{ color: alpha(COLORS.primary, 0.7), fontSize: 25, mb: 1 }}
          />

          <Typography
            variant="body2"
            sx={{ color: COLORS.muted, fontSize: "0.8rem" }}
          >
            طراحی و توسعه با تمرکز بر کیفیت، سادگی و تجربه کاربری
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Resume;
