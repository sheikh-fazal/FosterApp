import { Button, Grid } from "@mui/material";
import React from "react";
import arrowIcon from "../../../assets/img/recruitment/arrow.png";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { ENQUIRYSTAGEDATA } from "./index";
import Image from "@root/components/Image";
import { RecruitmentStatusDropdown } from "../recruitment-status-dropdown/recruitment-status-dropdown";
import { InformationDialogbox } from "../information-dialogbox/InformationDialogbox";
import { AssignedFormDialogbox } from "../assigned-form-dialogbox/AssignedFormDialogbox";
import { useEnquiryStage } from "./useEnquiryStage";
import Link from "next/link";
import SocialWorkerFormDialogbox from "./social-worker-form-dialogbox/SocialWorkerFormDialogbox";

export default function EnquiryStage() {
  const {
    theme,
    openIdForInfo,
    setOpenIdForInfo,
    formDialogId,
    setFormDialogId,
    openSocialWorkerAsessmentDialogbox,
    setOpenSocialWorkerAssessmentDialogbox,
  } = useEnquiryStage();

  return (
    <div>
      <Grid container>
        {ENQUIRYSTAGEDATA?.map((ele: any) => (
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
              {ele?.modal ? (
                <span
                  style={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                  onClick={() => setOpenSocialWorkerAssessmentDialogbox(true)}
                >
                  {ele?.viewForms}
                </span>
              ) : (
                <Link
                  style={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    fontSize: 14,
                    textDecoration: "none",
                  }}
                  href={ele?.href}
                >
                  {ele?.viewForms}
                </Link>
              )}
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
              <RecruitmentStatusDropdown id={ele?.id} status={ele?.status} />
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
                component={"Enquiry Stage"}
                openFormDialog={formDialogId === ele?.id}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
      <SocialWorkerFormDialogbox
        openFormDialog={openSocialWorkerAsessmentDialogbox}
        setOpenSocialWorkerAssessmentDialogbox={
          setOpenSocialWorkerAssessmentDialogbox
        }
      />
    </div>
  );
}
