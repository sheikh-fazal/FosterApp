import React from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import automatedIcon from "../../../../assets/svg/reports/automatedIcon.svg";
import Image from "next/image";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { DatePicker } from "@mui/x-date-pickers";
import { careerFeedbackFilterData } from ".";
import { useCarerFeedback } from "./useCarerFeedback";

const CareerFeedback = () => {
  const { TableDemoData, HandlerSearch, columns, setFilterValue, filterValue } =
    useCarerFeedback();

  return (
    <Card sx={{ p: 1 }}>
      <Box display={'flex'} justifyContent={'flex-end'}>
        <Image src={automatedIcon} width={25} height={25} alt="icon" />
      </Box>
      <Card sx={{ p: 2, my: 2 }}>
        <Grid container columnSpacing={4}>
          {careerFeedbackFilterData.map((data: any, i) => (
            <Grid item xs={12} md={data.gridlength} mb={4} key={i}>
              <Typography sx={(theme) => styles.title(theme)}>
                {data.title}
              </Typography>
              {i === 0 ?
                <TextField {...data.otherOptions} /> :
                <Select {...data.otherOptions}>
                  {data.options && data.options.map((item: any, i: number) => {
                    return (
                      <MenuItem key={i} value={item.value}>
                        {item.label}
                      </MenuItem>
                    );
                  })}
                </Select>}
            </Grid>
          ))}
          <Grid item xs={12} md={6} mb={4}>
            <Typography sx={styles.title}>Date To</Typography>
            <DatePicker
              slotProps={{
                textField: {
                  fullWidth: true,
                  size: "small",
                },
              }}
            />
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

export default CareerFeedback;

const styles = {
  title: (theme: any) => ({
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
