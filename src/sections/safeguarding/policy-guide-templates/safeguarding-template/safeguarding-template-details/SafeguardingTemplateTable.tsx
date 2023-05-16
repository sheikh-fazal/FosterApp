import { Box, Checkbox, FormControlLabel, FormGroup, Grid, Typography, useTheme } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import React from "react";
import { useRouter } from "next/router";

const SafeguardingTemplateTable = () => {
  const theme: any = useTheme();
  let router = useRouter();
  const [data, setData] = React.useState([
    {
      templateName: "CCE Template.pdf",
      uploadedDate: "12.11.2021",
      description: "Safeguarding policy incorporated changes",
      version: "Version_13.01_12112021",
      authorRole: "Victor Krum (Safeguarding Officer)",
      approverRole: "Tom Hanks (Director)",
    },
    {
      templateName: "CSE Template.pdf",
      uploadedDate: "12.11.2021",
      description: "Safeguarding policy incorporated changes",
      version: "Version_13.01_12112021",
      authorRole: "Victor Krum (Safeguarding Officer)",
      approverRole: "Tom Hanks (Director)",
    },
    {
      templateName: "CCE Template.pdf",
      uploadedDate: "12.11.2021",
      description: "Safeguarding policy incorporated changes",
      version: "Version_13.01_12112021",
      authorRole: "Victor Krum (Safeguarding Officer)",
      approverRole: "Tom Hanks (Director)",
    },
  ]);
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
      accessorFn: (row: any) => row.templateName,
      id: "templateName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Template name</span>,
    },
    {
      accessorFn: (row: any) => row.uploadedDate,
      id: "uploadedDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date Uploaded</span>,
    },
    {
      accessorFn: (row: any) => row.description,
      id: "description",
      cell: (info: any) => info.getValue(),
      header: () => <span>Description</span>,
    },
    {
      accessorFn: (row: any) => row.version,
      id: "version",
      cell: (info: any) => info.getValue(),
      header: () => <span>Version</span>,
    },
    {
      accessorFn: (row: any) => row.authorRole,
      id: "authorRole",
      cell: (info: any) => info.getValue(),
      header: () => <span>Author (Role)</span>,
    },
    {
      accessorFn: (row: any) => row.approverRole,
      id: "approverRole",
      cell: (info: any) => <Box>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked sx={{ paddingBlock: 0 }} />} label="Tom Hanks (Director)" />
          <FormControlLabel control={<Checkbox defaultChecked sx={{ paddingBlock: 0 }} />} label="Snape Roy (Registered Manager)" />
        </FormGroup>
      </Box>,
      header: () => <span>Approver (Role)</span>,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="view"
            onClicked={() => router.push("/safeguarding/policy-guide-templates/safeguarding-template/safeguarding-template-details/view-template")}
          // onClicked={() =>console.log(info,'info')}
          />

          <TableAction
            type="edit"
            onClicked={() => router.push("/safeguarding/policy-guide-templates/safeguarding-template/safeguarding-template-details/edit-template")
          }
          />
          <TableAction type="delete" onClicked={() => alert("Delete")} />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
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
export default SafeguardingTemplateTable