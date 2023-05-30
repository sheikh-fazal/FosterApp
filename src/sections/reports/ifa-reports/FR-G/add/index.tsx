import SignaturePad from "@root/components/SignaturePad";
import { RHFRadioGroup, RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import Typography from "@root/theme/overrides/Typography";
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
    title: 'Name of foster carer',
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
    gridLength: 6,
    title: 'Date of review meeting',
    otherOptions: {
      name: 'dateOfReviewMeeting',
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
    title: 'Reviewing officer',
    otherOptions: {
      name: 'reviewingOfficer',
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
    title: 'Supervising social worker',
    otherOptions: {
      name: 'supervisingSocialWorker',
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
    title: 'Foster Carer(s)',
    otherOptions: {
      name: 'fosterCarer',
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
    title: 'Others',
    otherOptions: {
      name: 'others',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    head: 'Working with the supervising social worker/fostering service'
  },
  {
    gridLength: 12,
    title: 'FR-A: Supervising social worker',
    otherOptions: {
      name: 'supervisiingSocialWorker',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'FR-B: Foster Carer',
    otherOptions: {
      name: 'fosterCarer',
      options: [
        'When Undertaking a review, Regulation 28(3)(b) requires the fostering service to take into account the views of the foster carer(s)',
        'When Undertaking a review, Regulation 28(3)(b) requires the fostering service to take into account the views of the foster carer(s)'
      ],
      sx: { display: "flex", flexDirection:"column", gap: { xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'FR-C: Child/young person in the household',
    otherOptions: {
      name: 'youngPersonInHouseHold',
      options: [
        'Paragraph 5.68 of the statutory Guidance requires the fostering service to support the children of foster carers',
        'Paragraph 5.68 of the statutory Guidance requires the fostering service to support the children of foster carers'
      ],
      sx: { display: "flex", flexDirection:"column", gap: { xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'FR-D: Fostering child or young person',
    otherOptions: {
      name: 'fosteringChildOrYoungPerson',
      options: [
        'When Undertaking a review, Regulation 28(3)(b) requires the fostering service to take into account the views of any child placed with foster carers(Subject to age and understanding)',
        'When Undertaking a review, Regulation 28(3)(b) requires the fostering service to take into account the views of any child placed with foster carers(Subject to age and understanding)',
      ],
      sx: { display: "flex", flexDirection:"column", gap: { xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'FR-E: Childs social worker',
    otherOptions: {
      name: 'youngPersonInHouseHold',
      options: [
        'When Undertaking a review, Regulation 28(3)(b) requires the fostering service to take into account the views of the foster carer(s)',
        'When Undertaking a review, Regulation 28(3)(b) requires the fostering service to take into account the views of the foster carer(s)'
      ],
      sx: { display: "flex", flexDirection:"column", gap: { xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'FR-F: Additional Reports',
    otherOptions: {
      name: 'supervisiingSocialWorker',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'If any required reports are not available, please comment:',
    otherOptions: {
      name: 'whatFosterCarerHasDoneBetter',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    border: true
  },
  {
    gridLength: 12,
    title: 'DISCLAIMER: There is no legal requirement to update DBS checks or medicals after approval, but fostering services will usually have their own policies regarding the updating of these checks',

  },
  {
    gridLength: 12,
    title: 'DBS foster carers',
    otherOptions: {
      name: 'supervisiingSocialWorker',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'DBS householder members',
    otherOptions: {
      name: 'supervisiingSocialWorker',
      options: ['Yes', 'No', 'Not available'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'DBS non-householder members',
    otherOptions: {
      name: 'supervisiingSocialWorker',
      options: ['Yes', 'No', 'Not available'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Medical checks/updates',
    otherOptions: {
      name: 'supervisiingSocialWorker',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Other checks',
    otherOptions: {
      name: 'supervisiingSocialWorker',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'If any required checks are not available or issues have arisen from the checks, please comment:',
    otherOptions: {
      name: 'whatFosterCarerHasDoneBetter',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    border: true
  },
  {
    gridLength: 12,
    title: 'DISCLAIMER: Depending on the policy of the fostering service, the reviewing officer may be required to check other documents, such as:',

  },
  {
    gridLength: 12,
    title: 'Foster home safety check',
    otherOptions: {
      name: 'supervisiingSocialWorker',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Unannounced visit',
    otherOptions: {
      name: 'supervisiingSocialWorker',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'First safety plan',
    otherOptions: {
      name: 'supervisiingSocialWorker',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Family safer caring policy',
    otherOptions: {
      name: 'supervisiingSocialWorker',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Pet assesments',
    otherOptions: {
      name: 'supervisiingSocialWorker',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Smoking assesments',
    otherOptions: {
      name: 'supervisiingSocialWorker',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Personal development plan',
    otherOptions: {
      name: 'supervisiingSocialWorker',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Complete TSDS',
    otherOptions: {
      name: 'supervisiingSocialWorker',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    border: true
  },
  {
    gridLength: 12,
    title: 'Exemptions/placements outside terms of approvel',

  },
  {
    gridLength: 12,
    title: 'Were there any exemptions or placements outside the carers terms of approvel (unlowful placements)',
    otherOptions: {
      name: 'supervisiingSocialWorker',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'SUMMERY AND DISCUSSION',

  },
  {
    gridLength: 12,
    title: 'Impact of fostering',
    otherOptions: {
      name: 'whatFosterCarerHasDoneBetter',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'Needs of children',
    otherOptions: {
      name: 'whatFosterCarerHasDoneBetter',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'Working as a part of team',
    otherOptions: {
      name: 'whatFosterCarerHasDoneBetter',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'Carers own development (carer 1)',
    otherOptions: {
      name: 'whatFosterCarerHasDoneBetter',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'Carers own development (carer 2)',
    otherOptions: {
      name: 'whatFosterCarerHasDoneBetter',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'SUMMERY AND DISCUSSION',

  },
  {
    gridLength: 12,
    title: 'Summary',
    otherOptions: {
      name: 'whatFosterCarerHasDoneBetter',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'Changes to approval terms',
    otherOptions: {
      name: 'supervisiingSocialWorker',
      options: ['Are the carers current terms of approval appropriate', 'Are the carers current terms of approval unappropriate'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Recommendation',
    otherOptions: {
      name: 'whatFosterCarerHasDoneBetter',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    border: true
  },
  {
    gridLength: 12,
    title: 'Next Review meeting',
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
  {
    gridLength: 6,
    title: 'Time',
    otherOptions: {
      name: 'childDOB',
      fullWidth: true,
    },
    component: RHFDatePicker
  },
  {
    gridLength: 6,
    title: 'Signature',
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

export {default as AddAdultHouseHoldMember} from './AddReviewingOfficerReport'