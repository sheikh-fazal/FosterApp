import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const useOrignalChildReferral = () => {
  const todayDate = dayjs().format("MM/DD/YYYY");

  const defaultValues = {
    firstName: "",
    middleName:"",
    lastName: "",
    dob: new Date(todayDate),
    gender: "",
    ethnicity: "",
    ofsteadEthnicity: "",
    religion: "",
    nationality: "",
    immigrationStatus: "",
    language: "",
    childPhysicalDisability:"",
    mentalHealthStatus:"",
    sibling:"",
    adoptionConsideration:""
  };

  const viewOriginalChild = Yup.object().shape({
    firstName: Yup.string().required("Required"), 
    middleName: Yup.string().required("Required"), 
    lastName: Yup.string().required("Required"),
    dob: Yup.date().required("Required"),
    gender: Yup.string().required("Required"),
    ethnicity: Yup.string().required("Required"),
    ofsteadEthnicity: Yup.string().required("Required"),
    religion: Yup.string().required("Required"),
    nationality: Yup.string().required("Required"),
    immigrationStatus: Yup.string().required("Required"),
    language: Yup.string().required("Required"),
    childPhysicalDisability: Yup.string().required("Required"),
    mentalHealthStatus: Yup.string().required("Required"),
    sibling: Yup.string().required("Required"),
    adoptionConsideration: Yup.string().required("Required"),
  });
  const methods: any = useForm({
    resolver: yupResolver(viewOriginalChild),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data:any) => {
    console.log(data);
    
  };

  return { methods, onSubmit, handleSubmit };
};

export default useOrignalChildReferral;
