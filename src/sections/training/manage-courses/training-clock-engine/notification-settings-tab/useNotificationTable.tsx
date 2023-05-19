import { Box, useTheme } from '@mui/material';
import TableAction from '@root/components/TableAction';
import React, { useRef, useState } from 'react'



export const useNotificationTable = () => {
    const [IsDeleteModal, setIsDeleteModal] = useState(false)
    const tableHeaderRef = useRef();
    const theme: any = useTheme();
    const NotificationTableColumns = [
        {
            accessorFn: (row: any) => row.configurationItem,
            id: "configurationItem",
            cell: (info: any) => info.getValue(),
            header: () => <span>Configuration Item</span>,
            isSortable: true,
           
        },
        {
            accessorFn: (row: any) => row.value,
            id: "value",
            cell: (info: any) => info.getValue(),
            header: () => <span> Value</span>,
            isSortable: true,
          
        },
        {
            accessorFn: (row: any) => row.notificationType,
            id: "notificationType",
            cell: (info: any) => info.getValue(),
            header: () => <span>Notification Type</span>,
            isSortable: true,
           
        },
        {
            accessorFn: (row: any) => row.description,
            id: "description",
            cell: (info: any) => info.getValue(),
            header: () => <span>Description</span>,
            isSortable: true,
        
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
        NotificationTableColumns,
        IsDeleteModal,
        setIsDeleteModal,
        tableHeaderRef,
        theme

    }
}
