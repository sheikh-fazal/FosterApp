import React, { useRef, useState } from "react";

// Tantack table
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

// components
import TableSkeleton from "./TableSkeleton";
import NoContentFound from "./NoContentFound";
import IsFetching from "../loaders/IsFetching";

// @mui
import { alpha, styled, useTheme } from "@mui/material/styles";
import {
  Grid,
  TableCell,
  Typography,
  Pagination,
  TableRow,
  TableHead,
  TableContainer,
  TableBody,
  Table,
  Box,
  tableCellClasses,
  TextField,
} from "@mui/material";

// @mui icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// ----------------------------------------------------------------------
// types
type TTable = {
  columns: any;
  data: any;
  isLoading?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  isFetching?: boolean;
  isPagination?: boolean;
  totalPages?: number;
  maxHeight?: number;
  minHeight?: number;
  currentPage?: number;
  onPageChange?: any;
  onSortByChange?: any;
  tableContainerSX?: any;
  showSerialNo?: boolean;
  rootSX?: any;
  editable?: boolean;
  setData?: any;
};

// ----------------------------------------------------------------------
// constant
const EMPTY_ARRAY: [] = [];

// ----------------------------------------------------------------------
// component
const CustomEditableTable = (props: TTable) => {
  const {
    columns,
    data,
    isFetching = false,
    isLoading = false,
    isError = false,
    isSuccess = false,
    totalPages = 1,
    currentPage = 1,
    onPageChange,
    onSortByChange,
    isPagination = true,
    tableContainerSX = {},
    rootSX = {},
    setData = () => {},
    editable = false,
    showSerialNo = false,
  } = props;

  const [rowSelection, setRowSelection] = React.useState({});
  const [load, setload] = React.useState(false);
  const theme: any = useTheme();
  // Handling sort using useRef
  const refSortData = (() => {
    const sortDataMap: any = {};
    for (const colData of columns) {
      if (colData.isSortable) sortDataMap[colData?.id] = 0;
    }
    return sortDataMap;
  })();

  const sortRef = useRef(refSortData);

  const handleSortBy = (colId: string) => {
    sortRef.current[colId]++;

    if (sortRef.current[colId] % 2 === 1)
      onSortByChange({ id: colId, sortOrder: 1 });
    else onSortByChange({ id: colId, sortOrder: -1 });
  };

  let columnsData = columns;

  if (showSerialNo)
    columnsData = [
      {
        accessorFn: (row: any) => row,
        id: "srNo",
        cell: (info: any) => Number(info?.row?.id) + 1,
        header: "Sr. No",
        isSortable: false,
      },
      ...columns,
    ];
  const def = {
    cell: ({
      getValue,
      row: { index },
      column: { id },
      table,
    }: {
      getValue: any;
      row: any;
      column: any;
      table: any;
    }) => {
      const initialValue = getValue();
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [value, setValue] = React.useState(initialValue);

      const onBlur = () => {
        table.options.meta?.updateData(index, id, value);
      };
      // eslint-disable-next-line react-hooks/rules-of-hooks
      React.useEffect(() => {
        setValue(initialValue);
      }, [initialValue]);
      return (
        <TextField
          id="filled-hidden-label-normal"
          defaultValue="Normal"
          variant="outlined"
          inputProps={{ min: 0, style: { textAlign: "center" } }}
          sx={{
            background: "transparent",

            "& .MuiOutlinedInput-root ": {
              "& fieldset": {
                borderColor: "transparent",
                textAlign: "right",
              },
              "&:hover fieldset": {
                borderColor: "transparent",
              },
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.primary.main,
              },
            },
          }}
          value={value as string}
          onChange={(e) => setValue(e.target.value)}
          onBlur={onBlur}
        />
      );
    },
  };
  const table = useReactTable({
    data: data ?? EMPTY_ARRAY,
    columns: columnsData,
    defaultColumn: editable === true ? def : undefined,
    meta:
      editable === true
        ? {
            updateData: (rowIndex: any, columnId: any, value: any) => {
              
              setData((old: any) =>
                old.map((row: any, index: any) => {
                  if (index === rowIndex) {
                    return {
                      ...old[rowIndex]!,
                      [columnId]: value,
                    };
                  }
                  return row;
                })
              );
          
            },
          }
        : undefined,
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
  });

  const isSorted = (colId: string) => {
    return sortRef.current[colId] % 2 === 1;
  };

  if (isLoading) return <TableSkeleton />;
  return (
    <Grid container sx={{ position: "relative", ...rootSX }}>
      <IsFetching isFetching={isFetching || load} />
      <Grid xs={12} item>
        {/* Table Container */}
        <Box sx={{ overflowX: "auto" }}>
          <TableContainer sx={styles.tableContainer(tableContainerSX, theme)}>
            <Table stickyHeader>
              <TableHead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <StyledTableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header: any) => (
                      <StyledTableCell key={header.id}>
                        <Box
                          onClick={() =>
                            header.column.columnDef.isSortable &&
                            handleSortBy(header?.id)
                          }
                          sx={styles.cell}
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                          {header.column.columnDef.isSortable &&
                            !isSorted(header.id) && <KeyboardArrowDownIcon />}
                          {header.column.columnDef.isSortable &&
                            isSorted(header.id) && <KeyboardArrowUpIcon />}
                        </Box>
                      </StyledTableCell>
                    ))}
                  </StyledTableRow>
                ))}
              </TableHead>

              {isSuccess && table.getRowModel().rows.length > 0 && (
                <TableBody>
                  {table.getRowModel().rows?.map((row) => (
                    <StyledTableRow key={row?.id}>
                      {row.getVisibleCells().map((cell) => (
                        <StyledTableCell key={cell?.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </StyledTableCell>
                      ))}
                    </StyledTableRow>
                  ))}
                </TableBody>
              )}
            </Table>
            {(isError || table.getRowModel().rows.length === 0) && (
              <Grid container sx={styles.error}>
                <Grid item width={200}>
                  <NoContentFound />
                </Grid>
              </Grid>
            )}
          </TableContainer>
        </Box>

        {/* Pagination */}
        <Grid container>
          <Grid xs={12} item>
            {isSuccess && Boolean(table?.getRowModel()?.rows?.length) && (
              <Box sx={styles.currentPageBox}>
                {isPagination && (
                  <Typography sx={styles.currentPage(theme)} component={"span"}>
                    Showing {currentPage} of {totalPages}
                  </Typography>
                )}
                {isPagination && (
                  <Box sx={{ marginLeft: "auto" }}>
                    <Pagination
                      sx={styles.pagination}
                      showFirstButton
                      showLastButton
                      hidePrevButton
                      hideNextButton
                      size="small"
                      variant="outlined"
                      shape="rounded"
                      count={totalPages}
                      page={currentPage}
                      onChange={(e, page) => {
                        onPageChange(page);
                      }}
                    />
                  </Box>
                )}
              </Box>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomEditableTable;
// ----------------------------------------------------------------------
// STYLED COMPONENTS
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "unset",
    color: theme.palette.grey[600],
    textAlign: "center",
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
    backgroundImage: "unset",
    textTransform: "capitalize",
    fontSize: 14,
    whiteSpace: "nowrap",
    borderBottom: "none",
    cursor: "pointer",
    zIndex: "1",
  },
  [`&.${tableCellClasses.root}`]: {
    boxShadow: "unset !important",
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
    color: theme.palette.grey[600],
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
    textAlign: "center",
    borderBottom: "none",
    whiteSpace: "pre-wrap",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    background:
      theme.palette.mode === "light"
        ? alpha(theme.palette.primary.main, 0.12)
        : theme.palette.grey[700],
  },

  // hide last border
  " &:last-child th": {
    background:
      theme.palette.mode === "light"
        ? alpha(theme.palette.primary.main, 0.45)
        : theme.palette.grey[700],
    backdropFilter: "blur(20px)",
    border: 0,
    borderRadius: 0,
  },
  "&:first-of-type": {
    boxShadow: "unset",
  },
}));

// ----------------------------------------------------------------------
// styles

const styles = {
  tableContainer: (tableContainerSX: any, theme: any) => ({
    "&::-webkit-scrollbar": {
      width: 10,
      height: 10,
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.primary.main,
      borderRadius: 2,
    },
    mt: theme.palette.mode === "dark" ? 0.5 : 0,
    backgroundColor:
      theme.palette.mode === "light" ? "#F8FCFF" : theme.palette.grey[800],
    ...tableContainerSX,
  }),
  cell: {
    display: "flex",
    justifyContent: "center",
  },
  currentPageBox: {
    display: "flex",
    my: "15px",
    px: "25px",
    alignItems: "center",
  },
  currentPage: (theme: any) => ({
    color: theme.palette.grey[600],
    fontSize: "12px",
    fontFamily: theme.typography.fontFamily,
  }),
  error: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  pagination: (theme: any) => ({
    ".Mui-selected": {
      backgroundColor: `${theme.palette.primary.main} !important`,
      color: "#FFFFFF",
    },
  }),
};
