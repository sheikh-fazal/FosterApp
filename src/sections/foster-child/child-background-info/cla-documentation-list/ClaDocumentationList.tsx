import { Card } from '@mui/material';
import CustomTable from '@root/components/Table/CustomTable';
import TableHeader from '@root/components/TableHeader';
import React, { useRef } from 'react'
import { useTableParams } from '@root/hooks/useTableParams';
import { columns } from '.';
import router, { useRouter } from 'next/router';

export default function ClaDocumentationListTable() {
    const navigate = useRouter()
    const tableHeaderRef = useRef<any>();
   

    // const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    //     useTableParams();

    const data = [
        {
            id: 1,
            Date: " 12/11/2021",
            Document: "Education, Health , Care Plan Document",
            DocumentType: "EHCP",
        },
        {
            id: 2,
            Date: " 12/11/2021",
            Document: "PEP Personal Educational Plan ",
            DocumentType: "PEP",
        },
    ]

    return (
        <Card sx={{ p: 2 }}>
            <TableHeader
                ref={tableHeaderRef}
                showAddBtn
                title="CLA Documentation"
                searchKey="search"
                onAdd={() => {
                    navigate.push("/foster-child/child-background-info/cla-documentation/add-cla-documentation")
                  }}
            />
            <CustomTable
                data={data}
                columns={columns}
                isSuccess={true}
                //   isLoading={false}
                //   isFetching={false}
                //   currentPage={1}
                //   isError={false}
                // count={Math.ceil(data?.data?.meta?.total / limit)}
                onPageChange={(data: any) => {
                    console.log("Current page data: ", data);
                }}
                onSortByChange={(data: any) => {
                    console.log("Sort by: ", data);
                }}
            //   rootSX={{ my: theme.spacing(2) }}
            />
        </Card>
    )
}
