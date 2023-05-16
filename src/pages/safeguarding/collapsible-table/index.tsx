import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Checkbox } from '@mui/material';
import TableAction from '@root/components/TableAction';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';


export default function CollapsibleTable(props: any) {
  const { handleCheckbox, handleView, handleEdit, handleDelete, tableData, column, innerColumn } = props;
  const columns = [
    { id: '1', title: 'title 1', render: (data: any) => <span>{data?.name}</span> },
    { id: '2', title: 'title 1', render: (data: any) => <span>{data?.name}</span> },
    { id: '3', title: 'title 1', render: (data: any) => <span>{data?.name}</span> },
    { id: '4', title: 'title 1', render: (data: any) => <span>{data?.name}</span> },
    { id: '5', title: 'title 1', render: (data: any) => <span>{data?.name}</span> },
  ]
  const innerColums = [
    { id: '1', title: 'inner title 1', render: (data: any) => <span>{data?.title}</span> },
    { id: '2', title: 'inner title 1', render: (data: any) => <span>{data?.title}</span> },
    { id: '3', title: 'inner title 1', render: (data: any) => <span>{data?.title}</span> },
    { id: '4', title: 'inner title 1', render: (data: any) => <span>{data?.title}</span> },
    { id: '5', title: 'inner title 1', render: (data: any) => (<span>{data?.title}</span>) },
  ]

  const rowsData = [
    {
      _id: '1',
      name: 'name',
      desc: 'fesdfsdf',
      age: 20,
      gender: 'male',
      dob: '12345',
      subData: [
        {
          id: '1',
          name: 'name',
          title: 'title'
        }
      ]
    },
    {
      _id: '2',
      name: 'name',
      desc: 'fesdfsdf',
      age: 20,
      gender: 'male',
      dob: '12345',
      subData: [
        {
          id: '1',
          name: 'name',
          title: 'title'
        }
      ]
    },
  ]
  const [open, setOpen] = React.useState({ isOpen: false, id: '' });
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ boxShadow: 'none !important' }}><Checkbox onChange={handleCheckbox} size='small' /></TableCell>
            {columns?.map((col: any) => (<TableCell key={col.title}>{col.title}</TableCell>))}
            <TableCell sx={{ boxShadow: 'none !important' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsData.map((row, i) => (
            <React.Fragment key={i}>
              <TableRow>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen({ isOpen: !open.isOpen, id: row?._id })}
                  >
                    <ArrowDropDownCircleIcon sx={{ transform: open.isOpen && row?._id === open.id ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </IconButton>
                </TableCell>
                {columns.map((col: any, j) => (<TableCell key={j}>{col.render(row)}</TableCell>))}
                <TableCell sx={{ display: 'flex', gap: 1 }}>
                  <TableAction type='view' onClicked={() => handleView()} />
                  <TableAction type='edit' onClicked={() => handleEdit()} />
                  <TableAction type='delete' onClicked={() => handleDelete()} />
                </TableCell>
              </TableRow>
              {open.isOpen && <TableRow>
                <TableCell colSpan={12}>
                  <Collapse in={open.isOpen && row._id === open.id} timeout="auto" unmountOnExit>
                    <Table size="small" aria-label="purchases">
                      <TableHead>
                        <TableRow>
                          {innerColums.map((innerCol: any) => (
                            <TableCell>{innerCol.title}</TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {row.subData.map((innerRow, k) => (
                          <TableRow key={k}>
                            {innerColums.map((col: any, l) => (
                              <TableCell key={l}>{col.render(innerRow)}</TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Collapse>
                </TableCell>
              </TableRow>}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}