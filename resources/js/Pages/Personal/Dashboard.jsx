import DashboardCard from '@/Components/Card/DashboardCard';
import BarChart from '@/Components/Chart/BarChart';
import PieChart from '@/Components/Chart/PieChart';
import Breadcrumb from '@/Components/Common/Breadcrumb';
import DefaultLayout from '@/Layouts/DefaultLayout';
import { faHandsClapping, faLineChart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Head, Link } from '@inertiajs/react';
import NotFound from "../../assets/noResult.svg"
export default function Dashboard(props) {
    const {CompletedTaskNumber, LateTaskNumber, ToDoTaskNumber} = props
    const data = [CompletedTaskNumber,LateTaskNumber,ToDoTaskNumber]
    console.log(data)
    return (
        <DefaultLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>
            <Breadcrumb icon={faLineChart}>
                <Link className="font-bold text-lg text-black hover:underline">Dashboard</Link>
            </Breadcrumb>
            <div className='py-5 px-5 flex flex-col gap-5'>
                <DashboardCard header={"Welcome to KPImaster"}>
                    <div className='flex gap-2 items-center text-center justify-center'>
                        <FontAwesomeIcon icon={faHandsClapping} color='#FFDB00' fontSize={25}/>
                        <h2 className='text-xl font-black'>Hello {props.name}!</h2>
                    </div>
                    <p>Dashboards can work as your personal headquarters, client portal, and more.</p>
                </DashboardCard>
                <div className='flex gap-5'>
                    <div className='flex flex-col w-9/12 gap-5'>
                        <div className='flex grid-cols-3 gap-5'>
                            <DashboardCard header={'Completed'}>
                            <h1 className='text-4xl'>{CompletedTaskNumber}</h1>
                            <p>Tasks</p>           
                            </DashboardCard>

                            <DashboardCard header={'In progress'}>
                                <h1 className='text-4xl'>{ToDoTaskNumber}</h1>
                                <p>Tasks</p>  
                            </DashboardCard>

                            <DashboardCard header={'Over due'}>
                                <h1 className='text-4xl'>{LateTaskNumber}</h1>
                                <p>Tasks</p>  
                            </DashboardCard>
                        </div>

                        <div className='flex grid-cols-2 gap-5'>
                            <DashboardCard header={'Task overview'}>
                                <div className='h-72'>
                                    <PieChart data={data}/>
                                </div>
                            </DashboardCard>
                            <DashboardCard header={'Task overview'}>
                                <div className='h-72'>
                                    <BarChart data={data}/>
                                </div>
                            </DashboardCard>
                        </div>
                    </div>

                    <div className='w-3/12'>
                        <DashboardCard header={'Recent activity'}>
                            <div className='h-[28rem] flex flex-col text-center items-center'>
                                <div className='my-auto'>
                                    <img src={NotFound} alt="" />
                                    <h1 className='text-center text-sm font-semibold mt-5'>No results</h1>
                                    <h2 className='text-sky-600 text-xs hover:underline cursor-pointer mt-1'>Create some task</h2>
                                </div>
                            </div>
                        </DashboardCard>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
