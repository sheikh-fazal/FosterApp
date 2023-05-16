import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import AnnualReviewA from "@root/sections/carer-info/personal-info/chronology-of-events/annual-review/annual-review-A/AnnualReviewA";
import { AnnualReviewB } from "@root/sections/carer-info/personal-info/chronology-of-events/annual-review/annual-review-B/AnnualReviewBData";
import AnnualReviewC from "@root/sections/carer-info/personal-info/chronology-of-events/annual-review/annual-review-C/AnnualReviewC";
import { AnnualReviewD } from "@root/sections/carer-info/personal-info/chronology-of-events/annual-review/annual-review-D/AnnualReviewData";
import AnnualReviewE from "@root/sections/carer-info/personal-info/chronology-of-events/annual-review/annual-review-E/AnnualReviewE";
import PlacementReview from "@root/sections/carer-info/personal-info/chronology-of-events/annual-review/placement-review/PlacementReview";
import Documents from "@root/sections/carer-info/personal-info/chronology-of-events/annual-review/documents/Documents";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Review List",
    href: "/carer-info/personal-info/carer-chronology-of-events",
  },
  {
    name: "Annual Review",
    href: "",
  },
];

const PAGE_TITLE = "Annual Review";
AnnualReview.getLayout = function getLayout(page: any) {
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
export default function AnnualReview() {
  // -------
  return (
    <HorizaontalTabs
      tabsDataArray={[
        "Annual Review A",
        "Annual Review B",
        "Annual Review C",
        "Annual Review D",
        "Annual Review E",
        "Placement Review",
        "Documents",
      ]}
    >
      {/* Annual Review A Component */}
      <AnnualReviewA />
      {/* Annual Review B Component */}
      <AnnualReviewB />
      {/* Annual Review C Component */}
      <AnnualReviewC />
      {/* Annual Review D Component */}
      <AnnualReviewD />
      {/* Annual Review E Component */}
      <AnnualReviewE />
      {/* Placement Review Component */}
      <PlacementReview />
      {/* Documents Component */}
      <Documents />
    </HorizaontalTabs>
  );
}
