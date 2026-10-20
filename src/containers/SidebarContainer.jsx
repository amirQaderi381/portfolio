import { Grid } from "@mui/material";

const SidebarContainer = ({ children }) => {
  return (
    <Grid
      size={{ xs: 0, md: 3, lg: 2 }}
      sx={{
        // backgroundColor: grey[900],
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        background: (theme) =>
          theme.palette.mode === "dark"
            ? theme.custom.gradients.background
            : theme.palette.background.default,
        color: "text.primary",
        borderColor: "divider",
      }}
    >
      {children}
    </Grid>
  );
};

export default SidebarContainer;
