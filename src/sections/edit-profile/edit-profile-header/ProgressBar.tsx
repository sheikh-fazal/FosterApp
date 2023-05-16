import { Grid } from "@mui/material";
import { useTheme } from "@emotion/react";

const ProgressBar = () => {
  const theme: any = useTheme();
  return (
    <Grid container>
      <Grid
        container
        justifyContent="center"
        sx={{
          borderRadius: "20px",
          width: "70%",
          backgroundColor: theme.palette.primary.main,
          color: "white",
        }}
      >
        70%
      </Grid>
    </Grid>
  );
};

export default ProgressBar;
