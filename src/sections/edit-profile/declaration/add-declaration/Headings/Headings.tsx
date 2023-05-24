import { Grid, Typography } from "@mui/material";
import React from "react";

export const HeadingWithDisc: React.FC<{
  heading: string;
  des: string;
  com: JSX.Element;
}> = ({ heading, des, com }) => {
  return (
    <>
      <Typography sx={{ fontWeight: "500", margin: "0.5em 0" }}>
        {heading}
      </Typography>
      <Typography>{des}</Typography>
      {com}
    </>
  );
};

export const DotedHeadingWithDisc: React.FC<{
  heading: string;
  des: string;
}> = ({ heading, des }) => {
  return (
    <>
      <Grid container>
        <Grid item sx={{ position: "relative" }}>
          <div
            style={{
              border: "3px solid red",
              position: "absolute",
              top: "50%",
              right: "0",
              transform: "translate(0,-50%)",
              borderRadius: "50%",
            }}
          ></div>
        </Grid>
        <Grid item>
          <Typography sx={{ fontWeight: "500", margin: "0.5em 0" }}>
            {heading}
          </Typography>
        </Grid>
      </Grid>
      <Typography>{des}</Typography>
    </>
  );
};
