import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import dayjs from "dayjs";
import { useState } from "react";
import { useDeleteAbsenceInfoUploadDocumentMutation, useGetAbsenceInfoDocumentQuery, usePostAbsenceInfoUploadDocumentMutation } from "@root/services/foster-child/education-records/absence-info/AbsenceInfoDocumentation";

export const useAbsenceInfoDocument = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(undefined);
  const [page, setPage] = useState(0);
  console.log(router?.asPath.split("/").pop());

  const childFamilyOrgInfoId = {
    childFamilyOrgInfoId:
      router?.query?.family_person_id || "  ",
    offset: page,
    limit: 10,
    search: searchValue,
  };

  const { data, isLoading, isSuccess, isFetching, isError } =
  useGetAbsenceInfoDocumentQuery(childFamilyOrgInfoId);
  const [postAbsenceInfoUploadDocument] =
  usePostAbsenceInfoUploadDocumentMutation();

  console.log(data);

  const submitAbsenceInfoDocumentData = async (data: any) => {
    if (!router?.query?.family_person_id) {
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
      childFamilyOrgInfoId: router?.query?.family_person_id,
      body: documentFormData,
    };
    try {
      const res: any = await postAbsenceInfoUploadDocument(
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

  const [deleteList] = useDeleteAbsenceInfoUploadDocumentMutation();

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
    data, isLoading, isFetching, isError, isSuccess, submitAbsenceInfoDocumentData, setSearchValue
  };
};
