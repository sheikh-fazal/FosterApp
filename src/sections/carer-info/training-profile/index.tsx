import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";

export const columns = [
    {
        id: "select",
        header: ({ table, row }: any) => {
            console.log(table.getSelectedRowModel().flatRows);
            return (
                <Checkbox
                    checked={table.getIsAllRowsSelected()}
                    onChange={table.getToggleAllRowsSelectedHandler()}
                />
            );
        },
    },
    {
        accessorFn: (row: any) => row,
        id: "srNo",
        cell: (info: any) => Number(info?.row?.id) + 1,
        header: "Sr. No",
    },
    {
        accessorFn: (row: any) => row.CarerName,
        id: "CarerName",
        cell: (info: any) => info.getValue(),
        header: "Carer Name",
        isSortable: true,
    },
    {
        accessorFn: (row: any) => row?.CarerType,
        id: "CarerType",
        cell: (info: any) => info.getValue(),
        header: "Carer Type",
        isSortable: true,
    },
    {
        accessorFn: (row: any) => row?.CoursesAttended,
        id: "CoursesAttended ",
        cell: (info: any) => info.getValue(),
        header: "Courses Attended ",
        isSortable: true,
    },
    {
        accessorFn: (row: any) => row?.AttendedDate,
        id: "AttendedDate ",
        cell: (info: any) => info.getValue(),
        header: "Attended Date",
        isSortable: true,
    },
    {
        accessorFn: (row: any) => row?.id,
        id: "actions",
        cell: (info: any) => (
            <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
                <TableAction
                    type="edit"
                // onClicked={() =>
                //     router.push(
                //         `/carer-info/personal-info/carer-family-support-network/edit-family-support?${info.getValue()}`
                //     )
                // }
                />
                <TableAction
                    type="view"
                // onClicked={() =>
                //     router.push(
                //         `/carer-info/personal-info/carer-family-support-network/view-family-support?${info.getValue()}`
                //     )
                // }
                />
            </Box>
        ),
        header: "Actions",
        isSortable: false,
    },
];

export { default as TrainingProfile } from "./TrainingProfile"