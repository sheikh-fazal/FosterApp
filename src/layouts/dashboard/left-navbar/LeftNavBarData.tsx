//Importing MUI Icons
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import EscalatorWarningOutlinedIcon from "@mui/icons-material/EscalatorWarningOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import OnDeviceTrainingOutlinedIcon from "@mui/icons-material/OnDeviceTrainingOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import PolicyOutlinedIcon from "@mui/icons-material/PolicyOutlined";
import GroupRemoveOutlinedIcon from "@mui/icons-material/GroupRemoveOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

//==========================================================================================================
// CONSTANTS
export const NAV_LINKS = [
  {
    id: 1,
    text: "Dashboard",
    img: <GridViewOutlinedIcon />,
    link: "/dashboard",
  },
  {
    id: 2,
    text: "Carer Info",
    img: <PermIdentityOutlinedIcon />,
    link: "/carer-info",
  },
  {
    id: 3,
    text: "Personal Details",
    img: <AccountBoxOutlinedIcon />,
    link: "/personal-details",
  },
  {
    id: 4,
    text: "Foster Carer",
    img: <EscalatorWarningOutlinedIcon />,
    link: "",
  },
  {
    id: 5,
    text: "Foster Carer Recruitment",
    img: <PersonSearchOutlinedIcon />,
    link: "/recruitment",
  },
  {
    id: 6,
    text: "Foster Child",
    img: <Diversity3OutlinedIcon />,
    link: "/foster-child-lists",
  },
  {
    id: 7,
    text: "Matching & Placement",
    img: <SettingsOutlinedIcon />,
    link: "",
    sublist: [
      {
        list: "Matching",
        sublistlink: "",
      },
      {
        list: "Placement",
        sublistlink: "",
      },
    ],
  },
  {
    id: 8,
    text: "Deregister Foster Carer",
    img: <HowToRegOutlinedIcon />,
    link: "/de-registration",
  },
  {
    id: 9,
    text: "Safeguarding",
    img: <VerifiedUserOutlinedIcon />,
    link: "/safeguarding",
  },
  {
    id: 10,
    text: "Referrals",
    img: <GroupsOutlinedIcon />,
    link: "/referral",
  },

  {
    id: 11,
    text: "Time Sheet Logging",
    img: <TimerOutlinedIcon />,
    link: "",
  },
  {
    id: 12,
    text: "Panel",
    img: <BallotOutlinedIcon />,
    link: "/panel",
  },
  {
    id: 13,
    text: "Training",
    img: <OnDeviceTrainingOutlinedIcon />,
    link: "/training",
  },
  {
    id: 14,
    text: "Local Authority",
    img: <AssignmentOutlinedIcon />,
    link: "/local-authority",
  },
  {
    id: 15,
    text: "Audits",
    img: <ContentPasteSearchOutlinedIcon />,
    link: "/audits",
  },
  {
    id: 16,
    text: "Children's Guide",
    img: <ClassOutlinedIcon />,
    link: "/children-guides",
  },
  {
    id: 17,
    text: "Advocacy",
    img: <GavelOutlinedIcon />,
    link: "/advocacy",
  },
  {
    id: 18,
    text: "Compliance Management",
    img: <HandshakeOutlinedIcon />,
    link: "/compliance-management",
  },
  {
    id: 19,
    text: "Reports",
    img: <AssessmentOutlinedIcon />,
    link: "/reports",
  },
  {
    id: 20,
    text: "Contact Directory",
    img: <ContactMailOutlinedIcon />,
    link: "",
  },
  {
    id: 21,
    text: "System Admin",
    img: <ManageAccountsOutlinedIcon />,
    link: "",
  },
  {
    id: 22,
    text: "Policies & Guidelines",
    img: <PolicyOutlinedIcon />,
    link: "/policies-and-guidelines",
  },
  {
    id: 23,
    text: "User Manual",
    img: <GroupRemoveOutlinedIcon />,
    link: "./user-manual",
  },
  {
    id: 24,
    text: "IT Help Desk",
    img: <SupportAgentOutlinedIcon />,
    link: "",
  },
];
