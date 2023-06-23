import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { familyFormListValidation } from ".";
import { useRouter } from "next/router";
import { usePostFamilyPersonListMutation } from "@root/services/foster-child/child-background-info/family-person-list/FamilyPersonListAPI";
import { enqueueSnackbar } from "notistack";

export const useFamilyOrgInvolvedForm = (props: any) => {
  const router = useRouter();

  const { disabled, defaultValues } = props;

  const methods: any = useForm({
    resolver: yupResolver(familyFormListValidation),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const [postFamilyPersonList] = usePostFamilyPersonListMutation();

  const onSubmit = async (data: any) => {
    console.log(data);

    // Post API of Family Person List
    try {
      const res: any = await postFamilyPersonList(data).unwrap();
      router.push(
        `/foster-child/child-background-info/family-person-org-involved`
      );
      enqueueSnackbar(res?.message ??  `Details Submitted Successfully`, {
        variant: "success",
      } )
    } catch (error: any) {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return {
    methods,
    disabled,
    handleSubmit,
    onSubmit,
    router,
    isSubmitting,
  };
};
