import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TextField, Select, MenuItem, Checkbox, Card, Box, Typography, useTheme } from "@mui/material";
import { Check, Close } from "@mui/icons-material";
import DeleteIcon from "../../assets/svg/safeguarding/delete.svg";
import EditIcon from "../../assets/svg/safeguarding/edit.svg";
import AddIcon from "../../assets/svg/add-icon.svg";
import Image from "next/image";

const certificateManagementData = [
  { courseId: "66", courseName: "Child Protection", certificateRequired: "Yes", approver: "Draco ( Director)", digitalSignature: "Yes", notification: "Social Worker" },
  { courseId: "67", courseName: "Child Protection", certificateRequired: "Yes", approver: "Draco ( Director)", digitalSignature: "Yes", notification: "Social Worker" },
];

const EditableTable = ({ columns, headers, isAddButtonHide }: any) => {
  const [rows, setRows] = useState<any>(certificateManagementData);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [newRow, setNewRow] = useState(false);
  const [newRowData, setNewRowData] = useState<any>({});
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const theme = useTheme();

  const handleAddRow = () => {
    if (Object.values(newRowData).length === Object.keys(rows && rows[0]).length) {
      setRows([...rows, newRowData]);
      setNewRow(false);
      setNewRowData({});
    }
  };

  const handleDeleteRow = (index: any) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };


  const handleCellChange = (index: any, key: any, value: any) => {
    const updatedRows = [...rows];
    const currentRow = updatedRows[index];
    if (currentRow[key] === value) {
      return;
    }
    currentRow[key] = value;
    setRows(updatedRows);
  };

  const handleNewRowDataChange = (key: any, value: any) => {
    const newData = { [key]: value };
    setNewRowData((prevData: any) => ({
      ...prevData,
      ...newData,
    }));
  };

  const handleEditRow = (index: any) => {
    const updatedRows = [...rows];
    const editedRow = updatedRows[index];
    if (Object.values(newRowData).length === Object.keys(rows && rows[0]).length && !Object.values(newRowData).some((value: any) => !value)) {
      updatedRows[index] = { ...editedRow, ...newRowData };
    }
    setRows(updatedRows);
    setEditingIndex(-1);
    setNewRowData({});
  };

  const handleRowSelect = (index: any) => {
    const selectedIndex = selectedRows.indexOf(index);
    let updatedSelectedRows = [];
    if (selectedIndex === -1) {
      updatedSelectedRows = [...selectedRows, index];
    } else {
      updatedSelectedRows = selectedRows.filter((i: any) => i !== index);
    }

    setSelectedRows(updatedSelectedRows);
  };

  // const isAddButtonDisabled = Object?.values(newRowData)?.some((value: any) => !value) || Object?.values(newRowData).length !== Object?.keys(rows && rows[0]).length;
  const isAddButtonDisabled =
  Object.values(newRowData).some((value: any) => !value) ||
  Object.keys(newRowData).length !== Object.keys(rows && rows[0]).length ||
  Object.keys(newRowData).length === 0;


  const isEditButtonDisabled = (index: any) => {
    const row = rows[index];
    const isAnyFieldEmpty = Object.values(row).some((value) => value === "");
    return isAnyFieldEmpty;
  };

  return (
    <Card sx={{ p: 2 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={styles.headerCell}>
                <Checkbox
                  indeterminate={selectedRows.length > 0 && selectedRows.length < rows.length}
                  checked={selectedRows.length === rows.length && rows.length > 0}
                  onChange={() => setSelectedRows(selectedRows.length === rows.length ? [] : Array.from({ length: rows.length }, (_, index) => index))}
                  size="small"
                />
              </TableCell>

              {headers.map((header: any, index: any) => (
                <TableCell key={index} sx={styles.headerCell} >
                  {header}
                </TableCell>
              ))}

              <TableCell sx={styles.headerCell}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any, index: any) => (
              <TableRow key={index}>
                <TableCell sx={{ pl: "16px !important" }}>
                  <Checkbox size="small" checked={selectedRows.includes(index)} onChange={() => handleRowSelect(index)} />
                </TableCell>
                {columns.map((column: any, columnIndex: any) => (
                  <TableCell key={columnIndex}>
                    {editingIndex === index ? (
                      column.type === "dropdown" ? (
                        <Select value={row[column.id] || ""} onChange={(e) => handleCellChange(index, column.id, e.target.value)} sx={styles.selectWrap} size="small">
                          {column.options.map((option: any, optionIndex: any) => (
                            <MenuItem key={optionIndex} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      ) : (
                        <TextField value={row[column.id] || ""} size="small" onChange={(e) => handleCellChange(index, column.id, e.target.value)} />
                      )
                    ) : (
                      row[column.id]
                    )}
                  </TableCell>
                ))}
                <TableCell>
                  {editingIndex === index ? (
                    <>
                      <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <IconButton onClick={() => handleEditRow(index)} aria-label="save" sx={{ p: "0 !important" }} disabled={isEditButtonDisabled(index)}>
                          <Check />
                        </IconButton>
                        <IconButton onClick={() => { setEditingIndex(-1); setNewRowData(row); }} aria-label="cancel" sx={{ p: "0 !important" }}>
                          <Close />
                        </IconButton>
                      </Box>
                    </>
                  ) : (
                    <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <Image src={DeleteIcon} alt="" onClick={handleDeleteRow} style={{ cursor: "pointer" }} />
                      <Image src={EditIcon} alt="" onClick={() => setEditingIndex(index)} style={{ cursor: "pointer" }} />
                    </Box>
                  )}
                </TableCell>
              </TableRow>
            ))}


            {newRow && (
              <TableRow>
                <TableCell sx={{ pl: "16px !important" }}>
                  <Checkbox checked={false} size="small" />
                </TableCell>
                {columns.map((column: any, index: any) => (
                  <TableCell key={index}>
                    {column.type === "dropdown" ? (
                      <Select value={newRowData[column.id] || ""} sx={styles.selectWrap} onChange={(e) => handleNewRowDataChange(column.id, e.target.value)} size="small">
                        {column.options.map((option: any, optionIndex: any) => (
                          <MenuItem key={optionIndex} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    ) : (
                      <TextField value={newRowData[column.id] || ""} onChange={(e) => handleNewRowDataChange(column.id, e.target.value)} size="small" />
                    )}
                  </TableCell>
                ))}
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <IconButton aria-label="save" sx={{ p: "0 !important" }} onClick={handleAddRow} disabled={isAddButtonDisabled}>
                      <Check />
                    </IconButton>
                    <IconButton aria-label="cancel" sx={{ p: "0 !important" }} onClick={() => setNewRow(false)}>
                      <Close />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {isAddButtonHide &&
        <Box sx={styles.addNewWrapper} onClick={() => setNewRow(true)}>
          <Image src={AddIcon} alt="" />
          <Typography sx={styles.addNewHeading(theme.palette.mode)}>Add New</Typography>
        </Box>
      }

    </Card>
  );
};

export default EditableTable;

const styles = {
  headerCell: { boxShadow: "none !important", p: "10px 16px !important" },
  selectWrap: { width: "100%", minWidth: "200px !important" },
  addNewWrapper: { display: "inline-flex", alignItems: "center", gap: "8px", mt: "20px", cursor: "pointer" },
  addNewHeading: (mode: any) => ({ fontSize: "14px", fontWeight: "700", color: mode === "light" ? "#1D1D1D" : "#fff" }),
};
