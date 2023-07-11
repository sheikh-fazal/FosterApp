import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { initialValues, validationSchema } from ".";
import { useRouter } from "next/router";

export const useMarketingPlanMeetingForm = () => {

    const router = useRouter();
    const handleBack = () => router.push('/marketing/plan-meetings')

    const methods: any = useForm({
        resolver: yupResolver(Yup.object().shape(validationSchema)),
        defaultValues: initialValues,
    });

    const {
        reset,
        control,
        register,
        setValue,
        handleSubmit,
        formState: { errors, isSubmitting, isDirty },
    } = methods

    const onSubmit = (data: any) => {
        console.log(data);

    };

    return {
        methods,
        handleSubmit,
        onSubmit,
        handleBack
    }
}