import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export const viewReportsFilterData = [
  {
    gridlength: 6,
    label: "Date From",
    otherOptions: {
      name: "dateFrom",
      fullWidth: true,
      size: "small",
    },
    component: DatePicker
  },
  {
    gridlength: 6,
    label: "Date To",
    otherOptions: {
      name: "dateTo",
      fullWidth: true,
      size: "small",
    },
    component: DatePicker
  },

  {
    gridlength: 6,
    label: "Role",
    otherOptions: {
      label: "Role",
      name: "role",
      fullWidth: true,
      size: "small",
      select: true,
    },
    options: [{ value: "all", label: "all" }],
    component: TextField
  },
];

export const TableDemoData = [
  {
    id: 1,
    sNO: "1",
    userName: "David Wiliams",
    role: "User ",
    loginTime: "12.30 AM",
    activity: "26/12/2021",
  },
  {
    id: 2,
    sNO: "2",
    userName: "Bella Watson",
    role: "User  ",
    loginTime: "12.30 AM",
    activity: "26/12/2021",
  },
  {
    id: 3,
    sNO: "3",
    userName: "David Wiliams",
    role: "User ",
    loginTime: "12.30 AM",
    activity: "26/12/2021",
  },
];
