import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import TableAction from "@root/components/TableAction";
import { Box } from "@mui/material";
import SubstituteCarerTable from "@root/sections/carer-info/substitute-cares/SubstituteCarerTable";
import { useGetSelectedSubstituteCarerQuery } from "@root/services/carer-info/substitute-carers/substituteCarerApi";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import usePath from "@root/hooks/usePath";

// ----------------------------------------------------------------------

const PAGE_TITLE = "Backup Carer";

BackupCarer.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function BackupCarer() {
  const { makePath } = usePath();
  const router = useRouter();
  const id = router?.query?.fosterCarerId;

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Carer Info",
      href: makePath({
        path: "/carer-info",
      }),
    },
    {
      name: "Backup Carer",
      href: "/carer-info/substitute-cares/backup-carer",
    },
  ];

  const { data } = useGetSelectedSubstituteCarerQuery({
    limit: "10",
    offset: "0",
    type: "BC",
  });

  const title = "Backup Carer List";
  const FORMROUTE =
    "/carer-info/substitute-cares/backup-carer/backup-carer-details";
  const columns = [
    {
      accessorFn: (row: any) => row["firstName"],
      id: "firstName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name</span>,
    },
    {
      accessorFn: (row: any) => row["telephone"],
      id: "telephone",
      cell: (info: any) => info.getValue(),
      header: () => <span>Phone Number</span>,
    },
    {
      accessorFn: (row: any) => row["level"],
      id: "level",
      // to be changed later
      cell: (info: any) => (info.getValue() ? "Level 1" : "Level 2"),
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
            onClicked={() => viewDetailsHandler(info.row.original)}
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
    router.push(`${FORMROUTE}?carerId=${item.id}`);
  };
  const searchTextHandler = (item: any) => {
    console.log(item);
  };
  const pageChangeHandler = (item: any) => {
    console.log(item);
  };
  console.log(data);
  return (
    <>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
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
    </>
  );
}
