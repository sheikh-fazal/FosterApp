import React from 'react'
import CustomTable from '@root/components/Table/CustomTable';
import { Button, Grid } from "@mui/material";
import { FinanceAgreementLocalAuthData } from '.';
import { useFinanceAgreementLocalAuthority } from './useFinanceAgreementLocalAuthority';
import TableHeader from "@root/components/TableHeader";
import FinanceAgreementAddModal from './Modal/FinanceAgreementAddModal';




const FinanceAgreementLocalAuthority = () => {
  const {FinanceAgreementLocalAuthorityColumns,theme,isOpenFinanceAgreementModal, setIsOpenFinanceAgreementModal,onAddFinanceAgreementModal} = useFinanceAgreementLocalAuthority()


  return (
    <Grid container >
      <Grid item xs={12} mt={2}>

       <TableHeader
        title="Placement Special Needs Agreement"
        showAddBtn
        hideSearch
        onAdd={()=>setIsOpenFinanceAgreementModal(true)}
      />
        <CustomTable
          data={FinanceAgreementLocalAuthData}
          columns={FinanceAgreementLocalAuthorityColumns}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          rootSX={{ my: theme.spacing(2),p:2.5 }}

        />
      </Grid>
      <Grid item xs={12}  ml={2.8} mb={2} mt={0}>
      <Button sx={styles.saveBtn}>Continue</Button>
          <FinanceAgreementAddModal title='Finance Agrement With Local Authority' open={isOpenFinanceAgreementModal} handleClose={()=>setIsOpenFinanceAgreementModal(false)}
       onSubmit={onAddFinanceAgreementModal}/>
    </Grid>
    </Grid>
  )
}

export default FinanceAgreementLocalAuthority

const styles = {
  saveBtn: { backgroundColor: "#0E918C", color: "#fff", "&:hover": { backgroundColor: "#0E918C" }, px: 2.2, py: 1, fontSize: "16px", fontWeight: 600 }
};

