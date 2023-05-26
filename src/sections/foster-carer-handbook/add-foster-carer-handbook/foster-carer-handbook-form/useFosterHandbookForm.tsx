import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    FosterHandbookFormDataValues,
    FosterHandbookFormValidationSchema,
    FosterHandbookFormData,
} from ".";

export const useFosterHandbookForm = () => {
    const methods: any = useForm({
        resolver: yupResolver(FosterHandbookFormValidationSchema),
        defaultValues: FosterHandbookFormDataValues,
    });

    const { handleSubmit } = methods;

    const onSubmit = (data: any) => {
        console.log(data, "submitted data");
    };
    return {
        methods,
        handleSubmit,
        onSubmit,
        FosterHandbookFormData
    };
}
