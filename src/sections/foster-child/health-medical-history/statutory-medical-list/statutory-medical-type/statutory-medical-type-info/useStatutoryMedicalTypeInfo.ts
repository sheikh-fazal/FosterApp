import { useForm } from "react-hook-form";

import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  defaultValueEhcpInfoForm,
  ehcpInfoFormDataFunction,
  ehcpInfoFormSchema,
} from ".";
import {
  useLazyGetSingleStatutoryMedicalTypeDataQuery,
  usePatchStatutoryMedicalTypeDataMutation,
  usePostStatutoryMedicalTypeDataMutation,
} from "@root/services/foster-child/health-medical-history/statutory-medical-list/StatutoryMedicalList";

export const useStatutoryMedicalTypeInfo = () => {
  const { query } = useRouter();
  const router = useRouter();
  const ehcpInfoFormData = ehcpInfoFormDataFunction(query?.action === "view");

  const [
    postStatutoryMedicalTypeDataTrigger,
    postStatutoryMedicalTypeDataStatus,
  ] = usePostStatutoryMedicalTypeDataMutation();

  const [
    patchStatutoryMedicalTypeDataTrigger,
    patchStatutoryMedicalTypeDataStatus,
  ] = usePatchStatutoryMedicalTypeDataMutation();

  const [
    getSingleStatutoryMedicalTypeDataTrigger,
    getSingleStatutoryMedicalTypeDataStatus,
  ] = useLazyGetSingleStatutoryMedicalTypeDataQuery();
  // get api params
  const pathParams = {
    id: query?.id,
  };
  const params = {
    statutoryMedicalType: query?.type,
  };
  const apiDataParameter = { pathParams, params };

  const setGpDetailsInfoDefaultValue = async () => {
    if (!!!query?.id) return;
    const { data, isError } = await getSingleStatutoryMedicalTypeDataTrigger(
      apiDataParameter,
      true
    );
    if (isError) {
      return defaultValueEhcpInfoForm(data);
    }
    return defaultValueEhcpInfoForm(data?.data);
  };

  const methods: any = useForm({
    resolver: yupResolver(ehcpInfoFormSchema),
    defaultValues: setGpDetailsInfoDefaultValue,
  });
  const { handleSubmit } = methods;

  const submitStatutoryMedicalTypeDataForm = async (data: any) => {
    const params = {
      statutoryMedicalType: query?.type,
    };

    const apiDataParameter = { params, body: data };
    if (!!query?.id) {
      patchStatutoryMedicalTypeDataForm(data);
      return;
    }
    try {
      const res: any = await postStatutoryMedicalTypeDataTrigger(
        apiDataParameter
      ).unwrap();
      router.push({
        pathname: `/foster-child/health-medical-history/statutory-medical-list/statutory-medical-type`,
        query: {
          id: res?.data?.id,
          type: query.type,
          ...(!!router?.query?.fosterChildId && {
            fosterChildId: router?.query?.fosterChildId,
          }),
        },
      });
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  const patchStatutoryMedicalTypeDataForm = async (data: any) => {
    const pathParams = {
      id: query?.id,
    };
    const params = {
      statutoryMedicalType: query?.type,
    };
    const apiDataParameter = { params, body: data, pathParams };
    try {
      const res: any = await patchStatutoryMedicalTypeDataTrigger(
        apiDataParameter
      ).unwrap();
      router.push({
        pathname: `/foster-child/health-medical-history/statutory-medical-list/statutory-medical-type`,
        query: {
          id: query.id,
          type: query.type,
          action: "edit",
          ...(!!router?.query?.fosterChildId && {
            fosterChildId: router?.query?.fosterChildId,
          }),
        },
      });
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return {
    ehcpInfoFormData,
    methods,
    handleSubmit,
    submitStatutoryMedicalTypeDataForm,
    getSingleStatutoryMedicalTypeDataStatus,
    postStatutoryMedicalTypeDataStatus,
    patchStatutoryMedicalTypeDataStatus,
    query,
    router,
  };
};
