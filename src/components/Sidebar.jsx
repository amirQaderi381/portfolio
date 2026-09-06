import {
  Drawer,
  Grid,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import DrawerContent from "./ui/DrawerContent";

const Sidebar = ({ value, handleChange }) => {
  const [openDrawer, SetOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    SetOpenDrawer(!openDrawer);
  };

  return (
    <Grid size={{ xs: 0, md: 3, lg: 2 }} sx={{ backgroundColor: grey[900] }}>
      <DrawerContent value={value} handleChange={handleChange}/>
      <Drawer
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
        variant="temporary"
        sx={{
          "& .MuiDrawer-paper": {
            width: 300,
          },
        }}
      >
       {/* Drawer content */}
       <DrawerContent value={value} handleChange={handleChange}/>
      </Drawer>
    </Grid>
  );
};

export default Sidebar;
