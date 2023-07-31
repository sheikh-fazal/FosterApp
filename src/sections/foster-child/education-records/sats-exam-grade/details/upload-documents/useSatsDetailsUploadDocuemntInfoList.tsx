import { useRef, useState } from "react";
import { getColumns } from "./columnsInfo";
import { useRouter } from "next/router";
import {
  useDelTherapyDetailsDocsListDataMutation,
  useDelTherapyDetailsListDataMutation,
  useGetAlltherapyDetailsListDataQuery,
  useGetTherapyDetailsDocsListDataQuery,
} from "@root/services/foster-child/health-medical-history/therapy-info/therapyInfoListApi";
import { enqueueSnackbar } from "notistack";
import { displaySuccessMessage } from "@root/utils/mixedUtil";
import { useGetSatsExamGradeDocsListDataQuery } from "@root/services/foster-child/education-records/sats-exam-grade/satsExamGradeListApi";

export const useSatsDetailsUploadDocuemntInfoList = () => {
  const router = useRouter();
  const { query } = useRouter();
  const [page, setPage] = useState(0);

  const [searchValue, setSearchValue] = useState(undefined);
  const [listInfoCon, setListInfoCon] = useState({
    someAsyncAction: false,
    docsAddModel: false,
    updateViewModel: false,
    updateViewModelDisabled: true,
    uploadFormDataHolder: null,
  });
  const params = {
    search: searchValue,
    offset: page,
    limit: 10,
  };
  const tableHeaderRef = useRef<any>();

  const apiDataParameter = { params, id: query?.therapyInfoId };

  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetSatsExamGradeDocsListDataQuery(apiDataParameter);

  const [delTherapyDetailsDocsListData] =
    useDelTherapyDetailsDocsListDataMutation();

  const handleDeleteChildTherapy = async (id: string) => {
    try {
      setListInfoCon((pre) => ({ ...pre, someAsyncAction: true }));
      const data = await delTherapyDetailsDocsListData({ id });
      displaySuccessMessage(data, enqueueSnackbar);
      setListInfoCon((pre) => ({ ...pre, someAsyncAction: false }));
      return true;
    } catch (error) {
      displaySuccessMessage(error, enqueueSnackbar);
      return false;
    }
  };

  const openAddModel = () => {
    setListInfoCon((pre) => ({ ...pre, docsAddModel: true }));
  };

  const closeAddModel = () => {
    setListInfoCon((pre) => ({ ...pre, docsAddModel: false }));
  };

  const openUpdateViewModel = (viewId: string, isViewModel: boolean = true) => {
    const uploadDocsFormData = data?.data?.therapy_info_document.find(
      ({ id }: any) => id === viewId
    );
    setListInfoCon((pre) => ({
      ...pre,
      uploadFormDataHolder: uploadDocsFormData,
    }));
    setListInfoCon((pre) => ({
      ...pre,
      updateViewModel: true,
      updateViewModelDisabled: isViewModel,
    }));
  };

  const closeUpdateViewModel = () => {
    setListInfoCon((pre) => ({ ...pre, updateViewModel: false }));
  };

  const columns = getColumns({
    handleDeleteChildTherapy,
    openUpdateViewModel,
    router,
  });
  return {
    tableHeaderRef,
    columns,
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    setSearchValue,
    setPage,
    page,
    listInfoCon,
    openAddModel,
    closeAddModel,
    closeUpdateViewModel,
  };
};
