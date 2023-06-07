import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

const useViewOutSchoolActivityInfo = () => {
  const todayDate = dayjs().format("MM/DD/YYYY");
  const router = useRouter();

  const defaultValues = {
    activityType: "",
    fromDate: new Date(todayDate),
    toDate: new Date(todayDate),
    comments: "",
  };

  const childExclusionSchema = Yup.object().shape({
    activityType: Yup.string().required("Required"),
    fromDate: Yup.date().required("Required"),
    toDate: Yup.date().required("Required"),
    comments: Yup.string().required("Required"),
  });

  const methods: any = useForm({
    resolver: yupResolver(childExclusionSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return { methods, handleSubmit, onSubmit, router };
};

export default useViewOutSchoolActivityInfo;
