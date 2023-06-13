import { useRef, useState } from "react";
import useAuth from "@root/hooks/useAuth";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { useGetGpDetailsInfoDocumentDataQuery, usePostGpDetailsInfoDocumentDataMutation } from "@root/services/foster-child/health-medical-history/gp-details/gp-details-info/documents";

export const useDocuments = () => {
  const { user }: any = useAuth();
  const { query } = useRouter();
  // ----------------------------------------------------------------------
  const [
    postGpDetailsInfoDocumentDataTrigger,
    postGpDetailsInfoDocumentDataStatus,
  ] = usePostGpDetailsInfoDocumentDataMutation();
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);
  const params = {
    offset: page,
    limit: 10,
    search: searchValue,
  };
const pathParams = {
  gpInfoId:query?.gpInfoId
}
  const dataParameter = { params, pathParams };
  const { data, isLoading, isError, isSuccess, isFetching } =
  useGetGpDetailsInfoDocumentDataQuery(dataParameter);

  const submitInitialHomeVisitDocument = async (data: any) => {
    const documentFormData = new FormData();

    // documentFormData.append("documentType", data.documentType);
    documentFormData.append("documentDate", data.documentDate);
    documentFormData.append("password", data.password);
    documentFormData.append("file", data.chosenFile);

    const pathParams = {
      gpInfoId:query?.gpInfoId
    }
      const putApiParameter = { params, pathParams , body: documentFormData };
    try {
      const res: any = await postGpDetailsInfoDocumentDataTrigger(
        putApiParameter
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
    submitInitialHomeVisitDocument,
    query
  };
};
