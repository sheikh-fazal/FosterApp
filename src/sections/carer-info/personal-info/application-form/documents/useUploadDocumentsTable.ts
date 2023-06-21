import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import {
  usePostAllegationDocumentsMutation,
  useUploadDocumentListQuery,
} from "@root/services/carer-info/personal-info/chronology-of-events/allegation-api/uploadDocumentsApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef, useState } from "react";

export const useUploadDocumentsTable = () => {
  const router = useRouter();
  let theme: any = useTheme();
  const tableHeaderRef = useRef<any>();
  const [view, setView] = useState("");
  const [open, setOpen] = useState(false);

  const changeView = (name: any) => setView(name);
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  return { theme, tableHeaderRef, view, open, setOpen, changeView };
};
