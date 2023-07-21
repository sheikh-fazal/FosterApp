import { TextField } from "@mui/material";

export const FRD2FilterData = [
  {
    gridlength: 6,
    otherOptions: {
      label: "Name Fostered Young Person (DOB)",
      name: 'personName',
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
      label: 'Foster Carer(s)',
      name: 'fosterCarer',
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
      { value: 'created Date', label: 'created Date' }
    ],
    component: TextField
  },
  {
    gridlength: 6,
    otherOptions: {
      name: 'dateType',
      label: 'Date Type',
      fullWidth: true,
      size: 'small',
      select: true,
    },
    options: [
      { value: 'today', label: 'today' }
    ],
    component: TextField
  },

];

export const tableSubHeader = [
  {
    id: '1',
    subData: [
      { label: "Name Fostered Young Person (DOB)", value: 'timmy toppee (10/10/2023)' },
      { label: 'region', value: 'region 11' },
    ]
  },
  {
    id: '2',
    subData: [
      { label: 'Supervising social worker', value: 'aida bugg' },
      { label: 'branch', value: 'branch 12' },
    ]
  },
  {
    id: '3',
    subData: [
      { label: 'foster carer(s)', value: 'teri dactyl, peg legge' },
      { label: 'date from', value: '03/11/2023' },
      { label: 'date to', value: '03/11/2023' },
    ]
  },
];

export const tableMockData = [
  {
    id: '1',
    srNo: '1',
    personName: 'timmy toppee (10/10/2023)',
    socialWorker: 'Anne Teak',
    fosterCarer: 'Teri Dactyl',
    signedDate: "03/10/21",
    createdDate: '03/10/21',
    createdBy: 'john doe',
    modifiedDate: '03/10/21',
    modifiedBy: 'john doe',
  }
]