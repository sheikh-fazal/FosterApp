import { Box, TableContainer } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";

const SafeguardingRole = ({ filteredData }: any) => {
  const columns = [
    {
      accessorFn: (row: any) => row.name,
      id: "name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.role,
      id: "role",
      cell: (info: any) => info.getValue(),
      header: () => <span>Role</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.safeguardingRole,
      id: "safeguardingRole",
      cell: (info: any) => info.getValue(),
      header: () => <span>Department</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.branch,
      id: "branch",
      cell: (info: any) => info.getValue(),
      header: () => <span>Branch</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.businessPhone,
      id: "businessPhone",
      cell: (info: any) => info.getValue(),
      header: () => <span>Business Phone</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.email,
      id: "email",
      cell: (info: any) => info.getValue(),
      header: () => <span>Email</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.mobile,
      id: "mobile",
      cell: (info: any) => info.getValue(),
      header: () => <span>Mobile</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.company,
      id: "company",
      cell: (info: any) => info.getValue(),
      header: () => <span>Company</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.address,
      id: "address",
      cell: (info: any) => info.getValue(),
      header: () => <span>Address</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.postCode,
      id: "postCode",
      cell: (info: any) => info.getValue(),
      header: () => <span>Postcode</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.country,
      id: "country",
      cell: (info: any) => info.getValue(),
      header: () => <span>Country</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.colorCode,
      id: "colorCode",
      cell: (info: any) => info.getValue(),
      header: () => <span>Color Code</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction type="edit" />
          <TableAction type="delete" onClicked={() => alert("delete")} />
        
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  return (
    <TableContainer>
      <CustomTable
        data={filteredData}
        rootSX={{ overflowX: "scroll" }}
        columns={columns}
        isSuccess={true}
        currentPage={1}
        onPageChange={(data: any) => {
          console.log("Current page data: ", data);
        }}
        onSortByChange={(data: any) => {
          console.log("Sort by: ", data);
        }}
      />
    </TableContainer>
  );
};
export default SafeguardingRole;