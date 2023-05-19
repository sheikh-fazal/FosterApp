import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const CourseProfile = () => {
  const chartTitles = [
    { title: "Optional", color: "#F6460F" },
    { title: "Mandatory", color: "#F6830F" },
    { title: "Most Popular", color: "#2CB764" },
  ];
  return (
    <Box sx={styles.containerDev}>
      <Box sx={{width: "20rem", height: "11rem", position: "relative" }}>
        <Box sx={styles.Mandatory}>
          <Box sx={styles.number}>09</Box>
          <Box sx={styles.text}>Mandatory</Box>
        </Box>

        <Box sx={styles.Optional}>
          <Box sx={styles.number}>07</Box>
          <Box sx={styles.text}>Optional</Box>
        </Box>
        <Box sx={styles.Popular}>
          <Box sx={styles.number}>08</Box>
          <Box sx={styles.text}>Most Popular</Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          marginTop: "20px",
          marginRight: "50px",
        }}
      >
        {chartTitles?.map((item: any) => (
          <Box key={item?.color} sx={{ mt: 0.5 }}>
            <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
              <Box
                sx={{
                  width: "10px",
                  height: "10px",
                  background: item?.color,
                  borderRadius: "50%",
                }}
              ></Box>
              <Typography variant="subtitle2">{item?.title}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CourseProfile;

const styles = {
  containerDev: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center"
   
  },
  Mandatory: {
    width: "95.57px",
    height: "90.57px",
    borderRadius: "50%",
    border: 4,
    borderColor: "#2CB764",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "absolute",
    left: "120px",
    top: "25px",
    background: "#ffff",
  },
  Optional: {
    width: "75.18px",
    height: "70.81px",
    borderRadius: "50%",
    border: 4,
    borderColor: "#F6460F",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "absolute",
    left: "70px",
    top: "10px",
    background: "#ffff",
  },

  Popular: {
    width: "75.18px",
    height: "70.81px",
    borderRadius: "50%",
    border: 4,
    borderColor: "#0E918C",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "absolute",
    top: "90px",
    left: "90px",
    zIndex: 999,
    background: "#ffff",
  },
  text: { fontWeight: 500, fontSize: "7px", color: "#2CB764" },
  number: { fontWeight: 600, fontSize: "22px", color: "#2CB764" },
};
