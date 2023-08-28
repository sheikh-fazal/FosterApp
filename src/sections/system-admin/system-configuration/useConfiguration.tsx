import dayjs from "dayjs";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTableParams } from "@root/hooks/useTableParams";
import { systemConfigurationTableFunction } from ".";
import { useGetSystemConfigurationListQuery } from "@root/services/system-admin/system-configuration/SystemConfiguratinAPI";
import { useState } from "react";

const useConfiguration = () => {
  const [openEditModel, setOpenEditModel] = useState(false);
  const todayDate = dayjs().format("MM/DD/YYYY");
  const router = useRouter();
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const { data, isError, isLoading, isSuccess, isFetching } =
    useGetSystemConfigurationListQuery(params);

  const defaultValues = {};

  const systemConfigurationSchema = Yup.object().shape({}); 

  const methods: any = useForm({
    resolver: yupResolver(systemConfigurationSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {};

  const systemConfigurationColoums = systemConfigurationTableFunction({
    router,setOpenEditModel
  });

  return {
    data,
    methods,
    handleSubmit,
    onSubmit,
    params,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    systemConfigurationColoums,
    openEditModel,
    setOpenEditModel
  };
};

export default useConfiguration;
