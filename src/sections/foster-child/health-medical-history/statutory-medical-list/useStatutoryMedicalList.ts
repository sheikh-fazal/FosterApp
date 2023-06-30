import { useState } from "react";

export const useStatutoryMedicalList =  () => {
    const [sortType, setSortType] = useState<null | HTMLElement>(null);
    const open = Boolean(sortType);
    const handleSortType = (event: React.MouseEvent<HTMLButtonElement>) => {
      setSortType(event.currentTarget);
    };
    const sortTypeMenuItemClick = (items: any) => {
      setSortType(null);
    };
    return {
        open,
        sortType,
        setSortType,
        handleSortType,
        sortTypeMenuItemClick
      } 
}
