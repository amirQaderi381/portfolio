import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/sidebar";
import { useState } from "react";
import TabPanel from "../components/TabPanel";
import { Typography } from "@mui/material";
import ContentContainer from "./ContentContainer";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";

const AppContainer = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue);
  };

  return (
    <MainContext.Provider value={{pageNumber , handlePageNumber , drawerOpen , setDrawerOpen}}>
      <MainLayout title="وب سایت شخصی امیر قادری">
        <SidebarContainer>
          <Sidebar/>
        </SidebarContainer>

        <ContentContainer>
          <TabPanel pageNumber={pageNumber} index={0}>
            <Typography sx={{ textAlign: "center" }}>صفحه اصلی</Typography>
          </TabPanel>
          <TabPanel pageNumber={pageNumber} index={1}>
            <Typography sx={{ textAlign: "center" }}>درباره من</Typography>
          </TabPanel>
          <TabPanel pageNumber={pageNumber} index={2}>
            <Typography sx={{ textAlign: "center" }}>زومه من</Typography>
          </TabPanel>
          <TabPanel pageNumber={pageNumber} index={3}>
            <Typography sx={{ textAlign: "center" }}>نمونه کارها </Typography>
          </TabPanel>
          <TabPanel pageNumber={pageNumber} index={4}>
            <Typography sx={{ textAlign: "center" }}>
              نظرات دانشجویان
            </Typography>
          </TabPanel>
          <TabPanel pageNumber={pageNumber} index={5}>
            <Typography sx={{ textAlign: "center" }}>ارتباط با من</Typography>
          </TabPanel>
        </ContentContainer>
      </MainLayout>
    </MainContext.Provider>
  );
};

export default AppContainer;
