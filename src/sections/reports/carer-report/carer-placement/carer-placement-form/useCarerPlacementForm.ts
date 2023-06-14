import { useForm } from "react-hook-form";
import { CarerPlacementDefaultValues } from ".";

export const usePermanentFosteringForm = () => {
  const methods: any = useForm({
    defaultValues: CarerPlacementDefaultValues,
  });
  return {
    methods
  }
}