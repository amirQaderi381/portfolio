import { createTheme } from "@mui/material";

// Note : create custom theme
export const theme = createTheme({
  direction: "rtl",
  palette : {
    mode:"dark",
    primary : {
        main : "#8be9fd"
    },
    secondary : {
        main : "#BD93F9"
    }
  },
  typography: {
    fontFamily: "vazir , roboto",
  },
});