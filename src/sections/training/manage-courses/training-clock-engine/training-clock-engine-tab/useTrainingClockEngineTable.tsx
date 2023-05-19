import { Box, useTheme } from '@mui/material';
import TableAction from '@root/components/TableAction';
import React, { useRef, useState } from 'react'



export const useTrainingClockEngineTable = () => {
    const [IsDeleteModal, setIsDeleteModal] = useState(false)
    const [IsOpenTrainingClockEngineModal, setIsOpenTrainingClockEngineModal] = useState(false)
    const tableHeaderRef = useRef();
    const theme: any = useTheme();
    const TrainingClockEngineTableColumns = [
        {
            accessorFn: (row: any) => row.sr,
            id: "sr",
            cell: (info: any) => info.getValue(),
            header: () => <span>Sr.No</span>,
           
        },
        {
            accessorFn: (row: any) => row.parameters,
            id: "parameters",
            cell: (info: any) => info.getValue(),
            header: () => <span>Parameters</span>,
          
        },
        {
            accessorFn: (row: any) => row.settings,
            id: "settings",
            cell: (info: any) => info.getValue(),
            header: () => <span>Settings</span>,
           
        },
        {
            accessorFn: (row: any) => row.description,
            id: "description",
            cell: (info: any) => info.getValue(),
            header: () => <span>Description</span>,
        
        },
        {
            id: "actions",
            cell: (info: any) => (
                <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
                   
                    <TableAction
                        type="edit"
                        onClicked={() => { }}
                        size="small"
                    />
                     <TableAction
                        type="delete"
                        onClicked={() => setIsDeleteModal(true)}
                        size="small"
                    />
                </Box>
            ),
            header: "Actions",
            isSortable: false,
        },

    ];

    return {
        TrainingClockEngineTableColumns,
        IsDeleteModal,
        setIsDeleteModal,
        tableHeaderRef,
        theme,
        IsOpenTrainingClockEngineModal,
        setIsOpenTrainingClockEngineModal
    }
}
