// form
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
// @mui
import { useTheme } from "@mui/material";

// ==========================================================================

export const usePanelChairForm = () => {
  let theme = useTheme();
  const router = useRouter();
  const methods: any = useForm({
    // resolver: yupResolver(FormSchema),
    // defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: any) => {
    console.log("data", data);
    reset();
  };

  return { theme, router, handleSubmit, isSubmitting, onSubmit, methods };
};