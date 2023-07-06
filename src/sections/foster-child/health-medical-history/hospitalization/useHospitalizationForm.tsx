import {
  useCreatehospitalisationinfoListMutation,
  useDeleteHospitalisationInfoListMutation,
  useLazyGetHospitalisationInfoListQueryByIdQuery,
  useUpdateHospitalisationinfoListMutation,
} from "@root/services/foster-child/child-background-info/child-chronology-of-events/HospitalisationInfoAPI";
import router from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { HospitalizationListValue } from ".";
const useHospitalizationForm = (props: any) => {
  const { action, fosterChildId, hospitalizationId } = props;
  //STATES
  const [isloading, setisloading] = useState(false);
  const [isFatching, setisFatching] = useState(false);
  const [modelOpen, setModelOpen] = React.useState(false);
  //API HANDLERS
  const [createhospitalisationinfoList] =
    useCreatehospitalisationinfoListMutation();
  const [updateHospitalisationinfoList] =
    useUpdateHospitalisationinfoListMutation();
  const [GetHospitalisationInfoListQueryById] =
    useLazyGetHospitalisationInfoListQueryByIdQuery();
  const [deleteHospitalisationInfoList] =
    useDeleteHospitalisationInfoListMutation();
  //Functions
  const SubmitData = (data: any) => {
    setisFatching(true);
    const sendata: any = {};
    const keys = Object.keys(HospitalizationListValue);
    for (const key of keys) {
      if (data[key]) {
        sendata[key] = data[key];
      }
    }
    if (action === "add") {
      createhospitalisationinfoList({
        body: { fosterChildId: fosterChildId, ...data },
      })
        .unwrap()
        .then((data) => {
          setisFatching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });

          router.push({
            pathname:
              "/foster-child/health-medical-history/hospitalisation/actions",
            query: {
              action: "edit",
              fosterChildId: fosterChildId,
              hospitalinfoId: data?.id,
            },
          });
        })
        .catch((error: { data: { message: any } }) => {
          setisFatching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else if (action === "edit") {
      updateHospitalisationinfoList({
        params: {
          id: hospitalizationId,
        },
        body: { fosterChildId: fosterChildId, ...sendata },
      })
        .unwrap()
        .then(() => {
          setisFatching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });
          router.push({
            pathname: "/foster-child/health-medical-history/hospitalisation/",
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
      const { data, isError } = await GetHospitalisationInfoListQueryById({
        params: {
          id: hospitalizationId,
        },
      });

      setisloading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return HospitalizationListValue;
      }
      const responseData = { ...data?.data };
      for (const key in responseData) {
        if (key.includes("date") || key.includes("Date")) {
          responseData[key] = new Date(responseData[key]);
        }
      }

      return responseData;
    } else {
      setisloading(false);
      return HospitalizationListValue;
    }
  };
  const deleteHander = (id: any) => {
    deleteHospitalisationInfoList(id)
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
    setModelOpen,
    isloading,
    isFatching,
    modelOpen,
  };
};

export default useHospitalizationForm;
