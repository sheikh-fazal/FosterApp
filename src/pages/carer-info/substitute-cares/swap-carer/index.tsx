import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import Layout from "@root/layouts";
import { useRouter } from "next/router";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";

// ----------------------------------------------------------------------
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Carer Info",
    href: "/carer-info",
  },
  {
    name: "Swap Carer",
    href: "/carer-info/substitute-cares/swap-carer",
  },
];

const PAGE_TITLE = "Swap Carer";
SwapCarer.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
      variant="dashboard"
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function SwapCarer() {
  const router = useRouter();
  const columns = [
    {
      accessorFn: (row: any) => row["name"],
      id: "name",
      cell: (info: any) =>
        info.getValue()?.length > 20
          ? ". . ." + info.getValue()?.slice(-15)
          : info.getValue(),
      header: () => <span>Name</span>,
    },
    {
      accessorFn: (row: any) => row["phone"],
      id: "phone",
      cell: (info: any) => info.getValue(),
      header: () => <span>Phone Number</span>,
    },
    {
      accessorFn: (row: any) => row["level"],
      id: "level",
      cell: (info: any) => info.getValue(),
      header: () => <span>Level</span>,
    },
    {
      accessorFn: (row: any) => row["status"],
      id: "status",
      cell: (info: any) => info.getValue(),
      header: "Status",
    },
    {
      accessorFn: (row: any) => row["familyDetails"],
      id: "familyDetails",
      cell: (info: any) => info.getValue(),
      header: "familyDetails",
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction type="edit" onClicked={() => {}} size="small" />
          <TableAction
            type="delete"
            onClicked={() => {
              console.log("delete this", info.row.original);
              alert("delete");
            }}
            size="small"
          />
          <TableAction
            type="view"
            onClicked={() => viewDetailsHandler(info)}
            size="small"
          />
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];

  const viewDetailsHandler = (rowData: any) => {};
  return (
    <>
      <TableHeader
        title="Swap Carer List"
        onChanged={() => {}}
        showAddBtn={true}
        onAdd={() =>
          router.push(
            "/carer-info/substitute-cares/swap-carer/swap-carer-details"
          )
        }
      />
      <CustomTable
        data={[
          {
            name: "test Name",
            phone: "090078601",
            level: "Level 1",
            status: "Living",
            familyDetails: "18 siblings",
          },
        ]}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        showSerialNo
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        // onSortByChange={(data: any) => {
        //   console.log("Sort by: ", data);
        // }}
      />
    </>
  );
}
