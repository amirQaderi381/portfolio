import { Avatar, Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import {
  ConnectWithoutContactRounded,
  CopyrightRounded,
  FaceRounded,
  FavoriteRounded,
  HomeRounded,
  MessageRounded,
  TerminalRounded,
  TextSnippetRounded,
} from "@mui/icons-material";

const DrawerContent = ({ value, handleChange ,setDrawerOpen }) => {
  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

  return (
    <Box sx={{ justifyContent: "center", textAlign: "center", mt: 2 }}>
      <Avatar
        alt="Amir Qaderi"
        sx={{
          display: { xs: "none", md: "block" },
          height: 150,
          width: 150,
          margin: "0 auto",
        }}
        src={require("../../assets/images.jpeg")}
      >
        AQ
      </Avatar>
      <Typography variant="h6" color="whitesmoke">
        امیر قادری
      </Typography>
      <Typography variant="caption" color="whitesmoke">
        مدرس و برنامه نویس فول استک
      </Typography>
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
              my:0.5,
              mx :1,
              borderRadius : 2,
              backgroundColor : grey[800]
            },
          }}
          onClick={()=>setDrawerOpen(false)}
          {...tabProps(0)}
        />
        <Tab
          label="درباره من"
          icon={<FaceRounded />}
          iconPosition="start"
          sx={{
            "&.MuiTab-root": {
              minHeight: 50,
              my:0.5,
              mx :1,
              borderRadius : 2,
              backgroundColor : grey[800]
            },
          }}
          onClick={()=>setDrawerOpen(false)}
          {...tabProps(1)}
        />
        <Tab
          label="رزومه من"
          icon={<TextSnippetRounded />}
          iconPosition="start"
          sx={{
            "&.MuiTab-root": {
              minHeight: 50,
              my:0.5,
              mx :1,
              borderRadius : 2,
              backgroundColor : grey[800]
            },
          }}
          onClick={()=>setDrawerOpen(false)}
          {...tabProps(2)}
        />
        <Tab
          label="نمونه کارها"
          icon={<TerminalRounded />}
          iconPosition="start"
          sx={{
            "&.MuiTab-root": {
              minHeight: 50,
              my:0.5,
              mx :1,
              borderRadius : 2,
              backgroundColor : grey[800]
            },
          }}
          onClick={()=>setDrawerOpen(false)}
          {...tabProps(3)}
        />
        <Tab
          label="نظرات دانشجویان"
          icon={<MessageRounded />}
          iconPosition="start"
          sx={{
            "&.MuiTab-root": {
              minHeight: 50,
              my:0.5,
              mx :1,
              borderRadius : 2,
              backgroundColor : grey[800]
            },
          }}
          onClick={()=>setDrawerOpen(false)}
          {...tabProps(4)}
        />
        <Tab
          label="ارتباط با من"
          icon={<ConnectWithoutContactRounded />}
          iconPosition="start"
          sx={{
            "&.MuiTab-root": {
              minHeight: 50,
              my:0.5,
              mx :1,
              borderRadius : 2,
              backgroundColor : grey[800]
            },
          }}
          onClick={()=>setDrawerOpen(false)}
          {...tabProps(5)}
        />
      </Tabs>

      <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: 100,
        }}
      >
        <Typography variant="subtitle2" color="whitesmoke">
          طراحی شده با{" "}
          <FavoriteRounded
            sx={{ verticalAlign: "middle", color: "tomato", height: 20 }}
          />
        </Typography>

        <Typography variant="caption" color="whitesmoke" sx={{ mt: 2 }}>
          کپی رایت 1405{" "}
          <CopyrightRounded sx={{ verticalAlign: "middle", height: 16 }} />
        </Typography>
      </Box>
    </Box>
  );
};

export default DrawerContent;
