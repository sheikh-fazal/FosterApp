import React from "react";
import { styled } from "@mui/material/styles";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Calendar from "react-calendar";
import { useMarketingCalendar } from "./useMarketingCalendar";

const MarketingCalendar = () => {
  const { theme } = useMarketingCalendar();

  return (
    <>
      <NewCalender
        iconsStyles={{
          fontSize: "25px",
          color: theme.palette.primary.main,
        }}
      />
    </>
  );
};

const NewCalender = styled(({ iconsStyles, ...props }: any) => (
  <Calendar
    navigationLabel={({ label }) => <p>{` ${label}`}</p>}
    {...props}
    nextLabel={<ArrowRightIcon sx={iconsStyles} />}
    next2Label={<SkipNextIcon sx={iconsStyles} />}
    prevLabel={<ArrowLeftIcon sx={iconsStyles} />}
    prev2Label={<SkipPreviousIcon sx={iconsStyles} />}
  />
))(({ theme }: any) => ({
  color: theme.palette.grey[700],
  boxShadow: theme.shadows[5],
  padding: "20px",
  border: "none",
  borderRadius: 10,
  width: "100% !important",
  height:"380px !important",

  "& .react-calendar__tile--active": {
    background: `${theme.palette.primary.main} !important `,
    borderRadius: "8%",
  },
  "& .react-calendar__tile--now": {
    background: `${theme.palette.primary.light} !important `,
    color: theme.palette.primary.contrastText,
    borderRadius: "8%",
  },
  "&.react-calendar button:enabled:hover": {
    borderRadius: "8%",
  },
  "& .react-calendar__tile--hasActive": {
    background: "unset !important",
  },
  "& .react-calendar__navigation__label": {
    borderRadius: "8% !important",
    maxWidth: "100%",
  },
  "& .react-calendar__navigation": {
    "& button": {
      minWidth: "35px",
      color: theme.palette.grey[700],
      fontWeight: 650,
    },
    "& button span": {
      fontFamily: theme.typography.fontFamily,
    },
  },
}));

export default MarketingCalendar;
