import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const useOrignalChildReferral = () => {
  const todayDate = dayjs().format("MM/DD/YYYY");

  const defaultValues = {
    childCode: "",
    uploadImage: "",
    childParent: "",
    areaOffice: "",
    firstName: "",
    lastName: "",
    dateOfBirth: new Date(todayDate),
    age: "",
    gender: "",
    ethnicity: "",
    ofSteadEthnicity: "",
    specialNeeds: "",
    nationality: "",
    language: "",
    religion: "",
    legal: "",
    immigrationStatus: "",
    behaviour: "",
    childInEducation: "",
    otherSiblings: "",
    address: "",
    refferalName: "",
    refferalDate: new Date(todayDate),
    reason: "",
    childPlacingAuthority: "",
    laWorkerName: "",
    localAuthority: "",
    dateLaNotified: new Date(todayDate),
    becomeFosterChld: "",
    otherDetails: "",
  };

  const viewOriginalChild = Yup.object().shape({
    childCode: Yup.string().required("Required"),
    uploadImage: Yup.string().required("Required"),
    childParent: Yup.string().required("Required"),
    areaOffice: Yup.string().required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    dateOfBirth: Yup.date().required("Required"),
    age: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    ethnicity: Yup.string().required("Required"),
    ofSteadEthnicity: Yup.string().required("Required"),
    specialNeeds: Yup.string().required("Required"),
    nationality: Yup.string().required("Required"),
    language: Yup.string().required("Required"),
    religion: Yup.string().required("Required"),
    legal: Yup.string().required("Required"),
    immigrationStatus: Yup.string().required("Required"),
    behaviour: Yup.string().required("Required"),
    childInEducation: Yup.string().required("Required"),
    otherSiblings: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    refferalName: Yup.string().required("Required"),
    refferalDate: Yup.date().required("Required"),
    reason: Yup.string().required("Required"),
    childPlacingAuthority: Yup.string().required("Required"),
    laWorkerName: Yup.string().required("Required"),
    localAuthority: Yup.string().required("Required"),
    dateLaNotified: Yup.date().required("Required"),
    becomeFosterChld: Yup.string().required("Required"),
    otherDetails: Yup.string().required("Required"),
  });
  const methods: any = useForm({
    resolver: yupResolver(viewOriginalChild),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = () => {};

  return { methods, onSubmit, handleSubmit };
};

export default useOrignalChildReferral;
