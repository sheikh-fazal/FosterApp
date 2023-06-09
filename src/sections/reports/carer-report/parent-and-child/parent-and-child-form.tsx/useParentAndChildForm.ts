import { useForm } from "react-hook-form";
import { ParentAndChildFormDefaultValues } from ".";

export const useParentAndChildForm = () => {
  const methods: any = useForm({
    defaultValues: ParentAndChildFormDefaultValues,
  });
  return {
    methods
  }
}