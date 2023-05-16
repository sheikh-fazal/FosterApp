import Layout from '@root/layouts';
import React, { useRef, useState } from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import { Button, Card, Dialog, DialogContent, Grid, Typography } from '@mui/material';
import TableHeader from '@root/components/TableHeader';
import CollapsibleTable from '../../collapsible-table';
import { useRouter } from 'next/router';

const PAGE_TITLE = "Child Abuse and Exploitation Management";

ChildAbuse.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Safeguarding Panel",
          href: "/safeguarding",
        },
        {
          name: "Safeguarding",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function ChildAbuse() {

  const tableHeaderRef = useRef();
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();
  const path = '/safeguarding/child-protection/child-abuse-and-expolitation-management'

  return (
    <Page title={PAGE_TITLE}>
      <Card sx={{ py: 2, px: 1 }}>
        <TableHeader
          ref={tableHeaderRef}
          title={'Child Abuse and Exploitation Management'}
          showAddBtn
          onAdd={() => setOpenModal(!openModal)}
          onChanged={((params: any) => { })}
        />
        <CollapsibleTable requireCheckbox />
      </Card>
      <Dialog open={openModal} maxWidth='sm' onClose={() => setOpenModal(!openModal)}>
        <DialogContent>
          <Typography sx={styles.title}>Select Safeguading - Child Abuse and Exploitation Management</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Button
                fullWidth
                variant='contained'
                size='large'
                sx={styles.modalBtn}
                onClick={() => router.push(`${path}/child-criminal-exploitation`)}
              >Child Criminal Exploitation Full</Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                fullWidth
                variant='contained'
                size='large'
                sx={styles.modalBtn}
                onClick={() => router.push(`${path}/child-sexual-exploitation`)}
              >Child Sexual Exploitation (CSE)</Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Page>
  );
}

const styles = {
  title: { mb: 2, fontSize: 15, fontWeight: 700 },
  modalBtn: { height: 94, borderRadius: '10px' }
}