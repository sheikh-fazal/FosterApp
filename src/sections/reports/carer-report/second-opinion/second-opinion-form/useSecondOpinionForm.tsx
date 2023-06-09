import { useForm } from "react-hook-form";
import { SecondOpinionFormDefaultValues } from ".";

export const usePermanentFosteringForm = () => {
  const methods: any = useForm({
    defaultValues: SecondOpinionFormDefaultValues,
  });
  return {
    methods
  }
}