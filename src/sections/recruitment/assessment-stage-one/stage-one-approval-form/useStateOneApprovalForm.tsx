import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const useStateOneApprovalForm = () => {
  const todayDate = dayjs().format("MM/DD/YYYY");

  const defaultValues = {
    applicantName: "",
    socialWorkerRecommendation: "",
    socialWorkerComments: "",
    nameOfWorker: "",
    socialWorkerSignature: "",
    socaialWorkerAssessmentDate: new Date(todayDate),
    teamManagerDecision: "",
    teamManagerComments: "",
    nameTeamManager: "",
    teamManagerSignature: "",
    teamManagerAssessmentDate: new Date(todayDate),
  };

  const stageOneApprovalSchema = Yup.object().shape({
    applicantName: Yup.string().required("Required"),
    socialWorkerRecommendation: Yup.string().required("Required"),
    socialWorkerComments: Yup.string().required("Required"),
    nameOfWorker: Yup.string().required("Required"),
    socaialWorkerAssessmentDate: Yup.string().required("Required"),
    socialWorkerSignature: Yup.string().required("Required"),
    teamManagerDecision: Yup.string().required("Required"),
    teamManagerComments: Yup.string().required("Required"),
    nameTeamManager: Yup.string().required("Required"),
    teamManagerSignature: Yup.string().required("Required"),
    teamManagerAssessmentDate: Yup.string().required("Required"),
  });

  const methods: any = useForm({
    resolver: yupResolver(stageOneApprovalSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return { methods, handleSubmit, onSubmit };
};

export default useStateOneApprovalForm;
