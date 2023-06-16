import { Box } from "@mui/material";
import Layout from "@root/layouts";
import HeroSection from "@root/sections/privacy-policy/HeroSection";
import PrivacyPolicySection from "@root/sections/privacy-policy/PrivacyPolicySection";
import React from "react";

const PAGE_TITLE = "Privacy Policy";
PrivacyPolicy.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="main" title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};
export default function PrivacyPolicy() {
  return (
    <>
      <HeroSection />
      <Box sx={{ mt: 10 }}>
        <PrivacyPolicySection />
      </Box>
    </>
  );
}
