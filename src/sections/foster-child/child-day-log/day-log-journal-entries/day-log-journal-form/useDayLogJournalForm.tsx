import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { DayLogFormValidation, defaultValuesDayLogForm } from ".";

export const useDayLogJournalForm = (props: any) => {
    const router = useRouter();
    const { disabled, defaultValues } = props;
    console.log("defaultValues", defaultValues);
    
    const methods: any = useForm({
        resolver: yupResolver(DayLogFormValidation),
        defaultValues: defaultValues ?? defaultValuesDayLogForm,
      });
    
      const {
        handleSubmit,
        formState: { errors, isSubmitting, isDirty },
      } = methods;
    
      const onSubmit = (data: any) => {
        console.log(data);
      };

  return (
    {
        methods, handleSubmit, onSubmit, router , disabled, isSubmitting 
    }
  )
}
