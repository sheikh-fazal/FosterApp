import * as Yup from "yup";
export const EXPERIENCE = {
  title: "",
  employmentType: "",
  currentlyWorking: false,
  startDate: new Date(),
  endDate: new Date(),
  headline: "",
  industry: "",
  description: "",
}

export const AddFormValues = {
  companyName: "",
  location: "",
  media: "",
  experiences:[
    {
     ...EXPERIENCE
    }
  ]
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
    currentlyWorking:Yup.boolean().required("Current Working is Required"),
    startDate: Yup.date()
    .typeError("StartDate is required")
    .required("StartDate is required"),
    endDate:  Yup.date()
    .typeError("EndDate is required")
    .required("EndDate is required"),
    headline: Yup.string()
    .required("HeadLine is required"),
    industry: Yup.string()
    .required("Industry is required"),
    description: Yup.string()
    .required("Description is required"),
});


export const addExperienceForm = [
  {
    type: "text",
    name: "title",
    label: "Title",
  },
  {
    type: "text",
    name: "employmentType",
    label: "Employment Type",
  },
  {
    type: "text",
    name: "companyName",
    label: "Company Name",
  },
  {
    type: "text",
    name: "location",
    label: "Location",
  },
  {
    type: "checkbox",
    name: "currentlyWorking ",
    label: "I am currently working in this role",
    gridSize: { xs: 12 },
  },
  {
    type: "date",
    name: "startDate",
    label: "Start Date",
  },
  {
    type: "date",
    name: "endDate",
    label: "End Date",
  },
  {
    type: "textarea",
    name: "headline",
    label: "Headline",
    gridSize: { xs: 12 },
  },
  {
    type: "textarea",
    name: "industry",
    label: "Industry",
    gridSize: { xs: 12 },
  },
  {
    type: "textarea",
    name: "description",
    label: "Description",
    gridSize: { xs: 12 },
  },
  {
    type: "upload",
    name: "media",
    label: "Media",
  },
];
