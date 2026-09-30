import { Box, Typography } from "@mui/material";
import homeImage from "../../assets/Home-2.jpg";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home = () => {
  const nameEl = useRef(null);
  const infoEl = useRef(null);

  const strings = [
    "من یک توسعه دهنده فول استک هستم",
    "من یک مدرس برنامه نویس هستم",
    "من یک فریلنسر هستم",
    "من یک محتوا ساز دنیای برنامه نویسی هستم",
  ];

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["[[امیر قادری]]"],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 10,
      showCursor: false,
    });

    const typedInfo = new Typed(infoEl.current, {
      strings: strings,
      startDelay: 1500,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 50,
      loop: true,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typedName.destroy();
      typedInfo.destroy();
    };
  });

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${homeImage})`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        ref={nameEl}
        variant="h3"
        sx={{
          color: "tomato",
        }}
      ></Typography>

      <Typography
        ref={infoEl}
        variant="h4"
        sx={{
          color: "whitesmoke",
          textDecoration: "underline",
          textDecorationColor: "#8be9fd",
        }}
      >
        من یک توسعه دهنده فول استک هستم
      </Typography>
    </Box>
  );
};

export default Home;
