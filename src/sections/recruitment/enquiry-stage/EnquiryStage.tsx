import { Button, Grid, Skeleton } from "@mui/material";
import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Image from "@root/components/Image";
import { RecruitmentStatusDropdown } from "../recruitment-status-dropdown/recruitment-status-dropdown";
import { InformationDialogbox } from "../information-dialogbox/InformationDialogbox";
import { AssignedFormDialogbox } from "../assigned-form-dialogbox/AssignedFormDialogbox";
import { useEnquiryStage } from "./useEnquiryStage";
import Link from "next/link";
import ArrowLeftSharpIcon from "@mui/icons-material/ArrowLeftSharp";
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
    enquiryStageData,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    setEnquiryStageData,
  } = useEnquiryStage();

  return (
    <div>
      <Grid
        container
        px={2}
        sx={{
          bgcolor:
            theme.palette.mode === "light" ? "white" : theme.palette.grey[800],
        }}
      >
        {enquiryStageData?.map((ele: any, ind: any) => (
          <Grid
            key={ele?.id}
            container
            p={1}
            sx={{
              borderBottom: "1px solid",
              bgcolor:
                theme.palette.mode === "light"
                  ? "white"
                  : theme.palette.grey[800],
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
              <ArrowLeftSharpIcon sx={{ fontSize: 35 }} />
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
              {isLoading && isFetching && (
                <Skeleton variant="rounded" width={200} height={50} />
              )}
              {!isLoading && !isFetching && (
                <RecruitmentStatusDropdown
                  id={"4f7512fb-2916-451b-8240-97f529ded73d"}
                  status={ele?.status}
                  textForApi={ele?.textForApi}
                  component={"EnquiryStage"}
                  setMockData={setEnquiryStageData}
                  mockData={enquiryStageData}
                />
              )}
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
