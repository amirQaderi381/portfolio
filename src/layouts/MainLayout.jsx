import { useEffect, useMemo } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import { prefixer } from "stylis";
import { ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";

import { darkTheme ,lightTheme } from "./theme";

//NOTE Create RTL Cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({ children, title , mode }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  const theme = mode == 'dark' ? darkTheme : lightTheme;

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Grid
          container
          dir="rtl"
          sx={{
            minHeight: "100vh",
            width: "100%",
            textAlign: "start",
            flexDirection: "row",
          }}
        >
          {children}
        </Grid>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
