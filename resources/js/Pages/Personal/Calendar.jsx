import DefaultLayout from '@/Layouts/DefaultLayout';
import Breadcrumb from '@/Components/Common/Breadcrumb';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import BigCalendar from '@/Components/Calendar/Calendar';
import { Link } from '@inertiajs/react';

function Calendar(props) {
  return (
    <DefaultLayout
        auth={props.auth}
        errors={props.errors}
        header={"Calendar"}
    >
        <Breadcrumb icon={faCalendarAlt}>
          <Link className="font-bold text-lg text-black hover:underline">Calendar</Link>
        </Breadcrumb>
        
        <div className=' px-5 py-3 flex gap-7'>
          <BigCalendar tasks={props.tasks}/>

          <div className='flex flex-col w-3/12'>
            <div className='border-[1px] border-gray-300 rounded-lg w-full px-3 py-2 shadow-lg h-80'>
              <h1 className='font-semibold'>TaskList</h1>
            </div>
          </div>
        </div>

    </DefaultLayout>
  )
}

export default Calendar