import { Drawer } from "@mui/material";
import { SidebarContent } from "../sidebar";
import { useContext } from "react";
import MainContext from "../../context";

const SidebarDrawer = () => {
    const {drawerOpen , setDrawerOpen} = useContext(MainContext)
    return (
        <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        variant="temporary"
        sx={{
          "& .MuiDrawer-paper": {
            width: 300,
          },
          display: { xs: "block", sm: "block", md: "none", lg: "none" },
        }}
      >
        {/* Drawer content */}
        <SidebarContent/>
      </Drawer>
    )
}

export default SidebarDrawer;