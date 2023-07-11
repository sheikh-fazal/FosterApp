import { Grid } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const SelectSupervisingSocialWorkerData = [
  {
    id: 1,
    componentProps: {
      name: "supervisingSocialWorker",
      label: "Supervising Social Worker",
      fullWidth: true,
      select: true,
    //   sx: { mb: 1 },
    },
    options: [
        { value: "fosterCarer", label: "Foster Carer" },
        { value: "childCarer", label: "Child Carer" },
      ],
      component: RHFSelect,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "registeredManger",
      label: "Registered Manger",
      fullWidth: true,
      select: true,
      size: "small",
    //   sx: { mb: 1 },
    },
    options: [
        { value: "fosterType", label: "Foster Type" },
        { value: "fosterType", label: "Foster Type" },
      ],
      component: RHFSelect,
    md: 6,
  },

  {
    id: 3,
    gridLength: 6,
    componentProps: {
      name: "responsibleIndividual",
      label: "Responsible Individual",
      fullWidth: true,
      select: true,
    //   sx: { mb: 1.5 },
    },
    options: [
      { value: "fosterType", label: "Foster Type" },
      { value: "fosterType", label: "Foster Type" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
    },
    component: Grid,
    md: 6,
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      name: "director",
      label: "Director",
      fullWidth: true,
    },
    component: RHFTextField,
    md: 6,
  },
  
];

export const SelectSupervisingSocialWorkerDefaultValues = {
  supervisingSocialWorker: "",
  registeredManger: "",
  responsibleIndividual: "",
  director: "",
 
};

export const SelectSupervisingSocialWorkerValidationSchema = Yup.object().shape({
  supervisingSocialWorker: Yup.string().trim().required("Field is Required"),
  registeredManger: Yup.string().trim().required("Field is Required"),
  responsibleIndividual: Yup.string().trim().required("Field is Required"),
  director: Yup.string().trim().required("Field is Required"),
});

export { default as SelectSupervisingSocialWorker } from "./SelectSupervisingSocialWorker";
