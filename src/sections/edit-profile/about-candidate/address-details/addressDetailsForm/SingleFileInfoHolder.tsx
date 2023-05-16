import { Grid } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CloseIcon from "@mui/icons-material/Close";

const SingleFileInfoHolder = () => {
  const theme: any = useTheme();
  return (
    <Grid
      item
      container
      direction="column"
      sx={{
        width: "100px",
        margin: "0.5em",
        userSelect: "none",
      }}
    >
      <Grid
        item
        sx={{
          textAlign: "center",
          position: "relative",
        }}
      >
        <CloseIcon
          sx={{
            position: "absolute",
            right: "0",
            transform: "translate(50%,-50%)",
            cursor: "pointer",
            fontSize: "1em",
          }}
        />
        <FileCopyIcon
          sx={{
            fontSize: "3em",
            color: theme.palette.primary.main,
          }}
        />
      </Grid>
      <Grid item sx={{ textAlign: "center" }}>
        Valeed.pdf
      </Grid>
    </Grid>
  );
};

export default SingleFileInfoHolder;
