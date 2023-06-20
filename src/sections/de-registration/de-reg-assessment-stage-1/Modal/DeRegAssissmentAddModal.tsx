import React from 'react'
import { Box, Button, Dialog, DialogContent, Grid, Typography, styled } from '@mui/material';
import { FormProvider } from '@root/components/hook-form';
import { RegAssessmentModalData } from '.';
import useDeRegAssissmentAddModal from './useDeRegAssissmentAddModal';
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";

interface IProps {
    open: string;
    handleClose: () => void;
    disabled?: boolean;
}

const DeRegAssissmentAddModal = (props: IProps) => {
    const { open, handleClose, disabled } = props;
    const { methods, onSubmit, handleSubmit, } = useDeRegAssissmentAddModal();
    const ModalContent = styled(DialogContent)`
    width: 650px;
    height: 821px;
    @media (max-width: 852px) {
        width: 100%;
        height:auto;
      }
  `;

    return (

        <>
            <Dialog
                open={!!open}
                onClose={() => { handleClose(), methods.reset() }}
                fullWidth={true}
                maxWidth={'sm'}
            >
                <ModalContent>
                    <Typography component={'p'} sx={{ fontWeight: 600, fontSize: '16px', mb: '15px' }}>
                        {open === "verticalTab" ? "Add New Category" : "Add New Sub Category"}
                    </Typography>
                    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>
                            {RegAssessmentModalData.map((item: any, i: number) => (
                                <Grid item xs={12} md={item?.md} key={item?.id} mt={1.5}>
                                    <Typography sx={{ marginBottom: "5px", fontSize: "16px !important", fontWeight: "600" }} variant="h6" gutterBottom>{item.title}</Typography>
                                    {item.component && (
                                        <item.component
                                            {...item.componentProps}
                                            disabled={disabled}
                                            size={"small"}>
                                            {item.componentProps.select
                                                ? item.options.map((option: any) => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))

                                                : null}
                                            {item?.heading}
                                        </item.component>
                                    )}
                                    {!item.component && (
                                        <RHFUploadFile name={"updatePhoto"} {...methods} required disabled={disabled} />
                                    )}
                                </Grid>
                            ))}


                        </Grid>
                        <Grid item xs={12} sx={{ mt: '20px' }}>
                            <Box
                                sx={{ display: "flex", gap: '1rem' }}>
                                <Button type="submit" variant="contained">
                                    Upload
                                </Button>
                                <Button
                                    sx={{ backgroundColor: "#F6830F", "&:hover": { backgroundColor: "#F6830F", }, }}
                                    type="button"
                                    variant="contained"
                                    onClick={() => { handleClose(), methods.reset() }}
                                >Clear</Button>
                            </Box>
                        </Grid>

                    </FormProvider>
                </ModalContent>
            </Dialog>
        </>
    )
}

export default DeRegAssissmentAddModal

