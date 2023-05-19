import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Checkbox, Dialog, DialogContent, Grid, Typography, styled } from '@mui/material';
import CustomTable from '@root/components/Table/CustomTable';
import TableAction from '@root/components/TableAction';
import TableHeader from '@root/components/TableHeader'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { formSchema, initialValues, AddTrainingClockEngine } from '.';
import { FormProvider } from '@root/components/hook-form';
import RHFUploadFile from '@root/components/hook-form/RHFUploadFile';
import { LoadingButton } from '@mui/lab';

interface IProps {
    open: boolean;
    handleClose: () => void;
    disabled?: any;
    onSubmit?: any;
    isHideSubmitButton?: boolean;
}

const TrainingClockEngineModal = (props: IProps) => {
    const { open, handleClose, disabled, onSubmit, isHideSubmitButton } = props;
    const methods: any = useForm({
        resolver: yupResolver(formSchema),
        defaultValues: initialValues,
    });

    const {
        reset,
        control,
        register,
        setValue,
        handleSubmit,
        formState: { errors, isSubmitting, isDirty },
    } = methods;

    return (
        <>
              <Dialog
                open={open}
                onClose={handleClose}
                maxWidth={'md'}
            >
                <ModalContent>
                    <Typography component={'p'} sx={{ fontWeight: 600, fontSize: '16px', mb: '15px' }}>
                        Person Uploaded: Name Name
                    </Typography>
                    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>
                            {AddTrainingClockEngine.map((item: any, i: number) => (
                                 <Grid item xs={12} md={item?.md} key={item?.id} mt={1.7}>
                                 <Typography sx={{marginBottom:"5px",fontSize:"16px !important" ,fontWeight:"600"}} variant="h6" gutterBottom>{item.title}</Typography>
                                 <item.component
                                   {...item.componentProps}
                     
                                   disabled={disabled}
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
                        </Grid>
                        
                        <Grid item xs={12} sx={{ mt: '20px' }}>
                            <Box
                                sx={{ display: "flex", gap: '1rem' }}>
                               
                                    <LoadingButton
                                        type="submit"
                                        variant="contained"
                                        disabled={disabled}
                                    >
                                        Submit
                                    </LoadingButton>
                                
                                <Button
                                    sx={{ backgroundColor: "#F6830F", "&:hover": { backgroundColor: "#F6830F", }, }}
                                    type="button"
                                    variant="contained"
                                    onClick={handleClose}
                                >Cancel</Button>
                            </Box>
                        </Grid>
                    </FormProvider>
                </ModalContent>
            </Dialog>
        </>
    )
}

export default TrainingClockEngineModal

const ModalContent = styled(DialogContent)`
  width: 788px;
  height: 460px;
`;
