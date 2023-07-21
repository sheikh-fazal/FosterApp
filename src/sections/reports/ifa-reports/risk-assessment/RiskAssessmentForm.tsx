import React, { useState } from "react";
import { viewReportsFilterData, TableDemoData } from ".";
import {
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import automatedIcon from "../../../../assets/svg/reports/automatedIcon.svg";
import Image from "next/image";
import TableHeader from "@root/components/TableHeader";
import { useAssessmentForm } from "./useRiskAssessmentForm";
import CustomTable from "@root/components/Table/CustomTable";
import { DatePicker } from "@mui/x-date-pickers";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const RiskAssessmentForm = () => {
  const { HandlerSearch, columns } = useAssessmentForm();

  return (
    <ReportsLayout
      searchOnRight
      handleFilterBtn={HandlerSearch}
      tableHeaderProps={{ title: '', }}
      selectFilterArray={viewReportsFilterData}
      handleFilterChange={(event: any) => { }}
      tableProps={{
        data: TableDemoData,
        columns,
        isSuccess: true
      }}
    />
  );
};

export default RiskAssessmentForm;

