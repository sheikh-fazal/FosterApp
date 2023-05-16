import { Typography } from "@mui/material";
import React from "react";

export const RHFInputWithLabel = (props: any) => {
  const { Component, text, ...other } = props;
  return (
    <>
      <Typography variant="body2">{text || "Label"}</Typography>
      <Component {...other} />
    </>
  );
};
