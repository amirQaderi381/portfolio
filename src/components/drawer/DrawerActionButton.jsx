import { Box, Fab } from "@mui/material";
import { red } from "@mui/material/colors";
import { MenuRounded } from "@mui/icons-material";
import { useContext } from "react";
import MainContext from "../../context";

const DrawerActionButton = () => {
  const { setDrawerOpen } = useContext(MainContext);

  return (
    <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
      <Fab
        aria-label="sidebar"
        sx={{
          m: 2,
          position: "absolute",
          color: "primary.contrastText",
          background: (theme) => theme.custom.gradients.primary,
          border: "1px solid",
          borderColor: "divider",
          boxShadow: (theme) => `0 4px 16px ${theme.palette.primary.main}30`,
          transition: "all 0.25s ease",

          "&:hover": {
            background: (theme) => theme.custom.gradients.primary,
            boxShadow: (theme) => `0 6px 22px ${theme.palette.primary.main}45`,
            transform: "translateY(-2px)",
          },
        }}
        onClick={() => setDrawerOpen(true)}
        size="small"
      >
        <MenuRounded />
      </Fab>
    </Box>
  );
};
export default DrawerActionButton;
