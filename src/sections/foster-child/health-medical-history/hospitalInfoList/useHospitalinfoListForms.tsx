import {
  useCreateHospitalInfoMutation,
  useDeleteHospitalInfoMutation,
  useLazyGetHospitalInfoByIdQuery,
  useUpdateHospitalInfoMutation,
} from "@root/services/foster-child/health-medical-history/hospital-info-list/HospitalInfoList";
import router from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { HospitalInfoListValue } from ".";

const useHospitalinfoListForms = (props: any) => {
  const { action, fosterChildId, hospitalinfoId } = props;
  //STATES
  const [isloading, setisloading] = useState(false);
  const [isFatching, setisFatching] = useState(false);
  //ApiHandler
  const [createHospitalInfo] = useCreateHospitalInfoMutation();
  const [getHospitalInfoById] = useLazyGetHospitalInfoByIdQuery();
  const [updateHospitalInfo] = useUpdateHospitalInfoMutation();
  const [deleteHospitalInfo] = useDeleteHospitalInfoMutation();
  //Functions
  const SubmitData = (data: any) => {
    setisFatching(true);
    if (action === "add") {
      createHospitalInfo({
        params: {
          fosterCarerId: fosterChildId,
        },
        body: data,
      })
        .unwrap()
        .then(() => {
          setisFatching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });
          router.push({
            pathname:
              "/foster-child/health-medical-history/hospital-info-list/",
            query: {
              fosterChildId: fosterChildId,
            },
          });
        })
        .catch((error: { data: { message: any } }) => {
          setisFatching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else if (action === "edit") {
      updateHospitalInfo({
        id: hospitalinfoId,
        params: {
          id: hospitalinfoId,
          fosterCarerId: fosterChildId,
        },
        body: data,
      })
        .unwrap()
        .then(() => {
          setisFatching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });
          router.push({
            pathname:
              "/foster-child/health-medical-history/hospital-info-list/",
            query: {
              fosterChildId: fosterChildId,
            },
          });
        })
        .catch((error: { data: { message: any } }) => {
          setisFatching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else {
      return null;
    }
  };
  const getDefaultValue = async () => {
    setisloading(true);

    if (action === "view" || action === "edit") {
      const { data, isError } = await getHospitalInfoById({
        id: hospitalinfoId,
        params: {
          id: hospitalinfoId,
          fosterCarerId: fosterChildId,
        },
      });

      setisloading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return HospitalInfoListValue;
      }
      const responseData = { ...data };

      return responseData;
    } else {
      setisloading(false);
      return HospitalInfoListValue;
    }
  };
  const deleteHander = (id: any, fosterCarerId: any) => {
    deleteHospitalInfo({
      id: id,
      params: {
        id: id,
        fosterCarerId: fosterCarerId,
      },
    })
      .unwrap()
      .then(() => {
        enqueueSnackbar("Information Delete Successfully", {
          variant: "success",
        });
      })
      .catch((error: { data: { message: any } }) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  return {
    SubmitData,
    getDefaultValue,
    deleteHander,
    isloading,
    isFatching,
  };
};

export default useHospitalinfoListForms;
