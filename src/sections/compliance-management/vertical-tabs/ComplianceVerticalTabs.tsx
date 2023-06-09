import { Grid, Box, Tab, Tabs, Typography, useTheme } from '@mui/material';
// import theme from '@root/theme';
import React, { SyntheticEvent, useState } from 'react'
import { ComplianceVerticalTabsData } from '..';
import Image from "next/image";

const ComplianceVerticalTabs = () => {
    const [value, setValue] = useState<any>(0);
    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const theme: any = useTheme();
    return (
        <Grid>
            <Box sx={styles.GridWrapper}>
                <Box sx={styles.imageWrapper}>
                    {/* <Image src={AddIcon} alt="add-icon" /> */}
                </Box>
                <Box sx={{ maxHeight: "72vh", overflowY: "auto" }}>
                    <Tabs
                        selectionFollowsFocus
                        orientation="vertical"
                        variant="scrollable"
                        sx={styles.tabRoot}
                        TabIndicatorProps={styles.tabIndicator}
                        value={value}
                        role="tabpanel"
                        onChange={handleChange}
                    >
                        {ComplianceVerticalTabsData?.map((item: any) => (

                            <Tab
                                wrapped
                                key={item?.title}
                                sx={styles.innerTabs(theme)}
                                label={
                                    <Grid  >
                                    <Grid lg={6}>
                                    <Box sx={styles.tabLabel(item?.background)}>
                                        <Box sx={styles.tabsIcon}>
                                            <Image src={item.img} alt="" width={40} height={45} />

                                        </Box>
                                        <Typography variant="h5" component="h5" sx={styles.tabsTitle}>
                                            {item?.title.length > 46 ? `${item.title.slice(0, 46)}...` : item.title}
                                        </Typography>
                                    </Box>
                                    </Grid>
                                    
                                    </Grid>
                                }
                            />

                        ))}
                    </Tabs>
                </Box>
            </Box>
        </Grid>
    )
}

export default ComplianceVerticalTabs

// Styles
const styles = {
    container: {
        display: { xs: "block", md: "flex" },
    },
    tabRoot: {
        "& .MuiTab-root": {
            marginRight: "0px !important",
            maxWidth: "unset !important",
            width: "100% !important",
        },
    },

    tabIndicator: {
        sx: { display: "none" },
    },

    imageWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        paddingBottom: "10px",
        cursor: "pointer",
    },

    tabLabel: (background: string) => ({
        display: "flex",
        alignItems: "center",
        width: "100%",
        borderRadius: 3,
        padding: "12px",
        gap: "15px",
        height: "100%",
        minHeight: "85px",
    }),

    innerTabs: (theme: any) => ({
        background: theme.palette.primary.main,
        mb: "15px",
        borderRadius: "10px",
        border: `6px solid ${theme.palette.primary.main}`,
        height: "100%",
        minHeight: "80px",
        //   "&.Mui-selected": {
        //     width: "100% !important",
        //     border: "6px solid #FFFFFF",
        //     height: "100%",
        //     minHeight: "80px",
        //   },
    }),
    GridWrapper: {
        background: "linear-gradient(270deg, rgba(34, 171, 113, 0.13) 6.52%, rgba(43, 182, 101, 0.13) 100%)",
        boxShadow: "2px 4px 7px rgba(14, 145, 140, 0.2)",
        borderRadius: "10px",
        width: "100%",
        p: "10px",
        m: "0",
    },
    tabsIcon: {
        width: "52px",
        height: "52px",
        boxShadow: "inset 0px 0px 4px 1px rgba(0, 0, 0, 0.25)",
        backgroundColor: "#FFFF",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
    },
    tabsTitle: {
        fontSize: "18px !important",
        color: "#Ffff",
        lineHeight: "24px !important",
        fontWeight: 600,
        textAlign: "left !important",
    }
};
