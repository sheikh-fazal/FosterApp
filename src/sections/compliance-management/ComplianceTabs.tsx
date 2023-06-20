import * as React from "react";
import { Tabs, Tab, Typography, Grid, Box } from "@mui/material";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Image from "next/image";
import { useComplianceManagement } from "./useComplianceMangement";
import CategoryModal from "./Modals/category-modal/CategoryModal";
import AddIcon from '../../assets/svg/compliance-management/addIcon.svg';

interface IVERTICALTABSPROPS {
  tabsDataArray: Array<Object>;
}

export default function ComplianceTabs({ tabsDataArray, ...other }: IVERTICALTABSPROPS) {

  const { handleChange, currentTab, categoryModal, handleCategoryModal } = useComplianceManagement()

  return (
    <>
      <Grid container spacing={2} sx={styles.container}>
        <Grid item xl={3} lg={4} xs={12}>
          <Tabs
            selectionFollowsFocus
            orientation="horizontal"
            variant="scrollable"
            sx={styles.tabRoot}
            TabIndicatorProps={styles.tabIndicator}
            value={currentTab}
            onChange={handleChange}
          >
            {tabsDataArray?.map((item: any) => (
              <Tab
                key={item?.index}
                sx={{ overflow: 'hidden' }}
                label={
                  item?.title === 'Add More' ?
                    <TitleWithIcon
                      title={item?.title}
                      icon={item?.icon}
                      color={item?.color}
                      onClick={handleCategoryModal}
                    />
                    :
                    <TitleWithIcon
                      currentTab={currentTab}
                      currentIndex={item?.index}
                      title={item?.title}
                      icon={item?.icon}
                      color={item?.color}
                    />
                }
              />
            ))}
          </Tabs>
        </Grid>
        <Grid item xl={9} lg={8} xs={12}>
          {tabsDataArray?.map((item: any) => (
            <div
              role="tabpanel"
              key={item?.title}
              hidden={currentTab !== item?.index}
              id={`vertical-tabpanel-${item?.index}`}
              aria-labelledby={`vertical-tab-${item?.index}`}
              {...other}
            >
              {item?.innerDataArray && <Box position={'relative'}>
                <Image src={AddIcon} style={{ position: 'absolute', top: 13, right: 15, zIndex: 10, cursor: 'pointer' }} alt="icon" />
                <HorizaontalTabs tabsDataArray={item?.innerDataArray?.map((obj: any) => obj.title)}>
                  {item?.innerDataArray?.map((data: any) => data.component)}
                </HorizaontalTabs>
              </Box>}
            </div>
          ))}
        </Grid>
      </Grid>
      {categoryModal && <CategoryModal open={categoryModal} onClose={handleCategoryModal} />}
    </>
  )
}

const TitleWithIcon = ({ title, icon, color, currentTab, currentIndex, ...rest }: any) => {
  return (
    <Box sx={styles.titleWithIcon(color, title, currentTab, currentIndex)} {...rest}>
      <Image src={icon} alt='icon' style={{ margin: '0px auto' }} height={50} width={50} />
      <Typography className="title">{title}</Typography>
    </Box>
  )
};

const styles = {
  container: {
    display: { xs: "block", md: "flex" },
  },
  tabRoot: {
    flexWrap: 'wrap',
    "& .MuiTab-root": {
      marginRight: "0px !important",
      maxWidth: "unset !important",
      width: "auto !important",
    },
    "& .MuiTabs-flexContainer": {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '10px',
      '& button.MuiButtonBase-root': {
        borderRadius: '10px',
        flexBasis: { lg: '48% !important', md: '49% !important', xs: '100% !important' },
      }
    },
  },
  tabIndicator: {
    sx: { display: "none" },
  },
  tabsIcon: {
    width: "52px",
    height: "52px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  tabsTitle: {
    fontSize: "12px !important",
    lineHeight: "14.4px !important",
    fontWeight: 600,
    letterSpacing: '0.005em',
    textAlign: 'center !important'
  },
  tabLabel: {
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 3,
    padding: "12px",
    gap: "15px",
  },
  titleWithIcon: (backgroundColor: string, title: string, currentTab: number, currentIndex: number) => ({
    height: '120px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    backgroundColor: currentTab === currentIndex && title !== 'Add More' ? backgroundColor : '#fff',
    gap: '5px',
    p: '12px 9px',
    '& .title': {
      color: currentTab === currentIndex && title !== 'Add More' ? '#fff' : backgroundColor,
      fontWeight: 600,
      fontSize: '12px',
      marginTop: '20px'
    },
    '& img': {
      filter: currentTab === currentIndex && title !== 'Add More' ?
        `brightness(${title === 'Stakeholder Surveys' ? '1' : '0'}) invert(${title === 'Stakeholder Surveys' ? '0' : '1'})`
        : `brightness(1) invert(0)`,
    },
    ':hover': {
      backgroundColor,
      '& img': {
        filter: `brightness(${title === 'Stakeholder Surveys' || title === 'Add More' ? 1 : 0}) 
                invert(${title === 'Stakeholder Surveys' || title === 'Add More' ? 0 : 1})`,
        path: { fill: '#fff', }
      },
      '& .title': {
        color: '#fff',
      },
    }
  }),
}
