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
              backgroundColor: grey[800],
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
