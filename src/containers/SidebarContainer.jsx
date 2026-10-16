import { Grid } from "@mui/material";
import { grey } from "@mui/material/colors";

const SidebarContainer = ({ children }) => {
  return (
    <Grid
      size={{ xs: 0, md: 3, lg: 2 }}
      sx={{
        // backgroundColor: grey[900],
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        background: `
      linear-gradient(
        145deg,
        rgba(10, 18, 38, 0.96) 0%,
        rgba(5, 10, 25, 0.92) 55%,
        rgba(16, 35, 85, 0.88) 100%
      )
    `,

      }}
    >
      {children}
    </Grid>
  );
};

export default SidebarContainer;
