import { Box, Typography, Modal, useTheme, Card, Stack } from "@mui/material";
import React, { useState } from "react";
import FosterCarerRecruitmentHeaderImage from "@root/assets/img/foster-carer-recruitment/FosterCarerRecruitmentHead.png";
import Image from "next/image";
import FosterCarerRecruitmentDetailsModal from "./FosterCarerRecruitmentDetailsModal";

const FosterCarerRecruitmentHeader = () => {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState<any>(false);

  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderRadius={"10px 10px 0px 0px"}
      p={1}
      sx={{
        background: "linear-gradient(106.35deg, #134E5E 0%, #71B280 100%)",
      }}
    >
      <Typography variant="h4">Prospective Foster Carer</Typography>
      <Image
        src={FosterCarerRecruitmentHeaderImage}
        alt={"Image"}
        width={0}
        height={0}
        onClick={() => setOpen(true)}
        style={{ cursor: "pointer" }}
      />
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box sx={style}>
          <Typography
            variant="h4"
            bgcolor={theme.palette.primary.main}
            textAlign={"center"}
            borderRadius={"32px 32px 0px 0px"}
            p={1}
          >
            Foster Carer Recuritment
          </Typography>
          <Box p={2}>
            <Card>
              <Typography variant="h5" bgcolor={theme.palette.primary.main}>
                Enquiry Stage
              </Typography>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-around"}
                p={2}
                gap={"10px"}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  gap={"15px"}
                  sx={{ cursor: "pointer" }}
                  onClick={() =>
                    setDetails("some data that needs to be shown here!")
                  }
                >
                  <Image
                    src={FosterCarerRecruitmentHeaderImage}
                    alt={"Image"}
                    width={0}
                    height={0}
                  />
                  <Typography variant="body1">
                    Inital Enquiry form Applicant
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  gap={"15px"}
                  sx={{ cursor: "pointer" }}
                >
                  <Image
                    src={FosterCarerRecruitmentHeaderImage}
                    alt={"Image"}
                    width={0}
                    height={0}
                  />
                  <Typography variant="body1">
                    Inital Enquiry form Applicant
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  gap={"15px"}
                  sx={{ cursor: "pointer" }}
                >
                  <Image
                    src={FosterCarerRecruitmentHeaderImage}
                    alt={"Image"}
                    width={0}
                    height={0}
                  />
                  <Typography variant="body1">
                    Inital Enquiry form Applicant
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  gap={"15px"}
                  sx={{ cursor: "pointer" }}
                >
                  <Image
                    src={FosterCarerRecruitmentHeaderImage}
                    alt={"Image"}
                    width={0}
                    height={0}
                  />
                  <Typography variant="body1">
                    Inital Enquiry form Applicant
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>
      </Modal>
      <FosterCarerRecruitmentDetailsModal
        details={details}
        setDetails={setDetails}
      />
    </Box>
  );
};

export default FosterCarerRecruitmentHeader;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  width: 700,
  height: "80vh",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "32px",
  textAlign: "center",
};
