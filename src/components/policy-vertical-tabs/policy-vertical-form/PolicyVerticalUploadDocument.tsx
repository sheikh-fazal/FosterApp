import { Box, Button, Checkbox, useTheme } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import React, { useState } from "react";

const PolicyVerticalUploadDocument = (props: any) => {
    const { data, handleSubmit, isUploadBackBtn, addUploadDocument, handleBackBtn, handleAction,  } = props;
    const theme = useTheme();

    const columns = [
        {
            id: "select",
            header: ({ table, row }: any) => {
                console.log(table.getSelectedRowModel().flatRows);
                return (
                    <Box>
                        <Checkbox checked={table.getIsAllRowsSelected()} onChange={table.getToggleAllRowsSelectedHandler()} />
                    </Box>
                );
            },
            cell: ({ row, table }: any) => (
                <Box>
                    <Checkbox disabled={row?.original?.Assigned} checked={row?.original?.Assigned ? false : row.getIsSelected()} onChange={row.getToggleSelectedHandler()} />
                </Box>
            ),
        },
        {
            accessorFn: (row: any) => row.no,
            id: "Sr. No",
            cell: (info: any) => info.getValue(),
            header: () => <span>Sr. No</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.documentName,
            id: "Title",
            cell: (info: any) => info.getValue(),
            header: () => <span>Document Name</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.documentType,
            id: "Document Type",
            cell: (info: any) => info.getValue(),
            header: () => <span>Document Type</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.documentDate,
            id: "Document Date",
            cell: (info: any) => info.getValue(),
            header: () => <span>Document Date</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.personUploaded,
            id: "Person Uploaded",
            cell: (info: any) => info.getValue(),
            header: () => <span>Person Uploaded</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.password,
            id: "Password",
            cell: (info: any) => info.getValue(),
            header: () => <span>Password</span>,
            isSortable: true,
        },
        {
            id: "actions",
            cell: (info: any) => (
                <Box display={"flex"} gap={0.5}>
                    {["download", "delete", "view"].map((action) => (
                        <span key={action} style={{ flexShrink: 0 }}>
                            <TableAction type={action} onClicked={() => handleAction(action, info.row.original)} />
                        </span>
                    ))}
                </Box>
            ),
            header: () => <span>actions</span>,
        },
    ];

    return (
        <>
            <TableHeader title="Uploaded Documents" showAddBtn onAdd={addUploadDocument} />
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
                <Button type="submit" variant="contained" sx={{ mr: 2 }} onClick={handleSubmit}>
                    Submit
                </Button>
                {isUploadBackBtn && (
                    <Button sx={{ backgroundColor: "#F6830F", "&:hover": { backgroundColor: "#F6830F" } }} type="button" variant="contained" onClick={handleBackBtn}>
                        Back
                    </Button>
                )}
            </Box>
        </>
    );
};

export default PolicyVerticalUploadDocument;
