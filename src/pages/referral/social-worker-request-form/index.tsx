import Layout from '@root/layouts';
import React, { useRef } from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import TableHeader from '@root/components/TableHeader';
import CustomTable from '@root/components/Table/CustomTable';
import { Box, Checkbox, Grid, Typography, useTheme } from "@mui/material";
import TableAction from '@root/components/TableAction';
import { useRouter } from 'next/router';
import DeleteModel from '@root/components/modal/DeleteModel';


export const SOCIAL_WORKER_TABLE_DATA = [
  {
      social_worker: "Palwasha",
      gender: "female",
      date_of_birth: 30/4/2011,
      status: "Placed",
      referral_date: 30/4/2011,
      referred_by:"Madiha",
      referred_role: "Social Worker"
  },
  {
      social_worker: "John",
      gender: "male",
      date_of_birth: 30/4/2011,
      status: "Current Referral",
      referral_date: 30/4/2011,
      referred_by:"khunsa",
      referred_role: "Social Worker"
  },
]

const PAGE_TITLE = "SW List";

SocialRequestForm.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Referral",
          href: "/referral",
        },
        {
          name: "Referral list",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function SocialRequestForm() {
  const tableHeaderRefTwo = useRef<any>();
  const navigate = useRouter()
  const theme: any = useTheme();

  // ----------------------------------------------------------------------
  const [data, setData] = React.useState(SOCIAL_WORKER_TABLE_DATA);
  const [openDelete, setOpenDelete] = React.useState(false)
  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        console.log(table.getSelectedRowModel().flatRows);
        return (
          <Box>
            <Checkbox
              checked={table.getIsAllRowsSelected()}
              onChange={table.getToggleAllRowsSelectedHandler()}
            />
          </Box>
        );
      },
      cell: ({ row, table }: any) => (
        <Box>
          <Checkbox
            disabled={row?.original?.Assigned}
            checked={row?.original?.Assigned ? false : row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        </Box>
      ),
    },
    {
      accessorFn: (row: any) => row.social_worker,
      id: "Social Worker",
      cell: (info: any) => info.getValue(),
      header: () => <span>Social Worker</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.gender,
      id: "Gender",
      cell: (info: any) => info.getValue(),
      header: () => <span>Gender</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.date_of_birth,
      id: "Date of birth",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date of birth</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.status,
      id: "Status",
      cell: (info: any) => info.getValue(),
      header: () => <span>Status</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.referral_date,
      id: "Referrals Date",
      cell: (info: any) => info.getValue(),
      header: () => <span>Referrals Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.referred_by,
      id: "Referred By",
      cell: (info: any) => info.getValue(),
      header: () => <span>Referred By</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.referred_role,
      id: "Referrer Role",
      cell: (info: any) => info.getValue(),
      header: () => <span>Referrer Role</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.actions,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction type="delete" onClicked={()=>setOpenDelete(true)} />
          <TableAction type="edit" onClicked={() => navigate.push("/referral/social-worker-request-form/add-social-worker?action=edit")} />
          <TableAction type="view" onClicked={() => navigate.push("/referral/social-worker-request-form/add-social-worker?action=view")} />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return (
    <Page title={PAGE_TITLE}>
      <TableHeader
        ref={tableHeaderRefTwo}
        title="Referrals"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          navigate.push("/referral/social-worker-request-form/add-social-worker")
        }}
      />
      <CustomTable
        data={data}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isPagination={false}
        isSuccess={true}
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
    <DeleteModel open={openDelete} handleClose={()=>setOpenDelete(false)} onDeleteClick={()=>setOpenDelete(false)}/>
    </Page>
  );
}
