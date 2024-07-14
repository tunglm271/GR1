import * as React from 'react';
import { faPlus, faPlusCircle, faSort,faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { useGlobalContext } from '@/context/GlobalContext';
import Row from './Row';
import TaskStatusSign from '../TaskStatusSign';

export default function TaskTable({data, type}) {
  const [down, setDown] = useState(true)
  const [checkTable, setCheckTable] = useState(false)
  const {setToggleCreateTask, checkedTasks, setCheckedTasks} = useGlobalContext()

  const handleCheckTable = () => {
    setCheckTable(!checkTable)
  }

  useEffect(() => {
    if(checkTable) {
      data.forEach((task) => {
        setCheckedTasks((preSet) => new Set(preSet).add(task.id))
      })
    } else {
      data.forEach((task) => {
        setCheckedTasks((preSet) => {
          let newSet = new Set(preSet)
          newSet.delete(task.id)
          return newSet
        })
      })
    }
  },[checkTable])
  
  return (
    <div>
      <div className='flex gap-3 items-center'>
        <div className='rounded-lg hover:bg-slate-100 px-2 cursor-pointer' onClick={() => setDown(!down)}>
          <FontAwesomeIcon icon={down?faCaretDown:faCaretUp} className='mt-2' />
        </div>

        <TaskStatusSign type={type} />

        <div className='flex gap-3'>
          <p className='leading-loose text-sm text-gray-600 my-auto'>{data.length}</p>
          <FontAwesomeIcon icon={faSort} className='my-auto hidden group-hover:block' />
          <button className='text-gray-600 flex gap-1 text-sm rounded-md hover:bg-gray-100 px-2' onClick={() => setToggleCreateTask(true)}>
          <FontAwesomeIcon icon={faPlus} className='my-auto' />
            <p className='my-auto font-semibold'>Add task</p>
          </button>
        </div>
      </div>
      {down && 
      <div className='w-full mt-2'>
        <div className='flex gap-3 group/header px-2'>
          <input type="checkbox" name="" id="" className='my-auto rounded invisible group-hover/header:visible w-4 h-4 border-2 checked:visible'
          checked={checkTable}
          onChange={() => handleCheckTable()}
          />
          <div className='w-full flex text-gray-500 text-xs font-light border-gray-300 border-b-[0.5px]'>
              <button className="flex gap-2 w-1/4 group p-2 hover:bg-gray-100  leading-loose">Name<FontAwesomeIcon fontSize={10} icon={faSort} className='my-auto p-1 rounded hover:bg-gray-300 hidden group-hover:block'/></button>
              <button className="flex gap-2 w-1/6 group p-2 hover:bg-gray-100 leading-loose">Assignee<FontAwesomeIcon icon={faSort} className='my-auto p-1 rounded hover:bg-gray-300 hidden group-hover:block' /></button>
              <button className="flex gap-2 w-1/6 group p-2 hover:bg-gray-100 leading-loose">Due date<FontAwesomeIcon icon={faSort} className='my-auto p-1 rounded hover:bg-gray-300 hidden group-hover:block' /></button>
              <button className="flex gap-2 w-1/12 group p-2 hover:bg-gray-100 leading-loose">Priority<FontAwesomeIcon icon={faSort} className='my-auto p-1 rounded hover:bg-gray-300 hidden group-hover:block' /></button>
              <button className="flex gap-2 w-1/6 group p-2 hover:bg-gray-100 leading-loose">Status<FontAwesomeIcon icon={faSort} className='my-auto p-1 rounded hover:bg-gray-300 hidden group-hover:block' /></button>
              <button className="flex gap-2 w-1/12 group p-2 hover:bg-gray-100 leading-loose">Comment<FontAwesomeIcon icon={faSort} className='my-auto p-1 rounded hover:bg-gray-300 hidden group-hover:block' /></button>
              <button className="flex gap-2 w-1/12 group p-2 hover:bg-gray-100 leading-loose text-center">Options</button>
          </div>
        </div>

        {data.map((task) => 
            <Row key={task.id} task={task} type={type} tableChecked={checkTable}/>
          )
        }
          <div className='w-full hover:bg-gray-100 text-gray-300 px-8 text-xs font-extralight h-9 cursor-pointer rounded items-center flex gap-2' onClick={() => setToggleCreateTask(true)}>
            <FontAwesomeIcon icon={faPlusCircle} className='ml-5' fontSize={12} color='#d1d5db'/>
            Add task
          </div>

      </div>
      }
    </div>  
  );
}