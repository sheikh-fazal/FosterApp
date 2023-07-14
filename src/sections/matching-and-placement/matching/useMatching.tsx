import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { MatchingFormDataValidationSchema, matchingDefaultValues } from ".";
import { useRouter } from 'next/router';

export const useMatching = () => {
  const router = useRouter();
  const [selectValueFosterCarerOrChild, setselectValueFosterCarerOrChild] = useState('');
  const [fosterOptionsArray, setfosterOptionsArray] = useState([])
  const [isSecondFieldSelected, setIsSecondFieldSelected] = useState(false);
  const [selectValueName, setSelectValueName] = useState('');
  const [isOpenHowItWorkModal, setIsOpenHowItWorkModal] = useState(false);


  // useEffect(() => {
  //   const selectedValue:any = router.query.selectedValue || '';
  //   setselectValueFosterCarerOrChild(selectedValue);
  //   setIsSecondFieldSelected(true);
  // }, [router.query.selectedValue]);

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
    router.push({
      pathname: '/matching',
      query: { selectedValue },
    });
  }
  const onSelectNameHandleChange = (event: any) => {
    const selectedValue = event.target.value;
    setIsSecondFieldSelected(selectedValue !== 'Select');
    setSelectValueName(selectedValue); 
  };

const onClickNameHandleChange = (event: any,id:any) =>{
  const selectedValue = event.target.value;
  setIsSecondFieldSelected(selectedValue !== 'Select');
  setSelectValueName(selectedValue);
  console.log('Selected option ID:', id);
  
  router.push({
    pathname: '/matching',
    query: {
      selectedValue: selectValueFosterCarerOrChild,
      childValue: id,
    },
  });
}

  const handleGetFosterOptions = (event: any) => {
    setfosterOptionsArray(event)
  }
    // Reset route on page refresh
    // useEffect(() => {
    //   window.onbeforeunload = () => {
    //     router.push('/matching');
    //   };
    // }, [router]);
  
  return {
    methods,
    handleSubmit,
    onSubmit,
    selectValueFosterCarerOrChild, fosterOptionsArray,
    isSecondFieldSelected, selectValueName,
    onSelectCarerChildHandleChange, onSelectNameHandleChange,onClickNameHandleChange,
    handleGetFosterOptions,isOpenHowItWorkModal, setIsOpenHowItWorkModal

  };
};
