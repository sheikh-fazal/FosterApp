import React from 'react';
import { Box, Card, Checkbox } from '@mui/material'
import CustomTable from '@root/components/Table/CustomTable'
import TableAction from '@root/components/TableAction'
import TableHeader from '@root/components/TableHeader'
import { useLocalAuthorityList } from './useLocalAuthorityList';
import { localAuthorityListData } from '.';

const LocalAuthorityList = () => {
    const { theme, navigate } = useLocalAuthorityList();

    const columns = [
        {
            id: "select",
            header: ({ table, row }: any) => {
                console.log(table.getSelectedRowModel().flatRows);
                return (
                    <Box>
                        <Checkbox
                            checked={table.getIsAllRowsSelected()}
                            onChange={table.getToggleAllRowsSelectedHandler()}
                        />
                    </Box>
                );
            },
            cell: ({ row, table }: any) => (
                <Box>
                    <Checkbox
                        disabled={row?.original?.Assigned}
                        checked={row?.original?.Assigned ? false : row.getIsSelected()}
                        onChange={row.getToggleSelectedHandler()}
                    />
                </Box>
            ),
        },
        {
            accessorFn: (row: any) => row.localAuthorityNo,
            id: "LA No",
            cell: (info: any) => info.getValue(),
            header: () => <span>LA No</span>,
        },
        {
            accessorFn: (row: any) => row.localAuthorityName,
            id: "LA Name",
            cell: (info: any) => info.getValue(),
            header: () => <span>LA Name</span>,
        },
        {
            accessorFn: (row: any) => row.contactPerson,
            id: "Contact Person ",
            cell: (info: any) => info.getValue(),
            header: () => <span>Contact Person </span>,
        },
        {
            accessorFn: (row: any) => row.role,
            id: "Role",
            cell: (info: any) => info.getValue(),
            header: () => <span>Role</span>,
        },
        {
            accessorFn: (row: any) => row.phone,
            id: "Phone",
            cell: (info: any) => info.getValue(),
            header: () => <span>Phone</span>,
        },
        {
            accessorFn: (row: any) => row.email,
            id: "Email",
            cell: (info: any) => info.getValue(),
            header: () => <span>Email</span>,
        },
        {
            accessorFn: (row: any) => row.address,
            id: "Address",
            cell: (info: any) => info.getValue(),
            header: () => <span>Address</span>,
        },
        {
            id: "actions",
            cell: (info: any) => (
                <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
                    <TableAction type="edit" onClicked={() => navigate.push({ pathname: "/local-authority/add-new-local-authority", query: { id: info.row.original.id, action: 'local-authority-edit' } })} />
                    <TableAction type="view" onClicked={() => navigate.push({ pathname: "/local-authority/add-new-local-authority", query: { id: info.row.original.id, action: 'local-authority-view' } })} />
                    <TableAction type="delete" />
                </Box>
            ),
            header: () => <span>actions</span>,
            isSortable: false,
        },
    ];

    return (
        <Card sx={{ p: 2 }}>
            <TableHeader
                title="Local Authority"
                showAddBtn
                onAdd={() => navigate.push({ pathname: '/local-authority/add-new-local-authority', query: { action: 'local-authority-add' } })}
            />
            <CustomTable
                data={localAuthorityListData}
                columns={columns}
                isLoading={false}
                isFetching={false}
                isError={false}
                isSuccess={true}
                currentPage={1}
                onPageChange={(data: any) => {
                    console.log("Current page data: ", data);
                }}
                onSortByChange={(data: any) => {
                    console.log("Sort by: ", data);
                }}
                rootSX={{ my: theme.spacing(2) }}
            />
        </Card>
    )
}

export default LocalAuthorityList