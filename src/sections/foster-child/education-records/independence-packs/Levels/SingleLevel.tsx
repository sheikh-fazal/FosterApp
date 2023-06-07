import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import BronzeLevel from "@root/assets/svg/bronze-level";

export default function SingleLevel() {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            padding: "9px 40px",
            background: "#FFFFFF",
            border: "1px solid #000000",
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              color: theme.palette.primary.main,
              fontWeight: "700",
            }}
            variant="subtitle1"
            className="title"
          >
            Bronze Level
          </Typography>
          <Box
            sx={{
              borderRadius: "100%",
              border: "1px solid #000000",
              textAlign: "center",
              padding: "10px 20px",
              backgroundColor: "#A46628",
            }}
          >
            <BronzeLevel width="40" height="66" color={"#FFFFFF"} />
            <Typography
              sx={{
                fontSize: "10px",
                marginTop: "0px",
                marginBottom: "2px",
                color: "#FFFFFF",
              }}
              variant="subtitle1"
              className="title"
            >
              Brozone Level
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
