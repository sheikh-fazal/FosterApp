import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { CFormValidationSchema } from '.';
import { useRouter } from 'next/router';
import { enqueueSnackbar } from 'notistack';

export const usePetQuestionnaireCFrom = ({
    onSubmitHandler,
    initialValueProps,
    message,
}: any) => {
    const methods: any = useForm({
        resolver: yupResolver(CFormValidationSchema),
        defaultValues: initialValueProps,
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    // Get id from url
    const router = useRouter();
    const query = router.query;
    const id = Object.keys(query)[0];

    const onSubmit = async (data: any) => {
        const formData = new FormData();

        formData.append("socialWorkerObservations", data?.socialWorkerObservations);
        formData.append("significanceOfAnimal", data?.significanceOfAnimal);
        formData.append("foreseeableRisks", data?.foreseeableRisks);
        formData.append("nameOfSocialWorker", data?.nameOfSocialWorker);
        formData.append("date", data?.date);
        formData.append(
            "signatureOfAssessingSocialWorker",
            data?.signatureOfAssessingSocialWorker
        );

        const updatedData = {
            id,
            formData,
        };

        try {
            const res: any = await onSubmitHandler(updatedData).unwrap();
            enqueueSnackbar(
                res?.message ?? `Pet Questionnaire ${message} Successfully!`,
                {
                    variant: "success",
                }
            );
        } catch (error: any) {
            const errMsg = error?.data?.message;
            enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
        }
    };
    return { methods, handleSubmit, isSubmitting, onSubmit }
}
