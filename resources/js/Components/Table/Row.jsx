import React, { useEffect, useState } from 'react'
import TaskDialog from '../Dialog/TaskDialog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faWarning, faPlayCircle, faCheckCircle, faCommentAlt, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import TaskStatusSign from '../TaskStatusSign'
import { useGlobalContext } from '@/context/GlobalContext'

function TaskIcon({type}) {
    switch (type) {
      case "late":
        return (<FontAwesomeIcon icon={faWarning} className='my-auto' color='#d33d44'/>)
    
      case "to do":
        return (<FontAwesomeIcon icon={faPlayCircle} className='my-auto' color='#6b7280'/>)
  
      case "complete":
        return (<FontAwesomeIcon icon={faCheckCircle} className='my-auto' color='#0D9276'/>)
    }
  }


function Row({task, type, tableChecked = false}) {
    
    const {checkedTasks , setCheckedTasks} = useGlobalContext()

    const [toggleTask, setToggleTask] = useState(tableChecked)
    const [ClickedTask, setClickedTask] = useState()
    const [checked, setChecked] = useState(false)

    const handleTaskClicked = (task) => {
        setClickedTask(task)
        setToggleTask(true)
       
    }  

    useEffect(() => {
      setChecked(tableChecked)
    },[tableChecked])


    const handleCheck = (e) => {
        setChecked(!checked)
        if(e.target.checked) {
            setCheckedTasks((preSet) => new Set(preSet).add(task.id))
        } else {
            setCheckedTasks((preSet) => {
              let newSet = new Set(preSet)
              newSet.delete(task.id)
              return newSet
          })
        }
    }
  return (
    <div className={checked?'flex gap-3 h-10 bg-blue-50 w-full px-2 border-b-[1px] border-blue-300':'flex gap-3 h-10 hover:bg-gray-100 group/row w-full px-2'}>
        <input type="checkbox" name="" id="" className='my-auto rounded invisible group-hover/row:visible w-4 h-4 border-2 checked:visible'
        checked={checked}
        onChange={(e) => handleCheck(e)}/>

        <div className='flex text-[13px] text-gray-600 w-full border-b-[0.5px] border-gray-300 h-full items-center cursor-pointer' onClick={() =>  handleTaskClicked(task)}>
            <div className='flex gap-3 w-1/4 px-4'>
                <TaskIcon type={type} />
                <h1 className='font-bold p-auto group-hover/row:text-blue-500 text-sm'>{task.name}</h1>
            </div>

            <div className='font-light w-1/6 px-2'>{task.assignee.name}</div>

            <div className='font-light w-1/6 flex gap-2 px-2'><FontAwesomeIcon icon={faCalendar} className='my-auto' color='#d1d5db'/>{task.deadline}</div>

            <div className='font-light w-1/12 px-2'>{task.priority}</div>

            <div className='w-1/6 px-2'><TaskStatusSign type={type} /></div>

            <div className='w-1/12 px-2'>
                <button className='flex gap-2'><FontAwesomeIcon icon={faCommentAlt} className='my-auto' color='gray'/>0</button>
            </div>

            <div className='w-1/12 px-2'>
                <button className='h-full'><FontAwesomeIcon icon={faEllipsis} className='my-auto mx-auto ml-3' color='gray'/></button>
            </div>

        </div>

        <TaskDialog 
            onClose = {() => setToggleTask(false)}
            open = {toggleTask}
            task = {ClickedTask}
        />

    </div>
  )
}

export default Row