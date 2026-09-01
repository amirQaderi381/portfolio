import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Sidebar = () => {
  return (
    <Grid size={{ xs: 0, md: 3, lg: 2 }} sx={{ backgroundColor: grey[900] }}>
      <Box sx={{ justifyContent: "center", textAlign: "center", mt: 2 }}>
        <Avatar
          alt="Amir Qaderi"
          sx={{
            display: { xs: "none", md: "block" },
            height: 150,
            width: 150,
            margin: "0 auto",
          }}
          src={require("../../assets/images.jpeg")}
        >
          AQ
        </Avatar>
        <Typography variant="h6" color="whitesmoke">
          امیر قادری
        </Typography>
        <Typography variant="caption" color="whitesmoke">
          مدرس و برنامه نویس فول استک
        </Typography>
        <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />
      </Box>
    </Grid>
  );
};

export default Sidebar;
