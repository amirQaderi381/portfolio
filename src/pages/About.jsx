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
import { useEffect, useState } from "react";

const About = () => {
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [js, setJs] = useState(0);
  const [tailwind, setTailwind] = useState(0);
  const [php, setPhp] = useState(0);
  const [laravel, setLaravel] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {

      setHtml((prevProgress) => {
        const diff = Math.random() * 10;
        return Math.min(prevProgress + diff, 85);
      });

      setCss((prevProgress) => {
        const diff = Math.random() * 10;
        return Math.min(prevProgress + diff, 74);
      });

      setJs((prevProgress) => {
        const diff = Math.random() * 10;
        return Math.min(prevProgress + diff, 68);
      });

      setTailwind((prevProgress) => {
        const diff = Math.random() * 10;
        return Math.min(prevProgress + diff, 90);
      });

      setPhp((prevProgress) => {
        const diff = Math.random() * 10;
        return Math.min(prevProgress + diff, 80);
      });

      setLaravel((prevProgress) => {
        const diff = Math.random() * 10;
        return Math.min(prevProgress + diff, 88);
      });

      return () => {
        clearInterval(timer);
      }
    }, 200);
  }, []);
  const {
    htmlSkill,
    cssSkill,
    jsSkill,
    TailwindSkill,
    phpSkill,
    laravelSkill,
  } = devSkills;

  return (
    <Card
      sx={{
        minHeight: "100vh",
        height: "auto",
        backgroundColor: "whitesmoke",
        overflow: "visible",
      }}
    >
      <CardContent
        sx={{
          px: { xs: 1.5, sm: 2, md: 3 },
          py: { xs: 2, sm: 3 },
          "&:last-child": {
            pb: { xs: 2, sm: 3 },
          },
        }}
      >
        {/* اطلاعات شخصی */}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          alignItems="center"
          sx={{
            mx: { xs: 0, md: 1 },
            width: "auto",
          }}
        >
          {/* تصویر پروفایل */}
          <Grid
            size={{ xs: 12, sm: 12, md: 4 }}
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <Avatar
              src={avatar}
              variant="rounded"
              sx={{
                width: { md: 180, lg: 220, xl: 250 },
                height: { md: 180, lg: 220, xl: 250 },
                mx: "auto",
              }}
            >
              YG
            </Avatar>
          </Grid>

          {/* مشخصات توسعه‌دهنده */}
          <Grid size={{ xs: 12, sm: 12, md: 8 }}>
            <Divider
              textAlign="center"
              sx={{
                "&::before, &::after": {
                  borderColor: "primary.main",
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
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Typography
                      variant="body1"
                      color="black"
                      sx={{
                        textAlign: "right",
                        fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                      }}
                    >
                      توسعه دهنده فول استک و مدرس برنامه نویسی
                    </Typography>

                    <CodeRounded fontSize="small" />
                  </Box>
                }
                sx={{
                  height: "auto",
                  maxWidth: "100%",
                  py: 1.5,
                  px: { xs: 1.5, sm: 2, md: 3 },
                  "& .MuiChip-label": {
                    display: "block",
                    whiteSpace: "nowrap",
                    px: 1,
                  },
                }}
              />
            </Divider>

            <Box
              sx={{
                mt: 2,
                overflowWrap: "anywhere",
              }}
            >
              <DevInfo>نام و نام خانوادگی : امیر قادری</DevInfo>
              <DevInfo>سن : 25</DevInfo>
              <DevInfo>شهر : تهران</DevInfo>
              <DevInfo>آدرس ایمیل : amirqaderi381@gmail.com</DevInfo>
              <DevInfo>شماره موبایل : ۰۹۳۵۰۰۰۱۱۲۲</DevInfo>
            </Box>
          </Grid>
        </Grid>

        {/* مهارت‌ها */}
        <Grid container sx={{ mt: 1 }}>
          <Grid size={12}>
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
                      direction: "rtl",
                    }}
                  >
                    <Typography
                      variant="body1"
                      color="black"
                      sx={{ textAlign: "center" }}
                    >
                      مهارت‌های من
                    </Typography>

                    <SelfImprovementRounded fontSize="small" />
                  </Box>
                }
                sx={{
                  py: 1,
                  px: { xs: 1.5, sm: 2 },
                }}
              />
            </Divider>

            <Box
              sx={{
                mt: 2,
                width: "100%",
                minWidth: 0,
              }}
            >
              <Skill
                name={htmlSkill.name}
                icon={htmlSkill.icon}
                color={htmlSkill.color}
                value={html}
              />

              <Skill
                name={cssSkill.name}
                icon={cssSkill.icon}
                color={cssSkill.color}
                value={css}
              />

              <Skill
                name={TailwindSkill.name}
                icon={TailwindSkill.icon}
                color={TailwindSkill.color}
                value={tailwind}
              />

              <Skill
                name={jsSkill.name}
                icon={jsSkill.icon}
                color={jsSkill.color}
                value={js}
              />

              <Skill
                name={phpSkill.name}
                icon={phpSkill.icon}
                color={phpSkill.color}
                value={php}
              />

              <Skill
                name={laravelSkill.name}
                icon={laravelSkill.icon}
                color={laravelSkill.color}
                value={laravel}
              />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default About;
