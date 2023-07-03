import { useTheme } from '@mui/material';
import { TableData } from '.';


// Styles
const styles = {
    tableAction: {
        display: "flex", gap: "5px", justifyContent: "center"
    },
    assessmentform: {
        marginLeft: "40px",
        cursor: "pointer"
    }
}


export const useCompareMatch = () => {
    const theme: any = useTheme();

    // table column start here
    const columns = [

        {
            accessorFn: (row: any) => row.Referral_Type,
            id: "Referral_Type",
            cell: (info: any) => info.getValue(),
            // header: () => <span>Referral Type</span>,
            isSortable: false,
        },
        {
            accessorFn: (row: any) => row.Fostering_Status,
            id: "Fostering_Status",
            cell: (info: any) => info.getValue(),
            // header: () => <span>Fostering Status</span>,
            isSortable: false,
        },
        {
            accessorFn: (row: any) => row.Referral_Bonus,
            id: "Referral_Bonus",
            cell: (info: any) => info.getValue(),
            // header: () => <span>Referral Bonus </span>,
            isSortable: false,
        },
        {
            accessorFn: (row: any) => row.Branch_Name,
            id: "Branch_Name",
            cell: (info: any) => info.getValue(),
            // header: () => <span>Branch Name</span>,
            isSortable: false,
        },
    ];


    return {
        TableData, theme, columns
    }
}
