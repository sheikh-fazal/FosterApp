import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteDocumentListMutation,
  usePostAllegationDocumentsMutation,
  useUploadDocumentListQuery,
} from "@root/services/carer-info/personal-info/chronology-of-events/allegation-api/uploadDocumentsApi";
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
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const {
    data,
    isError,
    isLoading: loadingList,
    isFetching,
    isSuccess,
  }: any = useUploadDocumentListQuery({ search: search });

  //API For Post Documents
  const [postAllegationDetails]: any = usePostAllegationDocumentsMutation();
  //API For Delete Document List
  const [deleteDocumentList] = useDeleteDocumentListMutation();

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
  const allegationDocuments = data?.data?.allegation_documents;
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
  const uploadDocumentsHandler = async (data: any) => {
    const formData = new FormData();
    formData.append("type", data.type);
    formData.append("documentDate", data.documentDate);
    formData.append("password", data.password);
    formData.append("file", data.file);
    formData.append("allegationId", id);
    try {
      await postAllegationDetails(formData).unwrap();
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
    uploadDocumentsHandler,
    isFetching,
    isSuccess,
    loadingList,
    allegationDocuments,
    id,
    meta,
    postAllegationDetails,
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
