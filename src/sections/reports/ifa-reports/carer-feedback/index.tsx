import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export const TableDemoData = [
  {
    id: 1,
    sNO: "1",
    employeeName: "Anne Teak",
    lineManager: "User ",
    position: "12.30 AM",
    date: "26/12/2021",
  },
  {
    id: 2,
    sNO: "2",
    employeeName: "Anne Teak",
    lineManager: "User  ",
    position: "12.30 AM",
    date: "26/12/2021",
  },
  {
    id: 3,
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
    otherOptions: {
      label: "Employee Name",
      name: "employeeName",
      fullWidth: true,
      size: "small",
    },
    component: TextField
  },
  {
    gridlength: 6,
    otherOptions: {
      label: "Postion",
      name: "postion",
      fullWidth: true,
      select: true,
      size: "small",
    },
    options: [{ value: "all", label: "all" }, { value: "new", label: "new" }],
    component: TextField
  },
  {
    gridlength: 6,
    otherOptions: {
      label: "Line Manager",
      name: "lineManager",
      fullWidth: true,
      select: true,
      size: "small",
    },
    options: [{ value: "john", label: "john" }],
    component: TextField
  },
  {
    gridlength: 6,
    otherOptions: {
      label: "Date",
      name: "date",
      fullWidth: true,
      size: "small",
    },
    component: DatePicker
  },
];
