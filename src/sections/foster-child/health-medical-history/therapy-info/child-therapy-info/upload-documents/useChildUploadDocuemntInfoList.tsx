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

export const useChildUploadDocuemntInfoList = () => {
  const router = useRouter();
  const { query } = useRouter();
  const [page, setPage] = useState(0);

  const [searchValue, setSearchValue] = useState(undefined);
  const [therapInfoCon, setTherapInfo] = useState({
    someAsyncAction: false,
    addModel: false,
  });
  const params = {
    search: searchValue,
    offset: page,
    limit: 10,
  };
  const tableHeaderRef = useRef<any>();

  const apiDataParameter = { params, id: query?.therapyInfoId };

  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetTherapyDetailsDocsListDataQuery(apiDataParameter);

  const [delTherapyDetailsDocsListData] =
    useDelTherapyDetailsDocsListDataMutation();

  const handleDeleteChildTherapy = async (id: string) => {
    try {
      setTherapInfo((pre) => ({ ...pre, someAsyncAction: true }));
      const data = await delTherapyDetailsDocsListData({ id });
      displaySuccessMessage(data, enqueueSnackbar);
      setTherapInfo((pre) => ({ ...pre, someAsyncAction: false }));
      return true;
    } catch (error) {
      displaySuccessMessage(error, enqueueSnackbar);
      return false;
    }
  };

  const openAddModel = () => {
    setTherapInfo((pre) => ({ ...pre, addModel: true }));
  };

  const closeAddModel = () => {
    setTherapInfo((pre) => ({ ...pre, addModel: false }));
  };

  const columns = getColumns({ router, handleDeleteChildTherapy });
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
    therapInfoCon,
    openAddModel,
    closeAddModel,
  };
};
