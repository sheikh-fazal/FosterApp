import EditableTable from "./CertificateManagement";

const columns = [
    { id: '1', type: 'input' },
    { id: '2', type: 'input' },
    { id: '3', type: 'dropdown', options: ['Option 4', 'Option 5', 'Option 3565'] },
    { id: '4', type: 'input' },
    { id: '5', type: 'dropdown', options: ['Option 4', 'Option 5', 'Option 3565'] },
    { id: '6', type: 'input' },
];

const headers = ['Course ID', 'Course Name', 'Certificate Required', 'Approver', 'Use Digital Signature', 'Push Notification'];

const App = () => {
    return (
        <EditableTable columns={columns} headers={headers} />
    );
};
export default App