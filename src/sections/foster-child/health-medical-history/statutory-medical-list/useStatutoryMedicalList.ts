import { useState } from "react";

export const useStatutoryMedicalList =  () => {
    const [carerType, setCarerType] = useState<null | HTMLElement>(null);
    const open = Boolean(carerType);
    const handleCarerName = (event: React.MouseEvent<HTMLButtonElement>) => {
      setCarerType(event.currentTarget);
    };
    const carerNameMenuItemClick = (items: any) => {
      setCarerType(null);
    };
    return {
        open,
        handleCarerName,
        carerType,
        setCarerType,
        carerNameMenuItemClick,
      } 
}