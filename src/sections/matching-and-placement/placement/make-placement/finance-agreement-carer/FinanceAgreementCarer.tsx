import { Box, Button, Checkbox, FormControlLabel, TableCell, } from "@mui/material";
import React from "react";
import { useFinanceAgreementCarer } from "./useFinanceAgreementCarer";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import { financeAgreementCarerData } from ".";
import TableHeader from "@root/components/TableHeader";
import Image from "next/image";

const FinanceAgreementCarer = () => {
    const { theme } = useFinanceAgreementCarer();

    const columns = [

        {
            accessorFn: (row: any) => row.placementAgreement,
            id: "Placement Agreement / Receipts ",
            cell: (info: any) => info.getValue(),
            header: () => <span>Placement Agreement / Receipts </span>,
        },
        {
            accessorFn: (row: any) => <Image src={row.policy} alt=" Document Icon" />,
            id: "policy",
            cell: (info: any) => (
                <TableCell align="center">{info.getValue()}</TableCell>
            ),
            header: () => <span>Policy</span>,
        },
        {
            accessorFn: (row: any) => row.dateApproved,
            id: "Date Approved",
            cell: (info: any) => info.getValue(),
            header: () => <span>Date Approved</span>,
        },
        {
            accessorFn: (row: any) => row.agencyApproved,
            id: "agencyApproved",
            cell: (info: any) => info.getValue(),
            header: () => <span>Agency Approved by (Role)</span>,
        },
        {
            accessorFn: (row: any) => row.localAuthorityApproved,
            id: "LA Approved by (Role ) ",
            cell: (info: any) => info.getValue(),
            header: () => <span>LA Approved by (Role ) </span>,
        },
        {
            id: 'select',
            header: () => <span>Digital Signature</span>,
            cell: ({ row, table }: any) => (
                <TableCell align="center">
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
                </TableCell>
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
                data={financeAgreementCarerData}
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
            <Button type="submit" sx={{ backgroundColor: "#0E918C", color: "#fff", "&:hover": { backgroundColor: "#0E918C" }, px: 2.5, mx: 2, my: 2 }}>Continue</Button>
        </Box>
    );
};

export default FinanceAgreementCarer;
