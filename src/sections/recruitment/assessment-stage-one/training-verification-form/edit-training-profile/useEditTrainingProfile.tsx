import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

const useEditTraingingProfile = ({ initialValueProps }: any) => {

  console.log(initialValueProps);
  
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
    additionalInformation: Yup.string().required("Required"),
  });

  const methods: any = useForm({
    resolver: yupResolver(tainingProfileSchema),
    defaultValues: initialValueProps?.data,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data, 'updated data');
  };

  return { methods, handleSubmit, onSubmit, router };
};

export default useEditTraingingProfile;
