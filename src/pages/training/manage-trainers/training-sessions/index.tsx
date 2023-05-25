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
import TableHeader from "@root/components/TableHeader";
import { useRouter } from "next/router";


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
  const navigate = useRouter()
  const tabs = [
    {
      id: 1,
      title: 'Tab 1',
      content: <p>Content for Tab 1</p>,
    },
    {
      id: 2,
      title: 'Tab 2',
      content: <p>Content for Tab 2</p>,
    },
    {
      id: 3,
      title: 'Tab 3',
      content: <p>Content for Tab 3</p>,
    },
  ];
  const tabsdata = [
    "new",
    "old"
  ]
  return (
    <Page title={PAGE_TILE}>
      <TableHeader title="" hideSearch showAddBtn onAdd={()=>navigate.push("/training/manage-trainers/training-sessions/add-training-session")}/>
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
