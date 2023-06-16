import { Grid, Box, Tab, Tabs, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import useComplianceManagementTabs from "./useComplianceManagementTabs";
import {
  StyledLeftTab,
  VerticalTabsProps,
  styles,
  StyledBox,
  StyledImage,
  StyledTypography,
} from ".";
import PdfViewModal from "../Modals/pdf-modal/PdfModal";
import AddCategoryModal from "../Modals/add-modal/AddModal";
import AddIcon from "@mui/icons-material/Add";
import { ComplianceVerticalTabsData } from "..";

const ComplianceVerticalTabs = () => {
  const {
    tabsArray,
    verticalTab,
    horizontalTabValue,
    SelectedTabColor,
    TabPanel,
    handleTabChange,
    theme,
    IsOpenPdfModal,
    setIsOpenPdfModal,
    IsOpenAddCategory,
    setIsOpenAddCategory,
    handleAddCategory,
  } = useComplianceManagementTabs();

  return (
    <Grid container>
      <Grid lg={2.5} sx={{ height: "715px" }}>
        <Box sx={styles.GridWrapper}>
          <Box sx={{ maxHeight: "76vh", overflowY: "auto" }}>
            <Grid container>
              {tabsArray?.map((item: any, index: any) => (
                <Grid lg={6} md={6} sm={6} xs={12} key={index}>
                  <StyledLeftTab
                    key={index}
                    variant="contained"
                    onClick={() => {
                      handleTabChange(index, item.color);
                    }}
                    isSelected={verticalTab === index}
                    hoverBackgroundColor={item.color}
                    hoverColor={item.color}
                    selectedTabColor={SelectedTabColor}
                  >
                    {/*  sx={styles.innerTabs} */}
                    <StyledBox sx={styles.tabLabel}>
                      <StyledBox sx={styles.tabsIcon}>
                        <Image src={item.img} alt="" width={52} height={52} />
                      </StyledBox>
                      <StyledTypography
                        variant="h5"
                        sx={styles.tabsTitle}
                        color={verticalTab === index ? "#fff !important" : item.color}
                      >
                        {item?.title.length > 46
                          ? `${item.title.slice(0, 46)}...`
                          : item.title}
                      </StyledTypography>
                    </StyledBox>
                  </StyledLeftTab>
                </Grid>
              ))}
              <Button
                sx={styles.addMoreButton(theme)}
                type="button"
                variant="contained"
                onClick={() =>
                  setIsOpenAddCategory({
                    ...IsOpenAddCategory,
                    value: "",
                    type: "verticalTab",
                  })
                }
              >
                <StyledBox sx={styles.tabsIcon}>
                  {/* <Image src={item.img} alt="" width={52} height={52} /> */}
                  <AddIcon sx={styles.addMoreIcon(theme)} />
                </StyledBox>
                <Typography variant="h5" sx={styles.tabsTitle}>
                  Add More
                </Typography>
              </Button>
            </Grid>
          </Box>
        </Box>
      </Grid>
      <Grid
        lg={9.5}
        sx={{
          background: "fff",
          boxShadow: "2px 4px 7px rgba(14, 145, 140, 0.2)",
          borderRadius: "10px",
          height: "715px",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          {tabsArray.map((tab: any, index: any) => (
            <TabPanel key={index} value={verticalTab} index={index}>
              <Box sx={styles.tabsWrap}>
                <Tabs
                  value={horizontalTabValue}
                  aria-label="Horizontal tabs example"
                  sx={styles.tabRoot(theme)}
                  TabIndicatorProps={styles.tabIndicator(theme)}
                >
                  {tab.innerData &&
                    tab.innerData.map((data: any, subIndex: any) => (
                      <Tab key={subIndex} label={data.tabTitle} />
                    ))}
                </Tabs>
                <AddIcon
                  sx={styles.addMoreIconTop}
                  onClick={() => {
                    setIsOpenAddCategory({
                      ...IsOpenAddCategory,
                      value: "",
                      type: "horizontalTab",
                    });
                  
                  }}
                />
              </Box>
              {/* {tab.innerData && tab.innerData[horizontalTabValue]?.tabsDocuments} */}
              {tab.innerData &&
                tab.innerData[horizontalTabValue]?.tabsDocuments?.map(
                  (item: any) => (
                    <Typography key={item.id} sx={{ color: "#000 !important" }}>
                      <a
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpenPdfModal(true)}
                      >
                        {item.title}
                      </a>
                    </Typography>
                  )
                )}
            </TabPanel>
          ))}
        </Box>
        <PdfViewModal
          open={IsOpenPdfModal}
          handleClose={() => setIsOpenPdfModal(false)}
        />
        <AddCategoryModal
          open={IsOpenAddCategory.type}
          onSubmit ={(data:any) => handleAddCategory(data)} 
          handleClose={() => setIsOpenAddCategory({ value: "", type: "" })}
         
        />
      </Grid>
    </Grid>
  );
};

export default ComplianceVerticalTabs;
