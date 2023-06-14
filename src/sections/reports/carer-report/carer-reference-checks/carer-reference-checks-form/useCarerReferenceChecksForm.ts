import { useForm } from "react-hook-form";
import { CarerReferenceCheckDefaultValues } from ".";

export const useCarerReferenceChecksForm = () => {
  const methods: any = useForm({
    defaultValues: CarerReferenceCheckDefaultValues,
  });
  return {
    methods
  }
}