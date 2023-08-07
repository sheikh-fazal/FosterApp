import {
  Box,
  FormControl,
  Grid,
  NativeSelect,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { managementCardData } from ".";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useTheme } from "@mui/material";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export const MoneyManagement = () => {
  const theme: any = useTheme();

  const series = [
    {
      name: "Net Profit",
      data: [5, 10, 15, 20, 25, 30, 35, 40],
    },
  ];

  const options = {
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "15%",
        barPadding: 0,
        endingShape: "rounded",
      },
    },
    chart: { toolbar: { show: false } },

    dataLabels: {
      enabled: false,
    },

    tooltip: { enabled: false },
    colors: theme.palette.primary.main,

    xaxis: {
      categories: ["1", "2", "3", "4", "5", "6", "7", "8"],
      labels: {
        show: true,
        style: {
          colors: theme.palette.contrastText,
        },
      },
    },

    yaxis: {
      labels: {
        show: true,
        style: {
          colors: theme.palette.contrastText,
        },
        formatter: function (value: any) {
          // Parse value as a float if it's not a number
          const numericValue = parseFloat(value);

          if (!isNaN(numericValue)) {
            return "£" + numericValue; // Adding '$' and formatting as currency
          }

          return value; // Return as-is if not a valid number
        },
      },
    },

    fill: {
      opacity: 1,
    },
  };

  return (
    <>
      <Grid container spacing={3}>
        {managementCardData?.map((card: any) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={card?.id}>
              <Link href={`${card.path}`} style={{ textDecoration: "none" }}>
                <Box sx={(theme) => styles.marketingCard(theme, card.bgColor)}>
                  <Box sx={(theme) => styles.marketingCardContent(theme)}>
                    <Typography sx={(theme) => styles.cardText(theme)}>
                      {card.title}
                    </Typography>
                    <Image src={card.icon} width={52} height={52} alt="image" />
                  </Box>
                </Box>
              </Link>
            </Grid>
          );
        })}
      </Grid>
      <Paper sx={{ padding: 3, my: 5 }}>
        <FormControl sx={{ minWidth: 120, display: "block" }}>
          <Typography
            component="span"
            sx={{ color: "#0E918C", fontWeight: "600", mr: 2 }}
          >
            Saving this Month
          </Typography>
          <NativeSelect
            sx={{ fontWeight: "600" }}
            defaultValue={10}
            inputProps={{
              name: "month",
              id: "month",
            }}
          >
            <option value={10}>January</option>
            <option value={20}>February</option>
            <option value={30}>March</option>
          </NativeSelect>
        </FormControl>
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={325}
        />
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
