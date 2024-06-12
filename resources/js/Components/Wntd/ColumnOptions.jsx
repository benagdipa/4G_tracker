import React, { useState } from 'react'
import { Menu, MenuHandler, MenuList, MenuItem, Button, } from "@material-tailwind/react";
import AddColumn from '@/Components/Wntd/AddColumn';
import HideColumn from '@/Components/Wntd/HideColumn';
import RenameColumn from '@/Components/Wntd/RenameColumn';

export default function ColumnOptions({ columns, additional_columns, hidden_columns }) {
    const [addColumnDialog, setAddColumnDialog] = useState(false)
    const [hideColumnDialog, setHideColumnDialog] = useState(false)
    const [renameColumnDialog, setRenameColumnDialog] = useState(false);
    return (
        <>
            <Menu>
                <MenuHandler>
                    <Button variant='gradient' size='sm' className='capitalize'>Column Options</Button>
                </MenuHandler>
                <MenuList className='font-semibold text-gray-600'>
                    <MenuItem onClick={() => { setAddColumnDialog(true) }}>Add Column</MenuItem>
                    <MenuItem onClick={() => { setHideColumnDialog(true) }}>Hide Columns</MenuItem>
                    <MenuItem onClick={() => { setRenameColumnDialog(true) }}>Rename Columns</MenuItem>
                </MenuList>
            </Menu>
            <AddColumn addColumnDialog={addColumnDialog} setAddColumnDialog={setAddColumnDialog} />
            <HideColumn
                hideColumnDialog={hideColumnDialog}
                setHideColumnDialog={setHideColumnDialog}
                columns={columns}
                additional_columns={additional_columns}
                hidden_columns={hidden_columns}
            />
            <RenameColumn
                renameColumnDialog={renameColumnDialog}
                setRenameColumnDialog={setRenameColumnDialog}
                columns={columns}
                additional_columns={additional_columns}
            />
        </>
    )
}
