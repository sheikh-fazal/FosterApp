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
import dayjs from "dayjs";
// utils

// ----------------------------------------------------------------------
let titleCase = (string: any) => {
  return string?.charAt(0).toUpperCase() + string?.slice(1).toLowerCase();
};

export const columns = [
  {
    accessorFn: (row: any) => row.assessmentDate,
    id: "assessmentDate",
    cell: (info: any) => info.getValue(),
    header: () => <span>Assessment Date</span>,
  },
  {
    accessorFn: (row: any) => row.medalLevel,
    id: "medalLevel",
    cell: (info: any) => titleCase(info.getValue()),
    header: () => <span>Assessment Level</span>,
  },
  {
    accessorFn: (row: any) => row.duration,
    id: "duration",
    cell: (info: any) => {
      return `${dayjs(
        dayjs(info.row.original.toDate).format("YYYY-DD-MM")
      ).diff(
        dayjs(info.row.original.fromDate).format("YYYY-DD-MM"),
        "days"
      )} Days`;
    },
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
            console.log("info", titleCase(info?.row?.original?.medalLevel))
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
