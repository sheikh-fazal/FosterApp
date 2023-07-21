import { TextField } from "@mui/material";

export const FRBFilterData = [
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
      label: 'Supervising Social Worker',
      name: 'supervisingSocialWorker',
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
      label: 'Date Type',
      name: 'dateType',
      fullWidth: true,
      size: 'small',
      select: true,
    },
    options: [
      { value: 'today', label: 'today' }
    ],
    component: TextField
  },
  {
    gridlength: 6,
    otherOptions: {
      label: 'Select Search Date',
      name: 'searchDate',
      fullWidth: true,
      size: 'small',
      select: true,
    },
    options: [
      { value: 'signed Date', label: 'signed Date' }
    ],
    component: TextField
  },

];

export const tableSubHeader = [
  {
    id: '1',
    subData: [
      { label: 'foster carer(s)', value: 'teri dactyl, peg legge' },
      { label: 'date from', value: '03/11/21' },
      { label: 'date to', value: '03/11/21' },
    ]
  },
  {
    id: '2',
    subData: [
      { label: 'Supervising social worker', value: 'aida bugg' },
      { label: 'branch', value: 'ouow3uq4z901x098' },
    ]
  },
];

export const tableMockData = [
  {
    id: '1',
    srNo: '1',
    socialWorker: 'Anne Teak',
    fosterCarer: 'Teri Dactyl',
    createdDate: '03/10/21',
    createdBy: 'john doe',
    modifiedDate: '03/10/21',
    modifiedBy: 'john doe',
  }
]