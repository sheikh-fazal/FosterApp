import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFSelectWithCheckbox from "./SelectWithCheckbox";

export const validationSchema = {};

export const initialValues = {};

export const formData = [
  {
    gridLength: 6,
    otherOptions: {
      name: "meetingDate",
      label: "Meeting Date",
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Meeting Attendees",
      name: "meetingAttendees",
      options: ["kevin john (SSW)", "robert davin (SSW)"],
    },
    component: RHFSelectWithCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "meetingAgenda",
      label: "Meeting Agenda",
      options: ["kevin john (SSW)", "robert davin (SSW)"],
    },
    component: RHFSelectWithCheckbox,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "meetingActions",
      label: "Meeting Actions",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "meetingOutcome",
      label: "Meeting Outcome",
      select: true,
      options: [{ value: "agreed", label: "agreed" }],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "meetingCoordinator",
      label: "Meeting Co-ordinator",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "meetingManager",
      label: "Meeting Manager",
    },
    component: RHFTextField,
  },
];
