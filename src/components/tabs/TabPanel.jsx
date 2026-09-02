import { Box } from "@mui/material";

const TabPanel = (props) => {
  const { children, value, index, ...others } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      tabIndex={0}
      id={`tabpanel-${index}`}
      aria-labelledby={`sidebar-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
