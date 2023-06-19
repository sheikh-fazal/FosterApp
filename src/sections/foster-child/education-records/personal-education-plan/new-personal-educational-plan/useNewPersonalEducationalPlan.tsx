import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

const useNewPersonalEducationalPlan = () => {
  const todayDate = dayjs().format("MM/DD/YYYY");
  const router = useRouter();

  const defaultValues = {
    school: "",
    pepDate: new Date(todayDate),
    onFile: "",
    comments: "",
    
  };

  const tainingProfileSchema = Yup.object().shape({
    school: Yup.string().required("Required"),
    pepDate: Yup.date().required("Required"),
    onFile: Yup.string().required("Required"),
    comments: Yup.string().required("Required"),
   
  });

  const methods: any = useForm({
    resolver: yupResolver(tainingProfileSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return { methods, handleSubmit, onSubmit, router };
};

export default useNewPersonalEducationalPlan;
