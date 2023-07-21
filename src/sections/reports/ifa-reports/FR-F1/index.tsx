import { TextField } from "@mui/material";

export const viewReportsFilterData = [
  {
    gridlength: 6,
    otherOptions: {
      label: 'Position/Role',
      name: 'positionRole',
      fullWidth: true,
      size: 'small',
      select: true,
    },
    options: [
      { value: 'all', label: 'all' }
    ],
    component: TextField
  },
  {
    gridlength: 6,
    otherOptions: {
      label: 'Name',
      name: 'name',
      fullWidth: true,
      size: 'small',
      select: true,
    },
    options: [
      { value: 'all', label: 'all' }
    ],
    component: TextField
  },
  {
    gridlength: 6,
    otherOptions: {
      label: 'Foster Carer(s)',
      name: 'fosterCarer',
      fullWidth: true,
      size: 'small',
      select: true,
    },
    options: [
      { value: 'all', label: 'all' }
    ],
    component: TextField
  },
  {
    gridlength: 6,
    otherOptions: {
      label: 'Children',
      name: 'children',
      fullWidth: true,
      size: 'small',
      select: true,
    },
    options: [
      { value: 'all', label: 'all' }
    ],
    component: TextField
  },
  {
    gridlength: 6,
    otherOptions: {
      label: 'Select Search Date',
      name: 'selectSearchDate',
      fullWidth: true,
      size: 'small',
      select: true,
    },
    options: [
      { value: 'Signed date', label: 'Signed date' }
    ],
    component: TextField
  },
  {
    gridlength: 6,
    otherOptions: {
      label: 'Date Type',
      name: 'dateType',
      fullWidth: true,
      size: 'small',
      select: true,
    },
    options: [
      { value: 'Today', label: 'Today' }
    ],
    component: TextField
  },
];

export const tableSubHeader = [
  {
    id: '1',
    subData: [
      { label: 'Name of child(DOB)', value: 'Timmy Toppee(10/10/2013' },
      { label: 'region', value: 'Region 11' },
    ]
  },
  {
    id: '2',
    subData: [
      { label: 'Supervising social worker', value: 'aida bugg' },
      { label: 'branch', value: 'Branch 12' },
    ]
  },
  {
    id: '3',
    subData: [
      { label: 'foster carer(s)', value: 'teri dactyl, peg legge' },
      { label: 'date from', value: '03/11/21' },
      { label: 'date to', value: '03/11/21' },
    ]
  },
];

export const tableMockData = [
  {
    id: '1',
    srNo: '1',
    nameOfChild: 'Timmy Toppee',
    supervisingSocialWorker: 'Anne Teak',
    fosterCarer: 'Teri Dactyl',
    signedDate: '03/10/21',
    createdDate: '03/10/21',
    createdBy: 'john doe',
    modifiedDate: '03/10/21',
    modifiedBy: 'john doe',
  }
]