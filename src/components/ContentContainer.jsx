import { Grid, Typography } from "@mui/material";

const ContentContainer = ({children}) => {
  return (
    <Grid
      size={{ xs: 12, md: 9, lg: 10 }}
      sx={{ backgroundColor: "secondary.main" }}
    >
      <Typography sx={{ textAlign: "center" }}>main content</Typography>
      {children}
    </Grid>
  );
};

export default ContentContainer;
