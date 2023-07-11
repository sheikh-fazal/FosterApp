import { Box, Button, Grid, Typography } from "@mui/material";
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import React from "react";
import { useChildSelection } from "./useChildSelection";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import { childSelectionData } from ".";

const ChildSelection = () => {
    const { methods, handleSubmit, onSubmit, theme } = useChildSelection();

    const columns = [

        {
            accessorFn: (row: any) => row.listFosterChild,
            id: "List of Foster Child to be placed",
            cell: (info: any) => info.getValue(),
            header: () => <span>List of Foster Child to be placed</span>,
        },
        {
            accessorFn: (row: any) => row.childUnderConsideration,
            id: "Child  under Consideration list ",
            cell: (info: any) => info.getValue(),
            header: () => <span>Child  under Consideration list </span>,
        },

        {
            id: "actions",
            cell: (info: any) => (
                <TableAction type="view" />
            ),
            header: () => <span>actions</span>,
            isSortable: false,
        },
    ];
    return (
        <FormProvider methods={methods}>
            <Box sx={styles.collapseWrapper}>
                <Box sx={styles.searchWrap}>
                    <RHFTextField
                        name="selectFosterCarerPendingPayment"
                        label="Select the Foster Child (Pending Placement)"
                        size="small"
                    />
                    <Button type="submit" sx={styles.button}>Search</Button>
                </Box>
                <Box sx={{ pt: 2 }}>
                    <CustomTable
                        data={childSelectionData}
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
                </Box>
            </Box>
        </FormProvider>
    );
};

export default ChildSelection;

const styles = {
    collapseWrapper: { px: 3, py: 4 },
    heading: { color: "#343A40", fontSize: "14px", fontWeight: 600 },
    searchWrap: { display: "flex", alignItems: "center", gap: "40px", width: "100%", maxWidth: "500px" },
    button: { backgroundColor: "#0E918C", color: "#fff", "&:hover": { backgroundColor: "#0E918C" }, px: 2.5, },
};
