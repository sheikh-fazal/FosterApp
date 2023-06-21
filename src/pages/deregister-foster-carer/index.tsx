import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import DeregisterFosterDashboard from "@root/sections/deregister-foster-dashboard/DeregisterFosterDashboard";

const BREADCRUMBS = [
  {
    icon: <HomeIcon/>,
    href: "/",
    
  },
  {
    name: "Recruitment",
    href: "",
  },
];

const Forms = () => {
  return (
    <div>
      <Layout
        showTitleWithBreadcrumbs
        breadcrumbs={BREADCRUMBS}
        title="Recuitment"
      >
        <DeregisterFosterDashboard />
      </Layout>
    </div>
  );
};
export default Forms;
