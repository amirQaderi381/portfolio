import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  Box,
  Button,
  Chip,
  Dialog,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";

import { alpha } from "@mui/material/styles";

import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  AutoAwesomeRounded,
  BusinessRounded,
  ChevronLeftRounded,
  ChevronRightRounded,
  CloseRounded,
  CodeRounded,
  FilterAltOffRounded,
  GitHub as GitHubIcon,
  LayersRounded,
  OpenInNewRounded,
  StarRounded,
  WorkspacesRounded,
  SearchRounded,
} from "@mui/icons-material";

import { projects } from "../constants/projects";

/* -------------------------------------------------------------------------- */
/*  رنگ‌ها                                                                    */
/*  همه رنگ‌ها از theme.custom.portfolio (theme.js) خوانده می‌شوند و بسته به    */
/*  مود لایت/دارک عوض می‌شوند. چون از alpha() استفاده می‌شود، توکن‌ها با        */
/*  useTheme() به‌صورت مقدار مستقیم گرفته می‌شوند.                              */
/* -------------------------------------------------------------------------- */

const usePortfolioTokens = () => {
  const t = useTheme().custom.portfolio;

  // رنگ‌های داده (project.color) در لایت کمی تیره می‌شوند تا خوانا بمانند
  const tone = (color) =>
    t.toneMix ? `color-mix(in srgb, ${color} ${t.toneMix}%, ${t.toneWith})` : color;

  const panelSx = {
    position: "relative",
    overflow: "hidden",
    border: "1px solid",
    borderColor: t.border,
    borderRadius: { xs: 3, md: 4 },
    background: t.panel.bg,
    boxShadow: t.panel.shadow,
  };

  return { t, tone, panelSx };
};

/* -------------------------------------------------------------------------- */
/*  داده‌ها                                                                    */
/*  متن‌ها از روی سوابق کاری شما نوشته شده‌اند. لینک‌ها و تصاویر را خودتان       */
/*  اضافه کنید: liveUrl / repoUrl / image (آدرس اسکرین‌شات)                    */
/* -------------------------------------------------------------------------- */

const CATEGORIES = [
  { id: "all", label: "همه" },
  { id: "fullstack", label: "فول‌استک" },
  { id: "frontend", label: "فرانت‌اند" },
  { id: "backend", label: "بک‌اند" },
  { id: "devops", label: "دواپس و زیرساخت" },
];

const toFa = (n) => n.toLocaleString("fa-IR");

/* -------------------------------------------------------------------------- */
/*  اجزای کوچک                                                                */
/* -------------------------------------------------------------------------- */

function CountUp({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const text = useTransform(motionValue, (latest) => toFa(Math.round(latest)));

  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(motionValue, value, {
      duration: 1.2,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [inView, value, motionValue]);

  return <motion.span ref={ref}>{text}</motion.span>;
}

function StatTile({ icon, value, label, color }) {
  const { panelSx } = usePortfolioTokens();

  return (
    <Box
      sx={{
        ...panelSx,
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        p: { xs: 1.5, sm: 2 },
      }}
    >
      <Box
        sx={{
          width: 42,
          height: 42,
          flexShrink: 0,
          display: "grid",
          placeItems: "center",
          borderRadius: 2.5,
          color,
          backgroundColor: alpha(color, 0.1),
          border: `1px solid ${alpha(color, 0.25)}`,
          "& svg": { fontSize: 22 },
        }}
      >
        {icon}
      </Box>

      <Box sx={{ minWidth: 0 }}>
        <Typography
          sx={{
            fontWeight: 900,
            lineHeight: 1.2,
            fontSize: { xs: "1.15rem", sm: "1.4rem" },
          }}
        >
          <CountUp value={value} />
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {label}
        </Typography>
      </Box>
    </Box>
  );
}

function FilterPills({ value, onChange, counts }) {
  const { t } = usePortfolioTokens();
  const { primary, secondary } = t.accents;

  return (
    <Box
      role="group"
      aria-label="فیلتر دسته‌بندی پروژه‌ها"
      sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
    >
      {CATEGORIES.map((category) => {
        const active = value === category.id;

        return (
          <Box
            key={category.id}
            component="button"
            type="button"
            onClick={() => onChange(category.id)}
            aria-pressed={active}
            sx={{
              position: "relative",
              px: 2,
              py: 0.9,
              font: "inherit",
              fontSize: "0.85rem",
              fontWeight: 700,
              cursor: "pointer",
              borderRadius: 999,
              border: "1px solid",
              borderColor: t.border,
              background: t.pill.bg,
              color: active ? t.pill.activeText : "text.secondary",
              transition: "color 200ms ease, border-color 200ms ease",
              "&:hover": {
                borderColor: alpha(primary, 0.4),
                color: active ? t.pill.activeText : "text.primary",
              },
              "&:focus-visible": {
                outline: `2px solid ${alpha(primary, 0.7)}`,
                outlineOffset: 2,
              },
            }}
          >
            {active && (
              <motion.span
                layoutId="portfolio-filter-pill"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 999,
                  background: `linear-gradient(110deg, ${primary}, ${secondary})`,
                }}
              />
            )}

            <Box
              component="span"
              sx={{
                position: "relative",
                zIndex: 1,
                display: "inline-flex",
                alignItems: "center",
                gap: 0.8,
              }}
            >
              {category.label}
              <Box component="span" sx={{ fontSize: "0.72rem", opacity: 0.75 }}>
                {toFa(counts[category.id])}
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

function ProjectCover({ project, height }) {
  const { t } = usePortfolioTokens();
  const { secondary, orange } = t.accents;

  return (
    <Box
      sx={{
        position: "relative",
        height,
        overflow: "hidden",
        borderBottom: "1px solid",
        borderColor: t.border,
        background: `linear-gradient(135deg, ${alpha(project.color, 0.28)}, ${alpha(
          secondary,
          0.12,
        )} 60%, transparent)`,
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          opacity: 0.35,
          backgroundImage: t.coverDots,
          backgroundSize: "18px 18px",
        },
      }}
    >
      {project.image ? (
        <Box
          component="img"
          src={project.image}
          alt=""
          loading="lazy"
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ) : (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "grid",
            placeItems: "center",
          }}
        >
          <Box
            sx={{
              width: 64,
              height: 64,
              display: "grid",
              placeItems: "center",
              borderRadius: 3,
              color: project.color,
              backgroundColor: alpha(project.color, 0.12),
              border: `1px solid ${alpha(project.color, 0.3)}`,
              boxShadow: `0 0 32px ${alpha(project.color, 0.25)}`,
              "& svg": { fontSize: 34 },
            }}
          >
            {project.icon}
          </Box>
        </Box>
      )}

      {project.featured && (
        <Chip
          size="small"
          icon={<StarRounded sx={{ fontSize: 16 }} />}
          label="ویژه"
          sx={{
            position: "absolute",
            top: 12,
            insetInlineStart: 12,
            zIndex: 2,
            fontWeight: 800,
            color: orange,
            backgroundColor: t.floatingBg,
            border: `1px solid ${alpha(orange, 0.4)}`,
            "& .MuiChip-icon": { color: orange },
          }}
        />
      )}
    </Box>
  );
}

function ProjectCard({ project, onOpen, reduceMotion }) {
  const { t, tone, panelSx } = usePortfolioTokens();
  const cardRef = useRef(null);
  const rotateX = useSpring(0, { stiffness: 180, damping: 18 });
  const rotateY = useSpring(0, { stiffness: 180, damping: 18 });

  const handleMove = (event) => {
    const element = cardRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // موقعیت نور دنبال‌کننده‌ی ماوس (از طریق CSS variable، بدون رندر مجدد)
    element.style.setProperty("--mx", `${x}px`);
    element.style.setProperty("--my", `${y}px`);

    if (reduceMotion) return;
    rotateY.set((x / rect.width - 0.5) * 8);
    rotateX.set(-(y / rect.height - 0.5) * 8);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const visibleTech = project.tech.slice(0, 4);
  const extraTech = project.tech.length - visibleTech.length;

  return (
    <motion.div
      style={{
        height: "100%",
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
    >
      <Box
        ref={cardRef}
        component="article"
        onClick={() => onOpen(project.id)}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        sx={{
          ...panelSx,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          transition: "border-color 250ms ease, box-shadow 250ms ease",
          "&:hover": {
            borderColor: alpha(project.color, 0.45),
            boxShadow: `0 18px 48px ${alpha(project.color, 0.14)}`,
          },
          "&:hover .spotlight": { opacity: 1 },
        }}
      >
        <Box
          className="spotlight"
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            opacity: 0,
            pointerEvents: "none",
            transition: "opacity 250ms ease",
          }}
          style={{
            background: `radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), ${alpha(
              project.color,
              t.spotlight,
            )}, transparent 45%)`,
          }}
        />

        <ProjectCover project={project} height={150} />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            flex: 1,
            p: { xs: 2, sm: 2.5 },
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 900, fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            {project.title}
          </Typography>

          <Typography
            variant="caption"
            sx={{ mt: 0.3, color: tone(project.color), fontWeight: 800 }}
          >
            {project.company} · {project.period}
          </Typography>

          <Typography
            sx={{
              mt: 1.2,
              color: "text.secondary",
              fontSize: "0.88rem",
              lineHeight: 2,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.description}
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mt: 2 }}>
            {visibleTech.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                variant="outlined"
                sx={{
                  color: "text.secondary",
                  borderColor: alpha(project.color, 0.3),
                  backgroundColor: alpha(project.color, 0.05),
                }}
              />
            ))}
            {extraTech > 0 && (
              <Chip
                label={`+${toFa(extraTech)}`}
                size="small"
                sx={{
                  color: "text.secondary",
                  backgroundColor: t.extraChipBg,
                }}
              />
            )}
          </Box>

          <Box
            sx={{
              mt: "auto",
              pt: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1,
            }}
          >
            <Button
              size="small"
              onClick={(event) => {
                event.stopPropagation();
                onOpen(project.id);
              }}
              endIcon={<ChevronLeftRounded />}
              sx={{ color: tone(project.color), fontWeight: 800, px: 1 }}
            >
              جزئیات پروژه
            </Button>

            <Box sx={{ display: "flex", gap: 0.5 }}>
              {project.liveUrl && (
                <Tooltip title="مشاهده‌ی زنده">
                  <IconButton
                    size="small"
                    component="a"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`مشاهده‌ی زنده ${project.title}`}
                    onClick={(event) => event.stopPropagation()}
                    sx={{ color: "text.secondary" }}
                  >
                    <OpenInNewRounded fontSize="small" />
                  </IconButton>
                </Tooltip>
              )}
              {project.repoUrl && (
                <Tooltip title="کد منبع">
                  <IconButton
                    size="small"
                    component="a"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`کد منبع ${project.title}`}
                    onClick={(event) => event.stopPropagation()}
                    sx={{ color: "text.secondary" }}
                  >
                    <GitHubIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

function ProjectDialog({
  project,
  open,
  onClose,
  onPrev,
  onNext,
  position,
  total,
}) {
  const { t, tone } = usePortfolioTokens();
  const { primary, secondary } = t.accents;

  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      aria-labelledby="project-dialog-title"
      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: "blur(6px)",
            backgroundColor: t.dialog.backdrop,
          },
        },
        paper: {
          dir: "rtl",
          sx: {
            m: { xs: 1.5, sm: 3 },
            width: { xs: "calc(100% - 24px)", sm: "100%" },
            color: "text.primary",
            borderRadius: 4,
            border: `1px solid ${alpha(project.color, 0.35)}`,
            background: t.dialog.bg,
            backgroundImage: t.dialog.bg,
            boxShadow: `${t.dialog.shadow}, 0 0 60px ${alpha(
              project.color,
              0.1,
            )}`,
            textAlign: "start",
          },
        },
      }}
    >
      <Box sx={{ position: "relative", flexShrink: 0 }}>
        <ProjectCover project={project} height={170} />

        <IconButton
          onClick={onClose}
          aria-label="بستن"
          sx={{
            position: "absolute",
            top: 12,
            insetInlineEnd: 12,
            zIndex: 3,
            color: "text.primary",
            backgroundColor: t.closeBtn.bg,
            "&:hover": { backgroundColor: t.closeBtn.hoverBg },
          }}
        >
          <CloseRounded />
        </IconButton>
      </Box>

      <Box sx={{ flex: 1, overflowY: "auto", p: { xs: 2.2, sm: 3.5 } }}>
        <Typography
          id="project-dialog-title"
          variant="h5"
          sx={{ fontWeight: 900, fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
        >
          {project.title}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1.5 }}>
          <Chip
            size="small"
            icon={<BusinessRounded />}
            label={project.company}
            sx={{
              color: tone(project.color),
              fontWeight: 700,
              backgroundColor: alpha(project.color, 0.09),
              border: `1px solid ${alpha(project.color, 0.3)}`,
              "& .MuiChip-icon": { color: tone(project.color) },
            }}
          />
          <Chip
            size="small"
            icon={<WorkspacesRounded />}
            label={project.role}
            sx={{
              color: "text.secondary",
              border: "1px solid",
              borderColor: t.border,
              backgroundColor: t.neutralChipBg,
            }}
          />
          <Chip
            size="small"
            label={project.period}
            sx={{
              color: "text.secondary",
              border: "1px solid",
              borderColor: t.border,
              backgroundColor: t.neutralChipBg,
            }}
          />
        </Box>

        <Typography
          sx={{
            mt: 2.5,
            color: "text.secondary",
            lineHeight: 2.1,
            fontSize: { xs: "0.9rem", sm: "0.97rem" },
          }}
        >
          {project.description}
        </Typography>

        {project.highlights?.length > 0 && (
          <>
            <Typography sx={{ mt: 3, mb: 1, fontWeight: 800 }}>
              نقش و دستاوردها
            </Typography>
            <Box
              component="ul"
              sx={{
                m: 0,
                paddingInlineStart: 2.5,
                color: "text.secondary",
                lineHeight: 2.1,
                fontSize: { xs: "0.88rem", sm: "0.94rem" },
                "& li::marker": { color: project.color },
              }}
            >
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </Box>
          </>
        )}

        <Typography sx={{ mt: 3, mb: 1.2, fontWeight: 800 }}>
          فناوری‌های مورد استفاده
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {project.tech.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                color: tone(project.color),
                fontWeight: 700,
                border: `1px solid ${alpha(project.color, 0.28)}`,
                backgroundColor: alpha(project.color, 0.08),
              }}
            />
          ))}
        </Box>

        <Box
          sx={{
            mt: 3.5,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          {project.liveUrl && (
            <Button
              component="a"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              endIcon={<OpenInNewRounded />}
              sx={{
                color: t.containedBtn.color,
                fontWeight: 900,
                borderRadius: 2.5,
                px: 2.5,
                background: `linear-gradient(110deg, ${primary}, ${secondary})`,
                "&:hover": {
                  background: t.containedBtn.hoverBg,
                },
              }}
            >
              مشاهده‌ی پروژه
            </Button>
          )}

          {project.repoUrl && (
            <Button
              component="a"
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={<GitHubIcon />}
              sx={{
                color: primary,
                fontWeight: 800,
                borderRadius: 2.5,
                borderColor: alpha(primary, 0.45),
              }}
            >
              کد منبع
            </Button>
          )}

          {!project.liveUrl && !project.repoUrl && (
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              لینک عمومی برای این پروژه ثبت نشده است.
            </Typography>
          )}
        </Box>
      </Box>

      <Box
        sx={{
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          px: { xs: 1.5, sm: 2.5 },
          py: 1.2,
          borderTop: "1px solid",
          borderColor: t.border,
          backgroundColor: t.dialog.footerBg,
        }}
      >
        <Button
          onClick={onPrev}
          startIcon={<ChevronRightRounded />}
          sx={{ color: "text.secondary", fontWeight: 700 }}
        >
          قبلی
        </Button>

        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {toFa(position)} از {toFa(total)}
        </Typography>

        <Button
          onClick={onNext}
          endIcon={<ChevronLeftRounded />}
          sx={{ color: "text.secondary", fontWeight: 700 }}
        >
          بعدی
        </Button>
      </Box>
    </Dialog>
  );
}

/* -------------------------------------------------------------------------- */
/*  صفحه‌ی اصلی                                                               */
/* -------------------------------------------------------------------------- */

function Portfolio() {
  const { t, panelSx } = usePortfolioTokens();
  const { primary, secondary, success } = t.accents;
  const reduceMotion = useReducedMotion();
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const searchRef = useRef(null);
  const lastSelected = useRef(null);

  const counts = useMemo(() => {
    const result = { all: projects.length };
    CATEGORIES.forEach((item) => {
      if (item.id !== "all") {
        result[item.id] = projects.filter((p) =>
          p.categories.includes(item.id),
        ).length;
      }
    });
    return result;
  }, []);

  const stats = useMemo(
    () => ({
      projects: projects.length,
      technologies: new Set(projects.flatMap((p) => p.tech)).size,
      companies: new Set(projects.map((p) => p.company)).size,
    }),
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return projects.filter((project) => {
      if (category !== "all" && !project.categories.includes(category)) {
        return false;
      }
      if (!q) return true;

      const haystack = [
        project.title,
        project.company,
        project.description,
        ...project.tech,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [category, query]);

  const selected = projects.find((p) => p.id === selectedId) ?? null;
  if (selected) lastSelected.current = selected;
  const dialogProject = selected ?? lastSelected.current;

  const selectedIndex = filtered.findIndex((p) => p.id === selectedId);

  const step = useCallback(
    (delta) => {
      if (!filtered.length) return;
      const current = filtered.findIndex((p) => p.id === selectedId);
      if (current < 0) return;
      const next = (current + delta + filtered.length) % filtered.length;
      setSelectedId(filtered[next].id);
    },
    [filtered, selectedId],
  );

  useEffect(() => {
    const onKeyDown = (event) => {
      const target = event.target;
      const typing =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;

      if (event.key === "/" && !typing && selectedId === null) {
        event.preventDefault();
        searchRef.current?.focus();
        return;
      }

      if (selectedId === null) return;
      // در حالت RTL «بعدی» سمت چپ است
      if (event.key === "ArrowLeft") step(1);
      if (event.key === "ArrowRight") step(-1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedId, step]);

  const resetFilters = () => {
    setCategory("all");
    setQuery("");
  };

  return (
    <Box
      component="section"
      id="portfolio"
      dir="rtl"
      sx={{
        position: "relative",
        isolation: "isolate",
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        minHeight: 0,
        overflowY: "auto",
        overflowX: "hidden",
        textAlign: "start",
        px: { xs: 1.5, sm: 3, md: 4, lg: 6 },
        py: { xs: 3, sm: 4, md: 5 },
        color: "text.primary",
        background: t.sectionBg,
        scrollbarWidth: "thin",
        scrollbarColor: t.scrollbarColor,
        WebkitOverflowScrolling: "touch",
        "&::-webkit-scrollbar": { width: 6 },
        "&::-webkit-scrollbar-thumb": {
          background: t.scrollbarThumb,
          borderRadius: 10,
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
        <Box sx={{ mb: { xs: 4, md: 5 } }}>
          <Chip
            icon={<AutoAwesomeRounded sx={{ fontSize: 17 }} />}
            label="نمونه‌کارها و پروژه‌ها"
            sx={{
              mb: 2,
              color: primary,
              border: `1px solid ${alpha(primary, 0.25)}`,
              backgroundColor: alpha(primary, 0.07),
              fontWeight: 700,
              "& .MuiChip-icon": { color: primary },
            }}
          />

          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              lineHeight: 1.5,
              fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem" },
            }}
          >
            پروژه‌هایی که{" "}
            <Box
              component="span"
              sx={{
                background: t.titleGradient,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ساخته‌ام
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
            مجموعه‌ای از پروژه‌های سیستم‌های مالی، پنل‌های مدیریت، CMS و
            زیرساخت. روی هر کارت کلیک کنید تا جزئیات و فناوری‌های آن را ببینید.
          </Typography>
        </Box>

        {/* Stats */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            gap: 2,
            mb: { xs: 4, md: 5 },
          }}
        >
          <StatTile
            icon={<LayersRounded />}
            value={stats.projects}
            label="پروژه"
            color={primary}
          />
          <StatTile
            icon={<CodeRounded />}
            value={stats.technologies}
            label="فناوری و ابزار"
            color={secondary}
          />
          <StatTile
            icon={<BusinessRounded />}
            value={stats.companies}
            label="شرکت و همکاری"
            color={success}
          />
        </Box>

        {/* Controls */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "stretch", md: "center" },
            justifyContent: "space-between",
            gap: 2,
            mb: 1.5,
          }}
        >
          <FilterPills
            value={category}
            onChange={setCategory}
            counts={counts}
          />

          <TextField
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="جستجو در پروژه‌ها و فناوری‌ها"
            size="small"
            inputRef={searchRef}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRounded fontSize="small" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    {query ? (
                      <IconButton
                        size="small"
                        aria-label="پاک کردن جستجو"
                        onClick={() => setQuery("")}
                        sx={{ color: "text.secondary" }}
                      >
                        <CloseRounded fontSize="small" />
                      </IconButton>
                    ) : (
                      <Box
                        component="kbd"
                        aria-hidden
                        sx={{
                          px: 0.9,
                          py: 0.1,
                          fontFamily: "inherit",
                          fontSize: "0.75rem",
                          color: "text.secondary",
                          borderRadius: 1,
                          border: "1px solid",
                          borderColor: t.border,
                        }}
                      >
                        /
                      </Box>
                    )}
                  </InputAdornment>
                ),
              },
              htmlInput: { "aria-label": "جستجوی پروژه‌ها" },
            }}
            sx={{
              minWidth: { md: 300 },
              "& .MuiOutlinedInput-root": {
                color: "text.primary",
                borderRadius: 3,
                backgroundColor: t.searchBg,
                "& fieldset": { borderColor: t.border },
                "&:hover fieldset": {
                  borderColor: alpha(primary, 0.4),
                },
                "&.Mui-focused fieldset": {
                  borderColor: alpha(primary, 0.7),
                },
              },
              "& .MuiInputAdornment-root": { color: "text.secondary" },
            }}
          />
        </Box>

        <Typography
          aria-live="polite"
          variant="caption"
          sx={{ display: "block", mb: 2.5, color: "text.secondary" }}
        >
          {toFa(filtered.length)} پروژه نمایش داده می‌شود
        </Typography>

        {/* Grid */}
        <Box
          sx={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: 2.5,
            alignItems: "stretch",
            mb: { xs: 5, md: 6 },
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout={!reduceMotion}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 24, scale: 0.97 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={
                  reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94 }
                }
                transition={{
                  default: {
                    duration: 0.4,
                    delay: Math.min(index, 5) * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  layout: { type: "spring", stiffness: 300, damping: 30 },
                }}
                style={{ height: "100%" }}
              >
                <ProjectCard
                  project={project}
                  onOpen={setSelectedId}
                  reduceMotion={reduceMotion}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </Box>

        {/* Empty state */}
        {filtered.length === 0 && (
          <Box
            sx={{
              ...panelSx,
              mb: { xs: 5, md: 6 },
              p: { xs: 3, sm: 5 },
              textAlign: "center",
            }}
          >
            <SearchRounded
              sx={{ fontSize: 40, color: "text.secondary", mb: 1 }}
            />
            <Typography sx={{ fontWeight: 900, mb: 0.5 }}>
              پروژه‌ای پیدا نشد
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              عبارت دیگری را جستجو کنید یا فیلترها را پاک کنید.
            </Typography>
            <Button
              onClick={resetFilters}
              startIcon={<FilterAltOffRounded />}
              variant="outlined"
              sx={{
                color: primary,
                borderColor: alpha(primary, 0.45),
                fontWeight: 800,
                borderRadius: 2.5,
              }}
            >
              پاک کردن فیلترها
            </Button>
          </Box>
        )}
      </Box>

      <ProjectDialog
        project={dialogProject}
        open={selected !== null}
        onClose={() => setSelectedId(null)}
        onPrev={() => step(-1)}
        onNext={() => step(1)}
        position={selectedIndex >= 0 ? selectedIndex + 1 : 1}
        total={filtered.length}
      />
    </Box>
  );
}

export default Portfolio;