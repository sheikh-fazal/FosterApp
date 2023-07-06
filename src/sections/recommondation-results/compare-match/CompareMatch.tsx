import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Card, TableHead, Typography } from '@mui/material';
import { compareMatchData, compareMatchHeader } from '.';
import Image from 'next/image';
import Link from 'next/link';


// Styles
const styles = {
    cardStyling: {
        padding: '20px', boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)"
    },
    titles: (theme: any) => ({
        fontSize: "16px",
        fontWeight: 600,
        marginBottom: "16px",
        color: theme.palette.primary.main,
    }),
    tableHeaderCell: {
        borderBottom: 'none', position: 'sticky', top: 0, background: '#fff', zIndex: 1, minWidth: "350px"
    },
    tableBody: {
        width: "100%", maxHeight: "45vh", overflowY: "auto"
    },
    tableBodyContent: {
        minWidth: "350px", border: '1px solid #898989', fontSize: "14px", fontWeight: "500", color: "#212529"
    },
    tableBodyCriteria: {
        minWidth: "350px", border: '1px solid #898989', fontSize: "14px", fontWeight: "600", color: "#212529"
    },
}

export default function CompareMatch() {
    return (
        <Card sx={styles.cardStyling}>
            <Typography sx={(theme) => styles.titles(theme)}>Compare Match</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            {compareMatchHeader.map((item: any) => {
                                return (
                                    <TableCell sx={styles.tableHeaderCell}>
                                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                            <Image src={item?.img} alt='img' />
                                            <Typography sx={{ fontSize: "15px", fontWeight: "500", color: "#212529" }}>{item?.title}</Typography>
                                        </Box>

                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    </TableHead>
                </Table>
                <TableBody>
                    <Box sx={styles.tableBody}>
                        {compareMatchData.map((row: any) => (
                            <TableRow key={row?.criteria} >
                                <TableCell component="th" scope="row" sx={styles.tableBodyCriteria}>
                                    {row?.criteria}
                                </TableCell>
                                <TableCell align="center" sx={styles.tableBodyContent}>
                                    {row.personOne}
                                </TableCell>
                                <TableCell align="center" sx={styles.tableBodyContent}>
                                    {row.personTwo}
                                </TableCell>
                                <TableCell align="center" sx={styles.tableBodyContent}>
                                    {row.CancelIcon}
                                </TableCell>
                            </TableRow>
                        ))}
                    </Box>

                </TableBody>
            </TableContainer>
            <Box sx={{ display: "flex", gap: "10px", mt: 3, flexWrap: "wrap" }}>
                <Button type="button" variant="contained">
                    Add to Placement List
                </Button>
                <Button type="button" variant="contained">
                    Add to Consideration List
                </Button>
                <Link
                    href={"/recommondations-result"}
                    style={{ textDecoration: "none" }}
                >
                    <Button type="button" variant="contained">
                        Back
                    </Button>
                </Link>
            </Box>
        </Card>
    );
}
