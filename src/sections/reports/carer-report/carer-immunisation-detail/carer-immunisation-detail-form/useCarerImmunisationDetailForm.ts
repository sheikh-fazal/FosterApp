import { useForm } from "react-hook-form";
import { CarerImmunisationDetailDefaultValues } from ".";

export const useCarerImmunisationDetailForm = () => {
  const methods: any = useForm({
    defaultValues: CarerImmunisationDetailDefaultValues,
  });
  return {
    methods
  }
}