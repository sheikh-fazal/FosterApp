import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Grid from "@mui/material/Grid";
import { Icon, useTheme } from "@mui/material";
import { Logo } from "@root/assets/svg";
import { addressItems, socialLinks, endListItems } from "./index";

import Link from "next/link";

const Footer = () => {
  const theme: any = useTheme();
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setShowScrollToTop(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f2f2f2",
        position: "relative",
      }}
    >
      <Grid container sx={{ padding: { xs: "30px 0 0 0 ", md: "80px 0 0 0" } }}>
        <Grid item xs={12} lg={5} sx={{ px: { xs: 1, sm: 2, lg: 10, xl: 20 } }}>
          <Box sx={{ textAlign: { xs: "start" } }}>
            <Logo
              variant="theme"
              iconWidth={200}
              iconHeight={50}
              sx={{ mb: 2 }}
            />
            <Typography
              variant="subtitle2"
              sx={{ color: theme.palette.grey[600] }}
            >
              Foster App Limited <strong>(ORCALO)</strong> is a Register <br />
              Company in England with company number <br /> 12125945.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "10px", mt: 3 }}>
            {socialLinks.map((item: any) => (
              <Link key={item.id} href={item.link}>
                <Icon sx={styles.socialIcons}>{item.icon}</Icon>
              </Link>
            ))}
          </Box>
        </Grid>
        {/* Address Column Started */}
        <Grid item xs={12} lg={5} sx={{ px: { xs: 1, lg: 0 } }}>
          <Box sx={{ textAlign: "start" }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Address
            </Typography>
            {addressItems.map((item: any) => (
              <Box
                key={item.id}
                sx={{ display: "flex", gap: "6px", alignItems: "start" }}
              >
                <Icon sx={{ color: theme.palette.primary.main }}>
                  {item.icon}
                </Icon>
                <Typography
                  variant="subtitle2"
                  sx={{
                    whiteSpace: "pre-line",
                    mb: 2,
                    color: theme.palette.grey[600],
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
      {/* End Footer List Started */}
      <Grid container sx={styles.endListWrapper}>
        <Grid item xs={12} lg={6} sx={{ px: { xs: 1, lg: 10, xl: 20 } }}>
          <Typography variant="subtitle2" sx={styles.copyRightText}>
            Copyright 2023 All rights reserved by{" "}
            <span style={{ color: theme.palette.primary.main }}>FosterApp</span>
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6} sx={styles.endList}>
          {endListItems.map((item: any) => (
            <Link
              href={item.link}
              key={item.id}
              style={{ textDecoration: "none", textAlign: "start" }}
            >
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.grey[600] }}
              >
                {item.title}
              </Typography>
            </Link>
          ))}
        </Grid>
      </Grid>

      {/* Scroll To Top Code Started */}
      {showScrollToTop && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            bottom: "100px",
            right: "30px",
          }}
        >
          <IconButton
            color="primary"
            aria-label="Scroll to top"
            onClick={handleScrollToTop}
            sx={{
              background: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: "none",
              },
            }}
          >
            <KeyboardArrowUpIcon sx={{ color: theme.palette.grey[0] }} />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default Footer;

const styles: any = {
  socialIcons: (theme: any) => ({
    background: theme.palette.grey[600],
    width: "32px",
    height: "32px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    color: "#fff",
    mb: { xs: "40px", sm: "30px", lg: 10 },
  }),
  endListWrapper: {
    boxShadow: "0px -1px 3px rgba(50, 50, 50, 0.15)",
    py: 2,
    mt: { xs: 2, sm: 0 },
  },
  copyRightText: (theme: any) => ({
    textAlign: { xs: "start", sm: "center", lg: "start" },
    color: theme.palette.grey[900],
  }),
  endList: (theme: any) => ({
    display: "flex",
    gap: "20px",
    flexDirection: { xs: "column", sm: "row" },
    px: { xs: 1, lg: 0 },
    mt: { xs: 2, lg: 0 },
    justifyContent: { xs: "start", sm: "center", lg: "start" },
  }),
};
