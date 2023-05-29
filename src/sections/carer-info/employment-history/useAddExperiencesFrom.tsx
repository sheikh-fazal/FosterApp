import { useExperienceMutation } from "@root/services/carer-info/employment-history/employnmentDetailsApi";
import { enqueueSnackbar } from "notistack";

export const useAddExperiencesFrom = () => {
    const [addExperiences, { isLoading }] = useExperienceMutation();

  const submitAddExperiencesForm = async (FORMDATA: any) => {
    try {
        const res: any = await addExperiences(FORMDATA).unwrap();
        if (res) {
          enqueueSnackbar(res?.message ?? "Experience Added!", {
            variant: "success",
          });
        }
      } catch (error: any) {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      }
    
  };

  return { submitAddExperiencesForm };
};
