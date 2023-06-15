import React from "react";
import { Box, Grid } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { arrayData } from ".";

const SocialHistoryBirthMother = () => {
  return (
    <Box sx={{ width: "100%", padding: "1rem", position: "relative" }}>
      <Box>Summary and brief social history of the birth mother</Box>
      <Box
        sx={{
          border: "2px solid black",
          width: "100%",
          minHeight: "50vh",
          height: "auto",
        }}
      >
        <Box
          sx={{
            borderLeft: "2px solid black",
            minWidth: "2.5rem",
            width: "auto",
            position: "absolute",
            minHeight: "49.8vh",
            height: "auto",
            left: "110px",
          }}
        ></Box>
        {arrayData.map((items) => {
          return (
            <Box
              sx={{
                borderBottom: "2px solid black",
                minHeight: "2.5rem",
                height: "auto",
              }}
            >
              <Grid container columnSpacing={2}>
                <Grid item xxl={2} xl={1} lg={2} md={2} sm={2} xs={2}>
                  <Box sx={{ padding: "5px" }}>{items.headerDate}</Box>
                </Grid>

                <Grid item xxl={10} xl={11} lg={10} md={10} sm={10} xs={10}>
                  <Box sx={{ padding: "5px" }}>{items.headerDisc}</Box>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </Box>
      <Box sx={{ paddingTop: "5px" }}>
        <AddCircleIcon />
      </Box>
    </Box>
  );
};

export default SocialHistoryBirthMother;
