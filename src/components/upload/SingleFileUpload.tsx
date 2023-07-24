import React, { FC, useState, useRef, Dispatch, SetStateAction } from "react";
import { Grid, TextField } from "@mui/material";

import InputAdornment from "@mui/material/InputAdornment";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const SingleFileUpload: FC<{
  accept: string;
  availableFile?: string;
  label: string;
  setFileHolder: Dispatch<SetStateAction<File | undefined>>;
}> = ({ accept, label, availableFile, setFileHolder }) => {
  const [file, setFile] = useState<File>();
  const fileRef = useRef<HTMLInputElement>(null);
  const onFileChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      setFileHolder(event.target.files[0]);
    }
  };

  const selectFile = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  return (
    <Grid onClick={selectFile}>
      <input
        onChange={onFileChange}
        type="file"
        style={{ display: "none" }}
        ref={fileRef}
        accept={accept}
      />
      <TextField
        id={label}
        label={label}
        fullWidth
        variant="outlined"
        disabled
        value={`${availableFile ? availableFile : file ? file.name : ""} `}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <InsertDriveFileIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

export default SingleFileUpload;
