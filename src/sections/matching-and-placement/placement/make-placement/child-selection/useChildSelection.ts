import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { childSelectionSchema } from ".";

export const useChildSelection = () => {
  const theme = useTheme();
 

  const methods: any = useForm({
    resolver: yupResolver(childSelectionSchema),
    defaultValues: { selectFosterCarerPendingPayment: "" },
  });

  const { handleSubmit } = methods;
  

  const onSubmit = () => {};

  return {
    methods,
    handleSubmit,
    onSubmit,
    theme
  };
};
