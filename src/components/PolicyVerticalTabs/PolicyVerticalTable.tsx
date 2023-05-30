import React, { Fragment } from 'react'
import { Box, Checkbox, useTheme } from '@mui/material'
import PolicyVerticalTabs from '@root/components/PolicyVerticalTabs/PolicyVerticalTabs';
import TableHeader from '@root/components/TableHeader';
import CustomTable from '@root/components/Table/CustomTable';
import TableAction from '@root/components/TableAction';
import { useRouter } from 'next/router';

const PolicyVerticalTable = (props: any) => {
    const { data, addNewTabNavigation } = props;
    const navigate = useRouter();
    const theme = useTheme();

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
            accessorFn: (row: any) => row.title,
            id: "Title",
            cell: (info: any) => info.getValue(),
            header: () => <span>Title</span>,
        },
        {
            accessorFn: (row: any) => row.dateUploaded,
            id: "Date Uploaded",
            cell: (info: any) => info.getValue(),
            header: () => <span>Date Uploaded</span>,
        },
        {
            accessorFn: (row: any) => row.author,
            id: "Author",
            cell: (info: any) => info.getValue(),
            header: () => <span>Author</span>,
        },
        {
            accessorFn: (row: any) => row.documentType,
            id: "Document Type",
            cell: (info: any) => info.getValue(),
            header: () => <span>Document Type</span>,
        },
        {
            accessorFn: (row: any) => row.version,
            id: "Versions",
            cell: (info: any) => info.getValue(),
            header: () => <span>Versions</span>,
        },
        {
            id: "actions",
            cell: (info: any) => (
                <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
                    <TableAction type="view" />
                    <TableAction type="print" />
                    <TableAction type="download" />
                </Box>
            ),
            header: () => <span>actions</span>,
            isSortable: false,
        },
    ];

    return (
        <>
            <PolicyVerticalTabs tabsDataArray={data} handleAddTabs={() => navigate.push(addNewTabNavigation)} >
                {data?.map((item: any) => (
                    <Fragment key={item?.index}>
                        <TableHeader
                            title={item.title}
                            showAddBtn
                        />
                        <CustomTable
                            data={item.innerData}
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
                    </Fragment>
                ))}
            </PolicyVerticalTabs>
        </>
    )
}

export default PolicyVerticalTable;
