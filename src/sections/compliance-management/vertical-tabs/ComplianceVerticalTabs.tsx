import { Grid, Box, Tab, Tabs, Typography, useTheme, Button, styled,ButtonProps  } from '@mui/material';
import React, { Children, ReactNode, SyntheticEvent, useState } from 'react'
import Image from "next/image";
import CustomHorizaontalTab from '@root/components/customTabs';

interface VerticalTabsProps {
    tabsData: any;
}
interface TabPanelProps {
    children?: React.ReactNode;
    value: number;
    index: number;
}
interface CustomButtonProps extends ButtonProps {
    hoverBackgroundColor: string;
    hoverColor: string;
    isSelected:boolean,
    selectedTabColor: string;
  }

function TabPanel({ children, value, index }: TabPanelProps) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}




const ComplianceVerticalTabs = ({ tabsData }: VerticalTabsProps) => {
    const [verticalTab, setVerticalTab] = useState(0);
    const [horizontalTabValue, setHorizontalTabValue] = useState(0);
    const [SelectedTabColor, setSelectedTabColor] = useState('');

    const handleTabChange = (index: number, color: string) => {
        setVerticalTab(index);
        setSelectedTabColor(color);
        setHorizontalTabValue(0);
    };

    const handleHorizontalTabChange = (event: React.SyntheticEvent, newValue: any) => {
        setHorizontalTabValue(newValue);
       console.log('gaftga===>',newValue);
    
    };

    const theme: any = useTheme();
   
    const StyledLeftTab = styled(({ hoverBackgroundColor, hoverColor, isSelected, selectedTabColor, ...rest }: CustomButtonProps) => (
        <Button {...rest} />
      ))(({ hoverBackgroundColor, hoverColor, isSelected, selectedTabColor }) => ({
        '&:hover': {
          backgroundColor: hoverBackgroundColor,
          color: hoverColor,
        },
        backgroundColor: isSelected ? selectedTabColor : '#fff',
        marginBottom: "15px !important",
        borderRadius: "10px",
        width: "120px !important",
        height: "120px !important",
        boxShadow: '2px 4px 7px rgba(14, 145, 140, 0.2)',
        cursor: 'pointer',
      }));

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
                                        <Box sx={styles.tabLabel}>
                                            <Box sx={styles.tabsIcon}>
                                                
                                                <Image src={item.img} alt="" width={52} height={52} />
                                               
                                            </Box>
                                            <Typography variant="h5" component="h5" sx={styles.tabsTitle}>
                                                {item?.title.length > 46 ? `${item.title.slice(0, 46)}...` : item.title}
                                            </Typography>

                                        </Box>
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
                  {item.pdf}
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

// Styles
const styles = {
    tabRoot: {
        "& .MuiTab-root": {
            marginRight: "0px !important",
            maxWidth: "unset !important",
        },
    },

    tabIndicator: {
        sx: { display: "none" },
    },


    tabLabel: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 3,
        padding: "12px",
        gap: "15px",
        

    },

    innerTabs: (theme: any) => ({
        // background: theme.palette.primary.main,
        // background: '#fff',
        mb: "15px",
        borderRadius: "10px",
        // color: '#465987',
        width: "120px !important",
        height: "120px !important",
        boxShadow: '2px 4px 7px rgba(14, 145, 140, 0.2)',
       

    }),
    GridWrapper: {
        p: "3px",
        m: "0",
    },
    tabsIcon: {
        width: "52px",
        height: "52px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fill:'#fff',
        color:'#fff'
    },
    tabsTitle: {
        fontSize: "12px !important",
        color: '#465987',
        lineHeight: "14.4px !important",
        fontWeight: 600,
        letterSpacing: '0.005em',
        textAlign: 'center !important'
    }
};
