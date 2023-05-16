import { Box } from '@mui/material'
import TableHeader from '@root/components/TableHeader';
import React from 'react'
import SafeguardingAddressTable from './SafeguardingAddressTable';

const SafeguardingChildAdvocacyList = () => {
  return (
    <>
      <Box>

        <TableHeader
          // ref={tableHeaderRefTwo}
          hideSearch={true}
          title="Safeguarding -  Child Advocacy"
          showAddBtn
        />
        <SafeguardingAddressTable />
      </Box>
    </>
  )
}

export default SafeguardingChildAdvocacyList
