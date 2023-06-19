import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import Layout from "@root/layouts";
import { useRouter } from "next/router";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SubstituteCarerTable from "@root/sections/carer-info/substitute-cares/SubstituteCarerTable";

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
  const title = "Swap Carer List";
  const FORMROUTE =
    "/carer-info/substitute-cares/swap-carer/swap-carer-details";
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
  const tableData = [
    {
      name: "test Name",
      phone: "090078601",
      level: "Level 1",
      status: "Living",
      familyDetails: "18 siblings",
    },
  ];
  const status = {
    isLoading: false,
    isFetching: false,
    isError: false,
    isSuccess: true,
  };
  const meta = {
    page: "1",
    pages: "1",
  };
  const viewDetailsHandler = (item: any) => {
    console.log(item);
  };
  const searchTextHandler = (item: any) => {
    console.log(item);
  };
  const pageChangeHandler = (item: any) => {
    console.log(item);
  };
  return (
    <SubstituteCarerTable
      columns={columns}
      tableData={tableData}
      meta={meta}
      title={title}
      searchedText={searchTextHandler}
      apiStatus={status}
      onPageChange={pageChangeHandler}
      route={FORMROUTE}
    />
  );
}
