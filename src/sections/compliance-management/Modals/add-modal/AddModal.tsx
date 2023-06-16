import React from 'react'
import { Box, Button, Dialog, DialogContent, Grid, TextField, Typography, styled } from '@mui/material';
import { complianceMangementModalData, } from '.';
import { FormProvider } from '@root/components/hook-form';
import RHFUploadFile from '@root/components/hook-form/RHFUploadFile';
import { useAddModal } from './useAddModal';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

interface IProps {
    open: string;
    handleClose: () => void;
    onSubmit?: any;
}

const AddCategoryModal = (props: IProps) => {
    const { open, handleClose } = props;
    const { methods, onSubmit, handleSubmit, pdfUpload, pdfArray, handleUploadPdf } = useAddModal(props);
    const ModalContent = styled(DialogContent)`
    width: 788px;
    height: auto;
    @media (max-width: 852px) {
        width: 100%;
      }
  `;

    return (
        <>
            <Dialog
                open={!!open}
                onClose={handleClose}
                fullWidth={true}
                maxWidth={'sm'}

            >
                <Typography sx={styles.title}>
                    {open === "verticalTab" ? "Add New Category" : "Add New Sub Category"}
                </Typography>
                <DialogContent>
                    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                        <Grid container columnSpacing={4} sx={styles.gridWrap}>
                            {complianceMangementModalData?.map((item: any) => (
                                <Grid item xs={12} md={item?.md} key={item?.id}>
                                    <Typography sx={{ marginBottom: "5px", fontSize: "16px !important", fontWeight: "600" }} variant="h6" gutterBottom>{item.title}</Typography>
                                    {item.component && (
                                        <item.component
                                            {...item.componentProps}
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
                                        <RHFUploadFile name={"updatePhoto"} {...methods} required />
                                    )}
                                </Grid>
                            ))}
                            <Box display={'flex'} alignItems={'center'} gap={'10px'} margin={'20px 0px'}>
                                <Button sx={{ ...styles.btnStyle, ...styles.btnCircle }}
                                    variant="contained"
                                    component="label">
                                    <input type="file" hidden onChange={handleUploadPdf} />
                                    <AddIcon sx={{ color: '#fff' }} />
                                </Button>
                            </Box>
                            {pdfUpload && <Box sx={styles.pdfBox}>
                                {pdfArray.map((name, i) => <Box sx={styles.pdfTitle} key={i}>
                                    <span>{name}</span>
                                    <CloseIcon sx={{ fontSize: "12px", cursor: 'pointer' }} />
                                </Box>)}
                            </Box>}
                        </Grid>

                        <Box display={'flex'} gap={'10px'} marginTop={'20px'}>
                            <Button type="submit" variant="contained" sx={styles.btnStyle} >Add</Button>
                            <Button variant="contained" onClick={handleClose}>Cancel</Button>
                        </Box>
                    </FormProvider>
                </DialogContent>
            </Dialog>

        </>
    )
}

export default AddCategoryModal

const styles = {
    title: {
        textAlign: 'center', fontSize: '30px', fontWeight: 600, mt: 2.5
    },
    btnStyle: {
        background: '#F6830F', '&:hover': { background: '#F6830F' }
    },
    pdfBox: {
        border: '1px solid #CACACA',
        borderRadius: '4px',
        padding: '15px 10px',
        maxWidth: '457px',
        display: 'flex',
        gap: '5px',
        flexWrap: 'wrap',
        margin: '5px 0px',

    },
    pdfTitle: {
        background: 'rgba(196, 196, 196, 0.5)',
        borderRadius: '4px',
        padding: '5px',
        fontSize: '12px',
        fontWeight: 400,
        color: '#000000',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
    btnCircle: {
        minWidth: '30px', margin: '0px 15px', height: "30px", width: '30px', borderRadius: '50px'
    },
    gridWrap: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}
