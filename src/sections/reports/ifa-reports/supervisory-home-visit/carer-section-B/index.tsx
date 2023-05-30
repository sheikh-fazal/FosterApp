import { RHFTextField } from "@root/components/hook-form";

export const CarerSectionBDefultValue = {
  childrenCaring: "Text",
  workingTeam: "Text",
  traningPersonalDevelopment: "Text",
  carerPersonalIssues: "Text",
  agencyIssues: "Text",
  ProvidingSafeCareIssues: "Text",
};

export const CarerSectionBFromDate = [
  {
    gridLength: 12,
    title: "Caring of Children",
    componentProps: {
      name: "childrenCaring",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: "Working as part of a team",
    componentProps: {
      name: "workingTeam",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: "Training & Personal Development",
    componentProps: {
      name: "traningPersonalDevelopment",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: "Carer Personal Issues",
    componentProps: {
      name: "carerPersonalIssues",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: "Agency Issues",
    componentProps: {
      name: "agencyIssues",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: "Providing a Safe Environment / Safe Care Issues",
    componentProps: {
      name:"ProvidingSafeCareIssues",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
];
