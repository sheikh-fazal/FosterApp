import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { RHFUploadFile } from "@root/sections/carer-info/personal-info/application-form/basic-information/RHFUploadFile";
import SignaturePad from "@root/components/hook-form/SignaturePad";
import { RHFApiUploadFile } from "../RHFApiUploadFile";

export const defaultValues = {
  travelBusEveidence: "",
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
      label: "I can travel by bus",
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
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "busPlan",
      label: "I can use a bus time to plan a journey",
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
      label: "I know an adult who i can trust with my daily needs",
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
        "I can contact emergency services, police, fire, ambulance and fire brigade",
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
      label: "I can communicate with my family and know when I need staff help",
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
        "I can save up some of my pocket money to buy a larger item I want",
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
      label: "I can send a letter",
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
      label: "I know how to set up an e-mail address",
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
        "I know how to use a computer to complete my homework with the help of staff",
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
      label: "I understand personal safety when using the computer",
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
        "I have good personal hygiene and understand why this is important",
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
      label: "I can wash my hair",
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
      label: "I know when to change my clothes",
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
      label: "I can change my bedding",
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
      label: "I can use the tumble dryer with staff help",
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
      label: "I know how to use the vacuum cleaner",
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
      label: "I can make a sandwich",
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
      label: "I can use the microwave.",
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
      label: "I know where the local bus stop is to take me town",
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
      label: "I know where the local shop is",
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
      label: "I know an adult who I can contact in case of emergency",
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
        "I know how to communicate with teachers in school with staffs help",
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
        "I can communicate with my friends and know when I need staff help",
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
      label: "I have opened a bank account",
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
      label: "I can send a text",
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
      label: "I can send an e-mail",
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
      label: "I am able to keep myself safe from cyber bullying",
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
      label: "I understand the dangers of giving out personal details on line",
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
      label: "I can have a bath",
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
      label: "I can clean my teeth",
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
      label: "I can make my bed",
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
      label: "I can use the washing machine with staffs help",
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
      label: "I can hang my washing on the line",
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
      label: "I can clean up after making drinks and snacks",
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
      label: "I can make a cup of tea",
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
        "I can use good manners and show appreciate behaviours in a restaurant",
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
