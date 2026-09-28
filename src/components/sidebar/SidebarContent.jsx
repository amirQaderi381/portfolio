import { Box, Divider } from "@mui/material";
import { grey } from "@mui/material/colors";
import {SidebarHeader,SidebarTabs , SidebarFooter} from "./";

const SidebarContent = () => {

  return (

    <Box sx={{ justifyContent: "center", textAlign: "center", mt: 2 }}>
      {/* sidebar header */}
      <SidebarHeader />
      <Divider variant="middle" color={grey[900]} sx={{ my: 2 }} />

      {/* sidebar tabs */}
      <SidebarTabs/>

      <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />
      {/* sidebar footer */}
      <SidebarFooter />
    </Box>
  );
};

export default SidebarContent;
