import dayjs from "dayjs";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import {
  useDeleteDayLogJournalUploadDocumentMutation,
  useGetDayLogJournalUploadDocumentQuery,
  usePostDayLogJournalUploadDocumentMutation,
} from "@root/services/foster-child/child-day-log/DayLogJournalDocumentAPI";

export const useDayLogDocument = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(undefined);
  const [page, setPage] = useState(0);
  console.log(router?.asPath.split("/").pop());

  const childDayLogJournalId = {
    childDayLogJournalId: router?.query?.daylog_journal_id || "",
    offset: page,
    limit: 10,
    search: searchValue,
  };

  const { data, isLoading, isSuccess, isFetching, isError } =
    useGetDayLogJournalUploadDocumentQuery(childDayLogJournalId, {
      refetchOnMountOrArgChange: true,
    });
  const [postDayLogJournalUploadDocument] =
    usePostDayLogJournalUploadDocumentMutation();

  console.log(data);

  const submitDayLogJournalDocumentData = async (data: any) => {
    if (!router?.query?.daylog_journal_id) {
      return enqueueSnackbar("Please Fill the Form First", {
        variant: "error",
      });
    }
    const documentFormData = new FormData();

    documentFormData.append("documentType", data.documentType);
    documentFormData.append(
      "documentDate",
      dayjs(data.documentDate).format("DD/MM/YYYY")
    );
    documentFormData.append("password", data.password);
    documentFormData.append("chooseFiles", data.chosenFile);

    const apiDataParameter = {
      childDayLogJournalId: router?.query?.daylog_journal_id,
      body: documentFormData,
    };
    try {
      const res: any = await postDayLogJournalUploadDocument(
        apiDataParameter
      ).unwrap();
      enqueueSnackbar(res?.message ?? "Details Submitted Successfully", {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  const [deleteList] = useDeleteDayLogJournalUploadDocumentMutation();

  const listDeleteHandler = (id: any) => {
    console.log(id);

    deleteList(id)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information Deleted Successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };

  return {
    data,
    router,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    setPage,
    setSearchValue,
    listDeleteHandler,
    submitDayLogJournalDocumentData,
  };
};
