import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Dialog, DialogContent, Grid, Typography, styled } from '@mui/material';
import { useForm } from 'react-hook-form';
import { formSchema, initialValues, AddTrainingClockEngine, NotificationSettingsInitialValues, NotificationSettings } from '.';
import { FormProvider } from '@root/components/hook-form';
import { LoadingButton } from '@mui/lab';
import { useTrainingClockEngineModal } from './useTrainingClockEngineModal';

interface IProps {
    open: boolean;
    handleClose: () => void;
    onSubmit?: any;
    IsHideFormFields?: boolean;
    title: string,
    SubmitBtnText: string,
    CancelBtnText: string,
}

const TrainingClockEngineModal = (props: IProps) => {
    const { open, handleClose, title, IsHideFormFields, SubmitBtnText, CancelBtnText } = props;
    const { methods, onSubmit, handleSubmit } = useTrainingClockEngineModal();
    const ModalContent = styled(DialogContent)`
    width: 788px;
    height: auto;
  `;
 
    return (
        <>
            <Dialog
                open={open}
                onClose={()=>{handleClose(), methods.reset()}}
                maxWidth={'md'}
            >
                <ModalContent>
                    <Typography component={'p'} sx={{ fontWeight: 600, fontSize: '16px', mb: '15px' }}>
                        {title}
                    </Typography>
                    <FormProvider methods={methods} >
                            <Grid container spacing={2}>
                                {IsHideFormFields ? <>
                                    {AddTrainingClockEngine.map((item: any, i: number) => (
                                        <Grid item xs={12} md={item?.md} key={item?.id} mt={1.5}>
                                            <Typography sx={{ marginBottom: "5px", fontSize: "16px !important", fontWeight: "600" }} variant="h6" gutterBottom>{item.title}</Typography>
                                            <item.component
                                                {...item.componentProps}
                                                size={"small"}
                                            >
                                                {item.componentProps.select
                                                    ? item.options.map((option: any) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))
                                                    : null}
                                                {item?.heading}
                                            </item.component>
                                        </Grid>
                                    ))}
                                </>
                                    : <>
                                        {NotificationSettings.map((item: any, i: number) => (
                                            <Grid item xs={12} md={item?.md} key={item?.id} mt={1.5}>
                                                <Typography sx={{ marginBottom: "5px", fontSize: "16px !important", fontWeight: "600" }} variant="h6" gutterBottom>{item.title}</Typography>
                                                <item.component
                                                    {...item.componentProps}
                                                    size={"small"}
                                                >
                                                    {item.componentProps.select
                                                        ? item.options.map((option: any) => (
                                                            <option key={option.value} value={option.value}>
                                                                {option.label}
                                                            </option>
                                                        ))
                                                        : null}
                                                    {item?.heading}
                                                </item.component>
                                            </Grid>
                                        ))}
                                    </>
                                }
                            </Grid>
                            <Grid item xs={12} sx={{ mt: '20px' }}>
                                <Box
                                    sx={{ display: "flex", gap: '1rem' }}>
                                    <Button type="submit"variant="contained" onClick={methods.handleSubmit(onSubmit)}>
                                    {SubmitBtnText}
                                    </Button>
                                        <Button
                                            sx={{ backgroundColor: "#F6830F", "&:hover":{ backgroundColor: "#F6830F", }, }}
                                            type="button"
                                            variant="contained"
                                            onClick={()=>{handleClose(), methods.reset()}}
                                        >{CancelBtnText}</Button>
                                </Box>
                            </Grid>
                       
                    </FormProvider>
                </ModalContent>
            </Dialog>
        </>
    )
}

export default TrainingClockEngineModal

