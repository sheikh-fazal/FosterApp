import HorizaontalTabs from '@root/components/HorizaontalTabs'
import React from 'react'
import ChildSexualExploitation from './child-sexual-exploitation';
import ChildDetails from './child-details';
import ChildNotifications from './child-notifications';
import UploadDocument from './upload-document';
import ChildCriminalExploitation from './child-criminal-exploitation';
import { Box } from '@mui/material';

const TabsPanel = ({ isCriminal }: any) => {

  const tabArray = [
    isCriminal ? 'Child Criminal Exploitation' : 'Child Sexual Exploitation',
    'CE - Child Details',
    'CE - Child Notifications',
    'Upload Documents'
  ];
  return (
    <HorizaontalTabs tabsDataArray={tabArray}>
      {isCriminal ? <ChildCriminalExploitation/> : <ChildSexualExploitation />}
      <ChildDetails />
      <ChildNotifications />
      <UploadDocument />
    </HorizaontalTabs>
  )
}

export default TabsPanel