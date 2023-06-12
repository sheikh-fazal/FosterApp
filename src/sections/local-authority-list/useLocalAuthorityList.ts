import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export const useLocalAuthorityList = () => {
    // const [actionType, setActionType] = useState('add');
    const theme = useTheme();
    const navigate = useRouter();
    return {
        theme,
        navigate
    }
}