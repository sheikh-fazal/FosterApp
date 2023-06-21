import { useRef, useState } from "react";
import useAuth from "@root/hooks/useAuth";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { useGetStatutoryMedicalListInfoDocumentDataQuery, usePostStatutoryMedicalListInfoDocumentDataMutation } from "@root/services/foster-child/health-medical-history/statutory-medical-list/documents";

export const useDocuments = () => {
  const { user }: any = useAuth();
  const { query } = useRouter();
  // ----------------------------------------------------------------------
  const [
    postStatutoryMedicalListInfoDocumentDataTrigger,
    postStatutoryMedicalListInfoDocumentDataStatus,
  ] = usePostStatutoryMedicalListInfoDocumentDataMutation();
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);
  const params = {
    offset: page,
    limit: 10,
    search: searchValue,
  };
const pathParams = {
  id:query?.id
}
  const dataParameter = { params, pathParams };
  const { data, isLoading, isError, isSuccess, isFetching } =
  useGetStatutoryMedicalListInfoDocumentDataQuery(dataParameter);

  const submitStatutoryMedicalListInfoDocumentData = async (data: any) => {
    const documentFormData = new FormData();

    // documentFormData.append("documentType", data.documentType);
    documentFormData.append("documentDate", data.documentDate);
    documentFormData.append("password", data.password);
    documentFormData.append("file", data.chosenFile);

    const pathParams = {
      id:query?.id
    }
      const apiDataParameter = { params, pathParams , body: documentFormData };
    try {
      const res: any = await postStatutoryMedicalListInfoDocumentDataTrigger(
        apiDataParameter
      ).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return {
    setPage,
    setSearchValue,
    data,
    isLoading,
    isError,
    isSuccess,
    user,
    isFetching,
    submitStatutoryMedicalListInfoDocumentData,
    query
  };
};
