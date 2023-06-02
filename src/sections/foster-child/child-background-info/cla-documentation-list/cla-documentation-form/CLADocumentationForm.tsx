import React, { useState } from 'react'
import EHCPForm from './EHCPForm'
import PEPForm from './PEPForm'
import { NativeSelect } from '@mui/material';

export const ClaDocumentationForm = (props: any) => {

    const { defaultFormType = "EHCP", defaultValues, disable = false } = props;

    const [selectForm, setSelectForm] = useState(defaultFormType);

    const handleSelectChange = (event: any) => {
        setSelectForm(event.target.value);
    };

    return (
        <>
            <NativeSelect sx={{ width: '200px', m: 2 }} value={selectForm} onChange={handleSelectChange}>
                <option value="EHCP">EHCP</option>
                <option value="PEP">PEP</option>
            </NativeSelect>
            {selectForm === 'EHCP' && <EHCPForm disable={disable} defaultValues={defaultValues} />}
            {selectForm === 'PEP' && <PEPForm disable={disable} defaultValues={defaultValues} />}
        </>
    )
}
