import DefaultLayout from '@/Layouts/DefaultLayout';
import { Head, Link } from '@inertiajs/react';
import Breadcrumb from '@/Components/Common/Breadcrumb';
import { faUserGroup, faUserPlus, faEllipsis, faBorderAll, faFolderOpen, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function Dashboard(props) {
    const [tab, setTab] = useState('Overview')
    const { workspace } = props
    return (
        <DefaultLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>
            <Breadcrumb icon={faUserGroup}>
                <Link className="font-bold text-lg text-black hover:underline">Workspaces</Link>
                <Link className="font-medium text-lg text-black hover:underline">{workspace.name}</Link>
            </Breadcrumb>

            <div className='px-10 pt-7'>
                <div className="flex gap-5 items-center mb-2">
                    <h1 className='text-3xl font-bold'>{workspace.name}</h1>
                    <FontAwesomeIcon icon={faUserPlus} fontSize={15} className="my-auto" color='#6b7280'/>
                    <FontAwesomeIcon icon={faEllipsis} fontSize={15} className="my-auto" color='#6b7280'/>
                </div>
                <p>{workspace.description}</p>
            </div>
            
            <div className='flex items-center w-full border-b-[1px] border-gray-300 px-7 mt-7 font-semibold gap-5'>
                <button className={'flex gap-2 pb-2 px-2 '.concat(tab=='Overview'?"border-b-2 border-cyan-600":"")} onClick={() => setTab('Overview')}>
                    <FontAwesomeIcon icon={faBorderAll} fontSize={15} className="my-auto"/>
                    Overview
                </button>

                <button className={'flex gap-2 pb-2 px-2 '.concat(tab=='Projects'?"border-b-2 border-cyan-600":"")} onClick={() => setTab('Projects')}>
                    <FontAwesomeIcon icon={faFolderOpen} fontSize={15} className="my-auto"/>
                    Projects
                </button>

                <button className={'flex gap-2 pb-2 px-2 '.concat(tab=='Members'?"border-b-2 border-cyan-600":"")} onClick={() => setTab('Members')}>
                    <FontAwesomeIcon icon={faPeopleGroup} fontSize={15} className="my-auto"/>
                    Members
                </button>
            </div>
        </DefaultLayout>
    );
}
