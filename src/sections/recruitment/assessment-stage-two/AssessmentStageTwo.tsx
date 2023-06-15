import { Button, Grid } from "@mui/material";
import React from "react";
import arrowIcon from "../../../assets/img/recruitment/arrow.png";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Image from "@root/components/Image";
import { RecruitmentStatusDropdown } from "../recruitment-status-dropdown/recruitment-status-dropdown";
import { InformationDialogbox } from "../information-dialogbox/InformationDialogbox";
import { AssignedFormDialogbox } from "../assigned-form-dialogbox/AssignedFormDialogbox";
import { useAssessmentStageTwo } from "./useAssessmentStageTwo";
import Link from "next/link";

export default function AssessmentStageTwo() {
  const {
    theme,
    openIdForInfo,
    setOpenIdForInfo,
    formDialogId,
    setFormDialogId,
    assessmentStageTwoData,
    setAssessmentStageTwoData,
  } = useAssessmentStageTwo();
  return (
    <div>
      <Grid container>
        {assessmentStageTwoData?.map((ele: any) => (
          <Grid
            key={ele?.id}
            container
            p={1}
            sx={{
              borderBottom: "1px solid black",
              bgcolor: "white",
            }}
          >
            <Grid
              item
              container
              mt={1}
              direction={"column"}
              alignItems={"center"}
              lg={2.3}
              xs={12}
              pt={1}
              sx={{ position: "relative" }}
            >
              <Image src={ele?.imgIcon} alt={ele?.text} />
              <InfoOutlinedIcon
                onClick={() => setOpenIdForInfo(ele?.id)}
                sx={{
                  position: "absolute",
                  right: "22px",
                  fontSize: 18,
                  cursor: "pointer",
                  color: "black",
                }}
              />
              <InformationDialogbox
                handleClose={() => {
                  setOpenIdForInfo("");
                }}
                open={openIdForInfo === ele?.id}
                informationText={ele?.informationText}
                informationIconData={ele?.informationIcon}
              />

              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  paddingTop: 7,
                  textAlign: "center",
                  color: "black",
                }}
              >
                {ele?.text}
              </span>
            </Grid>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"center"}
              item
              lg={1.5}
              xs={12}
            >
              <Image src={arrowIcon} alt={ele?.text} />
            </Grid>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"center"}
              item
              lg={2.3}
              xs={12}
            >
              <Link
                href={ele?.href}
                style={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                {ele?.viewForms}
              </Link>
            </Grid>
            <Grid
              my={1}
              container
              alignItems={"center"}
              justifyContent={"center"}
              item
              lg={3.6}
              md={6}
              xs={12}
            >
              <RecruitmentStatusDropdown
                id={ele?.id}
                status={ele?.status}
                mockData={assessmentStageTwoData}
                setMockData={setAssessmentStageTwoData}
                textForApi={ele?.textForApi}
                component={"AssessmentStage2"}
              />
            </Grid>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"center"}
              item
              lg={2.3}
              md={6}
              xs={12}
            >
              <Button
                onClick={() => setFormDialogId(ele?.id)}
                variant="contained"
              >
                Assigned To
              </Button>
              <AssignedFormDialogbox
                handleCloseForm={() => {
                  setFormDialogId("");
                }}
                component={"Assessment Stage Two"}
                openFormDialog={formDialogId === ele?.id}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
