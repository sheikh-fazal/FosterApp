import React, { useState } from "react";
import { Grid, IconButton, Modal, TextField, Typography } from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs, { Dayjs } from "dayjs";
import { DesktopTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
const TimeSelector = () => {
  const [timeVales, setValue] = React.useState<{
    from: Dayjs | null;
    to: Dayjs | null;
  }>({ from: dayjs(new Date()), to: dayjs(new Date()) });
  const setFromValue = (newValue: any) => {
    setValue((pre) => ({ ...pre, from: newValue }));
  };
  const setToValue = (newValue: any) => {
    setValue((pre) => ({ ...pre, to: newValue }));
    console.log("Teetstst");
  };
  return (
    <>
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
        <Modal open={true}>
          <Grid
            container
            sx={{
              background: "white",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: "40%",
              padding: "1em",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid item container>
                <Grid item sm={6}>
                  <DesktopTimePicker
                    label="From"
                    value={timeVales.from}
                    onChange={setFromValue}
                    // renderInput={(params:any) => <TextField {...params} />}
                  />
                </Grid>
                <Grid item sm={6}>
                  <DesktopTimePicker
                    label="To"
                    value={timeVales.to}
                    onChange={setToValue}
                    onAccept={() => console.log("Tettttttttt")}
                    // renderInput={(params:any) => <TextField {...params} />}
                  />
                </Grid>
              </Grid>
            </LocalizationProvider>
          </Grid>
        </Modal>
      </Grid>
    </>
  );
};

export default TimeSelector;
