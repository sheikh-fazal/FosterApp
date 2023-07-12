import { yupResolver } from '@hookform/resolvers/yup';
import { Dialog, DialogContent, Typography } from '@mui/material';
import React, { ReactNode } from 'react'


interface IProps {
    open: boolean;
    handleClose: () => void;
    Component: () => JSX.Element
}

const ViewFormModal = (props: IProps) => {
    const { open, handleClose, Component } = props;

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth={'sm'}
            >
                <DialogContent>
                    <Component />
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ViewFormModal

const styles = {
    title: { fontWeight: 600, fontSize: '16px' }
}