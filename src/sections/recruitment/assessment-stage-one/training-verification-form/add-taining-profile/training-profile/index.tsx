import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const TrainingProfileData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      label: "Carer Name",
      name: "carerName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "certificateReceived",
      label: "Has the Foster Carer received Certificates of attendace",
    },
    component: RHFCheckbox,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "courseAttended",
      label: "Course Attended",
      fullWidth: true,
      select: true,
    },
    options: [
        { value: "Select Value", label: "Select Vaue" },
    ],
    component: RHFSelect,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      label: "Expire Date",
      name: "expiredDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "courseStatus",
      label: "Course Status  ",
      fullWidth: true,
      select: true,
    },
    options: [
        { value: "Select Value", label: "Select Vaue" },
    ],
    component: RHFSelect,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      label: "Attended Date",
      name: "attendedDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 7,
    gridLength: 12,
    otherOptions: {
      label: "Comment on Course Status",
      name: "commentCourseStatus",
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 12,
    otherOptions: {
      label: "Carers Identified training needs",
      name: "carersIdentifiedTraining",
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 12,
    otherOptions: {
      label:
        "Other training which the Foster Carer will be independently completing",
      name: "independentlyCompleting",
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 10,
    gridLength: 12,
    otherOptions: {
      label: "Additional Information",
      name: "additionalInformation",
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
];
