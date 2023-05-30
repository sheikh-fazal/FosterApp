import SignaturePad from "@root/components/SignaturePad";
import { RHFRadioGroup, RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from 'yup';

export const initialValues = {
  fosterCarer: 'foster carer',
  supervisingSocialWorker: 'social worker',
  fosterChildName: 'person name',
  childDOB: new Date(),
  likeAboutFostering: 'some text',
  fosterCarersHelpedYou: 'some text',
  fosterAnyThingDifferent: 'some text',
  socialWorkerAnyThingDifferent: 'some text',
  unhappyLivingWithYourCarers: 'some text',
  drawAPicture: 'some text',
};

export const formSchema = Yup.object().shape({
  fosterCarer: Yup.string().required('Field is required.'),
  supervisingSocialWorker: Yup.string().required('Field is required.'),
  fosterChildName: Yup.string().required('Field is required.'),
  childDOB: Yup.string().required('Field is required.'),
  likeAboutFostering: Yup.string().required('Field is required.'),
  fosterCarersHelpedYou: Yup.string().required('Field is required.'),
  fosterAnyThingDifferent: Yup.string().required('Field is required.'),
  socialWorkerAnyThingDifferent: Yup.string().required('Field is required.'),
  unhappyLivingWithYourCarers: Yup.string().required('Field is required.'),
  drawAPicture: Yup.string().required('Field is required.'),
})

export const FRD1FormData = [
  {
    gridLength: 6,
    title: "Name of foster carer",
    otherOptions: {
      name: 'name',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    title: 'Date of review',
    otherOptions: {
      name: 'childDOB',
      fullWidth: true,
    },
    component: RHFDatePicker
  },
  {
    gridLength: 6,
    title: 'Date of panel (if appilcable)',
    otherOptions: {
      name: 'childDOB',
      fullWidth: true,
    },
    component: RHFDatePicker
  },
  {
    gridLength: 6,
    title: 'Relationship to Child',
    otherOptions: {
      name: 'relationshipToChild',
      fullWidth: true,
      select: true,
      options: [
        { value: 'select 1', label: 'select 1' },
        { value: 'select 2', label: 'select 2' },
        { value: 'select 3', label: 'select 3' },
      ],
    },
    component: RHFSelect
  },
  {
    gridLength: 6,
    title: 'Name of Decision maker',
    otherOptions: {
      name: 'nameOfFosterCarer',
      fullWidth: true,
      select: true,
      options: [
        { value: 'select 1', label: 'select 1' },
        { value: 'select 2', label: 'select 2' },
        { value: 'select 3', label: 'select 3' },
      ],
    },
    component: RHFSelect
  },
  {
    gridLength: 12,
    title: 'Foster home review consisting of form-A-H (where applicable)',
    otherOptions: {
      name: 'informationAboutComplaint',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Fostering panel minutes',
    otherOptions: {
      name: 'informationAboutComplaint',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Other material that was available at the time of the review (if yes, please list)',
    otherOptions: {
      name: 'informationAboutComplaint',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Comments',
    otherOptions: {
      name: 'whatFosterCarerHasDone',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'I agree with the process and approach of the review (including panel where applicable), am satisfied as its fairness, satisfied that the arguments have been properly addressed:',
    otherOptions: {
      name: 'informationAboutComplaint',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Comments',
    otherOptions: {
      name: 'whatFosterCarerHasDone',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'I have considered additional material that was not available at the time of the review (and panel if applicable)',
    otherOptions: {
      name: 'informationAboutComplaint',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Comments',
    otherOptions: {
      name: 'whatFosterCarerHasDone',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'Reasons of decision',
    otherOptions: {
      name: 'whatFosterCarerHasDone',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'Advice to fostering service',
    otherOptions: {
      name: 'whatFosterCarerHasDone',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    title: 'Signed by decision maker',
    otherOptions: {
      name: 'childDOB',
    },
    component: SignaturePad
  },
  {
    gridLength: 6,
    title: 'Date',
    otherOptions: {
      name: 'childDOB',
      fullWidth: true,
    },
    component: RHFDatePicker
  },
]

export {default as AddAdultHouseHoldMember} from './AddDecisionMaker'