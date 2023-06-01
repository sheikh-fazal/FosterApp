import { useEffect, useState } from "react";
import { localFormNames, tabs } from "./static-data";
import { enqueueSnackbar } from "notistack";
export const useLayoutInfo = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [diffInfoHandler, setDiffInfoHandler] = useState({
    activeFormName: "Personal Info",
  });
  const [tabsItems, settabsItems] = useState([
    { name: "Personal Info", status: "Pending" },
    { name: "Address Details", status: "Pending" },
    { name: "Photo for ID Badge", status: "Pending" },
    { name: "ID Upload (Passport/DL)", status: "Pending" },
    { name: "Add Reference", status: "Pending" },
    { name: "Training Certificates", status: "Pending" },
    { name: "Additional Training Details", status: "Pending" },
    { name: "Work Experience", status: "Pending" },
    { name: "Specialities", status: "Pending" },
    { name: "DBS", status: "Pending" },
    { name: "Right to work", status: "Pending" },
    { name: "Next Of kin", status: "Pending" },
    { name: "Contact Preference", status: "Pending" },
    { name: "Employment Status", status: "Pending" },
    { name: "Opportunity Declaration", status: "Pending" },
    { name: "Additional Docs", status: "Pending" },
    { name: "Bank Details", status: "Pending" },
    { name: "Immunisation", status: "Pending" },
    { name: "Medical Questionnaire", status: "Pending" },
    { name: "Add Declaration", status: "Pending" },
  ]);

  const itemClickHand = (itemName: string) => {
    const formStatus = tabsItems.find(({ name }) => name === itemName)?.status;
    // for handling click on last pending form
    const indexOfClickItem = tabsItems.findIndex(
      ({ name }) => itemName === name
    );
    const indexOfFirstPending = tabsItems.findIndex(
      ({ status }) => status === "Pending"
    );
    // for handling click on last pending form
    console.log({ indexOfClickItem, indexOfFirstPending });
    // check if clicked form is status is pending and it is not first pending status form
    console.table(indexOfClickItem !== indexOfFirstPending);
    console.log({ formStatus });
    if (formStatus === "Pending" && indexOfClickItem !== indexOfFirstPending) {
      enqueueSnackbar("Please Fill The Previous Form First", {
        variant: "info",
      });
      return;
    }
    setDiffInfoHandler((pre) => ({ ...pre, activeFormName: itemName }));
  };

  const activateNextForm = () => {
    if (
      localFormNames.indexOf(diffInfoHandler.activeFormName) ===
      localFormNames.length - 2
    )
      return;
    const indexOfCurrentForm = tabsItems.findIndex(
      ({ name }) => name === diffInfoHandler.activeFormName
    );

    const updatedTabs = [...tabsItems];
    updatedTabs[indexOfCurrentForm].status = "Done";
    updatedTabs[indexOfCurrentForm + 1].status === "Done" ? "Done" : "Pending";
    settabsItems(updatedTabs);
    // tabsItems[
    //   localFormNames.indexOf(diffInfoHandler.activeFormName) - 1
    // ].status = "Done1";
    // tabsItems[localFormNames.indexOf(diffInfoHandler.activeFormName)].status =
    //   "inprogress";
    // console.log(localFormNames.indexOf(diffInfoHandler.activeFormName));
    setDiffInfoHandler((pre) => ({
      ...pre,
      activeFormName:
        localFormNames[
          localFormNames.indexOf(diffInfoHandler.activeFormName) + 2
        ],
    }));
  };

  return {
    tabs,
    expanded,
    setExpanded,
    itemClickHand,
    tabsItems,
    diffInfoHandler,
    activateNextForm,
  };
};
