import React, { useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Typography, useTheme } from "@mui/material";

export default function RHFUploadFile(props: any) {
  const theme = useTheme();
  const { disabled, name, accept, placeholder, ...other } = props;
  const [borderColor, setBorderColor] = useState(
    disabled
      ? theme.palette.action.disabledBackground
      : theme.palette.action.focus
  );
  return (
    <>
      <label
        htmlFor={`${name}`}
        style={
          {
            height: "40px",
            borderRadius: "4px",
            border: `1px solid ${
              other?.formState?.errors?.[`${name}`] ? "red" : borderColor
            }`,
            width: "100% !important",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: `${disabled ? "" : "pointer"}`,
          } as React.CSSProperties
        }
        onMouseOver={() =>
          !disabled && setBorderColor(theme.palette.text.primary)
        }
        onMouseLeave={() =>
          !disabled && setBorderColor(theme.palette.action.focus)
        }
      >
        <div
          style={{ paddingLeft: "10px", color: theme.palette.action.disabled }}
        >
          {other?.getValues(`${name}`)?.name || placeholder || "Upload Photo"}
        </div>
        <FileUploadIcon
          sx={{
            color: borderColor,
            marginRight: "10px",
          }}
        />
      </label>
      <input
        accept={accept}
        {...other?.register(`${name}`)}
        type="file"
        disabled={disabled}
        name={`${name}`}
        id={`${name}`}
        onChange={(event: any) => {
          const file: any = event.target.files?.[0];
          other?.setValue(`${name}`, file);
          other?.trigger(`${name}`);
        }}
        style={{ display: "none" }}
      />
      <Typography variant="caption" color="error">
        {other?.formState?.errors?.[`${name}`] &&
          other?.formState?.errors?.[`${name}`]?.message}
      </Typography>
    </>
  );
}
