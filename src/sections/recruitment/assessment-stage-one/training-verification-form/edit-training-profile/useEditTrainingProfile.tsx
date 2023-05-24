import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";

const useEditTraingingProfile = ({
  initialValueProps,
  onSubmitHandler,
  trainingProfileId,
}: any) => {
  const router = useRouter();

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

  const defaultValues = {
    carerName: "",
    courseAttended: "",
    courseStatus: "",
    comments: "",
    trainingNeeds: "",
    otherTraining: "",
    addtionalInfo: "",
    attendance: false,
    expiryDate: new Date(),
    date: new Date(),
  };

  const methods: any = useForm({
    resolver: yupResolver(tainingProfileSchema),
    defaultValues: initialValueProps,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    const formData = new FormData();

    formData.append("addtionalInfo", data?.addtionalInfo);
    formData.append("attendance", data?.attendance);
    formData.append("carerName", data?.carerName);
    formData.append("comments", data?.comments);
    formData.append("courseAttended", data?.courseAttended);
    formData.append("courseStatus", data?.courseStatus);
    formData.append("date", data?.date);
    formData.append("expiryDate", data?.expiryDate);
    formData.append("otherTraining", data?.otherTraining);
    formData.append("trainingNeeds", data?.trainingNeeds);

    const updatedData = {
      trainingProfileId,
      formData,
    };

    try {
      const res: any = await onSubmitHandler(updatedData).unwrap();
      enqueueSnackbar(res?.message ?? `Successfully!`, {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar("Something Went Wrong!", { variant: "error" });
    }
    console.log(data, "updated data");
  };

  return { methods, handleSubmit, onSubmit, router, defaultValues };
};

export default useEditTraingingProfile;
