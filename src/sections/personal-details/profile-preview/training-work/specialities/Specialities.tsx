import { Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { SPECIALITIES } from "../index";

const Specialities = () => {
  const theme: any = useTheme();
  return (
    <div>
      <Typography
        component={"p"}
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 2, mt: 5 }}
      >
        Specialities
      </Typography>
      <Grid container rowSpacing={1}>
        {SPECIALITIES?.map((item: any) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Typography
              component={"p"}
              variant="body2"
              sx={{ color: theme.palette.grey[600] }}
            >
              {item.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Specialities;
