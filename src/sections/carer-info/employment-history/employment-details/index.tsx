import * as Yup from "yup";

export const AddFormValues = {
  title: "",
  employmentType: "",
  companyName: "",
  location: "",
  startDate: "",
  endDate: "",
  headline: "",
  industry: "",
  description: "",
  media: "",
};

export const AddFormSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
    employmentType: Yup.string()
    .required("Employment Type is required"),
    companyName: Yup.string()
    .required("Company Name is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
    location: Yup.string()
    .required("Location is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
    startDate: Yup.string()
    .required("Start Date is required"),
    endtDate: Yup.string()
    .required("End Date is required"),
    headline: Yup.string()
    .required("HeadLine is required"),
    industry: Yup.string()
    .required("Industry is required"),
    description: Yup.string()
    .required("Description is required"),
});

