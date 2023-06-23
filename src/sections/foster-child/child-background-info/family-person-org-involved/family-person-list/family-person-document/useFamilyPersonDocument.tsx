import { useRouter } from "next/router";
import {
  useGetFamilyPersonUploadDocumentQuery,
  usePostFamilyPersonUploadDocumentMutation,
} from "@root/services/foster-child/child-background-info/family-person-list/UploadDocumentsAPI";
import { enqueueSnackbar } from "notistack";

export const useFamilyPersonDocument = () => {
  const { query } = useRouter();

  const childFamilyOrgInfoId = {
    childFamilyOrgInfoId:
      query?.family_person_id || "f305d230-f26b-4710-b291-7f0ed177e0ed",
  };

  const { data, isLoading, isSuccess, isFetching, isError } =
    useGetFamilyPersonUploadDocumentQuery(childFamilyOrgInfoId);
  // const [postFamilyPersonUploadDocument] = usePostFamilyPersonUploadDocumentMutation();

  console.log(data);

  const submitFamilyPersonDocumentData = async (data: any) => {};

  return {
    query,
    data,
    isLoading,
    isSuccess,
    isFetching,
    isError,
    submitFamilyPersonDocumentData,
  };
};
