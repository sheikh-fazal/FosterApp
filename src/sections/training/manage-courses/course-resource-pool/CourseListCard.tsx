import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import status from "../../../../assets/svg/training/status.svg";
import mandatory from "../../../../assets/svg/training/mandatory.svg";

const CourseListCard = ({
  handleClick = () => {},
  desc = "",
  coverImage = "",
  isStatus = false,
  isMandatory = false,
}: any) => {
  return (
    <Box sx={styles.card} onClick={handleClick}>
      <Box sx={styles.imageWrapper}>
        <Image
          src={coverImage}
          alt="image"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        <Typography sx={styles.status}>
          {isStatus && <Image src={status} alt="image" />}
        </Typography>
        <Typography sx={styles.mandatory}>
          {isMandatory && <Image src={mandatory} alt="image" />}
        </Typography>
      </Box>
      <Box sx={styles.cardContent}>
        <Typography sx={(theme) => styles.cardDescription(theme)}>
          {desc}
        </Typography>
      </Box>
    </Box>
  );
};

export default CourseListCard;
const styles = {
  card: {
    borderRadius: "10px",
    boxShadow: "0px 4px 20px rgba(131, 164, 249, 0.25)",
    width: "100%",
  },
  cardContent: {},
  cardDescription: (theme: any) => ({
    fontWeight: 500,
    fontSize: "14px",
    padding: "24px 26px",
    textAlign: "center",
    wordWrap: "break-word",
  }),
  imageWrapper: {
    width: "100%",
    position: "relative",
    height: "100%",
    flex: "1", // Add this line
  },
  status: {
    position: "absolute",
    top: "-5px",
    left: "6px",
  },
  mandatory: {
    position: "absolute",
    top: "5px",
    right: "6px",
  },
};
