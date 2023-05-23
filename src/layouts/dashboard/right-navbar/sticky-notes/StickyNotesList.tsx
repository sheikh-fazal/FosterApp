import { useDeleteStickyNotesMutation, useLazyGetStickyNotesByDateQuery } from "@root/services/stickyNotes";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Box, List, ListItem, Typography } from "@mui/material";
import { HiOutlinePlusSm } from "react-icons/hi";
import { useEffect, useState } from "react";
import { RxCross2 } from 'react-icons/rx';
import * as Yup from "yup";
import dayjs from "dayjs";
import { enqueueSnackbar } from "notistack";

export const FormSchema = Yup.object().shape({
  content: Yup.string(),
});

function StickyNotesList({ date, setAddNotes, setEdit, setItem }: any) {
  const [showlist, setShowlist] = useState(false);

  const [getInitialContactData, { data, isLoading: dataLoding }] =
  useLazyGetStickyNotesByDateQuery();

  const getdata = async (date: any) => {
    const paramsObj: any = {};
    if (date) paramsObj["date"] = date;
    const query:any = "by-date?" + new URLSearchParams(paramsObj).toString();
    await getInitialContactData({query});
  };
  useEffect(() => {
    getdata(dayjs(date).format("YYYY-MM-DD"));
  }, [date]);

  const [deleteNotes, { isSuccess: successMessage }] =
  useDeleteStickyNotesMutation();

if (successMessage) {
  enqueueSnackbar("Notes Deleted Successfully", {
    variant: "success",
  });
}

  return (
    <Box>
      <Box sx={style.flexsbox}>
        <Box sx={style.iconStyle}>
          <AiOutlineUnorderedList
            color="#ffff"
            fontSize="1.1rem"
            onClick={() => setShowlist(!showlist)}
          />
        </Box>
        <Box sx={style.iconStyle}>
          <HiOutlinePlusSm
            color="#ffff"
            fontSize="1.5rem"
            onClick={() => setAddNotes(true)}
          />
        </Box>
      </Box>
      <Box sx={{ height: 150, overflow: "auto" }}>
        {!dataLoding ? (
          data && data?.length > 0 ? (
            data.map((item: any) => (
              <List key={item?.id}>
                <ListItem
                  sx={style.listStyle}                  
                >
                  <Typography
                    sx={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      maxWidth: "200px",
                      textOverflow: "ellipsis",
                    }}
                    onClick={() => {
                      setItem(item);
                      setEdit(true);
                    }}
                  >{`"${item?.content}"`}</Typography>
                  <RxCross2 onClick={()=>{deleteNotes(item?.id)}}/>
                </ListItem>
              </List>
            ))
          ) : (
            <Box sx={{ mt: 1 }}>No Notes on this date!</Box>
          )
        ) : (
          <Box sx={{ mt: 1, }}>Loading.....</Box>
        )}
      </Box>
    </Box>
  );
}

export default StickyNotesList;

const commonClass = {
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 25,
  height: 25,
  cursor: "pointer",
};

const style = {
  mainContainer: {
    backgroundColor: "#FFEFB7",
    p: 1,
    mt: 2,
    borderRadius: "8px",
  },
  editContainer: {
    backgroundColor: "#ffff",
    p: 1,
    mt: 2,
    borderRadius: "8px",
  },

  flexsbox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconStyle: (theme: any) => ({
    backgroundColor: theme.palette.primary.main,
    ...commonClass,
  }),
  redIcon: {
    backgroundColor: "#F24822",
    ...commonClass,
  },
  greenIcon: {
    backgroundColor: "#14AE5C",
    ...commonClass,
  },
  textbox: (theme: any) => ({
    mt: 0.5,
    "& .MuiInputBase-root": {
      color: theme.palette.grey[900],
      borderBottom: "0px solid",
      "&:before": {
        borderBottom: "0px solid !important",
      },
      "&:after": {
        borderBottom: "0px solid",
      },
      "&.Mui-focused": {
        borderBottom: "0px solid",
      },
      "&:hover": {
        borderBottom: "0px solid !important",
      },
    },
  }),
  datecolor: (theme: any) => ({
    color: theme.palette.grey[900],
  }),
  listStyle: (theme: any) => ({
    p: 0,
    color: theme.palette.grey[900],
    cursor: "pointer",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"    
  }),
};
