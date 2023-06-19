import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { addOtherDocumentData, addOtherDocumentFormSchema } from ".";

export const useAddOtherDocument = () => {
    const methods: any = useForm({
        resolver: yupResolver(addOtherDocumentFormSchema),
        defaultValues: addOtherDocumentData,
    });

    const {
        reset,
        control,
        register,
        setValue,
        handleSubmit,
        formState: { errors, isSubmitting, isDirty },
    } = methods;

    const onSubmit = () => {}

    return {
        methods,
        handleSubmit,
        onSubmit
    }
}