import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { useTableParams } from "@root/hooks/useTableParams";
import { useGetRegularAssessmentDetailsQuery } from "@root/services/recruitment/assessment-stage-one/assessmentStageOneApi";
import dayjs from "dayjs";
import React, { useRef } from "react";

const meetingListColumns = [
  {
    accessorFn: (row: any) => row?.firstName + " " + row?.lastName,
    id: "name",
    cell: (info: any) => info.getValue(),
    header: "Meeting Date/time",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.dateOfBirth,
    id: "meetingAgenda",
    cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
    header: "Meeting Agenda",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.dateOfBirth,
    id: "meetingAttendees",
    cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
    header: "Meeting Attendees",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.dateOfBirth,
    id: "meetingOutcomes",
    cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
    header: "Meeting Outcomes",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.dateOfBirth,
    id: "meetingActions",
    cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
    header: "Meeting Actions",
    isSortable: true,
  },

  {
    accessorFn: (row: any) => row?.dateOfBirth,
    id: "nextAssessmentPlan",
    cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
    header: "Next Assessment plan",
    isSortable: true,
  },

  {
    accessorFn: (row: any) => row?.id,
    id: "actions",
    cell: (info: any) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <TableAction type="edit" onClicked={() => console.log("s")} />
        <TableAction type="view" onClicked={() => console.log("s")} />
      </Box>
    ),
    header: "Actions",
    isSortable: false,
  },
];

const RegularAssessmentMeetingList = (props: any) => {
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } = useTableParams();
  const { data, isLoading, isError, isFetching, isSuccess } = useGetRegularAssessmentDetailsQuery({
    params,
  });
  console.log(
    "🚀 ~ file: RegularAssessmentMeetingList.tsx:80 ~ RegularAssessmentMeetingList ~ data:",
    data
  );
  const { setOpen } = props;
  const meta = data?.meta;
  const regularassessmentList = data?.regularassessmentList;
  const tableHeaderRef = useRef<any>();
  const SELECT_FILTERS = [
    {
      key: "attendees",

      label: "Attendees",

      options: [{ label: "All", value: "all" }],
    },
  ];
  return (
    <>
      <TableHeader
        ref={tableHeaderRef}
        showSelectFilters
        disabled={isLoading}
        title="Meeting Agenda"
        searchKey="search"
        showAddBtn
        onAdd={() => setOpen(true)}
        onChanged={headerChangeHandler}
        selectFilters={SELECT_FILTERS}
      />
      <CustomTable
        data={regularassessmentList}
        columns={meetingListColumns}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        currentPage={meta?.page}
        totalPages={meta?.pages}
        showSerialNo
        isPagination
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default RegularAssessmentMeetingList;
