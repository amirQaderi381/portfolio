import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import avatar from "../assets/guy3.jpeg";
import DevInfo from "./components/DevInfo";
import Skill from "./components/Skill";
import { devSkills } from "../constants/Skills";

const About = () => {
  const {htmlSkill,cssSkill , jsSkill , TailwindSkill , phpSkill , laravelSkill} = devSkills;
  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "whitesmoke",
      }}
    >
      <CardContent>
        <Grid container sx={{ mx: 3 }}>
          <Grid size={{ xs: 0, sm: 0, md: 4, lg: 4, xl: 4 }}>
            <Avatar
              src={avatar}
              variant="rounded"
              sx={{
                height: 250,
                width: 250,
                margin: "0 auto",
                display: {
                  xl: "block",
                  lg: "block",
                  md: "block",
                  sm: "none",
                  xs: "none",
                },
              }}
            >
              YG
            </Avatar>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }}>
            <Divider
              textAlign="center"
              sx={{
                "&::before, &::after": {
                  borderColor:"primary.main",
                },
              }}
            >
              <Chip
                color="primary"
                label={
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row-reverse",
                      alignItems: "center",
                      gap: 1,
                      direction: "rtl",
                    }}
                  >
                    <Typography
                      variant="body1"
                      color="black"
                      sx={{ textAlign: "right" }}
                    >
                      توسعه دهنده فول استک و مدرس برنامه نویسی
                    </Typography>

                    <CodeRounded />
                  </Box>
                }
                sx={{ p: 3 }}
              />
            </Divider>

            <DevInfo>نام و نام خانوادگی : امیر قادری</DevInfo>
            <DevInfo>سن : 25</DevInfo>
            <DevInfo>شهر : تهران</DevInfo>
            <DevInfo>آدرس ایمیل : amirqaderi381@gmail.com </DevInfo>
            <DevInfo>شماره موبایل : ۰۹۳۵۰۰۰۱۱۲۲</DevInfo>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid size={12} sx={{ mt: 1 }}>
            <Divider
              textAlign="center"
              sx={{
                "&::before, &::after": {
                  borderColor: "secondary.main",
                },
              }}
            >
              <Chip
                color="secondary"
                label={
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row-reverse",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                    }}
                  >
                    <Typography
                      variant="body1"
                      color="black"
                      sx={{ textAlign: "center" }}
                    >
                      مهارت‌های من
                    </Typography>

                    <SelfImprovementRounded />
                  </Box>
                }
                sx={{ p: 3 }}
              />
            </Divider>
            <Skill name={htmlSkill.name} icon={htmlSkill.icon} color={htmlSkill.color} value={95} />
            <Skill name={cssSkill.name} icon={cssSkill.icon} color={cssSkill.color} value={95} />
            <Skill name={TailwindSkill.name} icon={TailwindSkill.icon} color={TailwindSkill.color} value={95} />
            <Skill name={jsSkill.name} icon={jsSkill.icon} color={jsSkill.color} value={95} />
            <Skill name={phpSkill.name} icon={phpSkill.icon} color={phpSkill.color} value={95} />
            <Skill name={laravelSkill.name} icon={laravelSkill.icon} color={laravelSkill.color} value={95} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default About;
