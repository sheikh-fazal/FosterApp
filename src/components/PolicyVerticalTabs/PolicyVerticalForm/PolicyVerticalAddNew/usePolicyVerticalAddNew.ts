import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PolicyVerticalAddNewDefaultValues, PolicyVerticalAddNewValidationSchema, PolicyVerticalAddNewFormData, handleInputFields } from ".";
import { useRouter } from "next/router";

export const usePolicyVerticalAddNew = () => {
  const currentPage = useRouter();
  const [currentTab, setCurrentTab] = useState(0);
  const handleNextTab = () => setCurrentTab(currentTab + 1);
  const handlePreviousTab = () => setCurrentTab(currentTab - 1);

  const methods: any = useForm({
    resolver: yupResolver(PolicyVerticalAddNewValidationSchema),
    defaultValues: PolicyVerticalAddNewDefaultValues,
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => (
    handleInputFields(currentPage.pathname === '/policies-and-guidelines/checklists/add')
  ), [currentPage.pathname]);

  return {
    methods,
    handleSubmit,
    handleNextTab,
    PolicyVerticalAddNewFormData,
    currentTab,
    setCurrentTab,
    handlePreviousTab,
    reset,
    currentPage
  };
};
