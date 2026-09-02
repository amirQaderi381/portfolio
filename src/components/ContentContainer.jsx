import { Grid, Typography } from "@mui/material";

const ContentContainer = ({children}) => {
  return (
    <Grid
      size={{ xs: 12, md: 9, lg: 10 }}
      sx={{ backgroundColor: "secondary.main" }}
    >
      {children}
    </Grid>
  );
};

export default ContentContainer;
