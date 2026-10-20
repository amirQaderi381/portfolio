import { Box, Typography, LinearProgress } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

const Skill = ({ name, icon, color, value = 0 }) => {
  const theme = useTheme();
  const { palette } = theme;

  const percent = Math.max(0, Math.min(100, value));
  const skillColor = color || palette.primary.main;
  const isDark = palette.mode === "dark";

  return (
    <Box sx={{ mb: 2.5 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1.5,
          mb: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.2,
            minWidth: 0,
          }}
        >
          {/* آیکون تکنولوژی */}
          <Box
            sx={{
              width: 34,
              height: 34,
              flexShrink: 0,
              display: "grid",
              placeItems: "center",
              borderRadius: 2,
              bgcolor: alpha(
                palette.text.primary,
                isDark ? 0.04 : 0.045
              ),
              border: `1px solid ${alpha(
                palette.text.primary,
                isDark ? 0.12 : 0.1
              )}`,
              transition: "background-color 0.25s ease",
            }}
          >
            <Box
              component="img"
              src={icon}
              alt={name}
              sx={{
                width: 20,
                height: 20,
                objectFit: "contain",
              }}
            />
          </Box>

          {/* نام مهارت */}
          <Typography
            sx={{
              color: palette.text.primary,
              fontSize: "0.9rem",
              fontWeight: 600,
              direction: "ltr",
              overflowWrap: "anywhere",
            }}
          >
            {name}
          </Typography>
        </Box>

        {/* درصد پیشرفت */}
        <Typography
          sx={{
            color: skillColor,
            fontSize: "0.8rem",
            fontWeight: 700,
            direction: "ltr",
            minWidth: 40,
            textAlign: "left",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {Math.round(percent)}%
        </Typography>
      </Box>

      {/* نوار پیشرفت */}
      <LinearProgress
        variant="determinate"
        value={percent}
        aria-label={name}
        aria-valuetext={`${Math.round(percent)}%`}
        sx={{
          height: 9,
          borderRadius: 10,
          overflow: "hidden",
          bgcolor: alpha(
            palette.text.primary,
            isDark ? 0.12 : 0.1
          ),
          "& .MuiLinearProgress-bar": {
            borderRadius: 10,
            background: `linear-gradient(
              90deg,
              ${skillColor},
              ${alpha(skillColor, 0.65)}
            )`,
            boxShadow: `0 0 12px ${alpha(
              skillColor,
              isDark ? 0.4 : 0.22
            )}`,
            transition: "transform 0.12s linear",
          },
        }}
      />
    </Box>
  );
};

export default Skill;