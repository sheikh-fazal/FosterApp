import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";

const useTraingingProfile = (onSubmitHandler: any) => {
  const todayDate = dayjs().format("MM/DD/YYYY");
  const router = useRouter();

  const defaultValues = {
    carerName: "",
    courseAttended: "",
    courseStatus: "",
    comments: "",
    trainingNeeds: "",
    otherTraining: "",
    addtionalInfo: "",
    attendance: false,
    expiryDate: new Date(todayDate),
    date: new Date(todayDate),
  };

  const tainingProfileSchema = Yup.object().shape({
    carerName: Yup.string().required("Required"),
    comments: Yup.string().required("Required"),
    attendance: Yup.boolean().required("Required"),
    courseAttended: Yup.string().required("Required"),
    expiryDate: Yup.date().required("Required"),
    courseStatus: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
    trainingNeeds: Yup.string().required("Required"),
    otherTraining: Yup.string().required("Required"),
    addtionalInfo: Yup.string().required("Required"),
  });

  const methods: any = useForm({
    resolver: yupResolver(tainingProfileSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    try {
      const res: any = await onSubmitHandler(data).unwrap();
      enqueueSnackbar(res?.message ?? `Successfully!`, {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar("Something Went Wrong!", { variant: "error" });
    }
    console.log(data);
  };

  return { methods, handleSubmit, onSubmit, router };
};

export default useTraingingProfile;
