import React from "react";
import Image from "next/image";
import router from "next/router";
import { Box, Card, Grid, Typography } from "@mui/material";
import { SelfAdvocacy, SelfAdvocacyGuide, SelfAdvocacyWidgets, ThisGuide, introduction } from ".";

// ===================================================================================================

const SelfAdvocacyToolkit = () => {
  return (
    <>
      <Card sx={styles.card}>
        <Typography variant="h4" sx={styles.introductionTitle}>
          Introduction
        </Typography>
        <Typography variant="h6" sx={styles.introductionContent}>
          {introduction}
        </Typography>
      </Card>
      <Grid container spacing={2} sx={{ my: "20px", mt: 0 }}>
        <Grid item md={6}>
          <Card sx={{ px: 1.5, py: 1 }}>
            <Typography variant="h4" sx={styles.title}>
              This self-advocacy guide
            </Typography>
            <Typography variant="h6" sx={styles.content}>
              {SelfAdvocacyGuide}
            </Typography>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card sx={{ px: 1.5, py: 1 }}>
            <Typography variant="h4" sx={styles.title}>
              What is self-advocacy?
            </Typography>
            <Typography variant="h6" sx={styles.selfAdvocacyContent}>
              {SelfAdvocacy}
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <Card sx={styles.card}>
        <Typography variant="h4" sx={styles.guideTitle}>
          This guide
        </Typography>
        <Typography variant="h6" sx={styles.guideContent}>
          {ThisGuide}
        </Typography>
      </Card>
      <Grid container spacing={2} style={{ paddingBlock: "30px" }}>
        {SelfAdvocacyWidgets.map((card, index) => (
          <Grid item xl={3} lg={4} md={6} xs={12} key={index}>
            <Box
              sx={styles.wrapper}
              style={{
                backgroundColor: card.id === "1" ? "#0E918C" : card.id === "2" ? "#F6830F" : card.id === "3" ? "#23183D" : "",
              }}
              onClick={() => {
                router.push(card.link);
              }}
            >
              <Typography variant="h6" component="h6" sx={{ color: "#FFFFFF", fontSize: "16px !important" }}>
                {card.title}
              </Typography>
              <Typography variant="h6" component="span" sx={{ flexShrink: 0 }}>
                <Image src={card.icon} alt="" width={40} height={40} />
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SelfAdvocacyToolkit;

// =========================================================================

const styles = {
  card: {
    px: 1.5,
    py: 1,
  },
  introductionTitle: {
    color: "#0E918C",
  },
  introductionContent: {
    color: "#0E918C",
  },
  title: {
    color: "#F6830F",
    fontSize: "1.5rem !important",
  },
  content: {
    color: "#F6830F",
    fontSize: "16px !important",
  },
  selfAdvocacyContent: {
    color: "#F6830F",
    fontSize: "16px !important",
    py: 1.3,
  },
  guideTitle: {
    color: "#23183D",
  },
  guideContent: {
    color: "#23183D",
  },
  wrapper: {
    padding: "20px",
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    borderRadius: "10px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2px",
    minHeight: "90px",
  },
};
