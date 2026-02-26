import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { useEffect } from "react";
import { theme } from "./../ui/theme";

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
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
