import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const PagesContainer = ({ children }) => {
  const theme = useTheme();

  return (
    <Grid
      size={{ xs: 12, md: 9, lg: 10 }}
      sx={{
        background:
          theme.palette.mode === "dark"
            ? theme.custom.gradients.background
            : theme.palette.background.default,
        color: theme.palette.text.primary,
        height: "100vh",
        overflow: "hidden",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      {children}
    </Grid>
  );
};

export default PagesContainer;