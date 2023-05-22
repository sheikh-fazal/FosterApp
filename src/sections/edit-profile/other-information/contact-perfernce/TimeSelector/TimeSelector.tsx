import React from "react";
import { Grid, IconButton, Modal, Typography } from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
const TimeSelector = () => {
  return (
    <Grid item container sm={12}>
      <Grid
        item
        sm={6}
        container
        sx={{ border: "1px solid black", padding: 0.5, borderRadius: "5px" }}
      >
        <Grid
          item
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p>9am to 12pm</p>
        </Grid>
        <Grid item>
          <IconButton>
            <AccessTimeFilledIcon />
          </IconButton>
        </Grid>
      </Grid>
      {/* <Modal open={true}>
        <Grid
          container
          sx={{
            background: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "40%",
          }}
        >
          A New Design That is missing in figma
        </Grid>
      </Modal> */}
    </Grid>
  );
};

export default TimeSelector;
