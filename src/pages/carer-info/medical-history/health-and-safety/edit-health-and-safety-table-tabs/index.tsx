import usePath from "@root/hooks/usePath";
import { useRouter } from "next/router";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Error from "@root/components/Error";
import {
  useGetHealthAndSafetyDataByIdQuery,
  useHealthAndSafetyDataPatchMutation,
} from "@root/services/carer-info/medical-history/health-and-safety/healthAndSafetyApi";
import { HouseholdConditionA } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/household-condition-A/HouseholdConditionA";
import { HouseholdConditionB } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/household-condition-B/HouseholdConditionB";
import { SafetyFactorsIndoorsA } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/safety-factors-indoors-A/SafetyFactorsIndoorsA";
import { SafetyFactorsIndoorsB } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/safety-factors-indoors-B/SafetyFactorsIndoorsB";
import { SafetyFactorsIndoorsC } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/safety-factors-indoors-C/SafetyFactorsIndoorsC";
import { SafetyFactorsIndoorsD } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/safety-factors-indoors-D/SafetyFactorsIndoorsD";
import { SafetyFactorsIndoorsE } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/safety-factors-indoors-E/SafetyFactorsIndoorsE";
import { SafetyFactorsOutdoors } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/safety-factors-outdoors/SafetyFactorsOutdoors";
import { UploadDocument } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/upload-document/UploadDocument";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
const EditHealthAndSafetyTabs = () => {
  const [breadCrumbData, setBreadCrumbData] = useState("Household Condition-A");
  const router = useRouter();
  const { healthAndSafetyId } = router.query;

  const { makePath } = usePath();
  const { data, isLoading, isError } =
    useGetHealthAndSafetyDataByIdQuery(healthAndSafetyId);
  const [postAllApi, { isSuccess }] = useHealthAndSafetyDataPatchMutation();
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
      name: "Edit Health & Safety",
    },
  ];
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
  if (isError) return <Error />;

  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={breadCrumbData}
    >
      {isLoading ? (
        <SkeletonFormdata />
      ) : (
        <HorizaontalTabs tabsDataArray={tabsData}>
          <HouseholdConditionA
            breadCrumbData={setBreadCrumbData}
            onSubmitHandler={postAllApi}
            message={"Updated"}
            isError={isError}
            isSuccess={isSuccess}
            initialValueProps={{
              ...data?.data?.getHealthAndSafety?.houseHoldConditionA,
              inspectionDate: new Date(
                data?.data?.getHealthAndSafety?.houseHoldConditionA?.inspectionDate
              ),
              nestInspectionDate: new Date(
                data?.data?.getHealthAndSafety?.houseHoldConditionA?.nestInspectionDate
              ),
              dateToBeCarriedOut: new Date(
                data?.data?.getHealthAndSafety?.houseHoldConditionA?.dateToBeCarriedOut
              ),
              dateToBeCarriedOut1: new Date(
                data?.data?.getHealthAndSafety?.houseHoldConditionA?.dateToBeCarriedOut1
              ),
              dateToBeCarriedOut2: new Date(
                data?.data?.getHealthAndSafety?.houseHoldConditionA?.dateToBeCarriedOut2
              ),
              dateToBeCarriedOut3: new Date(
                data?.data?.getHealthAndSafety?.houseHoldConditionA?.dateToBeCarriedOut3
              ),
              dateToBeCarriedOut4: new Date(
                data?.data?.getHealthAndSafety?.houseHoldConditionA?.dateToBeCarriedOut4
              ),
              dateToBeCarriedOut5: new Date(
                data?.data?.getHealthAndSafety?.houseHoldConditionA?.dateToBeCarriedOut5
              ),
            }}
          />
          <HouseholdConditionB
            breadCrumbData={setBreadCrumbData}
            onSubmitHandler={postAllApi}
            message={"Updated"}
            isError={isError}
            isSuccess={isSuccess}
            initialValueProps={{
              ...data?.data?.getHealthAndSafety?.houseHoldConditionB,
              dateToBeCarriedOut1: new Date(
                data?.data?.getHealthAndSafety?.houseHoldConditionB?.dateToBeCarriedOut1
              ),
              dateToBeCarriedOut2: new Date(
                data?.data?.getHealthAndSafety?.houseHoldConditionB?.dateToBeCarriedOut2
              ),
              dateToBeCarriedOut3: new Date(
                data?.data?.getHealthAndSafety?.houseHoldConditionB?.dateToBeCarriedOut3
              ),
              dateToBeCarriedOut4: new Date(
                data?.data?.getHealthAndSafety?.houseHoldConditionB?.dateToBeCarriedOut4
              ),
              dateToBeCarriedOut5: new Date(
                data?.data?.getHealthAndSafety?.houseHoldConditionB?.dateToBeCarriedOut5
              ),
              dateToBeCarriedOut6: new Date(
                data?.data?.getHealthAndSafety?.houseHoldConditionB?.dateToBeCarriedOut6
              ),
              dateToBeCarriedOut7: new Date(
                data?.data?.getHealthAndSafety?.houseHoldConditionB?.dateToBeCarriedOut7
              ),
            }}
          />
          <SafetyFactorsIndoorsA
            breadCrumbData={setBreadCrumbData}
            onSubmitHandler={postAllApi}
            message={"Updated"}
            isError={isError}
            isSuccess={isSuccess}
            initialValueProps={{
              ...data?.data?.getHealthAndSafety?.safetyFactorsIndoorsA,
              dateToBeCarriedOut1: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsA?.dateToBeCarriedOut1
              ),
              dateToBeCarriedOut2: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsA?.dateToBeCarriedOut2
              ),
              dateToBeCarriedOut3: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsA?.dateToBeCarriedOut3
              ),
              dateToBeCarriedOut4: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsA?.dateToBeCarriedOut4
              ),
              dateToBeCarriedOut5: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsA?.dateToBeCarriedOut5
              ),
              dateToBeCarriedOut6: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsA?.dateToBeCarriedOut6
              ),
              dateToBeCarriedOut7: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsA?.dateToBeCarriedOut7
              ),
              dateToBeCarriedOut8: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsA?.dateToBeCarriedOut8
              ),
              dateToBeCarriedOut9: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsA?.dateToBeCarriedOut9
              ),
            }}
          />
          <SafetyFactorsIndoorsB
            breadCrumbData={setBreadCrumbData}
            onSubmitHandler={postAllApi}
            message={"Updated"}
            isError={isError}
            isSuccess={isSuccess}
            initialValueProps={{
              ...data?.data?.getHealthAndSafety?.safetyFactorsIndoorsB,
              dateToBeCarriedOut1: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsB?.dateToBeCarriedOut1
              ),
              dateToBeCarriedOut2: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsB?.dateToBeCarriedOut2
              ),
              dateToBeCarriedOut3: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsB?.dateToBeCarriedOut3
              ),
              dateToBeCarriedOut4: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsB?.dateToBeCarriedOut4
              ),
              dateToBeCarriedOut5: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsB?.dateToBeCarriedOut5
              ),
              dateToBeCarriedOut6: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsB?.dateToBeCarriedOut6
              ),
              dateToBeCarriedOut7: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsB?.dateToBeCarriedOut7
              ),
              dateToBeCarriedOut8: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsB?.dateToBeCarriedOut8
              ),
            }}
          />
          <SafetyFactorsIndoorsC
            breadCrumbData={setBreadCrumbData}
            onSubmitHandler={postAllApi}
            message={"Updated"}
            isError={isError}
            isSuccess={isSuccess}
            initialValueProps={{
              ...data?.data?.getHealthAndSafety?.safetyFactorsIndoorsC,
              dateToBeCarriedOut1: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsC?.dateToBeCarriedOut1
              ),
              dateToBeCarriedOut2: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsC?.dateToBeCarriedOut2
              ),
              dateToBeCarriedOut3: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsC?.dateToBeCarriedOut3
              ),
              dateToBeCarriedOut4: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsC?.dateToBeCarriedOut4
              ),
              dateToBeCarriedOut5: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsC?.dateToBeCarriedOut5
              ),
              dateToBeCarriedOut6: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsC?.dateToBeCarriedOut6
              ),
              dateToBeCarriedOut7: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsC?.dateToBeCarriedOut7
              ),
            }}
          />
          <SafetyFactorsIndoorsD
            breadCrumbData={setBreadCrumbData}
            onSubmitHandler={postAllApi}
            message={"Updated"}
            isError={isError}
            isSuccess={isSuccess}
            initialValueProps={{
              ...data?.data?.getHealthAndSafety?.safetyFactorsIndoorsD,
              dateToBeCarriedOut1: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsD?.dateToBeCarriedOut1
              ),
              dateToBeCarriedOut2: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsD?.dateToBeCarriedOut2
              ),
              dateToBeCarriedOut3: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsD?.dateToBeCarriedOut3
              ),
              dateToBeCarriedOut4: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsD?.dateToBeCarriedOut4
              ),
              dateToBeCarriedOut5: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsD?.dateToBeCarriedOut5
              ),
              dateToBeCarriedOut6: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsD?.dateToBeCarriedOut6
              ),
              dateToBeCarriedOut7: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsD?.dateToBeCarriedOut7
              ),
            }}
          />
          <SafetyFactorsIndoorsE
            breadCrumbData={setBreadCrumbData}
            onSubmitHandler={postAllApi}
            message={"Updated"}
            isError={isError}
            isSuccess={isSuccess}
            initialValueProps={{
              ...data?.data?.getHealthAndSafety?.safetyFactorsIndoorsE,
              dateToBeCarriedOut1: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsE?.dateToBeCarriedOut1
              ),
              dateToBeCarriedOut2: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsE?.dateToBeCarriedOut2
              ),
              dateToBeCarriedOut3: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsE?.dateToBeCarriedOut3
              ),
              dateToBeCarriedOut4: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsE?.dateToBeCarriedOut4
              ),
              dateToBeCarriedOut5: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsIndoorsE?.dateToBeCarriedOut5
              ),
            }}
          />
          <SafetyFactorsOutdoors
            breadCrumbData={setBreadCrumbData}
            onSubmitHandler={postAllApi}
            message={"Updated"}
            isError={isError}
            isSuccess={isSuccess}
            initialValueProps={{
              ...data?.data?.getHealthAndSafety?.safetyFactorsOutdoors,
              dateToBeCarriedOut1: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsOutdoors?.dateToBeCarriedOut1
              ),
              dateToBeCarriedOut2: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsOutdoors?.dateToBeCarriedOut2
              ),
              dateToBeCarriedOut3: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsOutdoors?.dateToBeCarriedOut3
              ),
              dateToBeCarriedOut4: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsOutdoors?.dateToBeCarriedOut4
              ),
              dateToBeCarriedOut5: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsOutdoors?.dateToBeCarriedOut5
              ),
              dateToBeCarriedOut6: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsOutdoors?.dateToBeCarriedOut6
              ),
              dateToBeCarriedOut7: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsOutdoors?.dateToBeCarriedOut7
              ),
              dateToBeCarriedOut8: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsOutdoors?.dateToBeCarriedOut8
              ),
              dateToBeCarriedOut9: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsOutdoors?.dateToBeCarriedOut9
              ),
              dateToBeCarriedOut10: new Date(
                data?.data?.getHealthAndSafety?.safetyFactorsOutdoors?.dateToBeCarriedOut10
              ),
            }}
          />
          <UploadDocument
            breadCrumbData={setBreadCrumbData}
            message={"Updated"}
            isError={isError}
            isSuccess={isSuccess}
            initialValueProps={
              data?.data?.getHealthAndSafety?.healthAndSafetyDocs
            }
          />
        </HorizaontalTabs>
      )}
    </Layout>
  );
};

export default EditHealthAndSafetyTabs;
