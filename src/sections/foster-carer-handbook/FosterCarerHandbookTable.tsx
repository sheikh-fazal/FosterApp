import React from 'react'
import { useFosterCarerHandbookTable } from './useFosterCarerHandbookTable';
import { Box, Card, Checkbox } from '@mui/material';
import TableAction from '@root/components/TableAction';
import TableHeader from '@root/components/TableHeader';
import CustomTable from '@root/components/Table/CustomTable';
import { TableData } from '.'

const FosterCarerHandbookTable = () => {
    const { router, tableHeaderRef, theme, } = useFosterCarerHandbookTable()

    //  table column start here
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
            accessorFn: (row: any) => row.Sr_No,
            id: "Sr_No",
            cell: (info: any) => info.getValue(),
            header: () => <span>Sr. No</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.Title,
            id: "Title",
            cell: (info: any) => info.getValue(),
            header: () => <span>Title </span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.Date_Uploaded,
            id: "Date_Uploaded",
            cell: (info: any) => info.getValue(),
            header: () => <span>Date Uploaded</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.Author,
            id: "Author",
            cell: (info: any) => info.getValue(),
            header: () => <span>Author</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.Document_Type,
            id: "Document_Type",
            cell: (info: any) => info.getValue(),
            header: () => <span>Document Type</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.Versions,
            id: "Versions",
            cell: (info: any) => info.getValue(),
            header: () => <span>Versions</span>,
            isSortable: true,
        },
        {
            id: "actions",
            cell: (info: any) => (
                <Box sx={styles.tableAction}>
                    <TableAction type="view" onClicked={() => router.push(`${router.pathname}/view-safeguarding-assessment`)} />
                    <TableAction type="print" onClicked={() => window.print()} />
                    <TableAction type="download" onClicked={''} />
                </Box>

            ),
            header: () => <span>actions</span>,
            isSortable: false,
        },
    ];
    return (
        <Card sx={{ padding: "19px 10px 10px 10px" }}>
            <>
                <TableHeader
                    ref={tableHeaderRef}
                    title="Foster Carer Handbook"
                    showAddBtn
                    onAdd={() => router.push(`${router.pathname}/add-foster-carer-handbook`)}
                    onChanged={(data: any) => {
                        console.log("Updated params: ", data);
                    }}
                />
                {/* table body start here */}
                <CustomTable
                    data={TableData}
                    columns={columns}
                    isLoading={false}
                    isFetching={false}
                    isError={false}
                    isSuccess={true}
                    isPagination={false}
                    // count={Math.ceil(data?.data?.meta?.total / limit)}
                    currentPage={1}
                    onPageChange={(data: any) => {
                        console.log("Current page data: ", data);
                    }}
                    onSortByChange={(data: any) => {
                        console.log("Sort by: ", data);
                    }}
                    rootSX={{ my: theme.spacing(2) }}
                />
            </>
        </Card>
    )
}

export default FosterCarerHandbookTable

// Styles
const styles = {
    tableAction: {
        display: "flex", gap: "5px", justifyContent: "center", alignItems: "center"
    },
    assessmentform: {
        marginLeft: "40px",
        cursor: "pointer"
    }
}