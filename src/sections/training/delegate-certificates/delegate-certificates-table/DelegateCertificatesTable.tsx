import { Card } from '@mui/material';
import CustomTable from '@root/components/Table/CustomTable';
import React from 'react'
import { useDelegateCertificatesTable } from './useDelegateCertificatesTable';
// import theme from '@root/theme';

const DelegateCertificatesTable = () => {
    const {tableHeaderRefTwo,headerChangeHandler,pageChangeHandler, sortChangeHandler, columns,TableData} = useDelegateCertificatesTable()
    return (
        // <Card sx={{ padding: "19px 10px 10px 10px" }}>
          <>
          
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
            //   rootSX={{ my: theme.spacing(2) }}
            />
          </>
        // </Card>
      )
}

export default DelegateCertificatesTable