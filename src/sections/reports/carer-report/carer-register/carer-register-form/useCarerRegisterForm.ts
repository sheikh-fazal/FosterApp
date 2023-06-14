import { useForm } from "react-hook-form";
import { CarerRegisterFormDefaultValues} from ".";

export const useCarerRegisterForm = () => {
  const methods: any = useForm({
    defaultValues: CarerRegisterFormDefaultValues,
  });
  return {
    methods
  }
}