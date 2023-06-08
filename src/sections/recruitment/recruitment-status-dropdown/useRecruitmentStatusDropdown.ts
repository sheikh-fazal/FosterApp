import React from "react";

export const useRecruitmentStatusDropdown = ({id, status, point}:any) => {
  const options = ["Failed", "To be reviewed", "Passed", "Pending"];
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const optionsColor: any = {
    Failed: "linear-gradient(106.35deg, #F6460F 0%, #FE2B5E 100%)",
    "To be reviewed": "linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)",
    Passed: "linear-gradient(90deg, #2CB764 10.76%, #0E918C 133.7%)",
    Pending: "linear-gradient(108.65deg, #F6830F -23.21%, #DC3545 190.22%)",
  };

  const handleMenuItemClick = (event: any, index: number) => {
    // console.log( id, status, point, index);
    // let x= options.forEach(({ele, ind}:any)=>console.log(ind === index)
    // )
    // console.log(x);
    
    setOpen(false);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };
  return {
    options,
    open,
    setOpen,
    anchorRef,
    handleMenuItemClick,
    handleClose,
    optionsColor,
  };
};
