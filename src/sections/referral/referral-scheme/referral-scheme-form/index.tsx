import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

// Styles
const styles = {
  marginBottom: {
     marginBottom: "20px !important",
  },
};

export const ReferralSchemeForm = [
    {
      id: 1,
      title:"Referral Type",
      componentProps: {
        name: "referralType",
        select:true,
        sx: styles.marginBottom,
      },
      options:[{ label: "Foster Carer", value: "Foster_Carer" },{ label: "Foster Child", value: "Foster_Cild" },{ label: "Social Worker", value: "Social_Worker" },{ label: "Other", value: "other" }],
      component: RHFSelect,
      md: 6,
    },
    {
      id: 2,
      title:"Fostering Type",
      componentProps: {
        name: "fosteringType",
        select:true,
        sx: styles.marginBottom,
      },
      options:[{ label: "Permanent", value: "Permanent" }],
      component: RHFSelect,
      md: 6,
    },
    {
      id: 3,
      title:"Referral Bonus",
      componentProps: {
        name: "referralBonus",
        sx: styles.marginBottom,
      },
      component: RHFTextField,
      md: 6,
    },
    {
        id: 4,
        title:"Branch Name",
        componentProps: {
          name: "branchName",
          select:true,
          sx: styles.marginBottom,
        },
        options:[{ label: "Scot Fostering", value: "Scot_Fostering" },{ label: "Gofal Fostering", value: "Gofal_Fostering" }],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 5,
        title:"Description",
        componentProps: {
          name: "description",
          multiline: true,
          minRows: 3,
          sx: styles.marginBottom,
        },
        component: RHFTextField,
        md: 12,
      },

  ];
  
  export const defaultValues = {
    referralType: "",
    fosteringType: "",
    referralBonus: "",
    branchName: "",
    description: "",
  };
  
  export const ReferralSchemeValidationSchema = Yup.object().shape({
      referralType: Yup.string().trim().required("Field is Required"),
      fosteringType: Yup.string().trim().required("Field is Required"),
      referralBonus: Yup.string().trim().required("Field is Required"),
      branchName: Yup.string().trim().required("Field is Required"),
  });

  export { default as ReferralSchemeAddForm } from "./ReferralSchemeForm";



