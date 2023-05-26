export const FRBFilterData = [
  {
    gridlength: 6,
    title: 'Foster Carer(s)',
    otherOptions: {
      name: 'fosterCarer',
      fullWidth: true,
      size: 'small',
    },
    options: [
      { value: 'all', label: 'all' }
    ],
  },
  {
    gridlength: 6,
    title: 'Supervising Social Worker',
    otherOptions: {
      name: 'supervisingSocialWorker',
      fullWidth: true,
      size: 'small',
    },
    options: [
      { value: 'all', label: 'all' }
    ],
  },
  {
    gridlength: 6,
    title: 'Date Type',
    otherOptions: {
      name: 'dateType',
      fullWidth: true,
      size: 'small',
    },
    options: [
      { value: 'today', label: 'today' }
    ],
  },
  {
    gridlength: 6,
    title: 'Select Search Date',
    otherOptions: {
      name: 'searchDate',
      fullWidth: true,
      size: 'small',
    },
    options: [
      { value: 'signed Date', label: 'signed Date' }
    ],
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