import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { managementCardData } from ".";
import Link from "next/link";
import Image from "next/image";

export const MoneyManagement = () => {
  return (
    <>
      <Paper elevation={4} sx={{ padding: 3 }}>
        <Grid container spacing={3}>
          {managementCardData?.map((card: any) => {
            return (
              <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={card?.id}>
                <Link href={`${card.path}`} style={{ textDecoration: "none" }}>
                  <Box
                    sx={(theme) => styles.marketingCard(theme, card.bgColor)}
                  >
                    <Box sx={(theme) => styles.marketingCardContent(theme)}>
                      <Typography sx={(theme) => styles.cardText(theme)}>
                        {card.title}
                      </Typography>

                      <Image
                        src={card.icon}
                        width={52}
                        height={52}
                        alt="image"
                      />
                    </Box>
                  </Box>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </>
  );
};

//style
const styles = {
  marketingCard: (theme: any, background: any) => ({
    background: background,
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.20)",
    borderRadius: "10px",
    padding: "15px",
    // with: "248px",
    height: "130px",
  }),
  marketingCardContent: (theme: any) => ({
    display: "flex",
    justifyContent: "space-between",
    Height: "100%",
  }),
  cardText: (theme: any) => ({
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      fontSize: "16px",
      fontWeight: "600",
      marginTop: "25px",
      alignItems: "center",
      width: "188px",
      color:
        theme.palette.mode === "light"
          ? theme.palette.common.white
          : theme.palette.grey[800],
    },
  }),
};
