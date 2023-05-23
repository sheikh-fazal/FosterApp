import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { useTheme } from "@mui/material";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { TrainingSessionsHome } from "@root/sections/training/manage-trainers/training-sessions/training-sessions-home";
import { TrainingSessionsSchedule } from "@root/sections/training/manage-trainers/training-sessions/training-sessions-schedule";
import { TrainingSessionsSpeakers } from "@root/sections/training/manage-trainers/training-sessions/training-sessions-speakers";
import { TrainingSessionsAttendees } from "@root/sections/training/manage-trainers/training-sessions/training-sessions-attendees";
import { TrainingSessionsBudget } from "@root/sections/training/manage-trainers/training-sessions/training-sessions-budget";

const PAGE_TILE = "Training Sessions";

TrainingSessions.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "training",
          href: "/training",
        },
        {
          name: "Manage Trainers",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function TrainingSessions() {
  const theme = useTheme();
  return (
    <Page title={PAGE_TILE}>
      <HorizaontalTabs
        tabsDataArray={[
          "Home",
          "Schedule",
          "Speakers",
          "Attendees",
          "Budget"
        ]}
      >
      <TrainingSessionsHome />
      <TrainingSessionsSchedule />
      <TrainingSessionsSpeakers />
      <TrainingSessionsAttendees />
      <TrainingSessionsBudget />
      </HorizaontalTabs>
    </Page>
  );
}
