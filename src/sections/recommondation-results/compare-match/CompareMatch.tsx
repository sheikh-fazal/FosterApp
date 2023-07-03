import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card } from '@mui/material';

function createData(name: string, calories: number, fat: number) {
    return { name, calories, fat };
}

const rows = [
    createData('Cupcake', 305, 3.7),
    createData('Donut', 452, 25.0),
    createData('Eclair', 262, 16.0),
    createData('Frozen yoghurt', 159, 6.0),
    createData('Gingerbread', 356, 16.0),
    createData('Honeycomb', 408, 3.2),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Jelly Bean', 375, 0.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function CompareMatch() {
    return (
        <Card sx={{ pading: "10px" }}>
            <TableContainer component={Paper} style={{ border: '1px solid #ddd' }}>
                <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" style={{ width: 160 }} scope="row" sx={{ border: '1px solid #ddd' }}>
                                    {row.name}
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="right" sx={{ border: '1px solid #ddd', }}>
                                    {row.calories}
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="right" sx={{ border: '1px solid #ddd' }} >
                                    {row.fat}
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="right" sx={{ border: '1px solid #ddd' }} >
                                    {row.fat}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    );
}
