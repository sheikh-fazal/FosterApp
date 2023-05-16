import * as Yup from "yup";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const useSocialWorkerFormDialogbox = () => {
  const todayDate = dayjs().format("MM/DD/YYYY");

  const defaultValues = {
    socialWorkerName: "",
    socialWorkerRole: "",
    assessmentDate: new Date(todayDate),
    fosterCarerName: "",
    assessmentOutcome: "",
  };

  const socialWorkerFormSchema = Yup.object().shape({
    socialWorkerName: Yup.string().required("Required"),
    socialWorkerRole: Yup.string().required("Required"),
    assessmentDate: Yup.string().required("Required"),
    fosterCarerName: Yup.string().required("Required"),
    assessmentOutcome: Yup.string().required("Required"),
  });

  const methods: any = useForm({
    resolver: yupResolver(socialWorkerFormSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return { methods, handleSubmit, onSubmit };
};

export default useSocialWorkerFormDialogbox;
