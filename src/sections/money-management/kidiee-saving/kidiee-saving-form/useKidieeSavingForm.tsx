// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/router";
// import { enqueueSnackbar } from "notistack";
// import { kidieeSavingtValidation } from ".";
// import {
//   usePatchKidieeSavingMutation,
//   usePostKidieeSavingMutation,
// } from "@root/services/money-management/kidiee-saving/KidieeSavingAPI";

// export const useKidieeSavingForm = (props: any) => {
//   const router = useRouter();
//   console.log(router, "my router dfssgdfgdsgsdfg");
//   const { disabled, defaultValues } = props;

//   const methods: any = useForm({
//     resolver: yupResolver(kidieeSavingtValidation),
//     defaultValues: defaultValues,
//   });

//   const {
//     handleSubmit,
//     formState: { errors, isSubmitting, isDirty },
//   } = methods;

//   const [postKidieeSaving] = usePostKidieeSavingMutation();
//   const [patchKidieeSaving] = usePatchKidieeSavingMutation();

//   const onSubmit = async (data: any) => {
//     console.log(data);
//     if (!!router?.query?.kidiee_saving_id) {
//       return patchEHCPHanlder(data);
//     }

//     // Post KidieeSaving API
//     try {
//       const res: any = await postKidieeSaving(data).unwrap();
//       console.log(res);
//       router.push(
//         `/money-management/delete-kidiee-saving?fosterChildId=${router?.query?.fosterChildId}&kidiee_saving_id=${res?.id}`
//       );
//       enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
//         variant: "success",
//       });
//     } catch (error: any) {
//       const errMsg = error?.data?.message;
//       enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
//     }
//   };
//   // Patch KidieeSaving API
//   const patchEHCPHanlder = async (data: any) => {
//     const patchData = { body: data, id: router?.query?.kidiee_saving_id };
//     console.log(patchData);

//     try {
//       const res: any = await patchKidieeSaving(patchData).unwrap();
//       console.log(res);
//       router.push(
//         `/money-management/delete-kidiee-saving?fosterChildId=${router?.query?.fosterChildId}&kidiee_saving_id=${router?.query?.kidiee_saving_id}`
//       );
//       enqueueSnackbar(res?.message ?? `Details Updated Successfully`, {
//         variant: "success",
//       });
//     } catch (error: any) {
//       const errMsg = error?.data?.message;
//       enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
//     }
//   };
//   return {
//     methods,
//     handleSubmit,
//     onSubmit,
//     disabled,
//     router,
//     isSubmitting,
//   };
// };

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { defaultValueskidieeSaving, kidieeSavingtValidation } from ".";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import {
  usePatchKidieeSavingMutation,
  usePostKidieeSavingMutation,
} from "@root/services/money-management/kidiee-saving/KidieeSavingAPI";

export const useKidieeSavingForm = (props: any) => {
  const router = useRouter();
  console.log(router, "router?.query");

  const { disabled, defaultValues } = props;
  console.log("defaultValues", defaultValues);

  const methods: any = useForm({
    resolver: yupResolver(kidieeSavingtValidation),
    defaultValues: defaultValues ?? defaultValueskidieeSaving,
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting, ioisDirty },
  } = methods;

  const [postKidieeSaving] = usePostKidieeSavingMutation();
  const [patchKidieeSaving] = usePatchKidieeSavingMutation();

  const onSubmit = async (data: any) => {
    console.log(data);

    if (!!router?.query?.kidiee_saving_id) {
      return patchKidieeSavingHandler(data);
    }

    // Post API of Kidiee Saving
    try {
      const res: any = await postKidieeSaving(data).unwrap();
      console.log(res);

      router.push(
        `/money-management/delete-kidiee-saving?fosterChildId=${router?.query?.fosterChildId}&kidiee_saving_id=${res?.id}`
      );
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  // Patch API of Kidiee Saving
  const patchKidieeSavingHandler = async (data: any) => {
    const patchData = { body: data, id: router?.query?.kidiee_saving_id };
    console.log(patchData);

    try {
      const res: any = await patchKidieeSaving(patchData).unwrap();
      console.log(res);
      if (
        router?.asPath.split("/").pop() === "view" ||
        router?.asPath.split("/").pop() === "edit"
      ) {
        router.push(`/money-management/delete-kidiee-saving`);
      } else {
        router.push(
          `/money-management/delete-kidiee-saving?fosterChildId=${router?.query?.fosterChildId}&kidiee_saving_id=${router?.query?.kidiee_saving_id}`
        );
      }
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
