import React, { useState } from 'react'

const useMedicalAppointmentForm = (props: any) => {
    const { action, fosterChildId } = props;
    const [isloading, setisloading] = useState(false);
    const [isFatching, setisFatching] = useState(false);
    
  return (
    <div>useMedicalAppointmentForm</div>
  )
}

export default useMedicalAppointmentForm