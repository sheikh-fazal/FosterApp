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
          { value: "Select Value", label: "Select Vaue" },
      ],
      component: RHFSelect,
    },
    {
      id: 4,
      gridLength: 6,
      otherOptions: {
        label: "Expire Date",
        name: "expiryDate",
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
        name: "date",
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
  

  export const defaultValues = {
    addtionalInfo: "addtionalInfo",
    attendance: false,
    carerName: "John Doe",
    comments: "comments",
    courseAttended: "courseAttended",
    courseStatus: "courseStatus",
    createdAt: "2023-05-17T12:46:08.000Z",
    date: "2020-12-08T19:00:00.000Z",
    expiryDate: "2020-12-08T19:00:00.000Z",
    id: "5e10536d-a759-463d-960a-1040e12e1e87",
    otherTraining: "otherTraining",
    trainingNeeds: "trainingNeeds",
    updatedAt: "2023-05-17T12:46:08.000Z",
    userId: "4f7512fb-2916-451b-8240-97f529ded73d",
  };