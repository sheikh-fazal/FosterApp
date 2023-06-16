import { Card, Grid } from '@mui/material';
import CustomTable from '@root/components/Table/CustomTable';
import TableHeader from '@root/components/TableHeader';
import React from 'react'
import { data } from '.';
import { useSomeoneElseAdvocacyForm } from './useSomeoneElseAdvocacyForm';

const SomeoneElseAdvocacyForm = () => {
    const { columns, theme, tableHeaderRefThree, router } = useSomeoneElseAdvocacyForm();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Card sx={{ p: 1 }}>
                    <TableHeader
                        ref={tableHeaderRefThree}
                        title="Child Advocacy"
                        searchKey="search"
                        showSelectFilters
                        showAddBtn
                        onAdd={() => router.push('/advocacy/child-advocacy/child-details/someone-else-advocacy-form/create-advocacy')}
                        onChanged={(data: any) => {
                            console.log("Updated params: ", data);
                        }}
                    />
                    <CustomTable
                        data={data}
                        columns={columns}
                        isLoading={false}
                        isFetching={false}
                        isError={false}
                        isSuccess={true}
                        isPagination={false}
                        onSortByChange={(data: any) => {
                            console.log("Sort by: ", data);
                        }}
                        rootSX={{ mt: theme.spacing(2) }}
                    />
                </Card>
            </Grid>
        </Grid>
    )
}

export default SomeoneElseAdvocacyForm