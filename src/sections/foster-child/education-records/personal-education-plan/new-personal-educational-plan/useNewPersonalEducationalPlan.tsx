import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { usePostChildEducationPlanMutation } from "@root/services/foster-child/education-records/child-education-plan/childEducationPlan";

const useNewPersonalEducationalPlan = () => {
  const todayDate = dayjs().format("MM/DD/YYYY");
  const router = useRouter();
  const fosterChildId = router?.query?.fosterChildId;

  const [postData] = usePostChildEducationPlanMutation();

  const defaultValues = {
    school: "",
    date: new Date(todayDate),
    onFile: "",
    comments: "",
    principalName: "",
  };

  const tainingProfileSchema = Yup.object().shape({
    school: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
    onFile: Yup.string().required("Required"),
    comments: Yup.string().required("Required"),
    principalName: Yup.string().required("Required"),
  });

  const methods: any = useForm({
    resolver: yupResolver(tainingProfileSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    const res = await postData({ data, fosterChildId });
  };

  return { methods, handleSubmit, onSubmit, router };
};

export default useNewPersonalEducationalPlan;
