import { useForm } from "react-hook-form";
import { AnnualReviewDefaultValues } from ".";

export const useAnnualReviewDataForm = () => {
  const methods: any = useForm({
    defaultValues: AnnualReviewDefaultValues,
  });
  return {
    methods
  }
}