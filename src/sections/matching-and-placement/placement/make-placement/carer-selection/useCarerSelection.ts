import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { carerSelectionSchema } from ".";

export const useCarerSelection = () => {
  const theme = useTheme();
 

  const methods: any = useForm({
    resolver: yupResolver(carerSelectionSchema),
    defaultValues: { selectCarer: "" },
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
