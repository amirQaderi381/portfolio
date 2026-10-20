import { Drawer } from "@mui/material";
import { SidebarContent } from "../sidebar";
import { useContext } from "react";
import MainContext from "../../context";

const SidebarDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useContext(MainContext);
  return (
    <Drawer
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      variant="temporary"
      sx={{
        "& .MuiDrawer-paper": {
          width: 300,
          background: (theme) =>
            theme.palette.mode === "dark"
              ? theme.custom.gradients.glass
              : theme.custom.gradients.background,
          color: "text.primary",
          borderInlineStart: "1px solid",
          borderColor: "divider",
          backdropFilter: "blur(16px)",
          transition: "background 250ms ease, color 250ms ease",
        },
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
        },
      }}
    >
      {/* Drawer content */}
      <SidebarContent />
    </Drawer>
  );
};

export default SidebarDrawer;
