import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/sidebar";
import { useState } from "react";
import Page from "../pages/components/Page";
import { Box, Typography } from "@mui/material";
import PagesContainer from "./PagesContainer";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { DrawerActionButton } from "../components/drawer";

const AppContainer = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue);
  };

  return (
    <MainContext.Provider
      value={{ pageNumber, handlePageNumber, drawerOpen, setDrawerOpen }}
    >
      <MainLayout title="وب سایت شخصی امیر قادری">
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />
        <PagesContainer>
          <Page pageNumber={pageNumber} index={0}>
            <Box
              sx={{
                height: "100vh",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${require("../assets/homePage.jpg")})`,
              }}
            >
              <Typography
                variant="h5"
                sx={{ textAlign: "center", color: "whitesmoke" }}
              >
                صفحه اصلی
              </Typography>
            </Box>
          </Page>
          <Page pageNumber={pageNumber} index={1}>
            <Typography sx={{ textAlign: "center" }}>درباره من</Typography>
          </Page>
          <Page pageNumber={pageNumber} index={2}>
            <Typography sx={{ textAlign: "center" }}>زومه من</Typography>
          </Page>
          <Page pageNumber={pageNumber} index={3}>
            <Typography sx={{ textAlign: "center" }}>نمونه کارها </Typography>
          </Page>
          <Page pageNumber={pageNumber} index={4}>
            <Typography sx={{ textAlign: "center" }}>
              نظرات دانشجویان
            </Typography>
          </Page>
          <Page pageNumber={pageNumber} index={5}>
            <Typography sx={{ textAlign: "center" }}>ارتباط با من</Typography>
          </Page>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
};

export default AppContainer;
