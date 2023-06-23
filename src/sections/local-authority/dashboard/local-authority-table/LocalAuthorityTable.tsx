import React, { useState } from 'react'
import { useLocalAuthorityTable } from './useLocalAuthorityTable'
import TableHeader from '@root/components/TableHeader'
import CustomTable from '@root/components/Table/CustomTable'

const LocalAuthorityTable = () => {
    const { TableData, tableHeaderRefTwo, theme, columns } = useLocalAuthorityTable()
    const [modalType, setModalType] = useState({ value: "", type: "" })

    return (
        <>
            <TableHeader
                ref={tableHeaderRefTwo}
                title="Local Authority"
                showAddBtn
                onAdd={() => setModalType({ ...modalType, value: "", type: "add" })}
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
        </>

    )
}

export default LocalAuthorityTable