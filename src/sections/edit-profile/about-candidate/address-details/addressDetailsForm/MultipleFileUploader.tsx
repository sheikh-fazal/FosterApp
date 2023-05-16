import React, { useRef, useState } from "react";
import { useTheme } from "@emotion/react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import SingleFileUploader from "@root/sections/edit-profile/file-uploaders/SingleFileUploader";
import SingleFileInfoHolder from "./SingleFileInfoHolder";
import { nameShortner } from "@root/sections/edit-profile/util/Util";
import AddMoreBtn from "./AddMoreBtn";

const MultipleFileUploader = () => {
  const theme: any = useTheme();
  const fileRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<any>(null);
  const selectFile = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const onFileChange = (event: any) => {
    if (event.target.files && event.target.files) {
      console.log(event.target.files);
      // fileChanheHand(event.target.files[0]);
      setFiles(event.target.files[0]);
      //   const imageUrl = URL.createObjectURL(event.target.files[0]);
      //   setFile(imageUrl);
    }
  };

  return (
    <Grid container>
      {files && (
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
                {/* <FileUploadIcon sx={{ color: theme.palette.primary.main }} /> */}
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
              multiple
            />
          </Grid>
        </Grid>
      )}
      {!files && (
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
            container
            justifyContent="center"
            alignItems="center"
            item
            sm={12}
          >
            <Grid
              item
              container
              sm={8}
              sx={{
                flexWrap: "nowrap",
                overflowX: "scroll",
                width: "100px",
              }}
            >
              {[1, 2, 3].map((item) => (
                <SingleFileInfoHolder key={item} />
              ))}
              <AddMoreBtn />
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default MultipleFileUploader;
