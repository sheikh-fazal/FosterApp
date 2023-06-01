import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";
export const dummy = [
  {
    id: 1,
    hospitalName: "Hull Royal Infirmary",
    city: "East Raiding of Yorkshire",
  },
];
export const HospitalInfoListForm = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "hospitalName",
      label: "Hospital Name",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 12,
    label: "Contact details",
    component: "label",
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "contactdetails.commits",
      label: "Comments",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "contactdetails.TownCity",
      label: "Town/City",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "contactdetails.officePhone",
      label: "Office phone",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      name: "contactdetails.email",
      label: "Email",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      name: "contactdetails.county",
      label: "County",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      name: "contactdetails.country",
      label: "country",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      name: "contactdetails.postalCode",
      label: "postal code",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export const HospitalInfoListValue = {
  hospitalName: "",
  contactdetails: {
    commits: "",
    TownCity: "",
    officePhone: "",
    email: "",
    county: "",
    country: "",
    postalCode: "",
  },
};

export const FormSchema = Yup.object().shape({
  hospitalName: Yup.string().required("required"),
  contactdetails: Yup.object().shape({
    commits: Yup.string().required("required"),
    TownCity: Yup.string().required("required"),
    officePhone: Yup.string().required("required"),
    email: Yup.string().required("required"),
    county: Yup.string().required("required"),
    country: Yup.string().required("required"),
    postalCode: Yup.string().required("required"),
  }),
});
//upload document
export const formSchemaModel = Yup.object().shape({
  type: Yup.string().required("required"),
  documentDate: Yup.date().required("required"),
  password: Yup.string().required("required"),
});

export const UploadViewDocFormData = [
  {
    id: 2,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "type",
      label: "Document Type",
      select: true,
      options: [
        {
          value: "PDF",
          label: "PDF",
        },
        {
          value: "WORD",
          label: "WORD",
        },
      ],
    },
    component: RHFSelect,
  },
  {
    id: 3,
    componentProps: {
      name: "documentDate",
      label: "Date Of Enquiry",
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      name: "password",
      label: "Password to Open Document",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export const Formet: any = {};

for (const formControl of UploadViewDocFormData) {
  if (formControl.format)
    Formet[formControl.componentProps.name] = formControl.format;
}

///
export const uploadDummyData = [
  {
    srNo: "1",
    documentName: "zyz",
    type: "zyz",
    documentDate: "zyz",
    incidentId: "zyz",
    password: "zyz",
  },
];
