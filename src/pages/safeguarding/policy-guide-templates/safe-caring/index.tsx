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

export const SAFE_CARING_POLICY_TABLE_DATA = [
  {
    safeguarding_policy_document: "PDF",
    uploaded_image:"height.PNG",
    date_uploaded: 12/11/2021,
    discription: "Safeguarding policy",
    version: "Version_12_02_423121345",
    author: "Tom Hanks",
    date_of_eSignature_of_author: 12/11/2021,
    creatorRole: "Director",
    creationTime: 12/11/2021,
    approver: "David due",
    approverRole: "Safegurad Officer",
    date_of_eSignature_of_approver: 12/11/2021,
    actions:"",
    lastModifiedBy: "Victor Krum",
    lastModifiedTime: 12/11/2021,
    cancelled: "no",
    CancelledBy: "10-02-2022 14:23:03",
    CancelledAt: "Ani Cristea",
  },
  {
    safeguarding_policy_document: "XLS",
    uploaded_image:"height.PNG",
    date_uploaded: "02/12/2021",
    discription: "Safeguarding policy",
    version: "Version_12_02_423121345",
    author: "Janifer Hoston",
    date_of_eSignature_of_author: 12/11/2021,
    creatorRole: "Manager",
    creationTime: 12/11/2021,
    approver: "Victor Krum ",
    approverRole: "Safegurad Officer",
    date_of_eSignature_of_approver: 12/23/2021,
    actions:"",
    lastModifiedBy: "Soan Bella",
    lastModifiedTime: 12/11/2021,
    cancelled: "no",
    CancelledBy: "10-02-2022 14:23:03",
    CancelledAt: "Ani Cristea",
  },
]


const PAGE_TITLE = "Safe Caring Policy List";

SafeCaring.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Safeguarding Panel",
          href: "/safeguarding",
        },
        {
          name: "Safe Caring Policy List",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function SafeCaring() {
  const tableHeaderRefTwo = useRef<any>();
  const navigate = useRouter()
  const theme: any = useTheme();

  // ----------------------------------------------------------------------
  const [data, setData] = React.useState(SAFE_CARING_POLICY_TABLE_DATA);
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
      accessorFn: (row: any) => row.safeguarding_policy_document,
      id: "Safeguarding-Policy-Document",
      cell: (info: any) => info.getValue(),
      header: () => <span>Safeguarding Policy Document</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.date_uploaded,
      id: "Date Uploaded",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date Uploaded</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.discription,
      id: "Discription",
      cell: (info: any) => info.getValue(),
      header: () => <span>Discription</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.version,
      id: "Version",
      cell: (info: any) => info.getValue(),
      header: () => <span>Version</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.author,
      id: "Author(Role)",
      cell: (info: any) => info.getValue(),
      header: () => <span>Author(Role)</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.approver,
      id: "Approver(Role)",
      cell: (info: any) => info.getValue(),
      header: () => <span>Approver(Role)</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.actions,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction type="view" onClicked={() => navigate.push("/safeguarding/policy-guide-templates/safe-caring/add-caring-policy?action=view")} />
          <TableAction type="delete" onClicked={()=>setOpenDelete(true)} />
          <TableAction type="edit" onClicked={() => navigate.push("/safeguarding/policy-guide-templates/safe-caring/add-caring-policy?action=edit")} />
          <TableAction type="download" onClicked={() => alert("Download")} /> 
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
        title="Safe Caring Policy For Looked After Children"
        searchKey="search"
        hideSearch
        showAddBtn
        onAdd={() => {
          navigate.push("/safeguarding/policy-guide-templates/safe-caring/add-caring-policy")
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