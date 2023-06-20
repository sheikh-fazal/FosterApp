import * as React from "react";
import { Children, ReactNode, useState, SyntheticEvent } from "react";
import { Tabs, Tab, Typography, useTheme, Grid, Box, Card, styled } from "@mui/material";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Image from "next/image";
import AddCategoryModal from "./Modals/add-modal/AddModal";
import PdfViewModal from "./Modals/pdf-modal/PdfModal";

interface IVERTICALTABSPROPS {
  tabsDataArray: Array<Object>;
  children: ReactNode;
}

export default function ComplianceVericalTabs({ tabsDataArray, children, ...other }: IVERTICALTABSPROPS) {
  const [value, setValue] = useState(0);
  const [openModal,setOpenModal] = useState(false);
  const [IsOpenAddCategory, setIsOpenAddCategory] = useState({value:'',type:''});
  const [IsOpenPdfModal, setIsOpenPdfModal] = useState(false);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleModalOpen = () => {}

  return (
    <Grid container spacing={2} sx={styles.container}>
      <Grid item xs={12} lg={3} >
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
                  <TitleWithIcon title={item?.title} icon={item?.icon} color={item?.color}   onClick={() =>{
                    setIsOpenAddCategory({
                      ...setIsOpenAddCategory,
                      value: "",
                      type: "verticalTab",
                    });
                  
                  } }/>
                  :
                 
                  <StyledLeftTab   hoverBackgroundColor={item.color}
                   hoverColor={item.color}>
                    <Box  sx={styles.tabLabel} >
                    <Image src={item?.icon} alt='icon' />
                    </Box>
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
      <AddCategoryModal
        open={IsOpenAddCategory.type}
        // onSubmit={(data: any) => handleAddCategory(data)}
        handleClose={() => setIsOpenAddCategory({ value: "", type: "" })}
      />
        <PdfViewModal
        open={IsOpenPdfModal}
        handleClose={() => setIsOpenPdfModal(false)}
      /> 
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


export const StyledLeftTab: any = styled(({ hoverBackgroundColor, hoverColor, title, icon, color, ...rest }: any) => (
  <Box {...rest} />
))(({ color, hoverBackgroundColor, hoverColor, }) => ({
  ':hover': {
    backgroundColor: hoverBackgroundColor,
    color: "#fff !important",
    '& img': {
      '& :hover':{
        filter: ' brightness(0) invert(1);', 
        path:{fill:'#fff'}
      },
    
      filter: ' brightness(0) invert(1);', 
      path:{fill:'#fff'}
    },
   
  },
  marginBottom: "15px !important",
  borderRadius: "10px",
  width: "150px !important",
  height: "130px !important",
  boxShadow: '2px 4px 7px rgba(14, 145, 140, 0.2)',
  cursor: 'pointer',
  
}));

// ----------------------------------------------------------------------
// Styles
const styles = {
  container: {
    // display: { xs: "block", md: "flex" },
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
    width:{
      md: '45% !important',
      xs: '100% !important',
    }
      
    }
  },
  tabIndicatorBtn: (background: string) => ({  flexBasis: '45% !important', margin: '7px 15px !important', '& :hover':{color:'#fff'}}),
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
}
