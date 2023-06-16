import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { formSchema, initialValues,  } from '.';
import { ComplianceVerticalTabsData } from '../..';

export const useAddModal = (props:any) => {
    const [pdfUpload, setPdfUpload] = useState(false);

    const handleTogglePdf = () => setPdfUpload(!pdfUpload);
    const handleUploadPdf = (event: any) => {
        setPdfArray([...pdfArray, event?.target.files[0].name]);
        setPdfUpload(!pdfUpload);
    }
    const [pdfArray, setPdfArray] = useState<any[]>([])
    const methods: any = useForm({
        resolver: yupResolver(formSchema),
        defaultValues: initialValues ,
    });
    const { reset, handleSubmit, formState: { errors, isSubmitting, isDirty }, }: any = methods;


  const onSubmit = (data: any) => {
  console.log("Form data:", data);
  props.handleClose();
//   const newData = mainData.map((item:any) => {
//     if (item.index === props.activeId) {
//       const newInnerData = [...item.innerData, {
//         id: data.id,
//         tabTitle: data.tabTitle,
//         tabsDocuments: []
//       }];
//       return { ...item, innerData: newInnerData };
//     }
//     return item;
   
//   });
//   console.log("updatetab====>",newData)
// setMainData(newData);

};

  return {
    methods,
    onSubmit,
    handleSubmit,
    handleTogglePdf,
    handleUploadPdf,
    pdfUpload,
    pdfArray,
   

  }
}
