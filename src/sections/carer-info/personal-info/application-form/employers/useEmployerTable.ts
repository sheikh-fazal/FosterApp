import { useTheme } from "@mui/material";
import {
  useDeleteEmployerMutation,
  useGetEmployerDetailsQuery,
} from "@root/services/carer-info/personal-info/application-form/EmployersApi";
import { enqueueSnackbar } from "notistack";
import { useRef, useState } from "react";

export const useEmployerTable = (apllicationFormid: any, role: any) => {
  let [viewData, setViewData] = useState(null);
  let [employerData, setEmployerData] = useState(null);
  const tableHeaderRef = useRef<any>();

  const changeView = (val: any) => {
    setViewData(val);
  };

  const theme: any = useTheme();

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetEmployerDetailsQuery(apllicationFormid);
  const [deleteEmployer] = useDeleteEmployerMutation(apllicationFormid);

  const listDeleteHandler = (id: any) => {
    deleteEmployer(id)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Record Deleted Successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };

  return {
    changeView,
    viewData,
    setViewData,
    theme,
    employerData,
    setEmployerData,
    data,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    listDeleteHandler,
    tableHeaderRef,
  };
};