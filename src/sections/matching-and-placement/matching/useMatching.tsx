import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { MatchingFormDataValidationSchema, matchingDefaultValues } from ".";

export const useMatching = () => {
  const [selectValueFosterCarerOrChild, setselectValueFosterCarerOrChild] = useState('');
  const [fosterOptionsArray, setfosterOptionsArray] = useState([])
  const [isSecondFieldSelected, setIsSecondFieldSelected] = useState(false);
  const [selectValueName, setSelectValueName] = useState('');
  const [isOpenHowItWorkModal, setIsOpenHowItWorkModal] = useState(false);

  const methods: any = useForm({
    resolver: yupResolver(MatchingFormDataValidationSchema),
    defaultValues: matchingDefaultValues,
  });

  const { handleSubmit } = methods;
  const onSubmit = (data: any) => {
    console.log(data, "submitted data");
  }
  const onSelectCarerChildHandleChange = (event: any) => {
    const selectedValue = event.target.value;
    setIsSecondFieldSelected(true);
    setselectValueFosterCarerOrChild(selectedValue)
    setSelectValueName('')
  }
  const onSelectNameHandleChange = (event: any) => {
    const selectedValue = event.target.value;
    setIsSecondFieldSelected(selectedValue !== 'Select');
    setSelectValueName(selectedValue); 
  };
  const handleGetFosterOptions = (event: any) => {
    setfosterOptionsArray(event)

  }
  return {
    methods,
    handleSubmit,
    onSubmit,
    selectValueFosterCarerOrChild, fosterOptionsArray,
    isSecondFieldSelected, selectValueName,
    onSelectCarerChildHandleChange, onSelectNameHandleChange,
    handleGetFosterOptions,isOpenHowItWorkModal, setIsOpenHowItWorkModal

  };
};
