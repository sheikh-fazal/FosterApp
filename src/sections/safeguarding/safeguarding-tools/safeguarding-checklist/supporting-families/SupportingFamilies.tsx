import React from 'react'
import SafeguardingTable from '../safeguarding-table/SafeguardingTable'
import { supportingFamiliesData } from './SupportingFamiliesData';
import { columns } from '../safeguarding-table/SafeguardingTableColumnData';

const SupportingFamilies = () => {
  return <SafeguardingTable columns={columns} data={supportingFamiliesData}/>
}

export default SupportingFamilies