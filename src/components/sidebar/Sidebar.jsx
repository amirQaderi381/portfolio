import { Box, Drawer, Fab } from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";
import DrawerContent from "../DrawerContent";
import { MenuRounded } from "@mui/icons-material";

const Sidebar = ({ value, handleChange }) => {
  const [openDrawer, setDrawerOpen] = useState(false);

  return (
    <>
      <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
        <Fab
          aria-label="sidebar"
          sx={{ m: 2, backgroundColor: red[500] }}
          onClick={() => setDrawerOpen(true)}
          size="small"
        >
          <MenuRounded />
        </Fab>
      </Box>
      <DrawerContent
        value={value}
        handleChange={handleChange}
        setDrawerOpen={setDrawerOpen}
      />
      <Drawer
        open={openDrawer}
        onClose={() => setDrawerOpen(false)}
        variant="temporary"
        sx={{
          "& .MuiDrawer-paper": {
            width: 300,
          },
          display: { xs: "block", sm: "block", md: "none", lg: "none" },
        }}
      >
        {/* Drawer content */}
        <DrawerContent
          value={value}
          handleChange={handleChange}
          setDrawerOpen={setDrawerOpen}
        />
      </Drawer>
    </>
  );
};

export default Sidebar;
