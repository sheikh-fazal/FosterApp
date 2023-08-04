import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, Grid, Typography, useTheme } from "@mui/material";
import Page from "@root/components/Page";
import { FormProvider } from "@root/components/hook-form";
import { useForm } from "react-hook-form";
import { householdConditionA_Data, FormSchema, defaultValues } from ".";
import { useRouter } from "next/router";
import { useHouseHoldConditionAPostMutation } from "@root/services/carer-info/medical-history/health-and-safety/healthAndSafetyApi";

export const useHouseholdConditionA = ({ breadCrumbData, formData }: any) => {
  const theme: any = useTheme();

  const [resetTrigger, { isLoading }] = useHouseHoldConditionAPostMutation();
  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });
  const { handleSubmit } = methods;
  const onSubmit = (data: any) => {
    formData(data);
    resetTrigger(data)
    // HOUSEHOLD_A(formData);
  };
  console.log(resetTrigger,"ddddddd")
  useEffect(() => {
    breadCrumbData("Household Condition - A");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const router = useRouter();
  return { theme, handleSubmit, onSubmit, breadCrumbData, methods, router ,isLoading};
};
