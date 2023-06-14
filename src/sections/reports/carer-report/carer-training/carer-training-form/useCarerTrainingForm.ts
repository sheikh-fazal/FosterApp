import { useForm } from "react-hook-form";
import { CarerTrainingFormDefaultValues } from ".";

export const useCarerTrainingForm = () => {
  const methods: any = useForm({
    defaultValues: CarerTrainingFormDefaultValues,
  });
  return {
    methods
  }
}