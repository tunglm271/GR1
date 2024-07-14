import { faWarning, faPlayCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function TaskStatusSign({type}) {
    switch (type) {
        case "late":
          return (
            <div className='bg-[#d33d44] px-3 py-1 rounded-md text-[12px] font-bold uppercase text-white flex gap-2 w-fit items-center h-fit'>
                    <FontAwesomeIcon icon={faWarning} className='my-auto' fontSize={12}/>
                    <p>Late</p>
            </div>
          )
      
        case "to do":
          return (
            <div className='bg-gray-500 px-3 py-1 rounded-md text-[12px] font-bold uppercase text-white flex gap-2 w-fit items-center h-fit'>
                    <FontAwesomeIcon icon={faPlayCircle} className='my-auto' fontSize={12}/>
                    <p>To do</p>
            </div>
          )
        case "complete":
          return (
            <div className='bg-[#0D9276] px-3 py-1 rounded-md text-[12px] font-bold uppercase text-white flex gap-2 w-fit items-center h-fit'>
              <FontAwesomeIcon icon={faCheckCircle} className='my-auto' fontSize={12}/>
              <p>Complete</p>
            </div>
          )
      }
}

export default TaskStatusSign