import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import * as Yup from 'yup';

export const initialValues = {
  docType: '',
  docDate: '',
  updatePhoto: ''
}
export const addOtherDocumentFormSchema = Yup.object().shape({
  docType: Yup.string().required('Field is required'),
  docDate: Yup.date().required('Field is required'),
  updatePhoto: Yup.string().required('Field is required')
})
export const addOtherDocumentData = [
  {
    gridLength: 12,
    title: 'Document Type',
    otherOptions: {
      size: 'small',
      name: 'docType',
      fullWidth: true,
      select: true,
      options: [{ value: 'value', label: 'label' }]
    },
    component: RHFSelect
  },
  {
    gridLength: 12,
    title: 'Document Date',
    otherOptions: {
      name: 'docDate',
      size: 'small',
      fullWidth: true,
    },
    component: RHFDatePicker
  },
]