import { Box, Chip, Divider, LinearProgress, Typography } from "@mui/material";

const Skill = ({color , value , icon , name}) => {
  return (
    <>
      <Divider
        textAlign="left"
        sx={{
          "&::before , &::after": {
            borderColor: `${color}.main`,
          },
          mb:1
        }}
      >
        <Chip
          color={color}
          label={name}
          sx={{ color: "#000", p: 3 }}
          icon={<Box component="img" src={icon} sx={{ height: 30 }} />}
        />
      </Divider>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant="determinate" value={value} color={color} sx={{height : 10 , borderRadius:2}} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography varient="body2" color={color}>
           {Math.round(value)}%
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Skill;
