import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { initialValue, validationSchema } from ".";

export const useActionSheet = () => {

  const [openModal, setOpenModal] = useState(false);
  const [disabledModal, setDisabledModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
    setDisabledModal(false);
  };

  const handleAction = (id?: string) => {
    handleOpenModal();
    setDisabledModal(true);
  };

  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValue,
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  return {
    handleAction,
    openModal,
    handleOpenModal,
    methods,
    handleSubmit,
    onSubmit,
    disabledModal
  }
} 