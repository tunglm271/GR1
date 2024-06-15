import Breadcrumb from '@/Components/Common/Breadcrumb';
import DefaultLayout from '@/Layouts/DefaultLayout';
import { faTasks, faFilter, faSortAmountDown, faTableCells, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Head } from '@inertiajs/react';
export default function Dashboard(props) {
    console.log(props)
    return (
        <DefaultLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>
            <Breadcrumb icon={faTasks} title={'My task'}/>
            <div className='w-full border-b-[0.5px] border-gray-300 py-2 px-5 flex gap-5 h-12'>
                <button className='rounded-2xl border-[0.5px] border-gray-300 text-xs font-semibold px-2'>
                <FontAwesomeIcon icon={faFilter} fontSize={12} className="my-auto mr-2" color='gray'/>
                  Filter
                </button>
                <button className='rounded-2xl border-[0.5px] border-gray-300 text-xs font-semibold px-2'>
                <FontAwesomeIcon icon={faSortAmountDown} fontSize={12} className="my-auto mr-2" color='#686D76'/>
                  Sort
                </button>

                <input placeholder='Search task...'
                className='text-sm rounded-2xl border-[0.5px] border-gray-400 placeholder:text-gray-500 text-gray-700 w-1/3' 
                />

                <div className='my-auto'>
                <FontAwesomeIcon icon={faTableCells} fontSize={20} className="my-auto mr-2"/>
                <FontAwesomeIcon icon={faList} fontSize={20} className="my-auto mr-2"/>
                </div>
            </div>
            <div>

            </div>
        </DefaultLayout>
    );
}
