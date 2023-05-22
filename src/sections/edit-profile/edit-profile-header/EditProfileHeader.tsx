import { Grid, Typography } from "@mui/material";
import ProgressBar from "./ProgressBar";
import { useTheme } from "@emotion/react";

const EditProfileHeader = () => {
  const theme: any = useTheme();

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography
          variant="h4"
          sx={{ textTransform: "uppercase", color: theme.palette.primary.main }}
        >
          MADIha Iffat
        </Typography>
      </Grid>
      <Grid item>
        <p style={{ fontWeight: "500" }}>
          Here you can see the progress of Madiha Iffat ‘s application.
        </p>
      </Grid>
      {/* Progress Bar  */}
      <Grid item>
        <ProgressBar />
      </Grid>
      {/* A Line  */}
      <Grid
        item
        sx={{ borderBottom: "1px solid #C4C4C4", margin: "1em" }}
      ></Grid>
      <Grid item container direction="row-reverse" spacing={3}>
        <Grid item>
          <Typography sx={{ fontWeight: "bold" }}>
            User Type:
            <span style={{ color: theme.palette.primary.main }}>
              Senior Supervising Social Worker
            </span>
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ fontWeight: "bold" }}>
            User Status:{" "}
            <span style={{ color: theme.palette.primary.main }}>Active</span>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditProfileHeader;
