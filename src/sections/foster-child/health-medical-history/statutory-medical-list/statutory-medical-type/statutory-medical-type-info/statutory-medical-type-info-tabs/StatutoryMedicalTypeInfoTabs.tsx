import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Documents from "../documents/Documents";
import { StatutoryMedicalTypeTabsDataFunction } from ".";

import { useRouter } from "next/router";
import StatutoryMedicalTypeInfo from "../StatutoryMedicalTypeInfo";

const StatutoryMedicalTypeInfoTabs = () => {
  const { query } = useRouter();
  const headerHeading: any = {
    EHCP: "EHCP",
    CLA: "CLA MEDICAL",
    Dental: "Dental Check",
    Optician: "Optician Check",
  };
  const setHeaderHeading = (type: any) => {
    return headerHeading?.[type];
  };
  return (
    <HorizaontalTabs
      tabsDataArray={StatutoryMedicalTypeTabsDataFunction?.(
        setHeaderHeading?.(query.type)
      )}
    >
      <StatutoryMedicalTypeInfo />
      <Documents />
    </HorizaontalTabs>
  );
};

export default StatutoryMedicalTypeInfoTabs;
