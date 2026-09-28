import { Box, Fab } from "@mui/material";
import { red } from "@mui/material/colors";
import { MenuRounded } from "@mui/icons-material";
import { useContext } from "react";
import MainContext from "../../context";

const DrawerActionButton = () => {
  const { setDrawerOpen } = useContext(MainContext);

  return (
    <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
      <Fab
        aria-label="sidebar"
        sx={{ m: 2, backgroundColor: red[500] }}
        onClick={() => setDrawerOpen(true)}
        size="small"
      >
        <MenuRounded />
      </Fab>
    </Box>
  );
};
export default DrawerActionButton;
