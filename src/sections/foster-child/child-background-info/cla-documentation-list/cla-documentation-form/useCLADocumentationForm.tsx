// import { useRouter } from 'next/router'
// import React from 'react'

// export const useCLADocumentationForm = () => {
//   const router = useRouter();
//   const submitGpDetailsInfoForm = async (data: any) => {
//     const putDataParameter = { body: data };
//     // if(!!query?.gpInfoId) {
//     //   patchGpDetailsInfoForm(data);
//     //   return;
//     // }
//     try {
//       const res: any = await postGpDetailsInfoDataTrigger(
//         putDataParameter
//       ).unwrap();
//       console.log(res)
//       router.push(
//         `/foster-child/health-medical-history/gp-details/gp-details-info/${res?.data?.id}`
//       )
//       enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
//         variant: "success",
//       });
//     } catch (error: any) {
//       const errMsg = error?.data?.message;
//       enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
//     }
//   };
//   return(
//     router,
//     submitGpDetailsInfoForm
//   )
// }
