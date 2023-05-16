import React, { useState } from "react";
import { Box, Checkbox, Grid, Typography, useTheme } from "@mui/material";
import AdvocacyIcon from "../../../../assets/svg/safeguarding/advocacy-icon.svg"
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import { useRouter } from "next/router";

const SafeguardingAddressTable = () => {
    const theme: any = useTheme();
    let router = useRouter();
    const [data, setData] = useState([
        {
            safeguardingCaseId: "Sf-1234",
            childName: "Tom Hanks",
            childAdvocacy: "",
        },
        {
            safeguardingCaseId: "Sf-5678",
            childName: "Albus Dumbledore",
            childAdvocacy: "",
        },
    ]);
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
            accessorFn: (row: any) => row.safeguardingCaseId,
            id: "Safeguarding Case ID",
            cell: (info: any) => info.getValue(),
            header: () => <span>Safeguarding Case ID</span>,
        },
        {
            accessorFn: (row: any) => row.childName,
            id: "Child Name",
            cell: (info: any) => info.getValue(),
            header: () => <span>Child Name</span>,
        },
        {
            accessorFn: (row: any) => row.childAdvocacy,
            id: "Child Advocacy",
            cell: (info: any) => info.getValue(),
            header: () => <span>Child Advocacy</span>,
        },
        {
            id: "actions",
            cell: (info: any) => (
                <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
                     <TableAction
                        type="view"
                        onClicked={() =>
                            router.push(
                                ""
                            )
                        }
                    />
                    <TableAction
                        type="edit"
                        onClicked={() =>
                            router.push(
                                ""
                            )
                        }
                    />
                    <TableAction type="delete" onClicked={() => alert("delete")} />
                   
                </Box>
            ),
            header: () => <span>actions</span>,
            isSortable: false,
        },
    ];
    return (
        <Grid container>
            <Grid xs={12} item>
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
            </Grid>
        </Grid>
    );
}
export default SafeguardingAddressTable;