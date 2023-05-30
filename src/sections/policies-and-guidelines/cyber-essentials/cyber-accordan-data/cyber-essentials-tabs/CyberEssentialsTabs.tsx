import React from "react";
import { useRouter } from "next/router";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadedDocument from "./uploaded-document/UploadedDocument";
import CyberEseentialsForm from "./cyber-essentials-form/CyberEseentialsForm";

// =====================================================================================

const CyberEssentialsTabs = () => {
  const router = useRouter();
  const { title } = router.query;
  return (
    <HorizaontalTabs tabsDataArray={[title, "Uploaded Documents"]}>
      <CyberEseentialsForm />
      <UploadedDocument />
    </HorizaontalTabs>
  );
};

export default CyberEssentialsTabs;