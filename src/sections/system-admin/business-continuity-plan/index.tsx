import BcpHistory from "./bcp-history-accordin/BcpHistory";
import BusinessContinuityPlanTable from "./business-continuity-plain-main/BusinessContinuityPlanTable";

export const data = [
  {
    title: "Business Continuity Plan",
    component: <BusinessContinuityPlanTable />,
  },
  {
    title: "BCP History",
    component: <BcpHistory />,
  },
];
