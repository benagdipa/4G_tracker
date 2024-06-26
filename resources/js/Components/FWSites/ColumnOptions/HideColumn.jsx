import React, { useEffect, useState } from 'react'
import { useForm } from '@inertiajs/react';
import { Button, Checkbox, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react'

export default function HideColumn({ hideColumnDialog, setHideColumnDialog, columns, hidden_columns, deleted_columns }) {

    const handleOpen = () => setHideColumnDialog(!hideColumnDialog);
    const [items, setItems] = useState([])
    const { data, setData, post, processing, errors, reset } = useForm({
        type: "fw_site",
        key: 'hide',
        items: hidden_columns?.length > 0 ? hidden_columns : []
    })

    useEffect(() => {
        if (hideColumnDialog) {
            setItems(prevData => {
                const newItems = [
                    ...columns.filter(item => !deleted_columns.includes(item.key)).map(item => ({ key: item.key, name: item.name })),
                ];
                return newItems;
            })
        }
    }, [hideColumnDialog])

    const onCheckboxChangeHandler = (e, key) => {
        const isChecked = e.target.checked;
        setData(prevData => {
            if (isChecked) {
                return {
                    ...prevData,
                    items: [...prevData.items, key]
                };
            } else {
                return {
                    ...prevData,
                    items: prevData.items.filter(item => item !== key)
                };
            }
        });
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        post(route('hide.columns.item'), {
            onSuccess: () => {
                setHideColumnDialog(false)
                reset()
            }
        })
    }
    return (
        <Dialog open={hideColumnDialog} size='xs'>
            <DialogHeader>Hide Column</DialogHeader>
            <DialogBody>
                <div className="form-item">
                    <p className='text-[#333] font-semibold'>Please select the column you want to hide</p>
                    <div className="form-item grid grid-cols-2">
                        {items?.length > 0 && items.map((column, index) => (
                            <React.Fragment key={index}>
                                <Checkbox
                                    containerProps={{ className: 'py-3', }}
                                    className='w-5 h-5 rounded-md'
                                    label={<Typography color="blue-gray" className="font-medium text-sm">{column?.name}</Typography>}
                                    onChange={(e) => onCheckboxChangeHandler(e, column?.key)}
                                    defaultChecked={hidden_columns?.includes(column?.key)}
                                />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </DialogBody>
            <DialogFooter>
                <Button variant="text" color="red" onClick={handleOpen} className="mr-1 capitalize">
                    <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="green" onClick={(e) => { onSubmitHandler(e) }} className='capitalize'>
                    <span>Confirm</span>
                </Button>
            </DialogFooter>
        </Dialog>
    )
}
