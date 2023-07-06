import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { familyFormListValidation } from ".";
import { useRouter } from "next/router";
import {
  usePatchFamilyPersonListMutation,
  usePostFamilyPersonListMutation,
} from "@root/services/foster-child/child-background-info/family-person-list/FamilyPersonListAPI";
import { enqueueSnackbar } from "notistack";

export const useFamilyOrgInvolvedForm = (props: any) => {
  const router = useRouter();

  const { disabled, defaultValues } = props;
  console.log("defaultValues", defaultValues);

  const methods: any = useForm({
    resolver: yupResolver(familyFormListValidation),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const [postFamilyPersonList] = usePostFamilyPersonListMutation();
  const [patchFamilyPersonList] = usePatchFamilyPersonListMutation();

  const onSubmit = async (data: any) => {
    console.log(data);

    if (!!router?.query?.family_person_id) {
      return patchFamilyPersonFormHanlder(data);
    }

    // Post API of Family Person List
    try {
      const res: any = await postFamilyPersonList(data).unwrap();
      router.push(
        `/foster-child/child-background-info/family-person-org-involved`
      );
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  // Patch API of Family Person Liat
  const patchFamilyPersonFormHanlder = async (data: any) => {
    const patchData = { body: data, id: router?.query?.family_person_id};
    console.log(patchData);

    try {
      const res: any = await patchFamilyPersonList(patchData).unwrap();
      console.log(res);
      router.push(
        `/foster-child/child-background-info/family-person-org-involved`
      );
      enqueueSnackbar(res?.message ?? `Details Updated Successfully`, {
        variant: "success",
      });
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
