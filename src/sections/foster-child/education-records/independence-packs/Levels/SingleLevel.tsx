import { Box, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export default function SingleLevel({
  levelName,
  children,
  bgColor,
  isBadge,
}: any) {
  const theme = useTheme();
  const router = useRouter();
  const el = (
    <Box
      sx={{
        borderRadius: "50%",
        border: "1px solid transparent",
        textAlign: "center",
        width: "110px",
        height: "110px",
        backgroundColor: bgColor,
        padding: "4px",
      }}
    >
      {children}
      <Typography
        sx={{
          fontSize: "10px",
          marginTop: "0px",
          marginBottom: "2px",
          color: "#FFFFFF",
        }}
        variant="subtitle1"
        className="title"
      >
        {levelName} Level
      </Typography>
    </Box>
  );

  return isBadge ? (
    el
  ) : (
    <>
      <Box sx={{ display: "flex" }}>
        <Box
          onClick={() => {
            router.push(
              `/foster-child/education-records/independence-packs-life-skill-assessment/add-independence-pack/?level=${levelName}`
            );
          }}
          sx={{
            padding: "9px 40px",
            background: "#FFFFFF",
            border: "1px solid #000000",
            borderRadius: "10px",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{
              color: theme.palette.primary.main,
              fontWeight: "700",
            }}
            variant="subtitle1"
            className="title"
          >
            {levelName} Level
          </Typography>
          {el}
        </Box>
      </Box>
    </>
  );
}
