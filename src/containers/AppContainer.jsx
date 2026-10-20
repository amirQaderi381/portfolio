import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/sidebar";
import { useEffect, useRef, useState } from "react";
import Page from "../pages/components/Page";
import {
  Box,
  Fade,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PagesContainer from "./PagesContainer";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { DrawerActionButton } from "../components/drawer";
import { Home, About } from "../pages";
import NewHome from "../pages/NewHome";
import Resume from "../pages/Resume";
import Portfolio from "../pages/Portfolio";

const AppContainer = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode , setMode] = useState(null);

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  } , [])

  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);

  const previousPage = useRef(0);

  const handlePageNumber = (event, newValue) => {
    previousPage.current = pageNumber;
    setPageNumber(newValue);
  };

  const direction = pageNumber > previousPage.current ? "left" : "right";

  const handleThemeChange = () => {
    setMode((prevMode) => prevMode === 'light' ? 'dark' : 'light');
  }

  return (
    <MainContext.Provider
      value={{ pageNumber, handlePageNumber, drawerOpen, setDrawerOpen , handleThemeChange }}
    >
      <MainLayout mode={mode} title="وب سایت شخصی امیر قادری">
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
                      <NewHome />
                    </Page>

                    <Page pageNumber={pageNumber} index={1}>
                      <About />
                    </Page>

                    <Page pageNumber={pageNumber} index={2}>
                      <Resume/>
                    </Page>

                    <Page pageNumber={pageNumber} index={3}>
                     <Portfolio/>
                    </Page>

                    {/* <Page pageNumber={pageNumber} index={4}>
                      <Typography sx={{ textAlign: "center" }}>
                        نظرات دانشجویان
                      </Typography>
                    </Page> */}

                    <Page pageNumber={pageNumber} index={4}>
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
