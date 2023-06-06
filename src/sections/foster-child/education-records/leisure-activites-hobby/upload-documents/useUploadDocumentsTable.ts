import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@mui/material";

import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { formSchema, defaultValues } from "./index";
export const useUploadDocumentsTable = () => {
  const [search, setSearch] = React.useState("");
  const router = useRouter();
  const { id, action }: any = router.query;
  const [open, setOpen] = React.useState(false);
  const modelHandler = () => (open === true ? setOpen(false) : setOpen(true));
  const tableHeaderRefTwo = useRef<any>();
  const theme: any = useTheme();

  //API For Post Documents
  //API For Delete Document List

  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    getValues,
    formState: { isSubmitting },
  } = methods;
  //Submit Function To Submit Form Data

  return {
    router,
    tableHeaderRefTwo,
    theme,
    action,
    setSearch,
    handleSubmit,
    methods,
    isSubmitting,
    getValues,
    modelHandler,
    open,
  };
};
