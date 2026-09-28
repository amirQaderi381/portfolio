import { Box, Divider, Tab, Tabs } from "@mui/material";
import { grey } from "@mui/material/colors";
import {
  ConnectWithoutContactRounded,
  FaceRounded,
  HomeRounded,
  MessageRounded,
  TerminalRounded,
  TextSnippetRounded,
} from "@mui/icons-material";
import SidebarHeader from "./sidebar/SidebarHeader";
import SidebarFooter from "./sidebar/SidebarFooter";

const DrawerContent = ({ value, handleChange, setDrawerOpen }) => {
  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

  return (
    <Box sx={{ justifyContent: "center", textAlign: "center", mt: 2 }}>
      {/* sidebar header */}
      <SidebarHeader />
      <Divider variant="middle" color={grey[900]} sx={{ my: 2 }} />

      <Tabs
        orientation="vertical"
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        value={value}
        onChange={handleChange}
      >
        <Tab
          label="صفحه اصلی"
          icon={<HomeRounded />}
          iconPosition="start"
          sx={{
            "&.MuiTab-root": {
              minHeight: 50,
              my: 0.5,
              mx: 1,
              borderRadius: 2,
              backgroundColor: grey[800],
            },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tabProps(0)}
        />
        <Tab
          label="درباره من"
          icon={<FaceRounded />}
          iconPosition="start"
          sx={{
            "&.MuiTab-root": {
              minHeight: 50,
              my: 0.5,
              mx: 1,
              borderRadius: 2,
              backgroundColor: grey[800],
            },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tabProps(1)}
        />
        <Tab
          label="رزومه من"
          icon={<TextSnippetRounded />}
          iconPosition="start"
          sx={{
            "&.MuiTab-root": {
              minHeight: 50,
              my: 0.5,
              mx: 1,
              borderRadius: 2,
              backgroundColor: grey[800],
            },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tabProps(2)}
        />
        <Tab
          label="نمونه کارها"
          icon={<TerminalRounded />}
          iconPosition="start"
          sx={{
            "&.MuiTab-root": {
              minHeight: 50,
              my: 0.5,
              mx: 1,
              borderRadius: 2,
              backgroundColor: grey[800],
            },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tabProps(3)}
        />
        <Tab
          label="نظرات دانشجویان"
          icon={<MessageRounded />}
          iconPosition="start"
          sx={{
            "&.MuiTab-root": {
              minHeight: 50,
              my: 0.5,
              mx: 1,
              borderRadius: 2,
              backgroundColor: grey[800],
            },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tabProps(4)}
        />
        <Tab
          label="ارتباط با من"
          icon={<ConnectWithoutContactRounded />}
          iconPosition="start"
          sx={{
            "&.MuiTab-root": {
              minHeight: 50,
              my: 0.5,
              mx: 1,
              borderRadius: 2,
              backgroundColor: grey[800],
            },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tabProps(5)}
        />
      </Tabs>

      <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />
        {/* sidebar footer */}
       <SidebarFooter/>
    </Box>
  );
};

export default DrawerContent;
