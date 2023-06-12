import { Box, Checkbox, Rating } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import * as Yup from "yup";
import router from "next/router";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import Image from "next/image";

import documentIcon from "../../../../assets/img/ifaAvatar.png";
import RHFTimePicker from "@root/components/hook-form/RHFTimePicker";
import { RHFUploadFile } from "@root/sections/carer-info/personal-info/application-form/basic-information/RHFUploadFile";
import RHFRating from "./RHFRtaing";
// utils

// ----------------------------------------------------------------------

export const defaultValues = {
  typesofHobbies: "",
  description: "",
  date: new Date(),
  uploadImage: null,
  time: "",
  rewards: "",
};

export const FormSchema = Yup.object().shape({
  typesofHobbies: Yup.string().required("Field is required"),
  description: Yup.string().required("Field is required"),
  time: Yup.string().required("Field is required"),
  rewards: Yup.string().required("Field is required"),
  date: Yup.date().required("Date of Interview is required"),
});
export const formData = [
  {
    gridLength: 6,
    otherOptions: {
      name: "typesofHobbies",
      label: "Types of Hobbies",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "Description",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },

  {
    gridLength: 6,
    otherOptions: {
      name: "date",
      label: "Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "time",
      label: "Time",
      fullWidth: true,
    },
    component: RHFTimePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "uploadImage",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "rewards",
      label: "Rewards / Stars / Stickers",
      fullWidth: true,
      sx: {
        "& .MuiRating-iconFilled": {
          color: "#0E918C",
        },
        "& .MuiRating-iconHover": {
          color: "#0E918C",
        },
      },
      size: "lg",
    },
    component: RHFRating,
  },
];

export const columns = [
  {
    accessorFn: (row: any) => row.typesofHobbies,
    id: "typesofHobbies",
    cell: (info: any) => info.getValue(),
    header: () => <span>Types of Hobbies</span>,
  },
  {
    accessorFn: (row: any) => row.description,
    id: "description",
    cell: (info: any) => info.getValue(),
    header: () => <span>Description</span>,
  },
  {
    accessorFn: (row: any) => row.date,
    id: "date",
    cell: (info: any) => info.getValue(),
    header: () => <span>Date</span>,
  },
  {
    accessorFn: (row: any) => row.time,
    id: "time",
    cell: (info: any) => info.getValue(),
    header: () => <span>Time</span>,
  },
  {
    accessorFn: (row: any) => row.uploadPicture,
    id: "uploadPicture",
    cell: (info: any) => (
      <Box
        sx={{ cursor: "pointer", display: "flex", justifyContent: "center" }}
      >
        <Image width={35} src={info.getValue()} alt="Document" />
      </Box>
    ),
    header: () => <span>Upload Picture/Video</span>,
  },
  {
    accessorFn: (row: any) => row.reward,
    id: "reward",
    cell: (info: any) => (
      <Rating
        sx={{
          "& .MuiRating-iconFilled": {
            color: "#0E918C",
          },
        }}
        name="read-only"
        value={info.getValue()}
        readOnly
      />
    ),
    header: () => <span>Reward/Stars</span>,
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

export const CarerAddressHistoryTableData = [
  {
    typesofHobbies: "Cricket",
    description: "xyz",
    date: "08/06/2024",
    time: "12:25:15",
    uploadPicture: documentIcon,
    reward: 5,
  },
  {
    typesofHobbies: "Football",
    description: "xyz",
    date: "08/06/2024",
    time: "12:25:15",
    uploadPicture: documentIcon,
    reward: 3,
  },
  {
    typesofHobbies: "Hockey",
    description: "xyz",
    date: "08/06/2024",
    time: "12:25:15",
    uploadPicture: documentIcon,
    reward: 1,
  },
];
export { default as LeisureActivitiesTable } from "./LeisureActivitiesTable";
