import {
  Box,
  Drawer,
  Fab,
  Grid,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import DrawerContent from "./ui/DrawerContent";
import { MenuRounded } from "@mui/icons-material";

const Sidebar = ({ value, handleChange }) => {
  const [openDrawer, SetOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    SetOpenDrawer(!openDrawer);
  };

  return (
    <Grid size={{ xs: 0, md: 3, lg: 2 }} sx={{ backgroundColor: grey[900] }}>
      <Box sx={{display : {xs:'block' , sm : 'block' , md: 'none'}}}>
         <Fab color="primary" aria-label="sidebar" sx={{m:2}} onClick={toggleDrawer}>
           <MenuRounded/>
         </Fab>
      </Box>
      <DrawerContent value={value} handleChange={handleChange} />
      <Drawer
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
        variant="temporary"
        sx={{
          "& .MuiDrawer-paper": {
            width: 300,
          },
          display: { xs: "block", md: "none" },
        }}
      >
       {/* Drawer content */}
       <DrawerContent value={value} handleChange={handleChange}/>
      </Drawer>
    </Grid>
  );
};

export default Sidebar;
