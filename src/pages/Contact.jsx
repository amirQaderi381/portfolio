import { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Snackbar,
  Alert,
  Stack,
  TextField,
  Typography,
  Tooltip,
} from "@mui/material";

import {
  AlternateEmailRounded,
  ArrowOutwardRounded,
  CheckCircleRounded,
  CodeRounded,
  GitHub,
  LinkedIn,
  SendRounded,
  TerminalRounded,
  PersonOutlineRounded,
  SubjectRounded,
  MessageRounded,
  AutoAwesomeRounded,
  MarkEmailUnreadRounded,
} from "@mui/icons-material";

const contactMethods = [
  {
    title: "ایمیل",
    subtitle: "برای همکاری و ارتباط مستقیم",
    value: "your-email@example.com",
    href: "mailto:your-email@example.com",
    icon: <AlternateEmailRounded />,
    color: "#8BE9FD",
  },
  {
    title: "GitHub",
    subtitle: "کدها و پروژه‌های من",
    value: "مشاهده مخزن‌ها",
    href: "https://github.com/your-username",
    icon: <GitHub />,
    color: "#BD93F9",
  },
  {
    title: "LinkedIn",
    subtitle: "ارتباط حرفه‌ای و کاری",
    value: "پروفایل لینکدین",
    href: "https://linkedin.com/in/your-username",
    icon: <LinkedIn />,
    color: "#67E8F9",
  },
];

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    sectionRef.current?.focus({ preventScroll: true });
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "نام خودت رو وارد کن";
    }

    if (!form.email.trim()) {
      nextErrors.email = "ایمیلت رو وارد کن";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "فرمت ایمیل معتبر نیست";
    }

    if (!form.subject.trim()) {
      nextErrors.subject = "موضوع پیام رو مشخص کن";
    }

    if (!form.message.trim()) {
      nextErrors.message = "پیامت رو بنویس";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      // برای ارسال واقعی، این بخش را به API یا سرویس ایمیل متصل کن.
      setNotice(true);
    }
  };

  return (
    <Box
      component="section"
      ref={sectionRef}
      tabIndex={0}
      id="contact"
      dir="rtl"
      sx={(theme) => ({
        position: "relative",
        isolation: "isolate",
        width: "100%",
        height: "100%",
        minHeight: 0,
        overflowY: "auto",
        overflowX: "hidden",
        boxSizing: "border-box",
        py: { xs: 4, sm: 6, md: 8 },
        color: "text.primary",
        background: theme.custom.portfolio.sectionBg,
        scrollbarWidth: "thin",
        scrollbarColor: theme.palette.primary.main,
        WebkitOverflowScrolling: "touch",
        "&::-webkit-scrollbar": { width: 6 },
        "&::-webkit-scrollbar-thumb": {
          background: theme.palette.primary.main,
          borderRadius: 10,
        },
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
          opacity: theme.custom.portfolio.dotsOpacity,
          backgroundImage: theme.custom.portfolio.dotsImage,
          backgroundSize: "22px 22px",
        },

        "&::after": {
          content: '""',
          position: "absolute",
          width: { xs: 240, md: 420 },
          height: { xs: 240, md: 420 },
          borderRadius: "50%",
          background: theme.palette.primary.main,
          opacity: 0.06,
          filter: "blur(100px)",
          top: "28%",
          left: "-180px",
          zIndex: -1,
          pointerEvents: "none",
        },
      })}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Stack spacing={2} alignItems="center" textAlign="center" mb={6}>
          <Chip
            icon={<TerminalRounded sx={{ fontSize: 18 }} />}
            label="ارتباط با من"
            sx={(theme) => ({
              color: theme.custom.portfolio.accents.primary,
              bgcolor: theme.custom.portfolio.neutralChipBg,
              border: `1px solid ${theme.custom.portfolio.border}`,
              borderRadius: "10px",
              fontWeight: 700,
              px: 1,
              "& .MuiChip-icon": {
                color: "inherit",
              },
            })}
          />

          <Typography
            component="h1"
            sx={(theme) => ({
              fontSize: {
                xs: "2rem",
                sm: "2.8rem",
                md: "3.5rem",
              },
              lineHeight: 1.5,
              fontWeight: 900,
              letterSpacing: "-1.5px",
              background: theme.custom.portfolio.titleGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            })}
          >
            بیایید با هم صحبت کنیم
          </Typography>

          <Typography
            sx={{
              maxWidth: 590,
              color: "text.secondary",
              fontSize: { xs: "0.9rem", sm: "1.05rem" },
              lineHeight: 2.2,
            }}
          >
            ایده‌ای برای ساختن دارید؟ دنبال یک توسعه‌دهنده برای پروژه‌تان هستید؟
            خوشحال می‌شوم درباره ایده‌تان صحبت کنیم.
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            useFlexGap
            sx={{
              mt: 1,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: "#34D399",
                boxShadow: "0 0 12px rgba(52, 211, 153, 0.7)",
              }}
            />
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontSize: "0.82rem" }}
            >
              آماده همکاری روی پروژه‌های جذاب
            </Typography>
          </Stack>
        </Stack>

        {/* Main content */}
        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
          {/* Contact form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              component="form"
              onSubmit={handleSubmit}
              noValidate
              elevation={0}
              sx={(theme) => ({
                position: "relative",
                height: "100%",
                overflow: "hidden",
                p: { xs: 2.5, sm: 3.5, md: 4 },
                borderRadius: { xs: 3, md: 4 },
                background: theme.custom.portfolio.panel.bg,
                border: `1px solid ${theme.custom.portfolio.border}`,
                boxShadow: theme.custom.portfolio.panel.shadow,
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "12%",
                  right: "12%",
                  height: "2px",
                  background: theme.custom.gradients.neon,
                  opacity: 0.9,
                },
              })}
            >
              <Stack spacing={1} mb={3.5}>
                <Stack direction="row" alignItems="center" spacing={1.2}>
                  <Box
                    sx={(theme) => ({
                      display: "grid",
                      placeItems: "center",
                      width: 43,
                      height: 43,
                      borderRadius: 2.5,
                      color: theme.palette.primary.main,
                      bgcolor: theme.palette.primary.main + "14",
                      border: `1px solid ${theme.custom.portfolio.border}`,
                    })}
                  >
                    <MarkEmailUnreadRounded />
                  </Box>

                  <Box>
                    <Typography fontWeight={800} fontSize="1.15rem">
                      پیام خودت رو بفرست
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      فیلدهای ستاره‌دار ضروری هستند
                    </Typography>
                  </Box>
                </Stack>
              </Stack>

              <Grid container spacing={2.2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    required
                    label="نام شما"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                    placeholder="مثلاً امیر قادری"
                    autoComplete="name"
                    slotProps={{
                      input: {
                        startAdornment: (
                          <PersonOutlineRounded
                            sx={{
                              color: "text.secondary",
                              ml: 1,
                              fontSize: 21,
                            }}
                          />
                        ),
                      },
                    }}
                    sx={fieldSx}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    required
                    label="ایمیل"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                    placeholder="you@example.com"
                    autoComplete="email"
                    slotProps={{
                      input: {
                        startAdornment: (
                          <AlternateEmailRounded
                            sx={{
                              color: "text.secondary",
                              ml: 1,
                              fontSize: 21,
                            }}
                          />
                        ),
                      },
                    }}
                    sx={fieldSx}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    required
                    label="موضوع پیام"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    error={Boolean(errors.subject)}
                    helperText={errors.subject}
                    placeholder="درباره چه چیزی می‌خواهید صحبت کنیم؟"
                    slotProps={{
                      input: {
                        startAdornment: (
                          <SubjectRounded
                            sx={{
                              color: "text.secondary",
                              ml: 1,
                              fontSize: 21,
                            }}
                          />
                        ),
                      },
                    }}
                    sx={fieldSx}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    required
                    multiline
                    minRows={5}
                    maxRows={9}
                    label="پیام شما"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    error={Boolean(errors.message)}
                    helperText={errors.message}
                    placeholder="ایده یا توضیحات پروژه‌ات رو اینجا بنویس..."
                    slotProps={{
                      input: {
                        startAdornment: (
                          <MessageRounded
                            sx={{
                              color: "text.secondary",
                              ml: 1,
                              mt: 1.8,
                              fontSize: 21,
                            }}
                          />
                        ),
                      },
                    }}
                    sx={fieldSx}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    endIcon={<SendRounded />}
                    sx={(theme) => ({
                      mt: 0.5,
                      minHeight: 54,
                      borderRadius: 2.5,
                      color:
                        theme.palette.mode === "dark" ? "#080D19" : "#FFFFFF",
                      fontSize: "0.95rem",
                      fontWeight: 800,
                      background: theme.custom.gradients.button,
                      boxShadow:
                        theme.palette.mode === "dark"
                          ? "0 8px 28px rgba(139, 233, 253, 0.12)"
                          : "0 8px 28px rgba(99, 102, 241, 0.24)",
                      transition: "all 250ms ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        filter: "brightness(1.08)",
                        boxShadow: "0 12px 32px rgba(99, 102, 241, 0.28)",
                      },
                      "& .MuiButton-endIcon": {
                        mr: 0,
                        ml: 1,
                      },
                    })}
                  >
                    ارسال پیام
                  </Button>
                </Grid>
              </Grid>

              <Snackbar
                open={notice}
                autoHideDuration={5000}
                onClose={() => setNotice(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              >
                <Alert
                  severity="info"
                  variant="filled"
                  onClose={() => setNotice(false)}
                >
                  فرم اعتبارسنجی شد؛ برای ارسال واقعی باید API یا سرویس ایمیل را
                  متصل کنی.
                </Alert>
              </Snackbar>
            </Paper>
          </Grid>

          {/* Contact details */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2.5} height="100%">
              <Paper
                elevation={0}
                sx={(theme) => ({
                  p: { xs: 2.5, sm: 3 },
                  borderRadius: 4,
                  background: theme.custom.portfolio.panel.bg,
                  border: `1px solid ${theme.custom.portfolio.border}`,
                  boxShadow: theme.custom.portfolio.panel.shadow,
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                })}
              >
                <Stack direction="row" alignItems="center" spacing={1.2} mb={1}>
                  <AutoAwesomeRounded
                    sx={{ color: "secondary.main", fontSize: 25 }}
                  />
                  <Typography fontWeight={800} fontSize="1.12rem">
                    راه‌های ارتباطی
                  </Typography>
                </Stack>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  lineHeight={2}
                  mb={3}
                >
                  از هر کدام از راه‌های زیر که راحت‌تری با من در ارتباط باش.
                </Typography>

                <Stack spacing={1.5}>
                  {contactMethods.map((item) => (
                    <Box
                      key={item.title}
                      component="a"
                      href={item.href}
                      target={
                        item.href.startsWith("mailto:") ? undefined : "_blank"
                      }
                      rel="noreferrer"
                      sx={(theme) => ({
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        p: 1.7,
                        textDecoration: "none",
                        color: "inherit",
                        borderRadius: 3,
                        border: "1px solid",
                        borderColor: theme.custom.portfolio.border,
                        bgcolor: theme.custom.portfolio.neutralChipBg,
                        transition: "all 220ms ease",
                        minWidth: 0,
                        "&:hover": {
                          transform: "translateX(-4px)",
                          borderColor: item.color,
                          bgcolor: `${item.color}0D`,
                          boxShadow: `0 8px 24px ${item.color}12`,
                          "& .contact-arrow": {
                            opacity: 1,
                            transform: "translate(-2px, -2px)",
                          },
                        },
                      })}
                    >
                      <Box
                        sx={{
                          width: 46,
                          height: 46,
                          flexShrink: 0,
                          display: "grid",
                          placeItems: "center",
                          borderRadius: 2.5,
                          color: item.color,
                          bgcolor: `${item.color}14`,
                          border: `1px solid ${item.color}30`,
                          "& svg": { fontSize: 23 },
                        }}
                      >
                        {item.icon}
                      </Box>

                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography fontWeight={800} fontSize="0.9rem">
                          {item.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          display="block"
                          sx={{ mt: 0.3 }}
                        >
                          {item.subtitle}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            mt: 0.6,
                            color: item.color,
                            overflowWrap: "anywhere",
                            fontSize: "0.8rem",
                          }}
                        >
                          {item.value}
                        </Typography>
                      </Box>

                      <ArrowOutwardRounded
                        className="contact-arrow"
                        sx={{
                          color: item.color,
                          opacity: 0.55,
                          flexShrink: 0,
                          transition: "all 220ms ease",
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Paper>

              {/* Collaboration card */}
              <Paper
                elevation={0}
                sx={(theme) => ({
                  position: "relative",
                  overflow: "hidden",
                  flex: 1,
                  minHeight: 190,
                  p: { xs: 2.5, sm: 3 },
                  borderRadius: 4,
                  border: `1px solid ${theme.custom.portfolio.border}`,
                  background: theme.custom.gradients.glass,
                  boxShadow: theme.custom.portfolio.panel.shadow,
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: 150,
                    height: 150,
                    left: -55,
                    bottom: -75,
                    borderRadius: "50%",
                    border: `1px solid ${theme.palette.primary.main}30`,
                    boxShadow: `0 0 45px ${theme.palette.primary.main}12`,
                    pointerEvents: "none",
                  },
                })}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  mb={2}
                  gap={1}
                >
                  <Chip
                    size="small"
                    icon={
                      <CheckCircleRounded
                        sx={{ fontSize: "15px !important" }}
                      />
                    }
                    label="آماده همکاری"
                    sx={{
                      bgcolor: "rgba(52, 211, 153, 0.1)",
                      color: "#34D399",
                      border: "1px solid rgba(52, 211, 153, 0.25)",
                      fontWeight: 700,
                      "& .MuiChip-icon": { color: "inherit" },
                    }}
                  />

                  <CodeRounded
                    sx={{
                      fontSize: 27,
                      color: "secondary.main",
                      opacity: 0.9,
                    }}
                  />
                </Stack>

                <Typography
                  fontWeight={900}
                  fontSize="1.18rem"
                  lineHeight={1.8}
                  mb={1}
                >
                  ایده‌ات رو به واقعیت تبدیل کنیم!
                </Typography>

                <Typography
                  color="text.secondary"
                  variant="body2"
                  lineHeight={2.1}
                  sx={{ maxWidth: 350 }}
                >
                  از توسعه وب‌اپلیکیشن تا ساخت تجربه‌های دیجیتال جذاب؛ بیایید یک
                  پروژه متفاوت بسازیم.
                </Typography>

                <Divider sx={{ my: 2, borderColor: "divider" }} />

                <Stack direction="row" alignItems="center" spacing={1}>
                  <Tooltip title="GitHub">
                    <IconButton
                      component="a"
                      href="https://github.com/your-username"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      sx={socialButtonSx}
                    >
                      <GitHub />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="LinkedIn">
                    <IconButton
                      component="a"
                      href="https://linkedin.com/in/your-username"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      sx={socialButtonSx}
                    >
                      <LinkedIn />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="ارسال ایمیل">
                    <IconButton
                      component="a"
                      href="mailto:your-email@example.com"
                      aria-label="ارسال ایمیل"
                      sx={socialButtonSx}
                    >
                      <AlternateEmailRounded />
                    </IconButton>
                  </Tooltip>

                  <Box flex={1} />

                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ direction: "ltr" }}
                  >
                    Let&apos;s build something great.
                  </Typography>
                </Stack>
              </Paper>
            </Stack>
          </Grid>
        </Grid>

        {/* Footer */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
          mt={5}
          sx={{ opacity: 0.7 }}
        >
          <CodeRounded sx={{ fontSize: 17, color: "primary.main" }} />
          <Typography variant="caption" color="text.secondary">
            ساخته‌شده با خلاقیت، کد و کمی جادو
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

const fieldSx = (theme) => ({
  "& .MuiInputLabel-root": {
    color: theme.palette.text.secondary,
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: theme.palette.primary.main,
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: 2.5,
    color: theme.palette.text.primary,
    bgcolor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.025)"
        : "rgba(255,255,255,0.55)",
    transition: "all 200ms ease",
    "& fieldset": {
      borderColor: theme.custom.portfolio.border,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main + "80",
    },
    "&.Mui-focused": {
      boxShadow: `0 0 0 3px ${theme.palette.primary.main}12`,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
      borderWidth: "1px",
    },
  },
  "& .MuiFormHelperText-root": {
    mx: 0.5,
  },
});

const socialButtonSx = (theme) => ({
  width: 39,
  height: 39,
  color: theme.palette.text.secondary,
  border: `1px solid ${theme.custom.portfolio.border}`,
  borderRadius: 2.5,
  transition: "all 200ms ease",
  "&:hover": {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    bgcolor: `${theme.palette.primary.main}12`,
    transform: "translateY(-2px)",
  },
});

export default Contact;
