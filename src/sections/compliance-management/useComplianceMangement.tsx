import { SyntheticEvent, useState } from "react";

export const useComplianceManagement = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const [categoryModal, setCategoryModal] = useState(false);

    const handleCategoryModal = () => {
        setCurrentTab(0);
        setCategoryModal(!categoryModal)
    }

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setCurrentTab(newValue);
    };

    return {
        currentTab,
        handleChange,
        categoryModal,
        handleCategoryModal,
    }
}

