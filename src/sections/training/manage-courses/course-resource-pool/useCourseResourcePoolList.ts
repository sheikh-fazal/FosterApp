import React from 'react'
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
      image: data.image,
      categoryDescription: data.categoryDescription,
      backgroundColor: colorsArray[Math.floor(Math.random() * 5)],
      link: ""
    }
    const newTodos = resourcePoolListData.slice();
    newTodos.push(addFormData);
    setResourcePoolListData(newTodos)

  };
  return {
    addHandler,
    colorsArray,
    handleClose,
    handleOpen,
    open,
    resourcePoolListData
  }

}
