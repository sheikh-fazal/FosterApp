import RHFDatePicker from '@root/components/hook-form/RHFDatePicker';

export const viewReportsFilterData = [
    {
      gridlength: 6,
      title: 'Name of foster carer',
      otherOptions: {
        name: 'nameOfFosterCarer',
        fullWidth: true,
        size: 'small',
      },
      options: [
        { value: 'all', label: 'all' }
      ],
    },
    {
        gridlength: 6,
        title: 'Name of decision maker',
        otherOptions: {
          name: 'nameOfDecisionMaker',
          fullWidth: true,
          size: 'small',
        },
        options: [
          { value: 'all', label: 'all' }
        ],
      },
      {
        gridlength: 6,
        title: 'Date of panel (if applicable)',
        otherOptions: {
          name: 'dateOfReviewMeeting',
          fullWidth: true,
          size: 'small',
        },
        options: [
          { value: 'Today', label: 'Today' }
        ],
      },
    {
      gridlength: 6,
      title: 'Date of review',
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
        { label: 'Name of child(DOB)', value: 'Teri dactyl(10/10/2012)' },
        { label: 'region', value: 'Region 11' },
      ]
    },
    {
      id: '2',
      subData: [
        { label: 'Supervising Social Worker', value: 'Aida bugg' },
        { label: 'branch', value: 'Branch 12' },
      ]
    },
    {
      id: '3',
      subData: [
        { label: 'Foster Carer(s)', value: 'Teri Dectyl, Peg Legge' },
        { label: 'date from', value: '03/11/21' },
        { label: 'date to', value: '03/11/21' },
      ]
    },
  ];
  
  export const tableMockData = [
    {
      id: '1',
      srNo: '1',
      nameOfFosterCarer: 'Timmy Toppee',
      dateOfPanel: '03/10/21',
      nameOfDecisionMaker: 'Teri Dactyl',
      reviewDate: '03/10/21',

    }
  ]
