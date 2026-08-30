import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { useEffect } from "react";
import { theme } from "./../ui/theme";
import { Grid, Typography } from "@mui/material";

const MainLayout = ({ children, title }) => {
  // Note : create RTL cache
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        {/* Grid System */}
        <Grid container sx={{ height: "100vh" }}>
          <Grid
            size={{ xs: 0, md: 3, lg: 2 }}
            sx={{ backgroundColor: "primary.main" }}
          >
            <Typography sx={{ textAlign: "center" }}>sidebar</Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 9, lg: 10 }}
            sx={{ backgroundColor: "secondary.main" }}
          >
            <Typography sx={{ textAlign: "center" }}>main content</Typography>
          </Grid>
        </Grid>
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
