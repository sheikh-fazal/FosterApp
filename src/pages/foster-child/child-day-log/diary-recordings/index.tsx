import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import DiaryRecordingsTable from "@root/sections/foster-child/child-day-log/diary-recordings/DiaryRecordingsTable";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: "/foster-child",
  },
  {
    name: "Diary Recordings List",
    href: "",
  },
];

const PAGE_TITLE = "Diary Recordings";
DiaryRecordings.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function DiaryRecordings() {
  return <DiaryRecordingsTable />;
}
