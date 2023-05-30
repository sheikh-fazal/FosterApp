import React from "react";
import { accordionData } from ".";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import CustomAccordian from "@root/components/CustomAccordian";

// =====================================================================================

const CyberEssentials = () => {
  const router = useRouter();
  const handleAddIcon = (id: string) => {
    const findById = accordionData.find((obj) => obj.id === id);
    const titleArr: any = findById?.title.split("");
    const index = titleArr.indexOf("(");
    const newTitle = titleArr.slice(0, index).join("");
    router.push({ pathname: "/policies-and-guidelines/cyber-essentials/add-form", query: { title: newTitle } });
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={9}>
          <CustomAccordian data={accordionData} addIcon handleAdd={handleAddIcon} />
        </Grid>
      </Grid>
    </>
  );
};

export default CyberEssentials;