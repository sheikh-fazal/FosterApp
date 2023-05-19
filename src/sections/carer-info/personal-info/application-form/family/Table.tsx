import { Grid, Typography, useTheme } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import React from "react";

export function FamilyTable() {
  const theme: any = useTheme();

  const [data, setData] = React.useState([
    {
      srNo: "U4721XBUCA",
      memberName: "Sijo Francis",
      dob: "02-30-20",
      relation: "Brother",
      subject: "",
      isLivingAtHome: "Yes",
    },
    {
      srNo: "U3721XBUCB",
      memberName: "Sijo Francis",
      dob: "02-30-20",
      relation: "Brother",
      subject: "",
      isLivingAtHome: "Yes",
    },
  ]);
  const columns = [
    {
      accessorFn: (row: any) => row.srNo,
      id: "Sr. No",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.memberName,
      id: "member_name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Member Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dob,
      id: "dob",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date of Birth</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.relation,
      id: "relation",
      cell: (info: any) => info.getValue(),
      header: () => <span>Relation</span>,
    },
    {
      accessorFn: (row: any) => row.subject,
      id: "subject",
      cell: (info: any) => info.getValue(),
      header: () => <span>Subject</span>,
    },
    {
      accessorFn: (row: any) => row.isLivingAtHome,
      id: "is_living_at_home",
      cell: (info: any) => info.getValue(),
      header: () => <span>Is Living at home</span>,
    },
  ];
  return (
    <Grid container>
      <Grid xs={12} item>
        <CustomTable
          data={data}
          columns={columns}
          isLoading={false}
          isFetching={false}
          isError={false}
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
      </Grid>
    </Grid>
  );
}
