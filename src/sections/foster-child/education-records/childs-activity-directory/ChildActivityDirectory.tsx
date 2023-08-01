import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Theme,
  Typography,
} from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import TuneIcon from "@mui/icons-material/Tune";
import { cardData } from ".";

const ChildActivityDirectory = () => {
 
  return (
    <Box mt={2}>
      <Paper variant="elevation" elevation={1} sx={{ borderRadius: 2.5 }}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          px={1}
          pt={1.5}
        >
          <IconButton>
            <InfoIcon sx={(theme) => Styles.iconButton(theme)} />
          </IconButton>
          <Typography
            variant="body1"
            fontSize={25}
            color={(theme) => theme.palette.primary.main}
            fontWeight={700}
          >
            Hand picked Kids Activities & Things To Do With Kids
          </Typography>
          <IconButton>
            <TuneIcon sx={(theme) => Styles.iconButton(theme)} />
          </IconButton>
        </Box>
        <Grid p={2} gap={2} container>
          {cardData.map((items, index) => (
            <Grid key={index} item>
              <Box sx={Styles.MainWapper(items.bgcolor)}>
                <Typography
                  variant="body1"
                  fontSize={14}
                  color={"white"}
                  fontWeight={700}
                >
                  {items.text}
                </Typography>
                <Box sx={Styles.iconWapper(items.bgcolor)}>{items.icon}</Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default ChildActivityDirectory;
// STYLES
const Styles = {
  iconButton: (theme: Theme) => ({
    color: theme.palette.primary.main,
  }),
  MainWapper: (color: string) => ({
    backgroundColor: `${color}`,
    display: "flex",
    alignItems: "flex-end",
    minWidth: "191px",
    borderRadius: 2,
    height: "82px",
    padding: "10px 8px",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  }),
  iconWapper: (color: string) => ({
    padding: "11px 8px",
    marginLeft: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "white",
    borderRadius: 32,
    width: "38px",
    height: "38px",
    boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.25) inset",
    marginBottom: 2.5,
    color: `${color}`,
    "& svg": {
      fontSize: 21,
    },
  }),
};
