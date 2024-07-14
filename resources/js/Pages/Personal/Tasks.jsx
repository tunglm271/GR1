import Breadcrumb from '@/Components/Common/Breadcrumb';
import TaskTable from '@/Components/Table/TaskTable';
import DefaultLayout from '@/Layouts/DefaultLayout';
import { faTasks, faFilter, faSortAmountDown, faTableCells, faList, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Head,Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
export default function Dashboard({ tasks, auth, errors }) {
    const [LateTasks, setLateTasks] = useState(tasks.filter((task) => {
        return task.status == 0 && new Date(task.deadline) < new Date()
    }))
    let ToDotasks = tasks.filter((task) => {
        return task.status == 0 && new Date(task.deadline) > new Date()
    })
    let [CompletedTasks, setCompletedTasks] = useState(tasks.filter((task) => {
        return task.status == 1
    }))

    useEffect(() => {
        setLateTasks((tasks.filter((task) => {
            return task.status == 0 && new Date(task.deadline) < new Date()
        })))
        setCompletedTasks(tasks.filter((task) => {
            return task.status == 1
        }))
    },[tasks])



    return (
        <DefaultLayout
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>
            <Breadcrumb icon={faTasks}>
                <Link className="font-bold text-lg text-black hover:underline">My task</Link>
            </Breadcrumb>
            <div className='w-full border-b-[0.5px] border-gray-300 px-7 flex justify-between h-12 items-center'>
                <div className='flex gap-5'>
                    <button className='rounded-lg border-[0.5px] border-gray-300 text-xs font-semibold p-2 flex items-center h-fit text-slate-500'>
                    <FontAwesomeIcon icon={faFilter} fontSize={12} className="my-auto mr-2" color='gray'/>
                    Filter
                    </button>
                    <button className='rounded-lg border-[0.5px] border-gray-300 text-xs font-semibold p-2 flex items-center h-fit text-slate-500'>
                    <FontAwesomeIcon icon={faSortAmountDown} fontSize={12} className="my-auto mr-2" color='#686D76'/>
                    Sort
                    </button>

                    <input placeholder='Search task...'
                    className='text-sm rounded-lg border-[0.5px] border-gray-300 placeholder:text-gray-500 text-gray-700 w-1/3 h-8' 
                    />

                    <div className='my-auto flex gap-5'>
                        <div className='flex gap-1 items-center text-sm text-slate-500 font-semibold'>
                            <FontAwesomeIcon icon={faTableCells} fontSize={15} className="my-auto" color='#64748b'/>
                            Board
                        </div>
                        <div className='flex gap-1 items-center text-sm text-slate-500 font-semibold border-b-2 border-sky-500'>
                            <FontAwesomeIcon icon={faList} fontSize={15} className="my-auto" color='#64748b'/>
                            List
                        </div>
                    </div>
                </div>
                <button className='bg-[#1392d3] text-white rounded-md px-2 py-1 text-sm font-bold'>
                <FontAwesomeIcon icon={faPlusCircle} fontSize={12} className="my-auto mr-2"/>
                    Add task
                    </button>
            </div>

            <div className='flex flex-col gap-16 px-3 py-5'>
                {(LateTasks.length != 0) && <TaskTable data={LateTasks} type={"late"}/>}
                <TaskTable data={ToDotasks} type={"to do"}/>
                {CompletedTasks.length != 0 && <TaskTable data={CompletedTasks} type={"complete"}/>}
            </div>
        </DefaultLayout>
    );
}
