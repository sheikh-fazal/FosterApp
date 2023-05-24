import { Box, Card, Typography, useTheme } from "@mui/material";
import { BsPlus } from "react-icons/bs";

import React from "react";

function EmploymentDetailsCards() {
  const theme: any = useTheme();
  return (
    <Card>
      <Box sx={{display:"flex", justifyContent:"space-between",alignItems:"center", px:3}}>
        <Typography>Experience</Typography>
        <Box>
          <BsPlus />
        </Box>
      </Box>
    </Card>
  );
}

export default EmploymentDetailsCards;

const styles = {
  header: {
    display: "flex",
  },
  addBtnStyles: (theme: any) => ({
    width: "1.6rem",
    height: "1.6rem",
    "&, &:hover": {
      backgroundColor: theme.palette.common.white,
    },
  }),
  addBtnIconStyles: (theme: any) => ({
    color: theme.palette.orange.main,
  }),
};
