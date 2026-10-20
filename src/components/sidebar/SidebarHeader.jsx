import { Avatar, Box, IconButton, Typography, Tooltip } from "@mui/material";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import profile from "../../assets/guy3.jpeg";
import { socialLinks } from "../../constants/socialLinks";
import ThemeActionButton from "../ThemeActionButton";

const SidebarHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 1,
        py: 2,
        px: 1,
      }}
    >
      {/* Profile image */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          p: "3px",
          borderRadius: "50%",
          background: (theme) => theme.custom.gradients.primary,
          boxShadow: (theme) =>
            `0 0 25px ${theme.palette.primary.main}2E`,
          mb: 1,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: (theme) =>
              `0 0 32px ${theme.palette.primary.main}59`,
          },
        }}
      >
        <Avatar
          alt="Amir Qaderi"
          src={profile}
          sx={{
            width: 125,
            height: 125,
            border: "3px solid",
            borderColor: "background.default",
            bgcolor: "background.paper",
            color: "text.primary",
          }}
        >
          AQ
        </Avatar>
      </Box>

      {/* Name */}
      <Typography
        variant="h6"
        sx={{
          color: "text.primary",
          fontWeight: 900,
          letterSpacing: "0.2px",
          mt: 0.5,
        }}
      >
        امیر قادری
      </Typography>

      {/* Role */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 0.7,
          px: 1.5,
          py: 0.8,
          borderRadius: 3,
          bgcolor: (theme) =>
            `${theme.palette.primary.main}12`,
          border: "1px solid",
          borderColor: (theme) =>
            `${theme.palette.primary.main}2E`,
          maxWidth: "100%",
        }}
      >
        <CodeRoundedIcon
          sx={{
            color: "primary.main",
            fontSize: 17,
            flexShrink: 0,
          }}
        />

        <Typography
          variant="caption"
          sx={{
            color: "secondary.main",
            fontWeight: 600,
            lineHeight: 1.8,
          }}
        >
          توسعه‌دهنده فول‌استک
        </Typography>
      </Box>

      {/* Social media */}
      <Box
        component="nav"
        aria-label="شبکه‌های اجتماعی"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1.2,
          mt: 1.5,
          direction: "ltr",
        }}
      >
        {socialLinks.map((social) => (
          <Tooltip key={social.name} title={social.name} arrow>
            <IconButton
              component="a"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              sx={{
                width: 44,
                height: 44,
                borderRadius: "13px",
                color: "text.secondary",
                border: "1px solid",
                borderColor: "divider",
                bgcolor: "action.hover",
                transition: "all 0.25s ease",

                "&:hover": {
                  transform: "translateY(-4px)",
                  color: "primary.main",
                  borderColor: "primary.main",
                  bgcolor: (theme) =>
                    `${theme.palette.primary.main}14`,
                  boxShadow: (theme) =>
                    `0 5px 20px ${theme.palette.primary.main}20`,
                },

                "&:focus-visible": {
                  outline: "2px solid",
                  outlineColor: "primary.main",
                  outlineOffset: 4,
                },
              }}
            >
              {social.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Box>

      <ThemeActionButton />
    </Box>
  );
};



export default SidebarHeader;
