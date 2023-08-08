import React from "react";
import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

const useNewIfaParticipationPolicyChild = () => {
  const [value, setValue] = React.useState<number | null>(2);

  const todayDate = dayjs().format("MM/DD/YYYY");
  const router = useRouter();

  const defaultValues = {
    classStudying: "",
  };

  const childExclusionSchema = Yup.object().shape({
    classStudying: Yup.string().required("Required"),
  });

  const methods: any = useForm({
    resolver: yupResolver(childExclusionSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  console.log(methods);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return { methods, handleSubmit, onSubmit, router,value,setValue };
};

export default useNewIfaParticipationPolicyChild;
