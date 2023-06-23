import CustomTable from '@root/components/Table/CustomTable'
import TableHeader from '@root/components/TableHeader'
import { useDeregistrationManagementTable } from './useDeregistrationManagementTable'
import { TableData } from '.'
import { ExpandMore } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'

const DeregistrationManagementTable = () => {
    const { tableHeaderRefTwo, router, theme, SELECT_FILTERS, columns, } = useDeregistrationManagementTable()

    return (
        <>
            <Box sx={styles.headerTopBg}>
                <Typography variant='h5' sx={styles.headerTopContent}>Foster Carer - Deregistration Management</Typography>

            </Box>
            <TableHeader
                ref={tableHeaderRefTwo}
                title="Carer List"
                showSelectFilters={true}
                selectFilters={SELECT_FILTERS}
            // onChanged={(data: any) => {
            //     console.log("Updated params: ", data);
            // }}
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
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "flex-end",
                }}
            >
                <Button onClick={() => router.push(`${router.pathname}/deregistration-management`)}>
                    View All<ExpandMore />
                </Button>
            </Box>
        </>

    )
}

export default DeregistrationManagementTable


//-----------Styles------------
const styles = {
    headerTopBg: {
        background: "linear-gradient(180deg, rgb(246, 70.44, 15) 0%, rgb(253.94, 43.38, 93.91) 100%)",
        height: "60px",
        width: "100%",
        borderRadius: "10px 10px 0px 0px",
        display: "flex",
        alignItems: "center"
    },
    headerTopContent: {
        color: "#fff",
        marginLeft: "16px",
        fontSize: "16px",
        letterSpacing: "0.12px",
        lineHeight: "28.8px",
        fontWeight: "600"
    }

};