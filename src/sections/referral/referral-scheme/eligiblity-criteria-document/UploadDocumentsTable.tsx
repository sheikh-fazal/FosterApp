
import {Card } from '@mui/material'
import CustomTable from '@root/components/Table/CustomTable';
import TableHeader from '@root/components/TableHeader';
import UploadDocumentModal from "../../../../components/modal/UploadDocumentModal/UploadDocumentModal"
import { useUploadDocumentsTable } from './useUploadDocumentsTable';

const UploadDocumentsTable = (props: any) => {
  const { TableData, tableHeaderRefTwo, IsDeleteModal, setIsDeleteModal, IsAddDocumentModal, setIsAddDocumentModal, viewOpenModal, setViewOpenModal, router, theme,columns } = useUploadDocumentsTable(props)


  const onSubmit = () => {
    alert("deleted successfully")
    setIsDeleteModal(!IsDeleteModal)
  }

  return (
    <Card>
      <>

        <TableHeader
          ref={tableHeaderRefTwo}
          title="Uploaded Documents"
          disabled={props.disabled}
          showAddBtn={!props.disabled}
          onAdd={() => setIsAddDocumentModal(true)}
          onChanged={(data: any) => {
            console.log("Updated params: ", data);
          }}
        />

        {/* table body start here */}
        <CustomTable
          data={TableData}
          columns={columns}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          isPagination={false}
          // count={Math.ceil(data?.data?.meta?.total / limit)}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          onSortByChange={(data: any) => {
            console.log("Sort by: ", data);
          }}
          rootSX={{ my: theme.spacing(2) }}
        />
      </>

      
      <UploadDocumentModal open={IsAddDocumentModal} handleClose={() => setIsAddDocumentModal(false)} onSubmit={onSubmit} />
      <UploadDocumentModal open={viewOpenModal} handleClose={() => setViewOpenModal(false)} disabled />
    </Card>
  )
}

export default UploadDocumentsTable

