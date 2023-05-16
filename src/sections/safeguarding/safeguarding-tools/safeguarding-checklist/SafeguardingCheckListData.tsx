import InvolvingCommunities from "./involving-your-communities/InvolvingCommunities";
import ManagementResponsibilities from "./management-responsibilities/ManagementResponsibilities";
import SafeguardingEssentials from "./safeguarding-essentials/SafeguardingEssentials";
import SaferRecruitment from "./safer-recruitment/SaferRecruitment";
import SupportingFamilies from "./supporting-families/SupportingFamilies";
import WiderSafeguardingIssues from "./wider-safeguarding-issues/WiderSafeguardingIssues";

//Accordian Data
export const safeGuardingCheckListData = [
  {
    title: "Section 1 : Safeguarding Essentials ",
    component:<SafeguardingEssentials/>,
  },
  {
    title: "Section 2 : Safer recruitment",
    component: <SaferRecruitment/>,
  },
  {
    title: "Section 3 : Involving your communities",
    component: <InvolvingCommunities/>,
  },
  {
    title: "Section 4 : Supporting families",
    component: <SupportingFamilies/>,
  },
  {
    title: "Section 5 : Wider safeguarding issues",
    component: <WiderSafeguardingIssues/>
  },
  {
    title: "Section 6 : Management responsibilities around  safeguarding",
    component: <ManagementResponsibilities/>,
  },
  
];

//Carer Type Mock Data
export const carerTypeData = [
  {
    value: "Option 1",
  },
  {
    value: "Option 2",
  },
  {
    value: "Option 3",
  },
  {
    value: "Option 4",
  },
];
//Carer Name Mock Data
export const carerNameData = [
  {
    value: "Option 1",
  },
  {
    value: "Option 2",
  },
  {
    value: "Option 3",
  },
  {
    value: "Option 4",
  },
];
