import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { RHFUploadFile } from "@root/sections/carer-info/personal-info/application-form/basic-information/RHFUploadFile";
import SignaturePad from "@root/components/hook-form/SignaturePad";

export const defaultValues = {
  name: "",
  toDate: "",
  fromDate: "",
  certificateAwarded: "",
  travelByBus: "",
  travelByBusEvidence: "",
};

export const FormSchema = Yup.object().shape({
  assessmentDate: Yup.date().required("Date of Interview is required"),
  assessmentLevel: Yup.string().required("Field is required"),
  duration: Yup.string().required("Field is required"),
  outcome: Yup.string().required("Field is required"),
});
export const formData1 = [
  {
    gridLength: 6,
    otherOptions: {
      name: "toDate",
      label: "To Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "certificateAwarded",
      label: "Certificate Awarded",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
];
export const formData2 = [
  {
    gridLength: 6,
    otherOptions: {
      name: "areaOffice",
      label: "Area Office",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "Pakistan", label: "Pakistan" },
      { value: "India", label: "India" },
      { value: "areaOffice information", label: "areaOffice information" },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "medicalConditionsTreatment",
      label:
        "Provide details of any current or pending medical conditions, treatment or appointment below",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "Accessment done by",
      label: "Accessment done by",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "Accessment Date",
      label: "To Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "accessorSignature",
      label: "Signature Of Accessor",
      sx: { marginTop: "-20px" },
    },

    component: SignaturePad,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "certificateAwarded",
      label: "Attach Video/Audio Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
];
export const ListOfSkills = [
  {
    gridLength: 12,
    otherOptions: {
      name: "travelBus",
      label: "I can travel alone on train, bus and taxi.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "travelBusEveidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "busPlan",
      label: "I know how to get a driver’s licence.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "busPlanEveidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "busPlan",
      label:
        "I can attend all my medical appointments alone and know how to collect prescriptions from the chemist.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "busPlanEveidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "busPlan",
      label: "I know how to take care of minor illness and injuries.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "busPlanEveidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "busPlan",
      label: "I can use the cooker alone.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "busPlanEveidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "busPlan",
      label:
        "I can organise a cleaning routine and evidence I can stick to it.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "busPlanEveidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "busPlan",
      label: "I understand the different housing options open to me. ",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "busPlanEveidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "busPlan",
      label:
        "I know an adult who can help and advise me with housing or other benefits I may need to claim.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "busPlanEveidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "busPlan",
      label: "I understand ways of saving money.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "busPlanEveidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },

  {
    gridLength: 12,
    otherOptions: {
      name: "busPlan",
      label:
        "I know what citizens advice is for and where it is located in Warrington.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "busPlanEveidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
];
export const ListOfSkillsWithEvidence = [
  {
    gridLength: 12,
    otherOptions: {
      name: "travelBus",
      label: "I can renew my bus pass alone.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "travelBusEveidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "busPlan",
      label: "I know how to get a passport.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "busPlanEveidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "busPlan",
      label:
        "I understand my medical needs and take all my own medication correctly without help.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "busPlanEveidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "busPlan",
      label:
        "I am able to prepare several well balanced meals from fresh ingredients on my own.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "busPlanEveidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "busPlan",
      label:
        "I understand the importance of household safety eg fire hazards, gas, and electrical.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "busPlanEveidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "busPlan",
      label:
        "I can evidence I have healthy relationships with friends and can maintain them.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "busPlanEveidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "busPlan",
      label: "I have seen a tenancy agreement.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "busPlanEveidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "busPlan",
      label:
        "I have seen the housing and other benefit forms I may need to complete.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "busPlanEveidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "busPlan",
      label:
        "I understand my leaving care allowance, and what it is to be used for.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "busPlanEveidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "busPlan",
      label: "I know where to go if I experience financial difficulties.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "busPlanEveidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
];
