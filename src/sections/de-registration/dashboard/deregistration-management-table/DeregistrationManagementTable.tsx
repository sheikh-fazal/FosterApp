import CustomTable from '@root/components/Table/CustomTable'
import TableHeader from '@root/components/TableHeader'
import { useDeregistrationManagementTable } from './useDeregistrationManagementTable'
import { Box, Button } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { useState } from 'react'
import { TableData } from '.'

const DeregistrationManagementTable = () => {
    const { tableHeaderRefTwo, router, theme, SELECT_FILTERS, columns, tableData, handleExpand, expand } = useDeregistrationManagementTable()

    return (
        <>
            <TableHeader
                ref={tableHeaderRefTwo}
                title="Carer List"
                notificationSettingBtn
                showSelectFilters={true}
                selectFilters={SELECT_FILTERS}
                onAdd={() => alert()}
            // onChanged={(data: any) => {
            //     console.log("Updated params: ", data);
            // }}
            />
            {/* table body start here */}
            <CustomTable
                data={tableData}
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
                <Button onClick={handleExpand}>
                    {expand ? "less" : "more"}
                    {expand ? <ExpandLess /> : <ExpandMore />}
                </Button>
            </Box>
        </>

    )
}

export default DeregistrationManagementTable