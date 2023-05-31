import React, { useState } from "react";
import { selectValues } from ".";
import {
  Box,
  Button,
  Card,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import automatedIcon from "../../../../assets/svg/reports/automatedIcon.svg";
import Image from "next/image";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { DatePicker } from "@mui/x-date-pickers";
import { useUserLogHistoryReport } from "./useUserLogHistoryReport";

const UserLogHistoryReport = () => {
  const { TableDemoData, HandlerSearch, columns, setFilterValue, filterValue } =
    useUserLogHistoryReport();

  return (
    <Card sx={{ p: 1 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", padding: "0px 15px" }}>
        <Typography sx={(theme) => styles.title(theme)}>
          Search Criteira
        </Typography>
        <Image src={automatedIcon} width={25} height={25} alt="icon" />
      </Box>

      <Card sx={{ p: 2, my: 2 }}>
        <Grid container columnSpacing={4}>
          <Grid item xs={12} md={6} mb={4}>
            <Typography sx={(theme) => styles.subtitle(theme)}>
              Date From
            </Typography>
            <DatePicker
              slotProps={{
                textField: {
                  fullWidth: true,
                  size: "small",
                },
              }}
              onChange={(e: any) => {
                setFilterValue({ ...filterValue, dateFrom: e });
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} mb={4}>
            <Typography sx={styles.subtitle}>Date To</Typography>
            <DatePicker
              slotProps={{
                textField: {
                  fullWidth: true,
                  size: "small",
                },
              }}
              onChange={(e: any) => {
                setFilterValue({ ...filterValue, dateTo: e });
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={styles.subtitle}>Role</Typography>
            <Select
              fullWidth
              size="small"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterValue.role}
              onChange={(e: any) => {
                setFilterValue({ ...filterValue, role: e.target.value });
              }}
            >
              {selectValues.map((item, i) => {
                return (
                  <MenuItem key={i} value={item.value}>
                    {item.label}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Button
              sx={(theme) => styles.button(theme)}
              onClick={HandlerSearch}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Card>
      <TableHeader
        title=""
        searchKey="search"
        onChanged={(data: any) => {
          console.log("Updated params: ", data);
        }}
      />
      <CustomTable
        data={TableDemoData}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        currentPage={1}
        onPageChange={(data: any) => {
          console.log("Current page data: ", data);
        }}
        onSortByChange={(data: any) => {
          console.log("Sort by: ", data);
        }}
      />
    </Card>
  );
};

export default UserLogHistoryReport;

const styles = {
  title: (theme: any) => ({
    fontSize: "16px",
    fontWeight: 600,
    color:
      theme.palette.mode === "dark" ? theme.palette.common.white : "#343A40",
  }),
  subtitle: (theme: any) => ({
    fontSize: "16px",
    fontWeight: 600,
    color:
      theme.palette.mode === "dark" ? theme.palette.common.white : "#343A40",
  }),
  button: (theme: any) => ({
    padding: "10px 17px",
    float: "right",
    fontSize: "14px",
    fontWeight: 400,
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
    "&, &:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  }),
};
