import { Box, Checkbox, Rating } from "@mui/material";
import TableAction from "@root/components/TableAction";
import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import * as Yup from "yup";
import router from "next/router";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import Image from "next/image";

import documentIcon from "../../../../assets/img/ifaAvatar.png";
import RHFTimePicker from "@root/components/hook-form/RHFTimePicker";
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
      label: "I can use the train",
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
      label: "I know how to plan a journey by train.",
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
      label: "I know how to order a taxi.",
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
      label: "I can take something back to a shop",
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
      label: "I can use the cooker and oven with staff help.",
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
      label: "I can understand cooking instructions on food boxes and packets.",
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
      label: "I can order a meal in restaurant and pay.",
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
      label: "I understand why is important to keep a kitchen clean and safe.",
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
      label: "I can brush and mop the floor alone.",
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
      label: "I can iron my own clothing with staff help.",
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
        "I can make my own medical appointments, Doctor’s, Dentist and Opticians.",
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
      label: "I can help with basic first aid.",
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
      label: "I can change a light bulb with staff help.",
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
      label: "I can use a computer to complete home work alone.",
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
      label: "I can book tickets alone",
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
      label: "I can set up an email address",
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
        "I know how to stay healthy and understand importance of diet and exercise.",
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
      label: "I know and understand differences between sex and sexuality.",
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
      label: "I can   communicate with friends alone.",
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
        "I know how to communicate with other people involved with me alone.",
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
      label: "I know how to keep myself safe when in relationship.",
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
      label: "I know what prejudice and discrimination means.",
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
      label: "I can take something back to a shop",
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
      label: "I have had some advice and guidance on how to study for an exam.",
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
        "I am able to complete a CV and know how to look for part time or weekend job.",
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
      label: "I know where to look for a job.",
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
      label: "I have had some interview preparation.",
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
      label: "I know how to purchase a train ticket.",
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
      label: "I can renew my bus pass with staff.",
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
      label: "I am able to save up for what I need",
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
        "I can plan a shopping list and stick to a budget with staff help.",
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
      label: "I understand why it is important to prepare food correctly.",
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
      label: "I can read and follow a recipe.",
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
      label: "I can store left over food safely.",
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
      label: "I can clean a bathroom with staff help.",
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
      label: "I can use a washing machine alone.",
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
      label: "I understand all my own medical needs.",
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
        "I can self-administer basic medication e.g. inhalers, creams etc.",
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
      label: "I know how to seek medical attention in an emergency.",
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
      label: "I can change a plug with staffs help.",
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
      label: "I can use the internet to plan a journey alone.",
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
        "I can use the internet to plan a journey I can look for activities in local area alone.",
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
      label: "I can look for activities in local area alone",
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
      label: "I can use social networking site safely",
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
      label: "I know where to get appropriate advice on drugs and alcohol.",
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
      label: "I know where to seek help if regarding any sexual issues.",
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
      label: "I can communicate with my family alone.",
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
      label: "I know what a good relationship is.",
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
      label: "I have an understanding of differences cultures and traditions.",
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
      label: "I can shop within a budget.",
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
      label: "I know I can contact about careers and College advice.",
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
      label: "I have been to visit the job centre.",
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
      label: "I’m know what I would like to do when I leave school.",
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
      label: "I am able to save up for what I need.",
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
