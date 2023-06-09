import { useForm } from "react-hook-form";
import { PermanentFosteringFormDefaultValues } from ".";

export const usePermanentFosteringForm = () => {
  const methods: any = useForm({
    defaultValues: PermanentFosteringFormDefaultValues,
  });
  return {
    methods
  }
}