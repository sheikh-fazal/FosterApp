import { useTheme } from "@mui/material";



export const usePlacementMeetingRecordTable = () => {
    const theme: any = useTheme();

  const PlacementMeetingRecordColumns = [
   
      
        {
            accessorFn: (row: any) => row.meetingAgenda,
            id: "meetingAgenda",
            cell: (info: any) => info.getValue(),
            header: () => <span>Meeting Agenda</span>,

        },
        {
            accessorFn: (row: any) => row.attendees,
            id: "attendees",
            cell: (info: any) => info.getValue(),
            header: () => <span>attendees</span>,

        },
        {
            accessorFn: (row: any) => row.meetingDate,
            id: "meetingDate",
            cell: (info: any) => info.getValue(),
            header: () => <span>Meeting Date</span>,
        },
        {
          accessorFn: (row: any) => row.meetingMinutes,
          id: "meetingMinutes",
          cell: (info: any) => info.getValue(),
          header: () => <span>Meeting Minutes</span>,
      },
      {
        accessorFn: (row: any) => row.videoAudioMemo,
        id: "videoAudioMemo",
        cell: (info: any) => info.getValue(),
        header: () => <span>Video/Audio Memo</span>,
    },
    {
      accessorFn: (row: any) => row.actions,
      id: "actions",
      cell: (info: any) => info.getValue(),
      header: () => <span>Actions</span>,
  },
  {
    accessorFn: (row: any) => row.outcome,
    id: "outcome",
    cell: (info: any) => info.getValue(),
    header: () => <span>Outcome</span>,
},
        
       
    ];

    return {
      PlacementMeetingRecordColumns,theme
    }
}
