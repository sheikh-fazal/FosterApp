import React from 'react'
import EHCPForm from './EHCPForm'
import PEPForm from './PEPForm'
import { useRouter } from 'next/router'

export const CLADocumentationForm = () => {
  const router = useRouter()
  console.log(router?.query?.cla_document_type);

  return (
    <>
      {router?.query?.cla_document_type === "EHCP" ? <EHCPForm /> : <PEPForm />}
    </>
  )
}
