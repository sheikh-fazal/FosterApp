import { SyntheticEvent, useState } from "react";

export const useComplianceManagement = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const [categoryModal, setCategoryModal] = useState(false);
    const [categoryData, setCategoryData] = useState<any>();
    const [pdfModal, setPdfModal] = useState(false);
    const [categoryIcon, setCategoryIcon] = useState(false);

    const handlePdf = (data: any) => setPdfModal(!pdfModal);

    const handleCategoryModal = () => {
        setCategoryModal(!categoryModal);
        setCategoryData(null);
        setCategoryIcon(true);
    }

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setCurrentTab(newValue);
    };

    const handleSubCategory = (item: any) => {
        setCategoryModal(!categoryModal);
        setCategoryData(item);
        setCategoryIcon(false);
    }

    return {
        currentTab,
        handleChange,
        categoryModal,
        handleCategoryModal,
        handleSubCategory,
        categoryData,
        pdfModal,
        handlePdf,
        categoryIcon
    }
}

