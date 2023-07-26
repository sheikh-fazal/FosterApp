import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const dummy = [
  {
    id: 1,
    fromdate: "01/04/2021",
    todate: "19/04/2021",
    reason: "Out of City",
    comment: "nil",
  },
];
export const ChildHolidayPreferenceData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "fromDate",
      label: "From Date",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "toDate",
      label: "To Date",
      multiline: false,
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "reasonForHoliday",
      label: "Reason for Holiday",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      name: "contactDetailsDuringHoliday",
      label: "Contact Details during Holidays",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },

  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "anycomments",
      label: "Any Comments",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export const ChildHolidayPreferenceValue = {
  fromDate: new Date(),
  toDate: new Date(),
  reasonForHoliday: "",
  contactDetailsDuringHoliday: "",
  anycomments: "",
};
export const FormSchema = Yup.object().shape({
  fromDate: Yup.date().required("required"),
  toDate: Yup.date().required("required"),
  reasonForHoliday: Yup.string().required("required"),
  contactDetailsDuringHoliday: Yup.string().required("required"),
  anycomments: Yup.string().required("required"),
});
