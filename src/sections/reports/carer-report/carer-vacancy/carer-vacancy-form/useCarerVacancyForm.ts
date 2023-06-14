import { useForm } from "react-hook-form";
import { CarerVacancyFormDefaultValues } from ".";

export const useCarerVacancyForm = () => {
  const methods: any = useForm({
    defaultValues: CarerVacancyFormDefaultValues,
  });
  return {
    methods
  }
}