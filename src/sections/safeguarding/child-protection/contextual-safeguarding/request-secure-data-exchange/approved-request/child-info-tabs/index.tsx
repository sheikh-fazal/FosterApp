import HdrAutoIcon from "@mui/icons-material/HdrAuto";
import { Box } from "@mui/material";
import PersonalInfo from "../personal-info/PersonalInfo";
import ChildInfoFeeling from "../child-wishes-feeling/ChildInfoFeeling";
import SupportingEvidence from "../supporting-evidence/SupportingEvidence";
import ChildBirthMother from "../child-brith-mother/ChildBirthMother";
import BirthMotherPartner from "../Birth-mother-partner/BirthMotherPartner";
import SocialHistoryBirthMother from "../social-history-of-birth-mother/SocialHistoryBirthMother";
import BirthFatherParentalResponsibility from "../birth-father-parental-responsibility/BirthFatherParentalResponsibility";
import WithoutParentalResponsibility from "../birth-father-without-parental-responsibility/WithoutParentalResponsibility";
import BirthMotherViews from "../Birth-mother-views/BirthMotherViews";
import ChildBithFather from "../child-birth-father/ChildBithFather";
import RelationshipBirthFatherMother from "../relationship-Between-birth-father-and-mother/RelationshipBirthFatherMother";
import BirthFatherPartner from "../details-of-birth-father’s-current-partner/BirthFatherPartner";
import BirthFatherView from "../birth-father-views/BirthFatherView";
import StatusOfChild from "../status-of-child/StatusOfChild";
import ChildFamilyRelatives from "../child-family-&-relatives/ChildFamilyRelatives";
import AdditionalDocuments from "../additional-documents/AdditionalDocuments";
import AgencyInfo from "../agency-info/AgencyInfo";

export const TABSDATAARRY = [
  {
    index: 0,
    Label: (
      <Box sx={{ display: "flex", alignItems: "center", gap: "3px", mt: "5px", mb: "3px", }}>
        <HdrAutoIcon />
        <span style={{ fontSize: "14px", fontWeight: "600" }}>
          About The Child
        </span>
      </Box>
    ),
    title: "Personal Info",
    component: <PersonalInfo />,
  },
  {
    index: 1,
    title: "Child Wishes & feeling",
    component: <ChildInfoFeeling />,
  },
  {
    index: 2,
    title: "Supporting Evidence ",
    component: <SupportingEvidence />,
  },
  {
    index: 3,
    Label: (
      <Box sx={{ display: "flex", alignItems: "center", gap: "3px", mt: "5px", mb: "3px", }}>
        <HdrAutoIcon />
        <span style={{ fontSize: "14px", fontWeight: "600" }}>
        Child’s Birth Mother
        </span>
      </Box>
    ),
    title: "Child’s Birth Mother",
    component: <ChildBirthMother />,
  },
  {
    index: 4,
    title: "Details of Birth Mother Partner",
    component: <BirthMotherPartner />,
  },
  {
    index: 5,
    title: "Social History of Birth Mother",
    component: <SocialHistoryBirthMother />,
  },
  {
    index: 6,
    title: "Birth Father - Parental Responsibility",
    component: <BirthFatherParentalResponsibility />,
  },
  {
    index: 7,
    title: "Birth Father-without Parental Responsibility",
    component: <WithoutParentalResponsibility />,
  },

  {
    index: 8,
    title: "Birth Mother Views",
    component: <BirthMotherViews />,
  },
  {
    index: 9,
    Label: "Child’s Birth Father",
    title: "Child’s Birth Father",
    component: <ChildBithFather />,
  },
  {
    index: 10,
    title: "Relationship Between Birth Father and Mother",
    component: <RelationshipBirthFatherMother />,
  },
  {
    index: 11,
    title: "Details of Birth Father’s Current Partner",
    component: <BirthFatherPartner />,
  },
  {
    index: 12,
    title: "Social History of Birth Mother",
    component: "Social History of Birth Mother",
  },
  {
    index: 13,
    title: "Birth Father Views",
    component: <BirthFatherView />,
  },
  {
    index: 14,
    Label: "Legal Status of Child",
    title: "Status of Child",
    component: <StatusOfChild />,
  },
  {
    index: 15,
    Label: "Family Composition",
    title: "Child Family & Relatives",
    component: <ChildFamilyRelatives />,
  },
  {
    index: 16,
    Label: "Other Documents",
    title: "Additional Documents",
    component: <AdditionalDocuments />,
  },
  {
    index: 17,
    Label: "Other Documents",
    title: "Agency Detail",
    component: <AgencyInfo />,
  },
];

// export const TABSDATAARRY = [
//   {
//     label: "About The Child",
//     tabsArray: [
//       {
//         index: 0,
//         title: "Personal Info",
//         component: <PersonalInfo />,
//       },
//       {
//         index: 1,
//         title: "Child Wishes & feeling",
//         component: <ChildInfoFeeling />,
//       },
//       {
//         index: 2,
//         title: "Supporting Evidence ",
//         component: <SupportingEvidence />,
//       },
//     ],
//   },
// ];
