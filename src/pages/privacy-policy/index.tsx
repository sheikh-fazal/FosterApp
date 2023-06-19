import Layout from "@root/layouts";
import HeroSection from "@root/sections/privacy-and-policy/HeroSection";
import PrivacyAndPolicy from "@root/sections/privacy-and-policy/PrivacyAndPolicy";
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
      {/* Privacy Page Hero Section */}
      <HeroSection />
      {/* Main Privacy Page */}
      <PrivacyAndPolicy />
    </>
  );
}
