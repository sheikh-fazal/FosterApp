import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export const viewReportsFilterData = [
  {
    gridlength: 6,
    otherOptions: {
      label: "Name of foster carer",
      name: "nameOfFosterCarer",
      fullWidth: true,
      select:true,
      size: "small",
    },
    options: [{ value: "all", label: "all" }],
    component: TextField
  },
  {
    gridlength: 6,
    otherOptions: {
      label: "Name of decision maker",
      name: "nameOfDecisionMaker",
      fullWidth: true,
      size: "small",
      select:true,
    },
    options: [{ value: "all", label: "all" }],
    component: TextField
  },
  {
    gridlength: 6,
    otherOptions: {
      label: "Date of panel (if applicable)",
      name: "dateOfReviewMeeting",
      fullWidth: true,
      size: "small",
    },
    component: DatePicker
  },
  {
    gridlength: 6,
    otherOptions: {
      label: "Date of review",
      name: "dateOfReview",
      fullWidth: true,
      size: "small",
    },
    component: DatePicker
  },
];

export const tableSubHeader = [
  {
    id: "1",
    subData: [
      { label: "Name of child(DOB)", value: "Teri dactyl(10/10/2012)" },
      { label: "region", value: "Region 11" },
    ],
  },
  {
    id: "2",
    subData: [
      { label: "Supervising Social Worker", value: "Aida bugg" },
      { label: "branch", value: "Branch 12" },
    ],
  },
  {
    id: "3",
    subData: [
      { label: "Foster Carer(s)", value: "Teri Dectyl, Peg Legge" },
      { label: "date from", value: "03/11/21" },
      { label: "date to", value: "03/11/21" },
    ],
  },
];

export const tableMockData = [
  {
    id: "1",
    srNo: "1",
    nameOfFosterCarer: "Timmy Toppee",
    dateOfPanel: "03/10/21",
    nameOfDecisionMaker: "Teri Dactyl",
    reviewDate: "03/10/21",
    modifiedDate: "03/10/21",
    modifiedBy: "john doe",
  },
];
