import { useEffect, useState } from "react";
import { localFormNames, tabs, tabsItems } from "./static-data";
export const useLayoutInfo = () => {
  const [diffInfoHandler, setDiffInfoHandler] = useState({
    activeFormName: "Personal Info",
  });

  const itemClickHand = (itemName: string) => {
    setDiffInfoHandler((pre) => ({ ...pre, activeFormName: itemName }));
  };

  const activateNextForm = () => {
    if (
      localFormNames.indexOf(diffInfoHandler.activeFormName) ===
      localFormNames.length - 2
    )
      return;
    setDiffInfoHandler((pre) => ({
      ...pre,
      activeFormName:
        localFormNames[
          localFormNames.indexOf(diffInfoHandler.activeFormName) + 2
        ],
    }));
  };

  const [expanded, setExpanded] = useState<string | false>(false);

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
