import EditableTable from "@root/components/Table/EditableTable";
import TableHeader from "@root/components/TableHeader";
import { certificateManagementColumns, certificateManagementHeaders } from ".";

const CertificateManagement = () => {
  return (
    <>
      <TableHeader
        title="Child Education Info"
      />
      <EditableTable columns={certificateManagementColumns} headers={certificateManagementHeaders} isAddButtonHide={true} />
    </>
  );
};
export default CertificateManagement