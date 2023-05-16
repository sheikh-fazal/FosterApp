import Layout from "@root/layouts";
import Recruitment from "@root/sections/recruitment/recruitment";
import React from "react";
const BREADCRUMBS = [
  {
    icon: <></>,
    name: "Forms Sandbox",
    href: "/forms",
  },
];
const Forms = () => {
  return (
    <div>
      <Layout
        showTitleWithBreadcrumbs
        breadcrumbs={BREADCRUMBS}
        title="Ahmed Form Sandbox"
      >
        <Recruitment />
      </Layout>
    </div>
  );
};
export default Forms;
