import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  FormData,
  FormDataValues,
  FormValidationSchema,
} from ".";
import { usePostThirdPartyLicenceDataMutation } from "@root/services/system-admin/third-party-licence/thirdPartyLicence";

export const useThirdPartyLicenceTableForm = () => {
  const [postThirdPartyLicenceDataTrigger, postThirdPartyLicenceDataStatus] =
  usePostThirdPartyLicenceDataMutation();

  const methods: any = useForm({
    resolver: yupResolver(FormValidationSchema),
    defaultValues: FormDataValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data, "submitted data");
  };
  return {
    methods,
    FormData,
    handleSubmit,
    onSubmit,
  };
};
