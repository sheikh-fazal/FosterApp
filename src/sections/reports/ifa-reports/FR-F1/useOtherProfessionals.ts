// import React from 'react'

import { useRouter } from "next/router";

export const useOtherProfessionals = () => {
  const router = useRouter();
  const path = '/reports/ifa-reports/FR-F1/add';
  const handleSearch = () => { };
  const handleAction = (action?: string, id?: string) => {
    switch (action) {
      case 'add':
        router.push({ pathname: path })
        break;

      default:
        break;
    }
  };
  return {
    handleSearch,
    handleAction
  }
}