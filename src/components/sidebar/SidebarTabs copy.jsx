import { Tab, Tabs } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useContext } from "react";
import MainContext from "../../context";
import { tabsData } from "../data/tabsData.sidebar";

const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);

  const data = tabsData();

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      value={pageNumber}
      onChange={handlePageNumber}
    >
      {data.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          icon={tab.icon}
          iconPosition="start"
          sx={{
            "&.MuiTab-root": {
              minHeight: 50,
              my: 0.5,
              mx: 1,
              borderRadius: 2,

              color: "rgba(203, 213, 225, 0.75)",
              backgroundColor: "rgba(15, 23, 42, 0.35)",

              border: "1px solid rgba(96, 165, 250, 0.06)",

              transition: "all 0.3s ease",

              "&:hover": {
                backgroundColor: "rgba(59, 130, 246, 0.10)",
                borderColor: "rgba(96, 165, 250, 0.18)",
                color: "#BFDBFE",
                transform: "translateX(-2px)",
              },

              "&.Mui-selected": {
                color: "#93C5FD",
                background:
                  "linear-gradient(135deg, rgba(37, 99, 235, 0.24), rgba(30, 64, 175, 0.10))",
                border: "1px solid rgba(96, 165, 250, 0.28)",
                boxShadow:
                  "0 0 20px rgba(37, 99, 235, 0.10), inset 0 0 12px rgba(59, 130, 246, 0.05)",
              },

              "& .MuiTab-iconWrapper": {
                transition: "all 0.3s ease",
              },

              "&.Mui-selected .MuiTab-iconWrapper": {
                color: "#60A5FA",
                filter: "drop-shadow(0 0 5px rgba(59, 130, 246, 0.45))",
              },
            },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tab}
        />
      ))}
    </Tabs>
  );
};

export default SidebarTabs;
