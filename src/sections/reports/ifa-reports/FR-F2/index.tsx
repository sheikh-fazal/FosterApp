export const viewReportsFilterData = [
    {
      gridlength: 6,
      title: 'Foster Carer',
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
      title: 'Relationship to Foster Carer',
      otherOptions: {
        name: 'relationshipToFosterCarer',
        fullWidth: true,
        size: 'small',
      },
      options: [
        { value: 'all', label: 'all' }
      ],
    },
    {
      gridlength: 6,
      title: 'Relative Name',
      otherOptions: {
        name: 'relativeName',
        fullWidth: true,
        size: 'small',
      },
      options: [
        { value: 'all', label: 'all' }
      ],
    },
    {
      gridlength: 6,
      title: 'Select Search Date',
      otherOptions: {
        name: 'selectSearchDate',
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
        { value: 'Signed date', label: 'Signed date' }
      ],
    },
  ];
  
  export const tableSubHeader = [
    {
      id: '1',
      subData: [
        { label: 'Foster Carer', value: 'Teri dactyl' },
        { label: 'region', value: 'Region 11' },
      ]
    },
    {
      id: '2',
      subData: [
        { label: 'Relationship to Foster Carer', value: 'Friend' },
        { label: 'branch', value: 'Branch 12' },
      ]
    },
    {
      id: '3',
      subData: [
        { label: 'Relative Name', value: 'Aida bugg' },
        { label: 'date from', value: '03/11/21' },
        { label: 'date to', value: '03/11/21' },
      ]
    },
  ];
  
  export const tableMockData = [
    {
      id: '1',
      srNo: '1',
      fosterCarer: 'Timmy Toppee',
      relationshipToFosterCarer: 'Friend',
      relativeName: 'Teri Dactyl',
      signedDate: '03/10/21',
      createdDate: '03/10/21',
      createdBy: 'john doe',
    }
  ]

export {default as AdultHouseHoldMember} from './AdultHouseHoldMember'