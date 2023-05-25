export const certificateManagementHeaders = ['Course ID', 'Course Name', 'Certificate Required', 'Approver', 'Use Digital Signature', 'Push Notification'];

export const certificateManagementColumns = [
    { id: 'courseId', type: 'input' },
    { id: 'courseName', type: 'input' },
    { id: 'certificateRequired', type: 'dropdown', options: ['Yes', 'No',] },
    { id: 'approver', type: 'input' },
    { id: 'digitalSignature', type: 'dropdown', options: ['Yes', 'No',] },
    { id: 'notification', type: 'input' },
  ];