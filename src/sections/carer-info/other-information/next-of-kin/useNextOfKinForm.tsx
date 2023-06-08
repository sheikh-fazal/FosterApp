import {
  useLazyNextofkinListBYIDQuery,
  useNextofkinDeleteMutation,
  useNextofkinPatchMutation,
  useNextofkinPostMutation,
} from "@root/services/carer-info/other-information/nextOfKinApi";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { formatters, nextofkinFormValues } from ".";

const useNextOfKinForm = (props: any) => {
  const { action, id } = props;
  //STATES
  const [isloading, setisloading] = useState(false);
  const [isFatching, setisFatching] = useState(false);
  //APIS HANDLERS
  const [nextofkinPost] = useNextofkinPostMutation();
  const [nextofkinPatch] = useNextofkinPatchMutation();
  const [nextofkinListBYID] = useLazyNextofkinListBYIDQuery();
  const [nextofkinDelete] = useNextofkinDeleteMutation();
  //FUNCTIONS
  const SubmitData = (data: any) => {
    console.log(data);
    let formData = new FormData();
    for (var key in data) {
      formData.append(key, data[key]);
    }

    setisFatching(true);
    if (action === "add") {
      nextofkinPost(formData)
        .unwrap()
        .then(() => {
          setisFatching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });
        })
        .catch((error: { data: { message: any } }) => {
          setisFatching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else if (action === "edit") {
      nextofkinPatch(formData)
        .unwrap()
        .then(() => {
          setisFatching(false);
          enqueueSnackbar("Information Updated Successfully", {
            variant: "success",
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
  //GET DEFAULT VALUE HANDLER
  const getDefaultValue = async () => {
    if (action === "view" || action === "edit") {
      const { data, isError } = await nextofkinListBYID(id, true);
      setisloading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return nextofkinFormValues;
      }
      const responseData = { ...data.data };

      for (const key in responseData) {
        const value = responseData[key];
        if (formatters[key]) responseData[key] = formatters[key](value);
      }

      return responseData;
    } else {
      setisloading(false);
      return nextofkinFormValues;
    }
  };
  //deletehander
  const deleteHander = (id: any) => {
    nextofkinDelete({ id: id })
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
    isFatching,
    isloading,
  };
};

export default useNextOfKinForm;
