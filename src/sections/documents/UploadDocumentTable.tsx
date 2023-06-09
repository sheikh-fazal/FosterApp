/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import UploadDocumentModal from "./UploadDocumentModal";
import DeleteModel from "@root/components/modal/DeleteModel";

// ----------------------------------------------------------------------

const DownloadFile = ({ url }: any) => {
  useEffect(() => {
    const downloadFile = async () => {
      const response = await fetch(url);
      const blob = await response.blob();
      console.log(blob);

      // Create a temporary anchor element
      const tempLink = document.createElement("a");
      tempLink.href = URL.createObjectURL(blob);
      tempLink.download = "file";

      // Simulate a click event
      tempLink.dispatchEvent(new MouseEvent("click"));

      // Clean up
      URL.revokeObjectURL(tempLink.href);
    };

    downloadFile();
  }, [url]);

  return null; // or your desired JSX
};

export default DownloadFile;

export const UploadDocumentTable = (props: any) => {
  const {
    readOnly,
    tableData,
    isLoading,
    isFetching,
    isError,
    isSuccess,
    column,
    onPageChange,
    currentPage,
    totalPages,
  }: any = props;

  // ----------------------------------------------------------------------
  const [modalHasData, setModalHasData] = useState(false);
  const [openDeleteModalHasData, setOpenDeleteModalHasData] = useState(false);

  const downloadHandler = async (url: any) => {
    const response = await fetch(url);
    const blob = await response.blob();
    // Create a temporary anchor element
    const tempLink = document.createElement("a");
    tempLink.href = URL.createObjectURL(blob);
    tempLink.download = "file";
    // Simulate a click event
    tempLink.dispatchEvent(new MouseEvent("click"));
    // Clean up
    URL.revokeObjectURL(tempLink.href);
  };
  const deleteRowHandler = () => {
    console.log(openDeleteModalHasData);
    // onDelete(openDeleteModalHasData);
    setTimeout(() => {
      setOpenDeleteModalHasData(false);
    }, 1000);
  };
  const columns = [
    // {
    //   id: "select",
    //   header: ({ table, row }: any) => {
    //     console.log(table);
    //     return (
    //       <Box>
    //         <Checkbox
    //           indeterminate={table.getIsSomeRowsSelected()}
    //           checked={table.getIsAllRowsSelected()}
    //           onChange={table.getToggleAllRowsSelectedHandler()}
    //         />
    //       </Box>
    //     );
    //   },
    //   cell: ({ row, table }: any) => (
    //     <Box>
    //       <Checkbox
    //         disabled={row?.original?.Assigned}
    //         checked={row?.original?.Assigned ? false : row.getIsSelected()}
    //         onChange={row.getToggleSelectedHandler()}
    //       />
    //     </Box>
    //   ),
    // },
    {
      accessorFn: (row: any) => row[column[0]],
      id: "document",
      cell: (info: any) =>
        info.getValue()?.length > 20
          ? ". . ." + info.getValue()?.slice(-15)
          : info.getValue(),
      header: () => <span>Document Name</span>,
      // isSortable: true,
    },
    {
      accessorFn: (row: any) => row[column[1]],
      id: "Document Type",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Type</span>,
      // isSortable: true,
    },
    {
      accessorFn: (row: any) => row[column[2]],
      id: "date",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Date</span>,
    },
    {
      accessorFn: (row: any) => row[column[3]],
      id: "personName",
      cell: (info: any) => info.getValue(),
      header: "Person Uploaded",
    },
    {
      accessorFn: (row: any) => row[column[4]],
      id: "password",
      cell: (info: any) => {
        let j = [];
        for (let i = 0; i < info.getValue()?.length; i++) {
          j.push("*");
        }
        return j;
      },
      header: "Password",
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {/* Can move it outside of the table if need arises */}
          <TableAction
            type="view"
            onClicked={() => setModalHasData(info)}
            size="small"
          />
          {!readOnly && (
            <TableAction
              type="delete"
              onClicked={() => {
                console.log("delete this", info.row.original);
                setOpenDeleteModalHasData(info.row.original);
              }}
              size="small"
            />
          )}
          <TableAction
            type="download"
            onClicked={() =>
              downloadHandler(
                "https://ifa-s3-public-dev-001.s3.eu-west-2.amazonaws.com/" +
                  info.row.original[column[0]]
              )
            }
            size="small"
          />
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];

  return (
    <Grid container>
      <UploadDocumentModal
        readOnly={true}
        openModal={modalHasData}
        column={column}
        content={modalHasData}
        closeModal={(state: boolean) => {
          setModalHasData(state);
        }}
      />
      <DeleteModel
        open={openDeleteModalHasData}
        handleClose={() => setOpenDeleteModalHasData(false)}
        onDeleteClick={deleteRowHandler}
      />
      <CustomTable
        data={tableData}
        columns={columns}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        showSerialNo
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        // onSortByChange={(data: any) => {
        //   console.log("Sort by: ", data);
        // }}
      />
    </Grid>
  );
};
