import React, { useState } from 'react'

export default function SelectItemField({ siteId, locId, name, value, options, handleEditAbleItem }) {

    const [item, setItem] = useState(value ? value : '');
    const uploadInputValue = (val) => {
        setItem(val)
        handleEditAbleItem(siteId, locId, name, val)
    }

    return (
        <div className='w-full h-full'>
            <select
                value={item}
                onChange={(e) => { uploadInputValue(e.target.value) }}
                className='border-none focus:ring-0 w-full bg-transparent !shadow-none text-[12px] font-medium'
            >
                <option value="">Select</option>
                {options?.length > 0 && options.map((option, index) => { return <option key={index} value={option.value}>{option.label}</option> })}
            </select>
        </div>
    )
}