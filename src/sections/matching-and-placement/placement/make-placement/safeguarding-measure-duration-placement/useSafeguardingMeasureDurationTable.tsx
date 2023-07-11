import { useTheme } from "@mui/material";
import Image from "next/image";
import { useRef, useState } from "react";

export const useSafeguardingMeasureDurationTable = () => {
    const [IsOpenTrainingClockModal, setIsOpenTrainingClockModal] = useState(false)
    const tableHeaderRef = useRef();
    const theme: any = useTheme();

  const safeguardingMeasureDurationColumns = [

        {
            accessorFn: (row: any) => row.carerName,
            id: "carerName",
            cell: (info: any) => info.getValue(),
            header: () => <span>Carer Name</span>,

        },
        {
            accessorFn: (row: any) => row.date,
            id: "date",
            cell: (info: any) => info.getValue(),
            header: () => <span>Date</span>,

        },
        {
            accessorFn: (row: any) => row.safeguardingCourseId,
            id: "safeguardingCourseId",
            cell: (info: any) => info.getValue(),
            header: () => <span>Safeguarding Course Id</span>,
        },
        {
            accessorFn: (row: any) => row.safeguardingCourseName,
            id: "safeguardingCourseName",
            cell: (info: any) => info.getValue(),
            header: () => <span>Safeguarding Course Name</span>,
        },
        {
            accessorFn: (row: any) => <Image src={row.certificate} alt=" Document Icon"/>,
            id: "certificate",
            cell: (info: any) => info.getValue(),
            header: () => <span>Certificate</span>,
        },
        {
            accessorFn: (row: any) => row.issueDate,
            id: "issueDate",
            cell: (info: any) => info.getValue(),
            header: () => <span>Issue Date</span>,
        },
       
    ];

    return {
        safeguardingMeasureDurationColumns,
        tableHeaderRef,
        theme,
        IsOpenTrainingClockModal,
        setIsOpenTrainingClockModal,
       
    }
}
