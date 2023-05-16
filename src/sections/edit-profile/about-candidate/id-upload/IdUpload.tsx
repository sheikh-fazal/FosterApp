import { useRef, useState } from "react";
import { useTheme } from "@emotion/react";
import { Button, Grid, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import SingleFileUploader from "../../file-uploaders/SingleFileUploader";
const IdUpload = () => {
  const theme: any = useTheme();

  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item>
          <Typography
            sx={{ fontWeight: 600, color: theme.palette.primary.main }}
          >
            Photo for ID badge
          </Typography>
        </Grid>
        <Grid item>
          <InfoIcon sx={{ color: theme.palette.primary.main }} />
        </Grid>
      </Grid>
      <Grid item container>
        <SingleFileUploader />
      </Grid>
      <Grid item sx={{ mt: 2 }}>
        <Button variant="contained">continue</Button>
      </Grid>
    </Grid>
  );
};

export default IdUpload;
