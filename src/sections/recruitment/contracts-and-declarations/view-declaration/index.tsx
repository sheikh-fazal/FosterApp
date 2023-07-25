import {
  RHFCheckbox,
  RHFSwitch,
  RHFTextField,
} from "@root/components/hook-form";
import dayjs from "dayjs";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";

const todayDate = dayjs().format("MM/DD/YYYY");
// const ageOf18Years = dayjs().subtract(18, "year").format("MM/DD/YYYY");
// const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
// const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const defaultValues = {
  agreeToAboveDeclaration: false,
  criminalOffence: false,
  ifCriminalOffenceProvideDetails: "",
};

export const FormSchema = Yup.object().shape({});

export const viewDeclarationData = [
  {
    accordianName: "Have you ever been convicted of a criminal offence?",
    heading: "Have you ever been convicted of a criminal offence?",
    gridLength: 3,
    otherOptions: {
      label: "Have you ever been convicted of a criminal offence?",
      name: "criminalOffence",
      options: ["Yes", "No"],
    },

    component: RHFRadioGroupWithLabel,
    textfield: {
      id: 2,
      componentProps: {
        name: "ifCriminalOffenceProvideDetails",
        label: "If yes , please prvoide more details",
        multiline: true,
        minRows: 3,
        fullWidth: true,
      },
      gridLength: 12,
      component: RHFTextField,
    },
  },
  //   {
  //     id: 2,
  //     componentProps: {
  //       name: "ifCriminalOffenceProvideDetails",
  //       label: "If yes , please prvoide more details",
  //       multiline: true,
  //       minRows: 3,
  //       fullWidth: true,
  //     },
  //     gridLength: 12,
  //     component: RHFTextField,
  //   },
  {
    accordianName:
      "Are you willing to undergo a full enhanced DBA check at a price of  55?",
    id: 3,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "hasFile",
      label: "Has File",
    },
    component: RHFCheckbox,
  },
];
