import React, { Fragment, useEffect, useState } from "react";
import { Box, Checkbox, useTheme } from "@mui/material";
import PolicyVerticalTabs from "@root/components/PolicyVerticalTabs/PolicyVerticalTabs";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import { useRouter } from "next/router";
import ChecklistPolicy from "./ChecklistPolicy/ChecklistPolicy";

const PolicyVerticalTable = (props: any) => {
  const { data, addNewTabNavigation } = props;
  const [actionId, setActionId] = useState<any>();
  const filteredData = data.filter((item: any) =>
    item?.innerData.some((data: any) => data?.id === actionId)
  );
  console.log("filteredData", filteredData);
  const navigate = useRouter();
  const theme = useTheme();
  // useEffect(() => {},[actionId])

  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
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
      accessorFn: (row: any) => row.no,
      id: "Sr. No",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.title,
      id: "Title",
      cell: (info: any) => info.getValue(),
      header: () => <span>Title</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dateUploaded,
      id: "Date Uploaded",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date Uploaded</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.author,
      id: "Author",
      cell: (info: any) => info.getValue(),
      header: () => <span>Author</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentType,
      id: "Document Type",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.version,
      id: "Versions",
      cell: (info: any) => info.getValue(),
      header: () => <span>Versions</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box display={"flex"} gap={0.5}>
          <TableAction
            type="view"
            onClicked={() => {
              setActionId(String(info.row.original.id));
              navigate.push({
                pathname: addNewTabNavigation,
                query: {
                  id: info.row.original.id,
                  name: filteredData?.title,
                  action: "view",
                },
              });
            }}
          />
          <TableAction type="print" />
          <TableAction type="download" />
        </Box>
      ),
      header: () => <span>actions</span>,
    },
  ];

  return (
    <>
      <PolicyVerticalTabs
        tabsDataArray={data}
        handleAddTabs={() => navigate.push(addNewTabNavigation)}
      >
        {data?.map((item: any) => (
          <Fragment key={item?.index}>
            {item?.title === "General Data Protection Checklist" ? (
              <ChecklistPolicy />
            ) : (
              <>
                <TableHeader
                  title={item.title}
                  showAddBtn
                  onAdd={() =>
                    navigate.push({
                      pathname: addNewTabNavigation,
                      query: { name: item.title, action: "add" },
                    })
                  }
                />
                <CustomTable
                  data={item.innerData}
                  columns={columns}
                  isLoading={false}
                  isFetching={false}
                  isError={false}
                  isSuccess={true}
                  currentPage={1}
                  onPageChange={(data: any) => {
                    console.log("Current page data: ", data);
                  }}
                  onSortByChange={(data: any) => {
                    console.log("Sort by: ", data);
                  }}
                  rootSX={{ my: theme.spacing(2) }}
                />
              </>
            )}
          </Fragment>
        ))}
      </PolicyVerticalTabs>
    </>
  );
};

export default PolicyVerticalTable;
