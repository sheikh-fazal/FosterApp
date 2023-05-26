
import { useTheme } from "@mui/material";
import { useRouter } from 'next/router';
import React, { useRef } from 'react'

export const useFosterCarerHandbookTable = () => {
    const router = useRouter();
    const tableHeaderRef = useRef();
    const theme: any = useTheme();

    return {

        router,
        tableHeaderRef,
        theme,

    }

}