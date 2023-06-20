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
    text: "Dashboard",
    img: <GridViewOutlinedIcon />,
    link: "/dashboard",
  },
  {
    text: "Carer Info",
    img: <PermIdentityOutlinedIcon />,
    link: "/carer-info",
  },
  {
    text: "Personal Details",
    img: <AccountBoxOutlinedIcon />,
    link: "/personal-details",
  },
  {
    text: "Foster Carer",
    img: <EscalatorWarningOutlinedIcon />,
    link: "",
  },
  {
    text: "Foster Carer Recruitment",
    img: <PersonSearchOutlinedIcon />,
    link: "/recruitment",
  },
  {
    text: "Foster Child",
    img: <Diversity3OutlinedIcon />,
    link: "",
  },
  {
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
    text: "Deregister Foster Carer",
    img: <HowToRegOutlinedIcon />,
    link: "/de-registration",
  },
  {
    text: "Safeguarding",
    img: <VerifiedUserOutlinedIcon />,
    link: "/safeguarding",
  },
  {
    text: "Referrals",
    img: <GroupsOutlinedIcon />,
    link: "/referral",
  },

  {
    text: "Time Sheet Logging",
    img: <TimerOutlinedIcon />,
    link: "",
  },
  {
    text: "Panel",
    img: <BallotOutlinedIcon />,
    link: "/panel",
  },
  {
    text: "Training",
    img: <OnDeviceTrainingOutlinedIcon />,
    link: "/training",
  },
  {
    text: "Local Authority",
    img: <AssignmentOutlinedIcon />,
    link: "/local-authority",
  },
  {
    text: "Audits",
    img: <ContentPasteSearchOutlinedIcon />,
    link: "",
  },
  {
    text: "Children's Guide",
    img: <ClassOutlinedIcon />,
    link: "",
  },
  {
    text: "Advocacy",
    img: <GavelOutlinedIcon />,
    link: "",
  },
  {
    text: "Compliance Management",
    img: <HandshakeOutlinedIcon />,
    link: "",
  },
  {
    text: "Reports",
    img: <AssessmentOutlinedIcon />,
    link: "/reports",
  },
  {
    text: "Contact Directory",
    img: <ContactMailOutlinedIcon />,
    link: "",
  },
  {
    text: "System Admin",
    img: <ManageAccountsOutlinedIcon />,
    link: "",
  },
  {
    text: "Policies & Guidelines",
    img: <PolicyOutlinedIcon />,
    link: "/policies-and-guidelines",
  },
  {
    text: "User Manual",
    img: <GroupRemoveOutlinedIcon />,
    link: "./user-manual",
  },
  {
    text: "IT Help Desk",
    img: <SupportAgentOutlinedIcon />,
    link: "",
  },
];
