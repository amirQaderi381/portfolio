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
      sx={{
        "& .MuiTabs-indicator": {
          backgroundColor: "primary.main",
          borderRadius: 2,
          width: 3,
        },

        "& .MuiTab-root": {
          color: "text.secondary",
          transition: "all 0.25s ease",

          "& .MuiSvgIcon-root": {
            color: "inherit",
          },

          "&:hover": {
            color: "primary.main",
            backgroundColor: "action.hover",
          },

          "&.Mui-selected": {
            color: "primary.main",
            backgroundColor: (theme) => `${theme.palette.primary.main}18`,
            border: "1px solid",
            borderColor: (theme) => `${theme.palette.primary.main}40`,
          },

          "&:focus-visible": {
            outline: "2px solid",
            outlineColor: "primary.main",
            outlineOffset: -2,
          },
        },
      }}
    >
      {data.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          icon={tab.icon}
          iconPosition="start"
          sx={{
            minHeight: 50,
            my: 0.5,
            mx: 1,
            borderRadius: 2,
            backgroundColor: "action.hover",
            border: "1px solid",
            borderColor: "transparent",
          }}
          onClick={() => setDrawerOpen(false)}
          {...tab}
        />
      ))}
    </Tabs>
  );
};

export default SidebarTabs;
