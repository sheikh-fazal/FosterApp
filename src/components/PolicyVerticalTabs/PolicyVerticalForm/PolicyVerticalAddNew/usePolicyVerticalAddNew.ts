import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PolicyVerticalAddNewDefaultValues, PolicyVerticalAddNewValidationSchema, PolicyVerticalAddNewFormData } from ".";
import { useState } from "react";

export const usePolicyVerticalAddNew = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleNextTab = () => setCurrentTab(currentTab + 1);
  const handlePreviousTab = () => setCurrentTab(currentTab - 1);

  const methods: any = useForm({
    resolver: yupResolver(PolicyVerticalAddNewValidationSchema),
    defaultValues: PolicyVerticalAddNewDefaultValues,
  });

  const { handleSubmit } = methods;

  return {
    methods,
    handleSubmit,
    handleNextTab,
    PolicyVerticalAddNewFormData,
    currentTab,
    setCurrentTab,
    handlePreviousTab,
  };
};
