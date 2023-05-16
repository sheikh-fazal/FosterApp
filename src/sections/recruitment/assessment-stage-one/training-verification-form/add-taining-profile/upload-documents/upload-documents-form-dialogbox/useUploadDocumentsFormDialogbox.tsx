import * as Yup from "yup";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const useUploadDocumentsFormDialogbox = () => {
  const todayDate = dayjs().format("MM/DD/YYYY");

  const defaultValues = {
    documentType: "",
    documentDate: new Date(todayDate),
    passwordToOpenDocument: "",
    chooseFile: "",
  };

  const socialWorkerFormSchema = Yup.object().shape({
    documentType: Yup.string().required("Required"),
    documentDate: Yup.string().required("Required"),
    passwordToOpenDocument: Yup.string().required("Required"),
    chooseFile: Yup.string().required("Required"),
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

export default useUploadDocumentsFormDialogbox;
