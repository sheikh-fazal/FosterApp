import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export const viewReportsFilterData = [
  {
    gridlength: 6,
    otherOptions: {
      label: "Child",
      name: "child",
      fullWidth: true,
      size: "small",
      select: true,
    },
    options: [{ value: "all", label: "all" }],
    component: TextField
  },
  {
    gridlength: 6,
    otherOptions: {
      label: "Supervising Social Worker",
      name: "supervisingSocialWorker",
      fullWidth: true,
      size: "small",
      select: true,
    },
    options: [{ value: "all", label: "all" }],
    component: TextField
  },
  {
    gridlength: 6,
    otherOptions: {
      label: "Foster Carer(s)",
      name: "fosterCarer",
      fullWidth: true,
      size: "small",
      select: true,
    },
    options: [{ value: "all", label: "all" }],
    component: TextField
  },
  {
    gridlength: 6,
    otherOptions: {
      label: "Date",
      name: "dateType",
      fullWidth: true,
      size: "small",
      select: true,
    },
    options: [{ value: "Today", label: "Today" }],
    component: TextField
  },
];

export const tableSubHeader = [
  {
    id: "1",
    subData: [
      { label: "Supervising Social Worker", value: "Teri dacty2" },
      { label: "Report Name", value: "FR-G Reviewing Officer Report" },
    ],
  },
  {
    id: "2",
    subData: [{ label: "Foster Carer(s)", value: "John Doe1" }],
  },
  {
    id: "3",
    subData: [
      { label: "date from", value: "03/11/21" },
      { label: "date to", value: "03/11/21" },
    ],
  },
];

export const tableMockData = [
  {
    id: "1",
    srNo: "1",
    createdDate: "03/10/21",
    createdBy: "john doe",
    modifiedDate: "03/10/21",
    modifiedBy: "Timmy Toppee",
    childName: "Teri Dactyl",
    name: "Aima bugg",
  },
];
