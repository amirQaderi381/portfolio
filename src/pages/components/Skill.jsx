import { Box, LinearProgress, Typography } from "@mui/material";

const Skill = ({ name, icon, color = "#8be9fd", value = 0 }) => {
  const percent = Math.max(0, Math.min(100, value));

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
          sx={{ display: "flex", alignItems: "center", gap: 1.2, minWidth: 0 }}
        >
          <Box
            sx={{
              width: 34,
              height: 34,
              flexShrink: 0,
              display: "grid",
              placeItems: "center",
              borderRadius: 2,
              bgcolor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(148,163,184,0.12)",
            }}
          >
            <Box
              component="img"
              src={icon}
              alt={name}
              sx={{ width: 20, height: 20, objectFit: "contain" }}
            />
          </Box>

          <Typography
            sx={{
              color: "#e2e8f0",
              fontSize: "0.9rem",
              fontWeight: 600,
              direction: "ltr",
            }}
          >
            {name}
          </Typography>
        </Box>

        <Typography
          sx={{
            color,
            fontSize: "0.8rem",
            fontWeight: 700,
            direction: "ltr",
            minWidth: 40,
            textAlign: "left",
          }}
        >
          {percent}%
        </Typography>
      </Box>

      <LinearProgress
        variant="determinate"
        value={percent}
        aria-label={name}
        sx={{
          height: 9,
          borderRadius: 10,
          bgcolor: "rgba(148,163,184,0.14)",
          "& .MuiLinearProgress-bar": {
            borderRadius: 10,
            background: `linear-gradient(90deg, ${color}, ${color}aa)`,
            boxShadow: `0 0 12px ${color}66`,
            transition: "transform 0.12s linear",
          },
        }}
      />
    </Box>
  );
};

export default Skill;