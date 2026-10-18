import { Avatar, Box, IconButton, Typography,Tooltip } from "@mui/material";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import profile from "../../assets/guy3.jpeg";
import { socialLinks } from "../../constants/socialLinks";

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
          background: "linear-gradient(135deg, #8be9fd, #818cf8, #c084fc)",
          boxShadow: "0 0 25px rgba(139,233,253,0.18)",
          mb: 1,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 0 32px rgba(139,233,253,0.35)",
          },
        }}
      >
        <Avatar
          alt="Amir Qaderi"
          src={profile}
          sx={{
            width: 125,
            height: 125,
            border: "3px solid #0b1120",
            bgcolor: "#111827",
          }}
        >
          AQ
        </Avatar>
      </Box>

      {/* Name */}
      <Typography
        variant="h6"
        sx={{
          color: "#f8fafc",
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
          bgcolor: "rgba(139,233,253,0.07)",
          border: "1px solid rgba(139,233,253,0.16)",
          maxWidth: "100%",
        }}
      >
        <CodeRoundedIcon
          sx={{ color: "#8be9fd", fontSize: 17, flexShrink: 0 }}
        />

        <Typography
          variant="caption"
          sx={{
            color: "#a5b4fc",
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
                color: social.color,
                border: "1px solid rgba(148,163,184,0.2)",
                background: "rgba(255,255,255,0.035)",
                transition: "all 0.25s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  color: social.hoverColor,
                  borderColor: social.hoverColor,
                  background: social.hoverBackground,
                  boxShadow: `0 5px 20px ${social.hoverBackground}`,
                },
                "&:focus-visible": {
                  outline: "2px solid #67e8f9",
                  outlineOffset: 4,
                },
              }}
            >
              {social.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
};

export default SidebarHeader;
