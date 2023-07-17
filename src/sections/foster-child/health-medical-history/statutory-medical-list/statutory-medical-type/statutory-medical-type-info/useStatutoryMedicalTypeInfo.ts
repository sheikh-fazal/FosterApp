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
  const router = useRouter();
  const ehcpInfoFormData = ehcpInfoFormDataFunction(
    router.query?.action === "view"
  );

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
    id: router.query?.id,
  };
  const queryParams = {
    statutoryMedicalType: router.query?.type,
  };
  const apiDataParameter = { pathParams, queryParams };

  const setGpDetailsInfoDefaultValue = async () => {
    if (!!!router.query?.id) return;
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
    if (!!router.query?.id) {
      patchStatutoryMedicalTypeDataForm(data);
      return;
    }
    const queryParams = {
      statutoryMedicalType: router.query?.type,
      ...(router?.query?.fosterChildId && {
        fosterChildId: router?.query?.fosterChildId,
      }),
    };
    const apiDataParameter = { queryParams, body: data };
    try {
      const res: any = await postStatutoryMedicalTypeDataTrigger(
        apiDataParameter
      ).unwrap();
      router.push({
        pathname: `/foster-child/health-medical-history/statutory-medical-list/statutory-medical-type`,
        query: {
          id: res?.data?.id,
          type: router.query.type,
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
      id: router.query?.id,
    };
    const queryParams = {
      statutoryMedicalType: router.query?.type,
    };
    const apiDataParameter = { queryParams, body: data, pathParams };
    try {
      const res: any = await patchStatutoryMedicalTypeDataTrigger(
        apiDataParameter
      ).unwrap();
      router.push({
        pathname: `/foster-child/health-medical-history/statutory-medical-list/statutory-medical-type`,
        query: {
          id: router.query.id,
          type: router.query.type,
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
    router,
  };
};
