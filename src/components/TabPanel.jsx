import { Box } from "@mui/material";

const TabPanel = (props) => {
  const { children, pageNumber, index, ...others } = props;
  return (
    <div
      role="tabpanel"
      hidden={pageNumber !== index}
      tabIndex={0}
      id={`tabpanel-${index}`}
      aria-labelledby={`sidebar-tab-${index}`}
      {...others}
    >
      {pageNumber === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
