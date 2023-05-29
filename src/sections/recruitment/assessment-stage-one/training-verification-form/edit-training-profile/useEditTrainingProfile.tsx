import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
<<<<<<< HEAD
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
=======



const useEditTraingingProfile = ({initialValueProps}:any) => {

  const todayDate = dayjs().format("MM/DD/YYYY");
  const router = useRouter();


  console.log(initialValueProps, 'trainging initial values');
  

  const tainingProfileSchema = Yup.object().shape({
    carerName: Yup.string().required("Required"),
    comments: Yup.string().required("Required"),
    attendance: Yup.string().required("Required"),
>>>>>>> valeed
    courseAttended: Yup.string().required("Required"),
    expiryDate: Yup.date().required("Required"),
    courseStatus: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
    trainingNeeds: Yup.string().required("Required"),
    otherTraining: Yup.string().required("Required"),
<<<<<<< HEAD
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
=======
    additionalInformation: Yup.string().required("Required"),
  });

  const methods: any = useForm({
    resolver: yupResolver(tainingProfileSchema),
    defaultValues: initialValueProps?.data,
>>>>>>> valeed
  });

  const { handleSubmit } = methods;

<<<<<<< HEAD
  const onSubmit = async (data: any) => {
    const updatedData = {
      trainingProfileId,
      data,
    };

    console.log(updatedData, "updated data");

    try {
      const res: any = await onSubmitHandler(updatedData).unwrap();
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

  return { methods, handleSubmit, onSubmit, router, defaultValues };
=======
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return { methods, handleSubmit, onSubmit, router };
>>>>>>> valeed
};

export default useEditTraingingProfile;
