import LicenceDisableTable from "./third-party-license-disable-table/LicenseDisableTable";
import ThirdPartyLicenceTable from "./third-party-licence-table/ThirdPartyLicenseTable";

export const accordianData = [
  {
    title: "Manage Third Party License",
    component: <ThirdPartyLicenceTable />,
  },
  {
    title: "Manage Third Party License ( disable )",
    component: <LicenceDisableTable />,
  },
];
