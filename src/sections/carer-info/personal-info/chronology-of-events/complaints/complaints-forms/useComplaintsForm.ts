import { useTheme } from "@mui/material";
import {
  useLazySingleComplaintListQuery,
  usePatchComplaintListMutation,
  usePostComplaintListMutation,
} from "@root/services/carer-info/personal-info/chronology-of-events/complaints-api/ComplaintsApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React from "react";
import { defaultValues, formatters } from "./index";

export const useComplaintsForm = (action: any, id: any) => {
  const router = useRouter();
  const theme: any = useTheme();
  const [isLoading, setIsLoading] = React.useState(true);
  const [getComplaintList] = useLazySingleComplaintListQuery();
  const [postComplaintDetails] = usePostComplaintListMutation();
  const [editComplaintList] = usePatchComplaintListMutation();
  //GET DEFAULT VALUE HANDLER
  const getDefaultValue = async () => {
    if (action === "view" || action === "edit") {
      const { data, isError } = await getComplaintList(id, true);
      setIsLoading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return defaultValues;
      }
      const responseData = { ...data.data };

      for (const key in responseData) {
        const value = responseData[key];
        if (formatters[key]) responseData[key] = formatters[key](value);
      }

      return responseData;
    } else {
      setIsLoading(false);
      return defaultValues;
    }
  };

  const onSubmit = async (data: any) => {
    if (action === "add") {
      setIsLoading(true);
      postComplaintDetails(data)
        .unwrap()
        .then((res: any) => {
          setIsLoading(false);
          enqueueSnackbar("Complaint Added Successfully", {
            variant: "success",
          });
          router
            .push({
              pathname:
                "/carer-info/personal-info/carer-chronology-of-events/complaints",
              query: { action: "edit", id: `${res?.data.id}` },
            })

            .catch((error) => {
              setIsLoading(false);
              const errMsg = error?.data?.message;
              enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
              router.push(
                "/carer-info/personal-info/carer-chronology-of-events"
              );
            });
        });
    } else if (action === "edit") {
      setIsLoading(true);
      const formData = {
        id,
        ...data,
      };
      editComplaintList(formData)
        .unwrap()
        .then((res: any) => {
          enqueueSnackbar("Complaint Edited Successfully", {
            variant: "success",
          });
          router.push(
            "/carer-info/personal-info/carer-chronology-of-events/complaints"
          );
          setIsLoading(false);
        })
        .catch((error: any) => {
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
          router.push("/carer-info/personal-info/carer-chronology-of-events");
          setIsLoading(false);
        });
    } else {
      return null;
    }
  };
  return {
    router,
    isLoading,
    onSubmit,
    theme,
    getDefaultValue,
  };
};
