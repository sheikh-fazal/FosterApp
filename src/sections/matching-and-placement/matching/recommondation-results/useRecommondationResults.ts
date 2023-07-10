import React, { useState } from 'react'
import { recommondationResultsDetail, recommondationResultsData } from '.';
import { useRouter } from 'next/router';

export const useRecommondationResults = () => {
    const router = useRouter()
    const [selectedCard, setSelectedCard] = useState(null);
    const [filteredDetailData, setFilteredDetailData] = useState(recommondationResultsDetail);
    const handleChangeType = (type: any) => {
        setSelectedCard(type);
        const filteredData: any = recommondationResultsDetail.filter(item => item.type === type);
        setFilteredDetailData(filteredData);
        console.log("type is ", type)
    }
    return {
        selectedCard, setSelectedCard, filteredDetailData, setFilteredDetailData, handleChangeType, recommondationResultsData, router
    }


}
