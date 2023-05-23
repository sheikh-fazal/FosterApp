import React from 'react'
import Avatar from '@mui/material/Avatar';
import { courseResourceData } from '.';


export default function useCourseResourcePoolList() {
  const [open, setOpen] = React.useState(false);
  const [resourcePoolListData, setResourcePoolListData] = React.useState(courseResourceData);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  const colorsArray = [
    "#F63D31",
    "#20BE60",
    "#0E918C",
    "#10B0C6",
    "#EB9411",
  ];

  const addHandler = (data: any) => {
    console.log("data", data)
    const addFormData = {
      image: "",
      categoryDescription: data.categoryDescription,
      backgroundColor: colorsArray[Math.floor(Math.random() * 5)],
      link: "/training/manage-courses/course-resource-pool/course-sub-categories"
    }
    const newTodos = resourcePoolListData.slice();
    newTodos.push(addFormData);
    setResourcePoolListData(newTodos)

  };
  return {
    addHandler,
    handleClose,
    handleOpen,
    open,
    resourcePoolListData
  }

}
