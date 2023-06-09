
import React from "react";
import { useRouter } from "next/router";
import { useClaDocumentationListQuery } from "@root/services/foster-child/child-background-info/cla-documentation-list/CLADocumentationListAPI";

export const useDocumentationTable = () => {

  const router = useRouter();

  const [search, setSearch] = React.useState("");

  const { data } = useClaDocumentationListQuery({search: search});

  return {};
};
