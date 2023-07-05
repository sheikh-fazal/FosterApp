import { useRouter } from "next/router";
import {
  useDeleteFamilyPersonUploadDocumentMutation,
  useGetFamilyPersonUploadDocumentQuery,
  usePostFamilyPersonUploadDocumentMutation,
} from "@root/services/foster-child/child-background-info/family-person-list/UploadDocumentsAPI";
import { enqueueSnackbar } from "notistack";
import dayjs from "dayjs";
import { useState } from "react";

export const useFamilyPersonDocument = () => {
  const { query } = useRouter();
  const [searchValue, setSearchValue] = useState(undefined);
  const [page, setPage] = useState(0);

  const childFamilyOrgInfoId = {
    childFamilyOrgInfoId:
      query?.family_person_id || "f305d230-f26b-4710-b291-7f0ed177e0ed",
    offset: page,
    limit: 10,
    search: searchValue,
  };

  const { data, isLoading, isSuccess, isFetching, isError } =
    useGetFamilyPersonUploadDocumentQuery(childFamilyOrgInfoId);
  const [postFamilyPersonUploadDocument] =
    usePostFamilyPersonUploadDocumentMutation();

  console.log(data);

  const submitFamilyPersonDocumentData = async (data: any) => {
    const documentFormData = new FormData();

    documentFormData.append("documentType", data.documentType);
    documentFormData.append(
      "documentDate",
      dayjs(data.documentDate).format("DD/MM/YYYY")
    );
    documentFormData.append("password", data.password);
    documentFormData.append("chooseFiles", data.chosenFile);

    const apiDataParameter = {
      childFamilyOrgInfoId: query?.family_person_id,
      body: documentFormData,
    };
    try {
      const res: any = await postFamilyPersonUploadDocument(
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

  const [deleteList] = useDeleteFamilyPersonUploadDocumentMutation();

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
    query,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    setPage,
    setSearchValue,
    listDeleteHandler,
    submitFamilyPersonDocumentData,
  };
};
