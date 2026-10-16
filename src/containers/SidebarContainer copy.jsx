import { Grid } from "@mui/material";
import { grey } from "@mui/material/colors";

const SidebarContainer = ({ children }) => {
  return (
    <Grid
      size={{ xs: 0, md: 3, lg: 2 }}
      sx={{
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

        backdropFilter: "blur(30px) saturate(160%)",
        WebkitBackdropFilter: "blur(30px) saturate(160%)",

        borderRight: "1px solid rgba(59, 130, 246, 0.22)",

        boxShadow: `
      12px 0 40px rgba(0, 0, 0, 0.25),
      inset -1px 0 0 rgba(96, 165, 250, 0.06)
    `,

        "&::before": {
          content: '""',
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          background: "rgba(37, 99, 235, 0.18)",
          filter: "blur(85px)",
          pointerEvents: "none",
          zIndex: -1,
        },

        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          width: "1px",
          height: "100%",
          background:
            "linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.5), rgba(96, 165, 250, 0.08), transparent)",
          pointerEvents: "none",
        },

        "&::-webkit-scrollbar": {
          width: "4px",
        },

        "&::-webkit-scrollbar-thumb": {
          background: "rgba(59, 130, 246, 0.35)",
          borderRadius: "10px",
        },

        "&::-webkit-scrollbar-thumb:hover": {
          background: "rgba(96, 165, 250, 0.7)",
        },
      }}
    >
      {children}
    </Grid>
  );
};

export default SidebarContainer;
