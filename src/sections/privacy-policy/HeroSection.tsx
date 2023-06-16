import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const HeroSection = () => {
  const theme: any = useTheme();
  return (
    <>
      <Box sx={styles.header}>
        <Box sx={styles.headerText}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            Privacy & Policy
          </Typography>
          <Typography variant="subtitle2">Last Modification 5/23</Typography>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;

const styles: any = {
  header: (theme: any) => ({
    width: "100%",
    height: { xs: "200px", sm: "350px", md: "400px" },
    background: "linear-gradient(90deg, #0E918C 0%, #0EADA7 100%)",
    clipPath: "ellipse(71% 59% at 50% 40%)",
    position: "relative",
  }),
  headerText: (theme: any) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    color: theme.palette.grey[0],
  }),
};
