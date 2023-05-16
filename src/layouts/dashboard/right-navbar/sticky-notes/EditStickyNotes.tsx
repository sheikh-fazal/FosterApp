import {
    Box,
    IconButton,
    List,
    ListItem,
    TextField,
    Typography,
  } from "@mui/material";
  import { useTheme } from "@mui/material/styles";
  import { HiOutlinePlusSm } from "react-icons/hi";
  import { RiPencilFill } from "react-icons/ri";
  import { AiOutlineUnorderedList } from "react-icons/ai";
  import { BsCheck2, BsX } from "react-icons/bs";
  import * as Yup from "yup";
  import { useForm } from "react-hook-form";
  import { useState } from "react";
  import { enqueueSnackbar } from "notistack";
  import {
    useEditStickyNotesMutation,
    useGetStickyNotesQuery,
    useStickyNotesMutation,
  } from "@root/services/stickyNotes";
  
  export const FormSchema = Yup.object().shape({
    content: Yup.string(),
  });
  
  function EditStickyNotes() {
    const theme: any = useTheme();
    const [edit, setEdit] = useState(false);
    const [showlist, setShowlist] = useState(false);
    const { data, isLoading: dataLoding } = useGetStickyNotesQuery<any>();
    const [viewData, setViewData] = useState<any>(
      !dataLoding && data[0]?.content
    );
    const [id,setId] = useState<any>();
  
    const [addNotes, { isLoading }] = useStickyNotesMutation();
    const [editData] = useEditStickyNotesMutation();
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = async (data: any) => {
      try {
        const res: any = await editData({payload:{...data},id}).unwrap();
        if (res) {
          setEdit(false);
        }
      } catch (error: any) {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      }
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={edit ? style.editContainer : style.mainContainer}>
          {edit ? (
            <Box sx={style.flexsbox}>
              <Box sx={style.redIcon}>
                <BsX
                  color="#ffff"
                  fontSize="1.3rem"
                  onClick={() => setEdit(false)}
                />
              </Box>
              <Box sx={style.greenIcon}>
                <IconButton type="submit">
                  <BsCheck2 color="#ffff" fontSize="1.3rem" />
                </IconButton>
              </Box>
            </Box>
          ) : (
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
                  onClick={() => setEdit(!edit)}
                />
              </Box>
            </Box>
          )}
  
          {!showlist ? (
            <>
              <TextField
                sx={style.textbox}
                id="standard-multiline-static"
                multiline
                {...register("content")}
                rows={4}
                disabled={!edit}
                defaultValue={viewData}
                variant="standard"
              />
              <Box sx={style.flexsbox}>
                <Typography sx={style.datecolor}>july 21,2021</Typography>
                {!edit && (
                  <Box sx={style.iconStyle}>
                    <RiPencilFill
                      color="#ffff"
                      fontSize="1.1rem"
                      onClick={() => setEdit(true)}
                    />
                  </Box>
                )}
              </Box>
            </>
          ) : (
            <Box sx={{ height: 150, overflow: "auto" }}>
              {!dataLoding &&
                data?.map((item: any) => (
                  <List key={item?.id}>
                    <ListItem
                      sx={style.listStyle}
                      onClick={() => {
                        setShowlist(false), setViewData(item?.content),setId(item?.id)
                      }}
                    >
                      {`"${item?.content.split("").slice(0, 20).join("")}...."`}
                    </ListItem>
                  </List>
                ))}
            </Box>
          )}
        </Box>
      </form>
    );
  }
  
  export default EditStickyNotes;
  
  const commonClass={
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    cursor: "pointer",
  }
  
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
      ...commonClass
    },
    greenIcon: {
      backgroundColor: "#14AE5C",
      ...commonClass
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
    }),
  };
  