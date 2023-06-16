import { usePostPepClaDocumentationListMutation } from "@root/services/foster-child/child-background-info/cla-documentation-list/CLADocumentationListAPI";
import { enqueueSnackbar } from "notistack";
import { PEPFormValidation, defaultValuesForPep } from "..";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export const usePepFom = (props: any) => {
  const router = useRouter();
  const { disabled, defaultValues } = props;
  console.log("Form default values: ", defaultValuesForPep);
  console.log("API default values: ", defaultValues);

  const methods: any = useForm({
    resolver: yupResolver(PEPFormValidation),
    defaultValues: defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const [postPepClaDocumentationList] =
    usePostPepClaDocumentationListMutation();

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      const res: any = await postPepClaDocumentationList(data).unwrap();
      console.log(res);
      router.push(`/foster-child/child-background-info/cla-documentation`);
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    disabled,
    router,
    isSubmitting,
  };
};
