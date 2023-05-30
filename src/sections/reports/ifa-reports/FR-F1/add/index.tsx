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
    title: 'Name',
    otherOptions: {
      name: 'name',
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
    title: 'Position',
    otherOptions: {
      name: 'position',
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
    title: "Name of child/children",
    otherOptions: {
      name: 'nameOfChild',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    title: 'Name of foster carer',
    otherOptions: {
      name: 'name',
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
    title: 'Briefly describe your role with the child/children and foster carer, including the nature and frequency of contact.',
    otherOptions: {
      name: 'roleWithChildAndFosterCarer',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'How has the foster carer met the health/education/other needs of the child/children in placement?',
    otherOptions: {
      name: 'fosterCarersHelped',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'Please comment on the strengths of the foster carer',
    otherOptions: {
      name: 'strengthsOFTheFosterCarer',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'Please comment on any limitations of the foster carer on their household. Do you believe that there are areas where the carer could benefit from additional advice or training?',
    otherOptions: {
      name: 'forsterCarerLimitations',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'How well has the foster carer communicated with you/your organization?',
    otherOptions: {
      name: 'fosterCarersCommunication',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'Is there anything else you would like to say?',
    otherOptions: {
      name: 'anythingElse',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    title: 'Name of Foster carer',
    otherOptions: {
      name: 'childDOB',
    },
    component: SignaturePad
  },
  {
    gridLength: 6,
    title: 'Name of Foster carer',
    otherOptions: {
      name: 'childDOB',
      fullWidth: true,
    },
    component: RHFDatePicker
  },
]

export {default as AddOtherProfessionals} from './AddOtherProfessionals'