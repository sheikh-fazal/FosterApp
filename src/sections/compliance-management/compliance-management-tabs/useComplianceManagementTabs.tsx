import { Box, useTheme } from '@mui/material';
import React, { useState } from 'react'
import { TabPanelProps } from '.';
import { ComplianceVerticalTabsData } from '..';

const useComplianceManagementTabs = () => {
    const [verticalTab, setVerticalTab] = useState(0);
    const [horizontalTabValue, setHorizontalTabValue] = useState(0);
    const [IsOpenPdfModal, setIsOpenPdfModal] = useState(false);
    const [SelectedTabColor, setSelectedTabColor] = useState('');
    const [IsOpenAddCategory, setIsOpenAddCategory] = useState({value:'',type:''});
    const [tabsArray,setTabsArray] = useState(ComplianceVerticalTabsData)
    const handleAddCategory = (data:any)=>{
        setTabsArray()
    }
    const TabPanel = ({ children, value, index }: TabPanelProps) => {
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
    const handleTabChange = (index: number, color: string) => {
        setVerticalTab(index);
        setSelectedTabColor(color);
        setHorizontalTabValue(0);
    };
    const handleHorizontalTabChange = (event: React.SyntheticEvent, newValue: any) => {
        setHorizontalTabValue(newValue);
    };
  
    const theme: any = useTheme();
    return {tabsArray,
        verticalTab, horizontalTabValue, SelectedTabColor, TabPanel, handleTabChange, handleHorizontalTabChange,
        theme,IsOpenPdfModal,setIsOpenPdfModal,IsOpenAddCategory, setIsOpenAddCategory,handleAddCategory
        
        
    }
}

export default useComplianceManagementTabs