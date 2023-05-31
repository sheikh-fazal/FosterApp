import { TextField } from "@mui/material";

export const selectPositionValues = [
  { value: "user", label: "User" }
];
export const selectLineManagerValues = [
  { value: "user", label: "User" }
];

export const TableDemoData = [
  {
    sNO: "1",
    employeeName: "Anne Teak",
    lineManager: "User ",
    position: "12.30 AM",
    date: "26/12/2021",
  },
  {
    sNO: "2",
    employeeName: "Anne Teak",
    lineManager: "User  ",
    position: "12.30 AM",
    date: "26/12/2021",
  },
  {
    sNO: "3",
    employeeName: "Anne Teak",
    lineManager: "User ",
    position: "12.30 AM",
    date: "26/12/2021",
  },
];


export const careerFeedbackFilterData = [
  {
    gridlength: 6,
    title: 'Employee Name',
    otherOptions: {
      name: 'employeeName',
      fullWidth: true,
      size: 'small',
    },
  },
  {
    gridlength: 6,
    title: 'Postion',
    otherOptions: {
      name: 'postion',
      fullWidth: true,
      size: 'small',
    },
    options: [
      { value: 'all', label: 'all' }
    ],
  },
  {
    gridlength: 6,
    title: 'Line Manager',
    otherOptions: {
      name: 'lineManager',
      fullWidth: true,
      size: 'small',
    },
    options: [
      { value: 'today', label: 'today' }
    ],
  },
];