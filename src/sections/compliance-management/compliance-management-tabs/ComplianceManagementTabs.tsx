import { Grid, Box, Tab, Tabs, Typography} from '@mui/material';
import React from 'react'
import Image from "next/image";
import useComplianceManagementTabs from './useComplianceManagementTabs';
import { StyledLeftTab, VerticalTabsProps, styles ,StyledBox,StyledImage,StyledTypography} from '.';



const ComplianceVerticalTabs = ({ tabsData }: VerticalTabsProps) => {
    const {verticalTab,horizontalTabValue,SelectedTabColor,TabPanel,handleTabChange,handleHorizontalTabChange,
        theme} = useComplianceManagementTabs();
   
    return (
        <Grid container>
            <Grid lg={2.5} sx={{ height: "715px" }}>
                <Box sx={styles.GridWrapper}>
                    <Box sx={{ maxHeight: "76vh", overflowY: "auto" }}>
                        <Grid container >
                            {tabsData?.map((item: any, index: any) => (
                                <Grid lg={6} key={index}>

                                    <StyledLeftTab
                                        key={index}
                                        variant="contained"
                                        onClick={() => handleTabChange(index, item.color)}
                                        isSelected={verticalTab === index}
                                        hoverBackgroundColor={item.color}
                                        hoverColor={item.color}
                                        selectedTabColor={SelectedTabColor}
                                        

                                    >
                                        {/*  sx={styles.innerTabs} */}
                                        <StyledBox sx={styles.tabLabel}>
                                            <StyledBox sx={styles.tabsIcon}>
                                                
                                                <Image src={item.img} alt="" width={52} height={52} />
                                            </StyledBox>
                                            <StyledTypography variant="h5" sx={styles.tabsTitle}  color={verticalTab === index ? "white" : item.color} >
                                                {item?.title.length > 46 ? `${item.title.slice(0, 46)}...` : item.title}
                                            </StyledTypography>

                                        </StyledBox>
                                    </StyledLeftTab>

                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Grid>
            <Grid lg={9.5} sx={{ background: "fff", boxShadow: "2px 4px 7px rgba(14, 145, 140, 0.2)", borderRadius: '10px', height: "715px" }}>
                <Box sx={{ flexGrow: 1 }}>
                    {tabsData.map((tab: any, index: any) => (
                        <TabPanel key={index} value={verticalTab} index={index}>
                            <Tabs
                                value={horizontalTabValue}
                                onChange={handleHorizontalTabChange}
                                aria-label="Horizontal tabs example"
                            >
                                {tab.innerData && tab.innerData.map((data: any, subIndex: any) => (
                                    <Tab key={subIndex} label={data.tabTitle} />
                                ))}
                            </Tabs>
                            {/* {tab.innerData && tab.innerData[horizontalTabValue]?.tabsDocuments} */}
                            {tab.innerData && tab.innerData[horizontalTabValue]?.tabsDocuments?.map((item: any) => (
                                <Typography key={item.id} sx={{ color: '#000 !important' }}>
                                    <a href={item.pdf} target="_blank" rel="noopener noreferrer">
                                        {item.title}
                                    </a>

                                </Typography>
                            ))}

                        </TabPanel>
                    ))}
                </Box>
            </Grid>
        </Grid>
    )
}

export default ComplianceVerticalTabs
