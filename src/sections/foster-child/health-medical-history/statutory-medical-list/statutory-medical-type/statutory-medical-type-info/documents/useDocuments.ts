import { useState } from "react";
import useAuth from "@root/hooks/useAuth";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import {
  useDeleteStatutoryMedicalListInfoDocumentDataByIdMutation,
  useGetStatutoryMedicalListInfoDocumentDataQuery,
  usePostStatutoryMedicalListInfoDocumentDataMutation,
} from "@root/services/foster-child/health-medical-history/statutory-medical-list/documents";

export const useDocuments = () => {
  const { user }: any = useAuth();
  const { query } = useRouter();
  const STATUTORYMEDICALLISTTYPEINFODOCUMENTPAGELIMIT = 10;
  // ----------------------------------------------------------------------
  const [
    postStatutoryMedicalListInfoDocumentDataTrigger,
    postStatutoryMedicalListInfoDocumentDataStatus,
  ] = usePostStatutoryMedicalListInfoDocumentDataMutation();
  const [
    deleteStatutoryMedicalListInfoDocumentDataByIdTrigger,
    deleteStatutoryMedicalListInfoDocumentDataByIdStatus,
  ] = useDeleteStatutoryMedicalListInfoDocumentDataByIdMutation();
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);
  const params = {
    offset: page,
    limit: STATUTORYMEDICALLISTTYPEINFODOCUMENTPAGELIMIT,
    search: searchValue,
  };
  const pathParams = {
    id: query?.id,
  };
  const dataParameter = { params, pathParams };
  const { data, isLoading, isError, isSuccess, isFetching } =
    useGetStatutoryMedicalListInfoDocumentDataQuery(dataParameter, {
      skip: !!!query?.id,
      refetchOnMountOrArgChange: true,
    });

  const submitStatutoryMedicalListInfoDocumentData = async (data: any) => {
    const documentFormData = new FormData();

    // documentFormData.append("documentType", data.documentType);
    documentFormData.append("documentDate", data.documentDate);
    documentFormData.append("password", data.password);
    documentFormData.append("file", data.chosenFile);

    const pathParams = {
      id: query?.id,
    };
    const apiDataParameter = { params, pathParams, body: documentFormData };
    try {
      const res: any = await postStatutoryMedicalListInfoDocumentDataTrigger(
        apiDataParameter
      ).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
      setPage(0);
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  const onDeleteConfirm = async (data: any) => {
    const pathParams = {
      id: data?.id,
    };
    console.log(pathParams);
    const apiDataParameter = { pathParams };
    try {
      const res: any =
        await deleteStatutoryMedicalListInfoDocumentDataByIdTrigger(
          apiDataParameter
        ).unwrap();
      enqueueSnackbar(res?.message ?? `Deleted Successfully`, {
        variant: "success",
      });
      setPage(0);
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
    query,
    onDeleteConfirm,
    STATUTORYMEDICALLISTTYPEINFODOCUMENTPAGELIMIT,
  };
};
