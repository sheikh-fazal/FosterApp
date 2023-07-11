import { RHFSelect } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const SelectPlacementData = [
  {
    id: 1,
    componentProps: {
      name: "placementType",
      label: "Placement Type",
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
      name: "paymentType",
      label: "Payment Type",
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
      name: "startDate",
      label: "Start Date",
      fullWidth: true,
    //   sx: { mb: 1.5 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      name: "endDate",
      label: "End Date",
      fullWidth: true,
    //   sx: { mb: 1.5 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 5,
    gridLength: 6,
    componentProps: {
      name: "duration",
      label: "Duration",
      fullWidth: true,
      sx: { mb: 1.5 },
    },
    component: RHFDatePicker,
    md: 6,
  },
];

export const SelectPlacementDefaultValues = {
  placementType: "",
  paymentType: "",
  startDate: "",
  endDate: "",
  duration: "",
};

export const SelectPlacementValidationSchema = Yup.object().shape({
  placementType: Yup.string().trim().required("Field is Required"),
  paymentType: Yup.string().trim().required("Field is Required"),
  startDate: Yup.string().trim().required("Field is Required"),
  endDate: Yup.string().trim().required("Field is Required"),
  duration: Yup.string().trim().required("Field is Required"),
});

export { default as SelectPlacementType } from "./SelectPlacementType";
