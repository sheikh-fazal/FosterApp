import React, { useState } from "react";
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
import usePath from "@root/hooks/usePath";
import { useRouter } from "next/router";
import Error from "@root/components/Error";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import { useGetHealthAndSafetyDataByIdQuery } from "@root/services/carer-info/medical-history/health-and-safety/healthAndSafetyApi";
const viewHealthAndSafetyTableTabs = () => {
  const [breadCrumbData, setBreadCrumbData] = useState("Household Condition-A");
  const router = useRouter();
  const { healthAndSafetyId } = router.query;

  const { makePath } = usePath();
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Carer Info",
      href: makePath({
        path: "/carer-info/medical-history/health-and-safety",
        skipQueries: ["healthAndSafetyId"],
      }),
    },
    {
      name: "Health & Safety",
    },
  ];
  const { data, isLoading, isError, isSuccess } =
    useGetHealthAndSafetyDataByIdQuery(healthAndSafetyId);
  if (isError) return <Error />;
  console.log(data?.data?.getHealthAndSafety);

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
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={breadCrumbData}
    >
      {isLoading && <SkeletonFormdata />}

      {isSuccess && (
        <HorizaontalTabs tabsDataArray={tabsData}>
          <HouseholdConditionA
            formData={(data: any) => console.log(data)}
            breadCrumbData={setBreadCrumbData}
            disabled
            initialValueProps={
              data?.data?.getHealthAndSafety?.houseHoldConditionA
            }
            //   submitFunction={submitt}
            //   isLoading={loadinghouseholdAPostData}
          />
          <HouseholdConditionB
            formData={(data: any) => console.log(data)}
            breadCrumbData={setBreadCrumbData}
            disabled
            //   submitFunction={submit2}
            //   isLoading={loadingAllConditions}
          />
          <SafetyFactorsIndoorsA
            formData={(data: any) => console.log(data)}
            breadCrumbData={setBreadCrumbData}
            disabled
          />
          <SafetyFactorsIndoorsB
            formData={(data: any) => console.log(data)}
            breadCrumbData={setBreadCrumbData}
            disabled
          />
          <SafetyFactorsIndoorsC
            formData={(data: any) => console.log(data)}
            breadCrumbData={setBreadCrumbData}
            disabled
          />
          <SafetyFactorsIndoorsD
            formData={(data: any) => console.log(data)}
            breadCrumbData={setBreadCrumbData}
            disabled
          />
          <SafetyFactorsIndoorsE
            formData={(data: any) => console.log(data)}
            breadCrumbData={setBreadCrumbData}
            disabled
          />
          <SafetyFactorsOutdoors
            formData={(data: any) => console.log(data)}
            breadCrumbData={setBreadCrumbData}
            disabled
          />
          <UploadDocument breadCrumbData={setBreadCrumbData} disabled />
        </HorizaontalTabs>
      )}
    </Layout>
  );
};
export default viewHealthAndSafetyTableTabs;
