import React, { useState } from 'react'
import { recommondationResultsDetail, recommondationResultsData, recommondationResultsDetail2 } from '.';
import { useRouter } from 'next/router';

export const useRecommondationResults = () => {
    const router = useRouter();
    const paramValue = router.query.paramName;
    const {query}:any = useRouter() 
    const queryValue = query?.viewParam;
    console.log("query=======> ",query);
    
    console.log("queryValue===>",queryValue)

    console.log("currentRoute", paramValue);
    const [selectedCard, setSelectedCard] = useState(null);
    const [filteredDetailData, setFilteredDetailData] = useState(recommondationResultsDetail);
    const [filteredDetailData1, setFilteredDetailData1] = useState(recommondationResultsDetail2);
    const handleChangeType = (type: any) => {
        setSelectedCard(type);
        const filteredData: any = recommondationResultsDetail.filter(item => item.type === type);
        setFilteredDetailData(filteredData);
        console.log("type is ", type)
    }
    return {
        selectedCard, setSelectedCard, filteredDetailData, setFilteredDetailData, handleChangeType, recommondationResultsData, router,paramValue
,filteredDetailData1, setFilteredDetailData1
    }


}
