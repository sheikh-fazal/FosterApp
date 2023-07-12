import { Box, Button, Grid, Typography } from "@mui/material";
import { FormProvider, RHFSelect, RHFTextField } from "@root/components/hook-form";
import React from "react";
import { useCarerSelection } from "./useCarerSelection";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import { carerSelectionData } from ".";

const CarerSelection = ({handleIncreamentStep}: any) => {
    // const { activeStep, index } = props;
    const { methods, handleSubmit, onSubmit, theme, isSelectedTable } = useCarerSelection();

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
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Box sx={styles.collapseWrapper}>
                    <Box sx={styles.searchWrap}>
                        <RHFSelect
                            name="selectCarer"
                            label="Select Carer"
                            size="small"
                        >
                            <option value="Foster Child">Foster Child</option>
                        </RHFSelect>
                        <Button type="submit" sx={styles.button}>Search</Button>
                    </Box>
                    {isSelectedTable &&
                        <>
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
                            <Button sx={styles.saveBtn} onClick={handleIncreamentStep}>Save and Continue</Button>
                        </>
                    }

                </Box>
            </FormProvider>
        </Box>
    );
};

export default CarerSelection;

const styles = {
    collapseWrapper: { px: 3, py: 4 },
    heading: { color: "#343A40", fontSize: "14px", fontWeight: 600 },
    searchWrap: { display: "flex", gap: "40px", width: "100%", maxWidth: "550px" },
    button: { backgroundColor: "#0E918C", color: "#fff", "&:hover": { backgroundColor: "#0E918C" }, px: 2.5, py: 0.8, fontSize: "16px", fontWeight: 600, height: "40px" },
    saveBtn: { backgroundColor: "#0E918C", color: "#fff", "&:hover": { backgroundColor: "#0E918C" }, px: 2, py: 0.8, mt: 1.5, fontSize: "16px", fontWeight: 600, },
};
