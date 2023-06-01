import { useEffect, useState } from "react";
import { localFormNames, tabs } from "./static-data";
export const useLayoutInfo = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [diffInfoHandler, setDiffInfoHandler] = useState({
    activeFormName: "Personal Info",
  });
  const [tabsItems, settabsItems] = useState([
    { name: "Personal Info", status: "Done" },
    { name: "Address Details", status: "Done" },
    { name: "Photo for ID Badge", status: " Inprogress" },
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
    // check if form status is pending
    const formStatus = tabsItems.find(({ name }) => name === itemName)?.status;
    if (formStatus === "Pending") return;
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
    updatedTabs[indexOfCurrentForm].status = "Done1";
    updatedTabs[indexOfCurrentForm + 1].status = "Inprogress";
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
