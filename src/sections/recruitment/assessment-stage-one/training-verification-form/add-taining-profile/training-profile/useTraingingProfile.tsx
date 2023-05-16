import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

const useTraingingProfile = () => {
  const todayDate = dayjs().format("MM/DD/YYYY");
  const router = useRouter();

  const defaultValues = {
    carerName: "",
    certificateReceived: "",
    courseAttended: "",
    expiredDate: new Date(todayDate),
    courseStatus: "",
    attendedDate: new Date(todayDate),
    commentCourseStatus: "",
    carersIdentifiedTraining: "",
    independentlyCompleting: "",
    additionalInformation: "",
  };

  const tainingProfileSchema = Yup.object().shape({
    carerName: Yup.string().required("Required"),
    certificateReceived: Yup.string().required("Required"),
    courseAttended: Yup.string().required("Required"),
    expiredDate: Yup.string().required("Required"),
    courseStatus: Yup.string().required("Required"),
    attendedDate: Yup.string().required("Required"),
    commentCourseStatus: Yup.string().required("Required"),
    carersIdentifiedTraining: Yup.string().required("Required"),
    independentlyCompleting: Yup.string().required("Required"),
    additionalInformation: Yup.string().required("Required"),
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

export default useTraingingProfile;
