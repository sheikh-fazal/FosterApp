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
        title: 'Child Name',
        otherOptions: {
          name: 'childName',
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
        title: 'Relationship to Child',
        otherOptions: {
          name: 'relationshipToChild',
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
        { value: 'Today', label: 'Today' }
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
        { label: 'Relative Name(Relation)', value: 'Aida bugg (Sister)' },
        { label: 'branch', value: 'Branch 12' },
      ]
    },
    {
      id: '3',
      subData: [
        { label: 'Child Name', value: 'Aida bugg' },
        { label: 'date from', value: '03/11/21' },
        { label: 'date to', value: '03/11/21' },
      ]
    },
  ];
  
  export const tableMockData = [
    {
      id: '1',
      srNo: '1',
      fosterCarer: 'Teri Dactyl',
      relativeName: 'john doe',
      childName: 'Teri Dactyl',
      signedDate: '03/10/21',
      createdDate: '03/10/21',
      createdBy: 'john doe',
    }
  ]
