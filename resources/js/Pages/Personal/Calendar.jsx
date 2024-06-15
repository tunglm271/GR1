import DefaultLayout from '@/Layouts/DefaultLayout';
import Breadcrumb from '@/Components/Common/Breadcrumb';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


function Calendar(props) {
  return (
    <DefaultLayout
        auth={props.auth}
        errors={props.errors}
        header={"Calendar"}
    >
        <Breadcrumb icon={faCalendarAlt} title={'Calendar'}/>
    </DefaultLayout>
  )
}

export default Calendar