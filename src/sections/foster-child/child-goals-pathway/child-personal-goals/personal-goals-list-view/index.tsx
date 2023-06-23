import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import dayjs from "dayjs";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const todayDate = dayjs().format("MM/DD/YYYY");
export const defaultValues = {
  // inspectionDate: new Date(todayDate),
  // nextInspectedDate: new Date(todayDate),

  // hasFile: false,
  // HasPetQuestionnaireCompleted: true,

  // isLivingAccomodationSuitableForChildrenOryoungLivingOrProposedToLiveInIt:
  //   true,
  // dateToBeCarriedOutOne: new Date(todayDate),

  // improvementsRequireOne: "Text",

  // isThereSufficientSpaceForChildrenToPursueTheirHomework: false,
  // dateToBeCarriedOutTwo: new Date(todayDate),

  // improvementsRequireTwo: "text",

  // doRoomsHaveSufficientLightToReadAndPlayBy: false,
  // dateToBeCarriedOutThree: new Date(todayDate),

  // improvementsRequireThree: "text",

  // willChildOrYoungPersonHisOrHerOwnBedCot: false,
  // dateToBeCarriedOutFour: new Date(todayDate),

  // improvementsRequireFour: "text",
  goalName: "text",
  status: "",
  date: new Date(todayDate),
  comments: "",
};

export const FormSchema = Yup.object().shape({
  // inspectionDate: Yup.date().required("Required"),
  // nextInspectedDate: Yup.date().required("Date is required"),
  // dateToBeCarriedOutOne: Yup.date().required("Required"),
  // improvementsRequireOne: Yup.string().required("Required"),
  // dateToBeCarriedOutTwo: Yup.date().required("Required"),
  // improvementsRequireTwo: Yup.string().required("Required"),
  // dateToBeCarriedOutThree: Yup.date().required("Required"),
  // improvementsRequireThree: Yup.string().required("Required"),
  // dateToBeCarriedOutFour: Yup.date().required("Required"),
  // improvementsRequireFour: Yup.string().required("Required"),
});

export const childPersonalGoalListViewData = [
  {
    id: 0.5,
    variant: "subtitle2",
    heading: `Personal Goals`,
  },
  {
    id: 1,
    componentProps: {
      name: "goalName",
      fullWidth: true,
      label: "Goal Name",
      multiline: true,
    //   minRows: 3,
    },
    gridLength: 6,

    component: RHFTextField,
  },
  {
    id: 2,
    componentProps: {
      name: "status",
      label: "Status",
      multiline: true,
      fullWidth: true,
    //   minRows: 3,
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "date",
      label: "Date",
    },
    component: RHFDatePicker,
  },
  {
    id: 4,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "comments",
      label: "Comments",
    },
    component: RHFTextField,
  },
];
