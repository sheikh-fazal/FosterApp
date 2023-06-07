import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, styled, Typography, Modal } from '@mui/material';
import theme from '@root/theme';
import { css } from '@emotion/react';

import backgroundImage from '../../../../../../assets/img/delegateCertifactebg.jpg';
import Image from 'next/image';



const DelegateCertificateModal = (props: any) => {
    const { open, handleClose, onDeleteClick } = props;
    const theme: any = useTheme();


    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={styles.CustomModal}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </Modal>
    )
}

export default DelegateCertificateModal;



const styles = {
    CustomModal: {
        backgroundImage: "url(https://i.imgur.com/HeGEEbu.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    },
}