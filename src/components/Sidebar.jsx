import { Box, Drawer, Fab, Grid } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { useState } from "react";
import DrawerContent from "./ui/DrawerContent";
import { MenuRounded } from "@mui/icons-material";

const Sidebar = ({ value, handleChange }) => {
  const [openDrawer, setDrawerOpen] = useState(false);

  return (
    <Grid size={{ xs: 0, md: 3, lg: 2 }} sx={{ backgroundColor: grey[900] }}>
      <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
        <Fab
          aria-label="sidebar"
          sx={{ m: 2  , backgroundColor : red[500]}}
          onClick={() => setDrawerOpen(true)}
          size="small"
        >
          <MenuRounded />
        </Fab>
      </Box>
      <DrawerContent value={value} handleChange={handleChange} setDrawerOpen={setDrawerOpen}/>
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
        <DrawerContent value={value} handleChange={handleChange} setDrawerOpen={setDrawerOpen} />
      </Drawer>
    </Grid>
  );
};

export default Sidebar;
