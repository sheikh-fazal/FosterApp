import React, { useRef, useState } from "react";
import { useTheme } from "@emotion/react";
import { Grid, IconButton, Typography } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { nameShortner } from "../util/Util";

const SingleFileUploader = () => {
  const theme: any = useTheme();
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<any>(null);
  const selectFile = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const onFileChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      // fileChanheHand(event.target.files[0]);
      setFile(event.target.files[0]);
      //   const imageUrl = URL.createObjectURL(event.target.files[0]);
      //   setFile(imageUrl);
    }
  };

  return (
    <Grid container>
      {!file && (
        <Grid
          item
          sm={12}
          container
          sx={{
            height: "150px",
            border: "3px dotted",
            borderColor: theme.palette.primary.main,
          }}
          justifyContent="center"
        >
          <Grid
            item
            sm={12}
            container
            alignItems="center"
            justifyContent="center"
            direction="column"
            sx={{ cursor: "pointer" }}
            onClick={selectFile}
          >
            <Grid item>
              <IconButton aria-label="delete">
                <FileUploadIcon sx={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="h5">
                Drag and drop, or{" "}
                <span style={{ color: theme.palette.primary.main }}>
                  Browse
                </span>{" "}
                your file
              </Typography>
            </Grid>
            <input
              onChange={onFileChange}
              type="file"
              style={{ display: "none" }}
              ref={fileRef}
              accept="image/*"
            />
          </Grid>
        </Grid>
      )}
      {file && (
        <Grid
          item
          sm={12}
          container
          sx={{
            height: "150px",
            border: "3px dotted",
            borderColor: theme.palette.primary.main,
          }}
          justifyContent="center"
        >
          <Grid
            item
            sm={12}
            container
            alignItems="center"
            justifyContent="center"
            direction="column"
            sx={{ cursor: "pointer" }}
            onClick={selectFile}
          >
            <Grid item>
              <IconButton aria-label="delete">
                <FileUploadIcon sx={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="h5">{nameShortner(file?.name)}</Typography>
            </Grid>
            <input
              onChange={onFileChange}
              type="file"
              style={{ display: "none" }}
              ref={fileRef}
              accept="image/*"
            />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default SingleFileUploader;
