import * as React from "react";
import { Children, ReactNode, useState, SyntheticEvent } from "react";
import { Tabs, Tab, Typography, useTheme, Grid, Box, Card, styled } from "@mui/material";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Image from "next/image";

interface IVERTICALTABSPROPS {
  tabsDataArray: Array<Object>;
  children: ReactNode;
}

export default function ComplianceVericalTabs({ tabsDataArray, children, ...other }: IVERTICALTABSPROPS) {
  const [value, setValue] = useState(0);
  const [openModal,setOpenModal] = useState(false);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleModalOpen = () => {}

  return (
    <Grid container spacing={2} sx={styles.container}>
      <Grid item xs={12} lg={3}>
        <Tabs
          selectionFollowsFocus
          orientation="vertical"
          variant="scrollable"
          sx={styles.tabRoot}
          TabIndicatorProps={styles.tabIndicator}
          value={value}
          onChange={handleChange}
        >
          {tabsDataArray?.map((item: any) => (
            <Tab
              key={item?.index}
              sx={styles.tabIndicatorBtn(item?.color)}
              label={
                item?.title === 'Add More' ?
                  <TitleWithIcon title={item?.title} icon={item?.icon} color={item?.color} onClick={handleModalOpen} />
                  :
                  <StyledLeftTab color={item?.color}>
                    <Image src={item?.icon} alt='icon' />
                    <Typography>{item?.title}</Typography>
                  </StyledLeftTab>
              }
            />
          ))}
        </Tabs>
      </Grid>
      <Grid item xs={12} lg={9}>
        {tabsDataArray?.map((item: any) => (
          <div
            role="tabpanel"
            key={item?.title}
            hidden={value !== item?.index}
            id={`vertical-tabpanel-${item?.index}`}
            aria-labelledby={`vertical-tab-${item?.index}`}
            {...other}
          >
            <HorizaontalTabs tabsDataArray={item?.innerDataArray?.map((obj: any) => obj.title)}>
              {item?.innerDataArray && item?.innerDataArray?.map((data: any) => data.component)}
            </HorizaontalTabs>
          </div>
        ))}
      </Grid>
    </Grid>
  );
}

const TitleWithIcon = ({ title, icon, color, ...rest }: any) => {
  return (
    <Box
      sx={{ height: '120px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px', p: '12px 9px' }}
      {...rest}
    >
      {/* {renderIcon(title, color)} */}
      <Image src={icon} alt='icon' />
      {/* <Icon className={styles.icon(color)}/> */}
      <Typography>{title}</Typography>
    </Box>
  )
}


export const StyledLeftTab: any = styled(({ title, icon, color, ...rest }: any) => (
  <Box {...rest} />
))(({ color, }) => ({
  ':hover': {
    // backgroundColor: color,
    '& img': {
      filter: ' brightness(0) invert(1);', // Set the background color of the image to white on hover
      // color: '#fff'

    },
  }
}));

// ----------------------------------------------------------------------
// Styles
const styles = {
  container: {
    display: { xs: "block", md: "flex" },
  },

  tabRoot: {
    "& .MuiTab-root": {
      marginRight: "0px !important",
      maxWidth: "unset !important",
      width: "100% !important",
    },
    "& .MuiTabs-flexContainer": {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    " & .MuiButtonBase-root-MuiTab-root": {
      width: '45% !important',
    }
  },
  tabIndicatorBtn: (background: string) => ({ background: '#fff', mb: 2, flexBasis: '45% !important', margin: '7px 15px !important', '& :hover': { background, color: '#fff' }, overflow: 'hidden', borderRadius: '4px' }),
  tabIndicator: {
    sx: { display: "none" },
  },
}
