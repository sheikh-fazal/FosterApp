import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { AbsenceInfodefaultValues, formSchema } from ".";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  usePatchAbsenceInfoMutation,
  usePostAbsenceInfoMutation,
} from "@root/services/foster-child/education-records/absence-info/AbsenceInfoAPI";
export const useAbsenceInfoForm = (props: any) => {
  const router = useRouter();
  console.log(router, "router?.query");
  const { disabled, defaultValues } = props;
  console.log("defaultValues", defaultValues);
  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: defaultValues ?? AbsenceInfodefaultValues,
  });
  const {
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;
  const [postAbsenceInfoList] = usePostAbsenceInfoMutation();
  const [patchAbsenceInfoList] = usePatchAbsenceInfoMutation();
  const onSubmit = async (data: any) => {
    console.log(data);
    if (!!router?.query?.absence_info_id) {
      return patchAbsenceInfoFormHanlder(data);
    }

    // Post API of Absence Info
    try {
      const res: any = await postAbsenceInfoList(data).unwrap();
      router.push(
        `/foster-child/education-records/absence-info/add-absence-info?absence_info_id=${res?.id}`
      );
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  // Patch API of Absence Info
  const patchAbsenceInfoFormHanlder = async (data: any) => {
    const patchData = { body: data, id: router?.query?.absence_info_id };
    console.log(patchData);
    try {
      const res: any = await patchAbsenceInfoList(patchData).unwrap();
      console.log(res);
      if (
        router?.asPath.split("/").pop() === "view" ||
        router?.asPath.split("/").pop() === "edit"
      ) {
        router.push(
          `/foster-child/education-records/absence-info`
        );
      } else {
        router.push(
          `/foster-child/education-records/absence-info/add-absence-info?absence_info_id=${router?.query?.absence_info_id}`
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
    router,
    onSubmit,
    disabled,
    handleSubmit,
    methods,
    isSubmitting,
  };
};

// const router = useRouter();
// const theme: any = useTheme();
// const [isLoading, setIsLoading] = React.useState(true);
// const [isFetching, setIsFetching] = useState(false);
// const { disabled, defaultValues } = props;
// //API For Getting Single Details
// // const [getAllegationList] = useLazySingleAllegetionListQuery();
// //API For Posting Allegation Form
// // const [postAllegationDetails] = usePostAllegationListMutation();
// //API For Patch Allegation List
// // const [editAllegationList] = usePatchAllegationListMutation();

// //GET DEFAULT VALUE HANDLER
// const getDefaultValue = async () => {};
// const methods: any = useForm({
//   resolver: yupResolver(formSchema),
//   defaultValues: absenceInfoFormData,
// });
// const { handleSubmit } = methods;
// const onSubmit = async (data: any) => {
//   console.log("data", data);
// };
