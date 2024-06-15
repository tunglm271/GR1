import Breadcrumb from '@/Components/Common/Breadcrumb';
import DefaultLayout from '@/Layouts/DefaultLayout';
import { faLineChart } from '@fortawesome/free-solid-svg-icons';
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
            <Breadcrumb icon={faLineChart} title={'Dashboard'}/>
            <div>

            </div>
        </DefaultLayout>
    );
}
