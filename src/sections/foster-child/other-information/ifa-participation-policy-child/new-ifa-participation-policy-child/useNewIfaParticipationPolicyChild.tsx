import React, { useState } from "react";
import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { usePostIfaParticiaptionPolicyMutation } from "@root/services/foster-child/other-information/ifa-participation-policy/ifaParticipationPolicy";

const useNewIfaParticipationPolicyChild = () => {
  const [value, setValue] = useState<number>(2);

  const todayDate = dayjs().format("MM/DD/YYYY");
  const router = useRouter();
  const fosterChildId = router.query.fosterChildId

  const [postData] = usePostIfaParticiaptionPolicyMutation()

  const defaultValues = {
    dateOfParticipation : new Date(todayDate),
    achievement :"",
    likeMost :"",
    likeEvent :"",
    likeNextTime :"",
    // rating:"",
    participationActivity:"",
    file:""
  };
  
  const ifaParticipationPolicySchema = Yup.object().shape({
    dateOfParticipation: Yup.date().required("Required"),
    achievement: Yup.string().required("Required"),
    likeMost: Yup.string().required("Required"),
    likeEvent: Yup.string().required("Required"),    
    likeNextTime: Yup.string().required("Required"),
    // rating : Yup.string().required("Required"),
    participationActivity  : Yup.string().required("Required"),
    file: Yup.string().required("Required"),
  });

  const methods: any = useForm({
    resolver: yupResolver(ifaParticipationPolicySchema),
    defaultValues,
  });

  const { handleSubmit } = methods;
  
  const onSubmit = (data: any) => {

    // const formData = new FormData();

    // formData.append("dateOfParticipation", data.dateOfParticipation);
    // formData.append("achievement", data.achievement);
    // formData.append("likeMost", data.achievement);
    // formData.append("likeEvent", data.achievement);
    // formData.append("rating", value);

    // try {
    //   // const resp= await (postData(data,fosterChildId))
    // } catch (error) {
      
    // }
  };
  console.log(value);

  return { methods, handleSubmit, onSubmit, router,value,setValue };
};

export default useNewIfaParticipationPolicyChild;
