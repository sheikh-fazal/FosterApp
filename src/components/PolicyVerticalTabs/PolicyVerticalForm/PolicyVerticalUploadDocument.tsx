import { Box, Button, Checkbox, useTheme } from '@mui/material'
import CustomTable from '@root/components/Table/CustomTable'
import TableAction from '@root/components/TableAction'
import TableHeader from '@root/components/TableHeader'
import React, { useState } from 'react'

const PolicyVerticalUploadDocument = (props: any) => {
    const { data, handleSubmit, isUploadBackBtn, addUploadDocument } = props;
    const theme = useTheme();

    // const handleSubmit = () => {
    //     if(count === 1) {
    //         navgiate.push('/policies-and-guidelines/organisational-policies/');
    //     } else {
    //         setIsUploadDocumentOpenModal(true);
    //     }
    //   };

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
            accessorFn: (row: any) => row.no,
            id: "Sr. No",
            cell: (info: any) => info.getValue(),
            header: () => <span>Sr. No</span>,
        },
        {
            accessorFn: (row: any) => row.documentName,
            id: "Title",
            cell: (info: any) => info.getValue(),
            header: () => <span>Document Name</span>,
        },
        {
            accessorFn: (row: any) => row.documentType,
            id: "Document Type",
            cell: (info: any) => info.getValue(),
            header: () => <span>Document Type</span>,
        },
        {
            accessorFn: (row: any) => row.documentDate,
            id: "Document Date",
            cell: (info: any) => info.getValue(),
            header: () => <span>Document Date</span>,
        },
        {
            accessorFn: (row: any) => row.personUploaded,
            id: "Person Uploaded",
            cell: (info: any) => info.getValue(),
            header: () => <span>Person Uploaded</span>,
        },
        {
            accessorFn: (row: any) => row.password,
            id: "Password",
            cell: (info: any) => info.getValue(),
            header: () => <span>Password</span>,
        },
        {
            id: "actions",
            cell: (info: any) => (
                <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
                    <TableAction type="download" />
                    <TableAction type="delete" />
                    <TableAction type="view" />
                </Box>
            ),
            header: () => <span>actions</span>,
            isSortable: false,
        },
    ];

    return (
        <>
            <TableHeader
                title="Uploaded Documents"
                showAddBtn
                onAdd={addUploadDocument}
            />
            <CustomTable
                data={data}
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
            <Box>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mr: 2 }}
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
                {isUploadBackBtn &&
                    <Button
                        sx={{ backgroundColor: "#F6830F", "&:hover": { backgroundColor: "#F6830F", }, }}
                        type="button"
                        variant="contained"
                    >Back</Button>
                }

            </Box>
            {/* <UploadDocumentModal open={isUploadDocumentOpenModal} handleClose={() => setIsUploadDocumentOpenModal(false)} isHideSubmitButton={true} onSubmit={handleUploadDocumentModal} /> */}
        </>
    )
}

export default PolicyVerticalUploadDocument