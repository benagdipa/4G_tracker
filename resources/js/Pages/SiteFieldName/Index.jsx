import React, { useRef, useState } from 'react'
import Pagination from '@/Components/Pagination';
import TextInput from '@/Components/TextInput';
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head, Link, router, usePage } from '@inertiajs/react'
import { Button, Card, IconButton, Typography } from '@material-tailwind/react'
import axios from 'axios';
import { ChevronDownIcon, ChevronUpIcon, SearchIcon } from 'lucide-react';
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';
import DateItemField from './Components/DateItemField';
import SelectItemField from './Components/SelectItemField';
import InputItemField from './Components/InputItemField';
import UploadItemField from './Components/UploadItemField';
import CSVMapping from './Components/CSVMapping';


export default function Index() {
    const { auth, sites, get_data } = usePage().props
    const TABLE_HEAD = [
        { name: 'Site Name', sortable: true, sortKey: 'site_name' },
        { name: 'Cell Name', sortable: true, sortKey: 'cell_name' },
        { name: 'Lon', sortable: true, sortKey: 'lon' },
        { name: 'Lat', sortable: true, sortKey: 'lat' },
        { name: 'BB Type', sortable: true, sortKey: 'bb_type' },
        { name: 'RRU Type', sortable: true, sortKey: 'rru_type' },
        { name: 'Antenna Type', sortable: true, sortKey: 'antenna_type' },
        { name: 'Frequency', sortable: true, sortKey: 'frequency' },
        { name: 'PCI', sortable: false, sortKey: 'pci' },
        { name: 'Azimuth', sortable: false, sortKey: 'azimuth' },
        { name: 'Height', sortable: false, sortKey: 'height' },
        { name: 'Last EPO', sortable: false, sortKey: 'last_epo' },
        { name: 'Next EPO', sortable: false, sortKey: 'next_epo' },
        { name: 'Solution Type', sortable: false, sortKey: 'solution_type' },
        { name: 'Start Date', sortable: false, sortKey: 'start_date' },
        { name: 'End Date', sortable: false, sortKey: 'end_date' },
        { name: 'Status', sortable: false, sortKey: 'status' },
        { name: 'Remarks', sortable: false, sortKey: 'remarks' },
        { name: 'Artifacts', sortable: false, sortKey: 'artifacts' },
    ];
    const hiddenFileInput = useRef(null);
    const [searchText, setSearchText] = useState(get_data?.search ? get_data?.search : '');
    const [perPage, setPerPage] = useState(get_data?.per_page ? get_data?.per_page : 10);
    const [siteItems] = useState(sites);
    const [mappingDialog, setMappingDialog] = useState(false)
    const [mappingData, setMappingData] = useState('')

    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChangeUpload = async (event) => {
        const form_input = new FormData();
        form_input.append('import_file', event.target.files[0]);
        try {
            const res = await axios.post(route('site.field.name.import'), form_input);
            if (res?.data) {
                setMappingData(res?.data)
                setMappingDialog(true)
            }
        } catch (error) {
            toast.error(`${error?.response?.data?.error?.message}`);
        }
    };

    const handleSearch = async () => {
        if (searchText) {
            router.get(route('site.field.name.index', { 'search': searchText }))
        }
    }

    const sortData = async (key, order) => {
        router.get(route('site.field.name.index', { 'order_by': key, 'order': order }))
    };

    const getTrackingValue = (tracking, key) => {
        if (tracking) {
            return tracking[key]?.value
        }
    }
    const onChangeFilter = async (key, value) => {
        router.get(route('site.field.name.index', { 'filter_by': key, 'value': value }))
    }
    const handlePerPageChange = (val) => {
        setPerPage(val);
        router.get(route('site.field.name.index', { ...get_data, 'per_page': val }))
    }


    return (
        <Authenticated user={auth?.user}>
            <Head title='Site Field Name' />
            <div className="top-section p-4">
                <div className='flex items-center justify-between'>
                    <div className="">
                        <Typography variant={'h3'} className='tracking-tight'>Site Field Name</Typography>
                        <ul className='flex gap-1 text-gray-600 text-sm'>
                            <li><Link href={route('dashboard')}>Dashboard</Link></li>
                            <li>/</li>
                            <li><Link href={route('site.field.name.index')}>Site Field Name</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="filter-wrapper md:px-4">
                <div className="flex filter-details justify-end gap-3">
                    <div className="search-wrapper w-1/3 flex relative">
                        <TextInput
                            placeholder="Search..."
                            className="w-full text-sm rounded-md rounded-r-none border-r-0 focus:ring-0 h-8"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <div className="search-icon">
                            <IconButton size='sm' className='rounded-l-none' onClick={handleSearch}>
                                <SearchIcon color='white' size={18} />
                            </IconButton>
                        </div>
                    </div>
                    <div className='status-filter'>
                        <select
                            className='w-52 text-sm rounded-md focus:ring-0 h-8 border-gray-300 py-1 text-gray-600 font-medium'
                            onChange={(e) => onChangeFilter('status', e.target.value)}
                            value={get_data?.filter_by === 'status' ? get_data?.value : ''}
                        >
                            <option value="">Filter by Status</option>
                            <option value="in_progress">In Progress</option>
                            <option value="not_started">Not Started</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <div className='filter-solution-type'>
                        <select
                            className='w-52 text-sm rounded-md focus:ring-0 h-8 border-gray-300 py-1 text-gray-600 font-medium'
                            onChange={(e) => onChangeFilter('solution_type', e.target.value)}
                            value={get_data?.filter_by === 'solution_type' ? get_data?.value : ''}
                        >
                            <option value="">Filter by Solution Type</option>
                            <option value="opti_type_1">Opti Type-1</option>
                            <option value="opti_type_5">Opti Type-5</option>
                            <option value="opti_type_6">Opti Type-6</option>
                        </select>
                    </div>
                    <div className='import-type-field'>
                        <Button variant="gradient" className='capitalize' size='sm' onClick={handleClick}>Import from CSV</Button>
                        <input
                            type="file"
                            onChange={handleChangeUpload}
                            ref={hiddenFileInput}
                            style={{ display: 'none' }}
                        />
                    </div>
                </div>
            </div>
            <div className="content mt-6">
                <Card className="h-full w-full rounded-none">
                    <div className="overflow-x-auto overflow-hidden">
                        <table className="w-full table-auto">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th key={head.name} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-2 border-l cursor-pointer">
                                            <div className="flex justify-between">
                                                <Typography variant="small" className="leading-none text-gray-800 font-medium text-sm">{head.name}</Typography>
                                                {head?.sortable && (
                                                    <div className="relative mt-1">
                                                        <span className='absolute -top-2 right-0 hover:bg-blue-gray-100 rounded-sm'><ChevronUpIcon size={12} strokeWidth={2} onClick={() => { sortData(head.sortKey, 'asc') }} /></span>
                                                        <span className='absolute -bottom-1 right-0 hover:bg-blue-gray-100 rounded-sm'><ChevronDownIcon size={12} strokeWidth={2} onClick={() => { sortData(head.sortKey, 'desc') }} /></span>
                                                    </div>
                                                )}
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {siteItems?.data.map((item, index) => {
                                    return (
                                        <tr key={item?.id} className="even:bg-blue-gray-50/50">
                                            <td className="border-l h-10 text-[12px] font-medium ps-2">
                                                <Link href={'#'} className='font-semibold'>
                                                    {item?.site_name}
                                                </Link>
                                            </td>
                                            <td className="border-l h-10 text-[12px] font-medium ps-2">{item?.cell_name}</td>
                                            <td className="border-l h-10 text-[12px] font-medium ps-2">{item?.lon}</td>
                                            <td className="border-l h-10 text-[12px] font-medium ps-2">{item?.lat}</td>
                                            <td className="border-l h-10 text-[12px] font-medium ps-2">{item?.bb_type}</td>
                                            <td className="border-l h-10 text-[12px] font-medium ps-2">{item?.rru_type}</td>
                                            <td className="border-l h-10 text-[12px] font-medium ps-2">{item?.antenna_type}</td>
                                            <td className="border-l h-10 text-[12px] font-medium ps-2">{item?.frequency}</td>
                                            <td className="border-l h-10 text-[12px] font-medium ps-2">{item?.pci}</td>
                                            <td className="border-l h-10 text-[12px] font-medium ps-2">{item?.azimuth}</td>
                                            <td className="border-l h-10 text-[12px] font-medium ps-2">{item?.height}</td>
                                            <td className="border-l h-10 text-[12px] font-medium ps-2">{item?.last_epo}</td>
                                            <td className="border-l h-10 text-[12px] font-medium ps-2">{item?.next_epo}</td>
                                            <td className="border-l h-10">
                                                <SelectItemField
                                                    value={getTrackingValue(item?.tracking, 'solution_type')}
                                                    name='solution_type'
                                                    siteId={item?.id}
                                                    options={[
                                                        { label: 'Opti Type-1', value: 'opti_type_1' },
                                                        { label: 'Opti Type-5', value: 'opti_type_5' },
                                                        { label: 'Opti Type-6', value: 'opti_type_6' },
                                                    ]}
                                                />
                                            </td>
                                            <td className="border-l h-10">
                                                <DateItemField
                                                    value={getTrackingValue(item?.tracking, 'start_date')}
                                                    name='start_date'
                                                    siteId={item?.id}
                                                />
                                            </td>
                                            <td className="border-l h-10">
                                                <DateItemField
                                                    value={getTrackingValue(item?.tracking, 'end_date')}
                                                    name='end_date'
                                                    siteId={item?.id}
                                                />
                                            </td>
                                            <td className="border-l h-10">
                                                <SelectItemField
                                                    value={getTrackingValue(item?.tracking, 'status')}
                                                    name='status'
                                                    siteId={item?.id}
                                                    options={[
                                                        { label: 'In Progress', value: 'in_progress' },
                                                        { label: 'Not Started', value: 'not_started' },
                                                        { label: 'Completed', value: 'completed' },
                                                    ]}
                                                />
                                            </td>
                                            <td className="border-l h-10">
                                                <InputItemField
                                                    value={getTrackingValue(item?.tracking, 'remarks')}
                                                    name='remarks'
                                                    siteId={item?.id}
                                                />
                                            </td>
                                            <td className="border-l h-10">
                                                <UploadItemField
                                                    value={getTrackingValue(item?.tracking, 'artifacts')}
                                                    name='artifacts'
                                                    siteId={item?.id}
                                                />
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        {siteItems?.data?.length === 0 && <Typography variant="h6" color="blue-gray" className='text-center py-6' >No data found</Typography>}
                        <div className='md:flex grid justify-start md:justify-end items-center pt-6 mb-8 gap-3 px-4'>
                            <div className='flex items-center gap-2'>
                                <div className='text-sm font-medium'>Rows per Page</div>
                                <select
                                    className='rounded-md text-sm font-medium border-gray-400 focus:ring-0 py-2'
                                    value={perPage}
                                    onChange={(e) => { handlePerPageChange(e.target.value) }}
                                >
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                    <option value="20">25</option>
                                    <option value="50">50</option>
                                    <option value="all">All</option>
                                </select>
                            </div>
                            <div className='text-sm font-medium'>{`${sites?.from}-${sites?.to} of ${sites?.total} Records`}</div>
                            <Pagination links={siteItems?.links} perPage={perPage} />
                        </div>
                    </div>
                </Card>
                <CSVMapping
                    mappingDialog={mappingDialog}
                    setMappingDialog={setMappingDialog}
                    mappingData={mappingData}
                />
            </div>
        </Authenticated>
    )
}