import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Layout from "@root/layouts";
import { HouseholdConditionA } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/household-condition-A/HouseholdConditionA";
import { HouseholdConditionB } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/household-condition-B/HouseholdConditionB";
import { SafetyFactorsIndoorsA } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/safety-factors-indoors-A/SafetyFactorsIndoorsA";
import { SafetyFactorsIndoorsB } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/safety-factors-indoors-B/SafetyFactorsIndoorsB";
import { SafetyFactorsIndoorsC } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/safety-factors-indoors-C/SafetyFactorsIndoorsC";
import { SafetyFactorsIndoorsD } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/safety-factors-indoors-D/SafetyFactorsIndoorsD";
import { SafetyFactorsIndoorsE } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/safety-factors-indoors-E/SafetyFactorsIndoorsE";
import { SafetyFactorsOutdoors } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/safety-factors-outdoors/SafetyFactorsOutdoors";
import { UploadDocument } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/upload-document/UploadDocument";

import React, { useState } from "react";

// AddHealthAndSafetyTableTabs.getLayout = function getLayout(page: any) {
export default function AddHealthAndSafetyTableTabs() {
  const [breadCrumbData, setBreadCrumbData] = useState(
    "Household Condition - A"
  );
  const tabsData = [
    "Household Condition-A",
    "B",
    "Safety Factors - Indoors A",
    "B \u00a0\u00a0",
    "C",
    "D",
    "E",
    "Safety Factors - Outdoor",
    "Upload Documents",
  ];
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Carer Info",
      href: "/carer-info/",
    },
    {
      name: "Health & Safety",
    },
  ];
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={breadCrumbData}
    >
      {/* {page} */}

      {/* return ( */}
      <HorizaontalTabs tabsDataArray={tabsData}>
        <HouseholdConditionA
          formData={(data: any) => console.log(data)}
          breadCrumbData={setBreadCrumbData}
        />
        <HouseholdConditionB
          formData={(data: any) => console.log(data)}
          breadCrumbData={setBreadCrumbData}
        />
        <SafetyFactorsIndoorsA
          formData={(data: any) => console.log(data)}
          breadCrumbData={setBreadCrumbData}
        />
        <SafetyFactorsIndoorsB
          formData={(data: any) => console.log(data)}
          breadCrumbData={setBreadCrumbData}
        />
        <SafetyFactorsIndoorsC
          formData={(data: any) => console.log(data)}
          breadCrumbData={setBreadCrumbData}
        />
        <SafetyFactorsIndoorsD
          formData={(data: any) => console.log(data)}
          breadCrumbData={setBreadCrumbData}
        />
        <SafetyFactorsIndoorsE  />
        <SafetyFactorsOutdoors />
        <UploadDocument />
      </HorizaontalTabs>
    </Layout>
  );
}
