import React from 'react'
import { useGetFamilyPersonListQuery } from '@root/services/foster-child/child-background-info/family-person-list/FamilyPersonListAPI';

export const useFamilyPersonListTable = () => {

    const [search, setSearch] = React.useState("");

const { data, isError, isLoading, isSuccess, isFetching } = useGetFamilyPersonListQuery<any>({search: search});

  return (
    { data, setSearch, isError, isLoading, isSuccess, isFetching }
  )
}
