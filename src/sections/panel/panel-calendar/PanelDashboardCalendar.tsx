import React from 'react';
import Calendar from 'react-calendar';
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import dayjs from 'dayjs';
import { Typography, styled, useTheme } from '@mui/material';

const PanelDashboardCalendar = () => {
    const theme = useTheme();
    return (
        <NewCalender
            iconsStyles={{
                fontSize: "25px",
                color: theme.palette.primary.main,
            }}
        />
    )
}

export default PanelDashboardCalendar


const NewCalender = styled(({ iconsStyles, ...props }: any) => (
    <Calendar
        {...props}
        nextLabel={<ArrowRightIcon sx={iconsStyles} />}
        next2Label={null}
        prevLabel={<ArrowLeftIcon sx={iconsStyles} />}
        prev2Label={null}
        formatMonthYear={(_: any, date: any) =>
            <Typography component={'span'}
                sx={{ fontWeight: 700, fontSize: '18px', }}
            >
                {`Upcoming Panels - ${dayjs(date).format('MMM  YYYY')}`}
            </Typography>
        }
    />
))(({ theme }: any) => ({
    color: theme.palette.grey[700],
    boxShadow: theme.shadows[5],
    background: 'linear-gradient(180.38deg, #FFFFFF 0.33%, #F8F9FF 99.67%)',
    borderRadius: '8px',
    width: '100%',
    minHeight: '400px',
    border: 'none',
    '& .react-calendar__tile': { margin: '12px 0px', '&:hover': { borderRadius: '8px !important' } },
    "& .react-calendar__tile--active": {
        background: `${theme.palette.primary.main} !important `,
        borderRadius: "8px",
        '&:hover': { borderRadius: "8px !important" }
    },
    "& .react-calendar__tile--now": {
        background: '#F6830F',
        '&:hover': { background: '#F6830F', borderRadius: '8px !important' },
        color: theme.palette.primary.contrastText,
        borderRadius: "8px",
    },
    "&.react-calendar button:enabled:hover": {
        borderRadius: "8%",
    },
    "& .react-calendar__tile--hasActive": {
        background: "unset !important",
    },
    "& .react-calendar__navigation__label": {
        '&:hover': { background: 'transparent !important' },
        maxWidth: "290px",
    },
    "& .react-calendar__navigation": {
        justifyContent: 'center',
        borderBottom: '2px solid rgba(63, 82, 109, 0.1)',
        padding: '5px',
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
