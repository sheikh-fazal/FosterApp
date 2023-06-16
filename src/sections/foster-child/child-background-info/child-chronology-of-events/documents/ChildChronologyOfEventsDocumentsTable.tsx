import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import UploadDocumentModal from "@root/sections/documents/UploadDocumentModal";
import dayjs from "dayjs";
import React, { useState } from "react";

const ChildChronologyOfEventsDocumentsTable = () => {
  const columns = [
     {
      accessorFn: (row: any) => row.documentName ?? "-",
      id: "documentName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentType ?? "-",
      id: "documentType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentDate ?? "-",
      id: "documentDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.personUploaded ?? "-",
      id: "personUploaded",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Person Uploaded</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.password ?? "-",
      id: "password",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>password</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction size="small" type="download" onClicked={() => {}} />
          {/* Delete Modal */}

          <TableAction size="small" type="view" onClicked={() => {}} />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  const [openModal, setOpenModal] = useState(false);
  return  <>
  {/* <button onClick={()=>setOpenModal(true)}>asd</button> */}
  <TableHeader
  // ref={tableHeaderRefTwo}
  title="Uploaded Documents"
  searchKey="search"
 
  // onChanged={(event: any) => {
    //   setSearch(event.search);
    // }}
/>
<CustomTable
showSerialNo
        data={[]}
        columns={columns}
        // isLoading={carInsuranceListIsloading}
        // isFetching={carInsuranceListIsfetching}
        // isError={carInsuranceListError}
        // isSuccess={carInsuranceListIsSuccess}
        // totalPages={meta?.pages ?? 0}
        // currentPage={meta?.page ?? 1}
        // onPageChange={pageChangeHandler}
        // onSortByChange={sortChangeHandler}
      />
      <UploadDocumentModal closeModal={setOpenModal} readOnly
        openModal={openModal} formData={(data: any) => {
          // modalData(data);
        }}/>
    </>
};

export default ChildChronologyOfEventsDocumentsTable;
