import { useRef, useState } from "react";

export const useSafeCarePolicy = () => {
  const tableHeaderRef = useRef<any>();
  return {
    tableHeaderRef,
  };
};
