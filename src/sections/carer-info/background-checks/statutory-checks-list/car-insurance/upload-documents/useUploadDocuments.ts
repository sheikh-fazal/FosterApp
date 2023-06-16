import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { formSchema, defaultValues } from "./index";
import {
  useDeleteStatutoryUploadDocumentsMutation,
  usePostStatutoryUploadDocumentsMutation,
  useStatutoryUploadDocumentListQuery,
} from "@root/services/carer-info/background-checks/statutory-check-list/common-upload-documents/uploadDocumentsApi";
export const useUploadDocuments = () => {
  const [search, setSearch] = React.useState("");
  const router = useRouter();
  const { id, action }: any = router.query;
  const [open, setOpen] = React.useState(false);
  const modelHandler = () => (open === true ? setOpen(false) : setOpen(true));
  const tableHeaderRefTwo = useRef<any>();
  const theme: any = useTheme();
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const {
    data,
    isError,
    isLoading: loadingList,
    isFetching,
    isSuccess,
  }: any = useStatutoryUploadDocumentListQuery({ search: search });
  //API For Post Documents
  const [postCarInsuranceDetails]: any =
    usePostStatutoryUploadDocumentsMutation();
  //API For Delete Document List
  const [deleteDocumentList] = useDeleteStatutoryUploadDocumentsMutation();

  //API For Deleting Document List
  const listDeleteHandler = (id: any) => {
    deleteDocumentList(id)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information Deleted  Successfully", {
          variant: "success",
        });
      })
      .catch((error: any) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  const statutoryUploadDocuments =
    data?.data?.as_statutory_checks_list_document;
  const meta = data?.meta;
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
  const handleSubmitForm = async (data: any) => {
    const formData = new FormData();
    formData.append("formName", "CAR_INSURANCE");
    formData.append("recordId", id);
    formData.append("documentType", data.documentType);
    formData.append("documentDate", data.documentDate);
    formData.append("documentPassword", data.documentPassword);
    formData.append("file", data.file);
    try {
      await postCarInsuranceDetails(formData).unwrap();
      enqueueSnackbar("Document Uploaded Successfully", {
        variant: "success",
      });
      setOpen(false);
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };
  return {
    router,
    tableHeaderRefTwo,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    isError,
    handleSubmitForm,
    isFetching,
    isSuccess,
    loadingList,
    statutoryUploadDocuments,
    id,
    meta,
    theme,
    action,
    listDeleteHandler,
    setSearch,
    handleSubmit,
    methods,
    isSubmitting,
    getValues,
    modelHandler,
    open,
  };
};
