import React, { useRef } from 'react'
import { Card } from '@mui/material'
import TableHeader from '@root/components/TableHeader'
import CollapsibleTable from '@root/pages/safeguarding/collapsible-table'
import { useRouter } from 'next/router'

const AllegationManagementTable = () => {
  const route = useRouter();
  console.log('route.query', route.query)
  const tableHeaderRef = useRef();
  const allegationRoute = '/safeguarding/child-protection/allegation-management'
  return (
    <Card sx={{ py: 2, px: 1 }}>
        <TableHeader
          ref={tableHeaderRef}
          title={'Allegation Management'}
          showAddBtn
          onChanged={((params: any) => { })}
          onAdd={() => route.push(`${allegationRoute}/add-allegation-management`)}
        />
        <CollapsibleTable requireCheckbox handleView={() => route.push(`${allegationRoute}/add-allegation-management`)} />
      </Card>
  )
}

export default AllegationManagementTable