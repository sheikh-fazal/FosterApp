import React, { Fragment } from 'react'
import HorizaontalTabs from '@root/components/HorizaontalTabs'
import VericalTabs from '@root/components/VericalTabs'
import { Box, IconButton, ListItem, Typography, useTheme } from '@mui/material';
import ComplianceVericalTabs from './ComplianceVericalTabs';
import Image from 'next/image';
import { TABSDATAARRYComp } from '.';




const ComplinceNew = () => {
    const array = [{ title: 'this is title', icon: '' }];
    const theme: any = useTheme();
    return (
        <ComplianceVericalTabs tabsDataArray={TABSDATAARRYComp}>
            {TABSDATAARRYComp?.map((item) => (
                <Fragment key={item?.index}>
                    {item?.innerDataArray?.map((innerItem) => (
                        <Box key={innerItem?.id} />
                    ))}
                </Fragment>
            ))}
        </ComplianceVericalTabs>
    )
}

export default ComplinceNew

const styles = {
    listContainer: { width: "100%" },
    nextLinkContainer: { textDecoration: "none", display: "block" },
    listItemContainer: (theme: any) => ({
        ":hover": {
            background:
                theme.palette.mode === "light"
                    ? theme.palette.grey[300]
                    : theme.palette.grey[900],
            borderRadius: 1,
        },
    }),
    listIconButton: (theme: any) => ({
        "&:hover": { background: "transparent !important" },
        color: theme.palette.grey[600],
        fontWeight: 500,
        fontSize: "14px",
    }),
    listItemAvatar: (background: any) => ({
        background: `${background}`,
        width: "12px",
        height: "12px",
        borderRadius: 1,
    }),
};
