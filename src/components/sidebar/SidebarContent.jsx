import { Box, Divider } from "@mui/material";
import { grey } from "@mui/material/colors";
import { SidebarHeader, SidebarTabs, SidebarFooter } from "./";

const SidebarContent = () => {
  return (
    <Box sx={{ justifyContent: "center", textAlign: "center", mt: 2 }}>
      {/* sidebar header */}
      <SidebarHeader />
      <Divider
        variant="middle"
        sx={{
          my: 2,
          borderColor: "divider",
          opacity: 1,
        }}
      />

      {/* sidebar tabs */}
      <SidebarTabs />

      <Divider
        variant="middle"
        sx={{
          my: 2,
          borderColor: "divider",
          opacity: 1,
        }}
      />
      {/* sidebar footer */}
      <SidebarFooter />
    </Box>
  );
};

export default SidebarContent;
