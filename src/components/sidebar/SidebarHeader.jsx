import { Avatar, Typography } from "@mui/material";
import profile from "../../assets/images.jpeg";

const SidebarHeader = () => {
  return (
    <>
      <Avatar
        alt="Amir Qaderi"
        sx={{
          display: { xs: "none", md: "block" },
          height: 150,
          width: 150,
          margin: "0 auto",
        }}
        src={profile}
      >
        AQ
      </Avatar>
      <Typography variant="h6" color="whitesmoke">
        امیر قادری
      </Typography>
      <Typography variant="caption" color="whitesmoke">
        مدرس و برنامه نویس فول استک
      </Typography>
    </>
  );
};

export default SidebarHeader;
