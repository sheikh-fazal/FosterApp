import { Box, Checkbox, MenuItem, Select, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { SELECT_FILTERS, menuItems } from '.';
import { SelectChangeEvent } from '@mui/material/Select';


export const useDeregistrationManagement = () => {
    const tableHeaderRefTwo = useRef<any>();
    const [deregStatusBg, setDeregStatusBg] = useState(menuItems[0].background);
    const [deregStatusValue, setDeregStatusValue] = React.useState(menuItems[0].value);
    const router = useRouter()
    const theme: any = useTheme();


    // let [expand, setExpand] = useState(false);
    // const [tableData, SetTableData] = useState(TableData.slice(0, 2));
    // const handleExpand = () => {
    //     setExpand(!expand);
    //     !expand ? SetTableData(TableData) : SetTableData(TableData.slice(0, 2));
    // };

    const handleChange = (event: SelectChangeEvent) => {
        setDeregStatusValue(event.target.value);
    };
    console.log("handleChange", deregStatusValue)

    // table column start here
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
            accessorFn: (row: any) => row.Sr_No,
            id: "Sr_No",
            cell: (info: any) => info.getValue(),
            header: () => <span>Sr.NO</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.Image,
            id: "Image",
            cell: (info: any) => (
                <span >
                    <Image style={{ outline: "4px solid #FFFFFF", borderRadius: "30px" }} src={info.getValue()} width={40} height={40} alt="Picture" />
                </span>
            ),
            header: () => <span>Image</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.Carer_Code,
            id: "Carer_Code",
            cell: (info: any) => info.getValue(),
            header: () => <span>Carer code</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.Carer_Name,
            id: "Carer_Name",
            cell: (info: any) => info.getValue(),
            header: () => <span>Carer Name</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.Gender,
            id: "Gender",
            cell: (info: any) => info.getValue(),
            header: () => <span>Gender</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.Area_Locality,
            id: "Area_Locality",
            cell: (info: any) => info.getValue(),
            header: () => <span>Area/Locality</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.Area_Office,
            id: "Area_Office",
            cell: (info: any) => info.getValue(),
            header: () => <span>Area Office</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any, index: number) => row.Dereg_Status,
            id: "Dereg_Status",
            cell: (info: any) =>
                <Select
                    value={deregStatusValue}
                    onChange={handleChange}
                    sx={{
                        height: '30px', // Set the desired height
                        width: '270px', // Set the desired width
                        background: deregStatusBg,
                        color: "#fff",
                        '&:before': {
                            borderColor: 'white',
                        },
                        '&:after': {
                            borderColor: 'white',
                        },
                    }}
                >
                    {menuItems.map((item) => (
                        <MenuItem

                            key={item.value}
                            value={item.value}
                            sx={{
                                background: item.background,
                                color: item.color,
                                m: 1,
                                '&:hover': {
                                    background: item.background,
                                },
                                '&.Mui-selected': {
                                    background: item.background,
                                },
                            }}
                            onClick={() => setDeregStatusBg(item.background)}
                        >
                            {item.label}
                        </MenuItem>
                    ))}
                </Select>,



            header: () => <span>Dereg Status</span>,
            isSortable: true,
        },
    ];

    return {
        tableHeaderRefTwo, router, theme, SELECT_FILTERS, columns,
    }
}
