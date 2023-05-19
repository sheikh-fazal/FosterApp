import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import { useTheme } from "@emotion/react";

export default function ReferralNotifications() {
  let [expand, setExpand] = useState(false);
  const theme: any = useTheme();

  return (
    <Card
      sx={{
        py: 1.5,
        px: 1,
        boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h6" component="h6" sx={{ color: theme.palette.primary.main, mb: 1 }}>
        Referral Notifications
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              name="faisal"
              size="small"
              onChange={(e) => {
                console.log("aa", e.target.checked);
              }}
            />
          }
          label="This is Referral upcoming event"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="faisal"
              size="small"
              onChange={(e) => {
                console.log("aa", e.target.checked);
              }}
            />
          }
          label="This Referral Request form is pending"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="faisal"
              size="small"
              onChange={(e) => {
                console.log("aa", e.target.checked);
              }}
            />
          }
          label="This Referral task is pending"
        />
        {expand ? (
          <>
            <FormControlLabel
              control={
                <Checkbox
                  name="faisal"
                  size="small"
                  onChange={(e) => {
                    console.log("aa", e.target.checked);
                  }}
                />
              }
              label="This Event is pending"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="faisal"
                  size="small"
                  onChange={(e) => {
                    console.log("aa", e.target.checked);
                  }}
                />
              }
              label="This panel task is pending"
            />
          </>
        ) : (
          ""
        )}
      </FormGroup>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-end",
        }}
      >
        <Button
          onClick={() => {
            setExpand(!expand);
          }}
        >
          {expand ? "less" : "more"}
          {expand ? <ExpandLess /> : <ExpandMore />}
        </Button>
      </Box>
    </Card>
  );
}
