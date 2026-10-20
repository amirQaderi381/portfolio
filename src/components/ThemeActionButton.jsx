import { useContext } from "react";
import MainContext from "../context";
import { Box, Fab, useTheme } from "@mui/material";
import { NightlightRounded, WbSunnyOutlined } from "@mui/icons-material";

const ThemeActionButton = () => {
  const { handleThemeChange } = useContext(MainContext);
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
        mt: 1,
      }}
    >
      <Fab
        aria-label="تغییر تم"
        variant="extended"
        size="small"
        color="secondary"
        onClick={handleThemeChange}
        sx={{
          gap: 1,
          px: 2.5,
          minHeight: 42,
          borderRadius: "14px",

          color: "primary.main",
          background: (theme) =>
            theme.palette.mode === "dark"
              ? theme.custom.gradients.glass
              : theme.palette.background.paper,

          border: "1px solid",
          borderColor: "divider",

          boxShadow: (theme) => `0 4px 18px ${theme.palette.primary.main}12`,

          backdropFilter: "blur(12px)",
          fontFamily: "Vazirmatn, sans-serif",
          fontSize: "0.8rem",
          fontWeight: 600,

          transition: "all 250ms ease",

          "&:hover": {
            color: "secondary.main",
            borderColor: "primary.main",
            background: (theme) =>
              theme.palette.mode === "dark"
                ? theme.custom.gradients.glass
                : theme.palette.action.hover,

            boxShadow: (theme) => `0 0 20px ${theme.palette.primary.main}30`,

            transform: "translateY(-2px)",
          },

          "&:active": {
            transform: "scale(0.97)",
          },
        }}
      >
        {theme.palette.mode === "dark" ? (
          <WbSunnyOutlined sx={{ ml: 1 }} />
        ) : (
          <NightlightRounded sx={{ ml: 1 }} />
        )}

        {theme.palette.mode === "dark" ? "تم روز" : "تم شب"}
      </Fab>
    </Box>
  );
};

export default ThemeActionButton;
