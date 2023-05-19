import React, { useState } from 'react'

export default function useSafeguardingChildProtection() {
  const [select, setSelect] = useState({ status: "", refereeType: "" });
  const selectHandler = (data: any) => {
    setSelect({ ...select, refereeType: data.refereeType });
  };
  return {
    selectHandler
  }
}
