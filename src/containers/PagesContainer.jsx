import { Grid } from "@mui/material";

const PagesContainer = ({ children }) => {
  return (
    <Grid
      size={{ xs: 12, md: 9, lg: 10 }}
      sx={{
        background: `
          radial-gradient(
            ellipse at 80% 20%,
            rgba(124, 58, 237, 0.18),
            transparent 42%
          ),
          radial-gradient(
            ellipse at 12% 82%,
            rgba(6, 182, 212, 0.12),
            transparent 38%
          ),
          linear-gradient(
            135deg,
            #070a14 0%,
            #0b1020 52%,
            #101126 100%
          )
        `,
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {children}
    </Grid>
  );
};

export default PagesContainer;
