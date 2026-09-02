import MainLayout from "./components/layouts/MainLayout";
import Sidebar from "./components/Sidebar";
import ContentContainer from "./components/ContentContainer";
import { useState } from "react";
import TabPanel from "./components/tabs/TabPanel";
import { Typography } from "@mui/material";

const App = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MainLayout title="وب سایت شخصی امیر قادری">
      <Sidebar value={value} handleChange={handleChange} />
      <ContentContainer>
        <TabPanel value={value} index={0}>
          <Typography sx={{ textAlign: "center" }}>صفحه اصلی</Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography sx={{ textAlign: "center" }}>درباره من</Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography sx={{ textAlign: "center" }}>زومه من</Typography>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Typography sx={{ textAlign: "center" }}>نمونه کارها </Typography>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Typography sx={{ textAlign: "center" }}>نظرات دانشجویان</Typography>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Typography sx={{ textAlign: "center" }}>ارتباط با من</Typography>
        </TabPanel>
      </ContentContainer>
    </MainLayout>
  );
};

export default App;
