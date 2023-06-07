import { Box, Checkbox, Rating } from "@mui/material";
import TableAction from "@root/components/TableAction";
import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import * as Yup from "yup";
import router from "next/router";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import Image from "next/image";

import documentIcon from "../../../../assets/img/ifaAvatar.png";
import RHFTimePicker from "@root/components/hook-form/RHFTimePicker";
import { RHFUploadFile } from "@root/sections/carer-info/personal-info/application-form/basic-information/RHFUploadFile";
// utils

// ----------------------------------------------------------------------

export const defaultValues = {
  assessmentDate: new Date(),
  assessmentLevel: "",
  duration: "",
  outcome: "",
};

export const FormSchema = Yup.object().shape({
  assessmentDate: Yup.date().required("Date of Interview is required"),
  assessmentLevel: Yup.string().required("Field is required"),
  duration: Yup.string().required("Field is required"),
  outcome: Yup.string().required("Field is required"),
});
export const formData1 = [
  {
    gridLength: 6,
    otherOptions: {
      name: "toDate",
      label: "To Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "certificateAwarded",
      label: "Certificate Awarded",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
];
export const ListOfSkills = [
  {
    gridLength: 12,
    otherOptions: {
      name: "travelBus",
      label: "I can travel by bus",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "travelBusEveidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
];
export const ListOfSkillsWithEvidence = [
  {
    gridLength: 12,
    otherOptions: {
      name: "localBusStop",
      label: "I know where the local bus stop is to take me town",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "localBusStop",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
];

export const columns = [
  {
    accessorFn: (row: any) => row.assessmentDate,
    id: "assessmentDate",
    cell: (info: any) => info.getValue(),
    header: () => <span>Assessment Date</span>,
  },
  {
    accessorFn: (row: any) => row.assessmentLevel,
    id: "assessmentLevel",
    cell: (info: any) => info.getValue(),
    header: () => <span>Assessment Level</span>,
  },
  {
    accessorFn: (row: any) => row.duration,
    id: "duration",
    cell: (info: any) => info.getValue(),
    header: () => <span>Duration</span>,
  },
  {
    accessorFn: (row: any) => row.outcome,
    id: "outcome",
    cell: (info: any) => info.getValue(),
    header: () => <span>Outcome</span>,
  },
  {
    id: "actions",
    cell: (info: any) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <TableAction
          type="edit"
          onClicked={() =>
            router.push(
              `/foster-child/education-records/leisure-activities-hobby/leisure-activity/edit-leisure-activity?id=123`
            )
          }
        />
        <TableAction type="delete" onClicked={() => alert("delete")} />
        <TableAction
          type="view"
          onClicked={() =>
            router.push(
              `/foster-child/education-records/leisure-activities-hobby/leisure-activity/edit-leisure-activity?id=123`
            )
          }
        />
      </Box>
    ),
    header: () => <span>actions</span>,
    isSortable: false,
  },
];

export const IndependencePackData = [
  {
    assessmentDate: "06/12/2023",
    assessmentLevel: "Brozone",
    duration: "10 Days",
    outcome: "extra",
  },
  {
    assessmentDate: "06/12/2023",
    assessmentLevel: "Silver",
    duration: "10 Days",
    outcome: "extra",
  },
  {
    assessmentDate: "06/12/2023",
    assessmentLevel: "Gold",
    duration: "10 Days",
    outcome: "extra",
  },
];
export { default as IndependencePackTable } from "./independence-pack-table/IndependencePackTable";
