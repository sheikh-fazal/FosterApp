import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { DFormValidationSchema } from "./";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";

export const usePetQuestionnaireDFrom = ({
  onSubmitHandler,
  initialValueProps,
  message,
  isAdding,
}: any) => {

  const methods: any = useForm({
    resolver: yupResolver(DFormValidationSchema),
    defaultValues: initialValueProps,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  // Get id from url
  const router = useRouter();
  const query = router.query;
  const id = Object.keys(query)[0];

  const onSubmit = async (data: any) => {
    const formData = new FormData();

    formData.append("information1", data?.information1);
    formData.append("information2", data?.information2);
    formData.append("comments", data?.comments);
    formData.append("signature1", data?.signature1);
    formData.append("signature2", data?.signature2);
    formData.append("date1", data?.date1);
    formData.append("date2", data?.date2);

    const updatedData = {
      id,
      formData,
    };

    try {
      const res: any = await onSubmitHandler(updatedData).unwrap();
      enqueueSnackbar(
        res?.message ?? `Pet Questionnaire ${message} Successfully!`,
        {
          variant: "success",
        }
      );
      router.push("/carer-info/personal-info/pet-questionnaire");
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  return { methods, handleSubmit, isSubmitting, onSubmit }
};
