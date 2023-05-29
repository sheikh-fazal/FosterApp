import * as Yup from "yup";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { usePostTrainingProfileDocumentMutation } from "@root/services/recruitment/assessment-stage-one/training-verification-form/TrainingProfileAllApi";
import { enqueueSnackbar } from "notistack";

const useUploadDocumentsFormDialogbox = () => {
  const todayDate = dayjs().format("MM/DD/YYYY");

  const router = useRouter();
  const trainingProfileId = Object.keys(router?.query)[0];

  const [postData, { isLoading, isError, isSuccess, error }] =
    usePostTrainingProfileDocumentMutation();

  const defaultValues = {
    documentType: "",
    date: new Date(todayDate),
    password: "",
    file: "",
  };

  const socialWorkerFormSchema = Yup.object().shape({
    documentType: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
    password: Yup.string().required("Required"),
    file: Yup.mixed().required("Required"),
  });

  const methods: any = useForm({
    resolver: yupResolver(socialWorkerFormSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    console.log(data.file);

    const formData = new FormData();
    formData.append("documentType", data?.documentType);
    formData.append("date", data.date);
    // formData.append("date", data?.date);
    formData.append("password", data?.password);
    formData.append("file", data?.file);

    const uploadedData: any = {
      body: formData,
      trainingProfileId,
    };

    try {
      const res: any = await postData(uploadedData);
      enqueueSnackbar(res?.message ?? `Successfully!`, {
        variant: "success",
      });

      router.push(
        "/recruitment/assessment-stage-one/training-verification-form"
      );
    } catch (error) {
      enqueueSnackbar("Something Went Wrong!", { variant: "error" });
    }
  };
  return { methods, handleSubmit, onSubmit };
};

export default useUploadDocumentsFormDialogbox;
