import React, { useRef } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Box, Button, Card, Modal, useTheme } from "@mui/material";
import Page from "@root/components/Page";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import TableAction from "@root/components/TableAction";
import { useTableParams } from "@root/hooks/useTableParams";
import { useGetCarerFamilyTableApiQuery } from "@root/services/carer-info/personal-info/carer-family-support-network/carerFamilyApi";
import dayjs from "dayjs";
import { FormProvider } from "@root/components/hook-form";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Assessment stage 1",
    href: "/recruitment",
  },
  {
    name: "Regular Assessment Meeting",
    href: "",
  },
];

const PAGE_TITLE = "Recruitment";
// ----------------------------------------------------------------------

RegularAssessmentMeeting.getLayout = function getLayout(page: any) {
  return (
    <Layout showTitleWithBreadcrumbs breadcrumbs={BREADCRUMBS} title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};

export default function RegularAssessmentMeeting() {
  const tableHeaderRef = useRef<any>();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } = useTableParams();

  // ----------------------------------------------------------------------

  // ----------------------------------------------------------------------

  const columns = [
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

  const SELECT_FILTERS = [
    {
      key: "availability",

      label: "Availability",

      options: [{ label: "Available", value: "available" }],
    },
  ];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme: any = useTheme();
  console.log("🚀 ~ file: index.tsx:120 ~ RegularAssessmentMeeting ~ theme:", theme);
  return (
    <Page title={PAGE_TITLE}>
      <Card sx={{ p: 1 }}>
        <TableHeader
          ref={tableHeaderRef}
          showSelectFilters
          // disabled={isLoading}
          title="Meeting Agenda"
          searchKey="search"
          showAddBtn
          onAdd={handleOpen}
          onChanged={headerChangeHandler}
          selectFilters={SELECT_FILTERS}
        />
        <CustomTable
          data={[]}
          columns={columns}
          // isLoading={isLoading}
          // isFetching={isFetching}
          // isError={isError}
          // isSuccess={isSuccess}
          // currentPage={meta?.page}
          // totalPages={meta?.pages}
          showSerialNo
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
        />
      </Card>

      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={Styles.root}>
            <Box sx={Styles.buttonWrapper}>
              <Button sx={Styles.buttonSuccess(theme)}>Upload</Button>
              <Button onClick={handleClose} sx={Styles.buttonError(theme)}>
                Clear
              </Button>
            </Box>
          </Box>
        </Modal>
      )}
    </Page>
  );
}
// styles

const Styles = {
  root: (theme: any) => ({
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "95%", sm: 600 },
    bgcolor: "background.paper",
    borderRadius: "4px",
    boxShadow: 24,
    p: 2,
  }),
  innerBox: (theme: any) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }),
  crossIcons: (theme: any) => ({
    fontSize: "100px",
    color: theme.palette.error.main,
  }),
  buttonWrapper: (theme: any) => ({
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    mt: 2,
  }),
  buttonError: (theme: any) => ({
    bgcolor: theme.palette.orange.main,
    color: theme.palette.primary.contrastText,
    "&:hover": { bgcolor: theme.palette.orange.main },
    px: 2,
    py: 1,
  }),
  buttonSuccess: (theme: any) => ({
    bgcolor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    minWidth: "100px",
    "&:hover": { bgcolor: theme.palette.primary.main },
  }),
};
