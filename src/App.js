import { ThemeProvider, createTheme } from "@mui/material/styles";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import "./App.css";
import { useEffect } from "react";

// Note : create custom theme
const theme = createTheme({
  direction: "rtl",
});

// Note : create RTL cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const App = () => {
  useEffect(() => {
    document.title = "وب سایت شخصی امیر قادری";
  }, []);

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <h4>وب سایت شخصی</h4>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
