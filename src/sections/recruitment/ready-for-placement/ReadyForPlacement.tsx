import { Button, Grid, Skeleton } from "@mui/material";
import React from "react";
import ArrowLeftSharpIcon from "@mui/icons-material/ArrowLeftSharp";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import Image from "@root/components/Image";
import { InformationDialogbox } from "../information-dialogbox/InformationDialogbox";
import { AssignedFormDialogbox } from "../assigned-form-dialogbox/AssignedFormDialogbox";

import { RecruitmentStatusDropdown } from "../recruitment-status-dropdown/recruitment-status-dropdown";
import { useReadyForPlacement } from "./useReadyForPlacement";
import Link from "next/link";

export default function ReadyForPlacement() {
  const {
    theme,
    openIdForInfo,
    setOpenIdForInfo,
    formDialogId,
    setFormDialogId,
    readyForPlacementData,
    setReadyForPlacementData,
    isLoading,
    isError,
    isFetching,
    isSuccess,
  } = useReadyForPlacement();

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
        {readyForPlacementData?.map((ele: any) => (
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
              {isLoading && isFetching && (
                <Skeleton variant="rounded" width={200} height={50} />
              )}
              {!isLoading && !isFetching && (
                <RecruitmentStatusDropdown
                  id={"4f7512fb-2916-451b-8240-97f529ded73d"}
                  status={ele?.status}
                  textForApi={ele?.textForApi}
                  component={"ReadyForPlacement"}
                  setMockData={setReadyForPlacementData}
                  mockData={readyForPlacementData}
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
    </div>
  );
}
