import { useForm } from "react-hook-form";
import { ActiveCarersContactFormDefaultValues } from ".";

export const useActiveCarersContactsForm = () => {
  const methods: any = useForm({
    defaultValues: ActiveCarersContactFormDefaultValues,
  });
  return {
    methods
  }
}