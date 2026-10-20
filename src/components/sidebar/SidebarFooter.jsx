import { Box, Typography } from "@mui/material";
import { FavoriteRounded, CopyrightRounded } from "@mui/icons-material";
const SidebarFooter = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
      }}
    >
      <Typography
        variant="subtitle2"
        color="text.secondary"
        sx={{
          transition: "color 250ms ease",
        }}
      >
        طراحی شده با{" "}
        <FavoriteRounded
          sx={{
            verticalAlign: "middle",
            color: "error.main",
            height: 20,
          }}
        />
      </Typography>

      <Typography
        variant="caption"
        color="text.secondary"
        sx={{
          mt: 2,
          transition: "color 250ms ease",
        }}
      >
        کپی رایت 1405{" "}
        <CopyrightRounded
          sx={{
            verticalAlign: "middle",
            height: 16,
            color: "text.secondary",
          }}
        />
      </Typography>
    </Box>
  );
};

export default SidebarFooter;
