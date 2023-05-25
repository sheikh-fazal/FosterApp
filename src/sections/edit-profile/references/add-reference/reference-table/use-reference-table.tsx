import { useState } from "react";

export const useRefereneceTable = () => {
  const [tableRows, setTableRows] = useState([
    {
      id: "bd21685d-3b18-46b2-8a01-2c8d36515897",
      createdAt: "2023-05-25T10:38:53.000Z",
      updatedAt: "2023-05-25T10:38:53.000Z",
      referenceType: "sadasasdas",
      refereeName: "Test 1",
      contactNo: "dsfsdf",
      email: "client@yopmail.com",
      status: "Pending",
      contactNow: true,
      userId: "7c0186f0-61bb-4b9f-b15c-df09377e601f",
    },
    {
      id: "e6556231-1818-4385-9212-8e3a7b870143",
      createdAt: "2023-05-25T10:50:47.000Z",
      updatedAt: "2023-05-25T10:50:47.000Z",
      referenceType: "sadassad",
      refereeName: "Test 2",
      contactNo: "asdasd",
      email: "client@yopmail.com",
      status: "Pending",
      contactNow: true,
      userId: "7c0186f0-61bb-4b9f-b15c-df09377e601f",
    },
  ]);

  return {
    tableRows,
  };
};
