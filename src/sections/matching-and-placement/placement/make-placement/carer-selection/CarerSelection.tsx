import { Box, Button, Grid, Typography } from "@mui/material";
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import React from "react";
import { useCarerSelection } from "./useCarerSelection";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import { carerSelectionData } from ".";

const CarerSelection = () => {
    const { methods, handleSubmit, onSubmit, theme } = useCarerSelection();

    const columns = [

        {
            accessorFn: (row: any) => row.listFosterChild,
            id: "List of Foster Carer to be placed",
            cell: (info: any) => info.getValue(),
            header: () => <span>List of Foster Carer to be placed</span>,
        },
        {
            accessorFn: (row: any) => row.childUnderConsideration,
            id: "Carers  under Consideration list ",
            cell: (info: any) => info.getValue(),
            header: () => <span>Carers  under Consideration list </span>,
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
        <Box>
            <FormProvider methods={methods}>
                <Box sx={styles.collapseWrapper}>
                    <Box sx={styles.searchWrap}>
                        <RHFTextField
                            name="selectCarer"
                            label="Select Carer"
                            size="small"
                        />
                        <Button type="submit" sx={styles.button}>Search</Button>
                    </Box>
                    <Box sx={{ pt: 2 }}>
                        <CustomTable
                            data={carerSelectionData}
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
                    <Button sx={styles.saveBtn}>Save and Continue</Button>
                </Box>
            </FormProvider>
        </Box>
    );
};

export default CarerSelection;

const styles = {
    collapseWrapper: { px: 2.5, py: 4 },
    heading: { color: "#343A40", fontSize: "14px", fontWeight: 600 },
    searchWrap: { display: "flex", alignItems: "center", gap: "40px", width: "100%", maxWidth: "500px" },
    button: { backgroundColor: "#0E918C", color: "#fff", "&:hover": { backgroundColor: "#0E918C" }, px: 2.5, fontSize: "16px", fontWeight: 600 },
    saveBtn: { backgroundColor: "#0E918C", color: "#fff", "&:hover": { backgroundColor: "#0E918C" }, px: 2.2, py: 1, fontSize: "16px", fontWeight: 600 }
};
