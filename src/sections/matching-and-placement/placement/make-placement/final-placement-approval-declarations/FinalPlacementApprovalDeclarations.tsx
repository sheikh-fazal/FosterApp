import { Box, Button, Checkbox, FormControlLabel, TableCell, TableHead, TableRow, } from "@mui/material";
import React from "react";
import { useFinalPlacementApprovalDeclarations } from "./useFinalPlacementApprovalDeclarations";
import { finalPlacementApprovalDeclarationData } from ".";
import Image from "next/image";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";

const FinalPlacementApprovalDeclarations = ({ handleIncreamentStep }: any) => {
    const { theme } = useFinalPlacementApprovalDeclarations();

    const columns = [

        {
            accessorFn: (row: any) => row.name,
            id: "Name",
            cell: (info: any) => info.getValue(),
            header: () => <span>Name</span>,
        },
        {
            accessorFn: (row: any) => row.role,
            id: "(Role)",
            cell: (info: any) => info.getValue(),
            header: () => <span>(Role)</span>,
        },
        {
            accessorFn: (row: any) => row.dateApproved,
            id: "Date Approved",
            cell: (info: any) => info.getValue(),
            header: () => <span>Date Approved</span>,
        },
        {
            id: 'select',
            header: () => <span>Date Approved</span>,
            cell: ({ row, table }: any) => (
                <FormControlLabel
                    control={
                        <Checkbox
                            disabled={row?.original?.Assigned}
                            checked={row?.original?.Assigned ? false : row.getIsSelected()}
                            onChange={row.getToggleSelectedHandler()}
                        />
                    }
                    label={row.original.digitalSignature}
                />
            ),
        },
    ];
    return (
        <Box sx={{ pt: 2 }}>
            <TableHeader
                title="Placement Special Needs agreement"
                hideSearch
                showAddBtn
            />
            <CustomTable
                data={finalPlacementApprovalDeclarationData}
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
            <Button type="submit" sx={{ backgroundColor: "#0E918C", color: "#fff", "&:hover": { backgroundColor: "#0E918C" }, px: 2.5, mx: 2, my: 2 }} onClick={handleIncreamentStep}>Continue</Button>
        </Box>
    );
};

export default FinalPlacementApprovalDeclarations;
