import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import dayjs from "dayjs";



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
      name: "attendance",
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
      { value: "active-listing-skills", label: "Active Listing Skills" },
      { value: "allegation", label: "Allegation" },
      {
        value: "anti-oppressive-practices",
        label: "Anti Oppressive Practices",
      },
      { value: "anti-bullying", label: "Anti-Bullying" },
      { value: "attachment-theory", label: "Attachment Theory" },
      { value: "care-standard-act-2002", label: "Care Standard Act 2002" },
      { value: "child-protection", label: "Child Protection" },
      {
        value: "child-sexual-exploitation",
        label: "Child Sexual Exploitation",
      },
      {
        value: "child-sexual-exploitation-level-1",
        label: "Child Sexual Exploitation Level 1",
      },
      {
        value: "child-sexual-exploitation-level-2",
        label: "Child Sexual Exploitation Level 2",
      },
      {
        value: "children-who-have-been-trafficked/UAM",
        label: "Children Who Have been Trafficked/UAM",
      },
      {
        value: "coomunicating-with-children-and-young-people",
        label: "Coomunicating With Children and Young People",
      },
      {
        value: "contact-and-working-with-birth-families",
        label: "Contact and Working with Birth Families",
      },
      {
        value: "data-protection-training",
        label: "Data Protection Training",
      },
      {
        value: "disability-awareness",
        label: "Disability Awareness",
      },
      {
        value: " equality-and-diversity",
        label: " Equality and Diversity",
      },
      {
        value: "first-aid",
        label: "First Aid",
      },
    ],
    component: RHFSelect,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "expiryDatee",
      label: "Expire Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "courseStatus",
      label: "Course Status",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "attended", label: "Attended" },
      { value: "not-attended", label: "Not Attended" },
      { value: "online", label: "Online" },
    ],
    component: RHFSelect,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "datee",
      label: "Attended Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 7,
    gridLength: 12,
    otherOptions: {
      label: "Comment on Course Status",
      name: "comments",
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
      name: "trainingNeeds",
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
      name: "otherTraining",
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
      name: "addtionalInfo",
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
];
