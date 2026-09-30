import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/sidebar";
import { useRef, useState } from "react";
import Page from "../pages/components/Page";
import { Box, Fade, Slide, Typography } from "@mui/material";
import PagesContainer from "./PagesContainer";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { DrawerActionButton } from "../components/drawer";
import Home from "../pages/components/Home";

const AppContainer = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const previousPage = useRef(0);

  const handlePageNumber = (event, newValue) => {
    previousPage.current = pageNumber;
    setPageNumber(newValue);
  };

  const direction = pageNumber > previousPage.current ? "left" : "right";

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
          <Box
            sx={{
              position: "relative",
              height: "100vh",
              overflow: "hidden",
            }}
          >
            <Slide
              key={pageNumber}
              direction={direction}
              in
              timeout={500}
              mountOnEnter
              unmountOnExit
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                }}
              >
                <Fade key={`fade-${pageNumber}`} in timeout={300}>
                  <Box sx={{ height: "100%" }}>
                    <Page pageNumber={pageNumber} index={0}>
                      <Home />
                    </Page>

                    <Page pageNumber={pageNumber} index={1}>
                      <Typography sx={{ textAlign: "center" }}>
                        درباره من
                      </Typography>
                    </Page>

                    <Page pageNumber={pageNumber} index={2}>
                      <Typography sx={{ textAlign: "center" }}>
                        رزومه من
                      </Typography>
                    </Page>

                    <Page pageNumber={pageNumber} index={3}>
                      <Typography sx={{ textAlign: "center" }}>
                        نمونه کارها
                      </Typography>
                    </Page>

                    <Page pageNumber={pageNumber} index={4}>
                      <Typography sx={{ textAlign: "center" }}>
                        نظرات دانشجویان
                      </Typography>
                    </Page>

                    <Page pageNumber={pageNumber} index={5}>
                      <Typography sx={{ textAlign: "center" }}>
                        ارتباط با من
                      </Typography>
                    </Page>
                  </Box>
                </Fade>
              </Box>
            </Slide>
          </Box>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
};

export default AppContainer;
