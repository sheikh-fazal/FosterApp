import React, { useState } from 'react'
import EHCPForm from './EHCPForm'
import PEPForm from './PEPForm'
import { Box, FormControl, InputLabel, MenuItem, NativeSelect, Select } from '@mui/material';


export const ClaDocumentationForm = (props: any) => {

    const { defaultFormType = "EHCP", defaultValues, disabled = false } = props;

    const [selectForm, setSelectForm] = useState(defaultFormType);

    const handleSelectChange = (event: any) => {
        setSelectForm(event.target.value);
    };


    return (
        <>
            {/* <NativeSelect sx={{ width: '200px', m: 2 }} value={selectForm} onChange={handleSelectChange} disabled={disabled}>
                <option disabled={disabled} value="EHCP">EHCP</option>
                <option disabled={disabled} value="PEP">PEP</option>
            </NativeSelect>
            {selectForm === 'EHCP' && <EHCPForm disabled={disabled} defaultValues={defaultValues} />}
            {selectForm === 'PEP' && <PEPForm disabled={disabled} defaultValues={defaultValues} />} */}
            <Box sx={{ width: '200px', m: 2 }}>
                <FormControl disabled={disabled}>
                    <Select
                        value={selectForm}
                        onChange={handleSelectChange}
                    >
                        <MenuItem value="EHCP">EHCP</MenuItem>
                        <MenuItem value="PEP">PEP</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {selectForm === 'EHCP' && (
                <EHCPForm disabled={disabled} defaultValues={defaultValues} />
            )}

            {selectForm === 'PEP' && (
                <PEPForm disabled={disabled} defaultValues={defaultValues} />
            )}
        </>
    )
}
