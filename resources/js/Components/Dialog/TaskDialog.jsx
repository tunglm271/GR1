import React, { useState } from 'react'
import BaseDialog from './BaseDialog'
import { DialogContent, DialogActions, FormControl, InputLabel, Select, MenuItem, FormControlLabel } from '@mui/material'
import { router } from '@inertiajs/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { faBullseye , faCalendar, faFlagCheckered, faUserAlt, faCheck, faX } from '@fortawesome/free-solid-svg-icons'
import TaskStatusSign from '../TaskStatusSign'
function TaskDialog({ onClose, open, task}) {
      
  const handleCheck = () => {
    router.post(`tasks/check/${task?.id}`,{
        id: task?.id
    })
  }

  const handleUnCheck = () => {
    router.post(`tasks/uncheck/${task?.id}`,{
        id: task?.id
    })
  }

  const status = task?.status == 0 && new Date(task?.deadline) < new Date()?
                "late":
                task?.status == 0 && new Date(task?.deadline) > new Date()?"to do":"complete"

  return (
    <BaseDialog onClose={onClose} open={open} size="xl" title={task?.name}>
        <DialogContent>
            <div className='flex'>
                <div className='w-7/12 border-r-[0.5px] border-gray-400 py-10 flex flex-col gap-7 pr-10'>
                    <h1 className='text-4xl font-black'>{task?.name}</h1>
                    <div className='grid grid-cols-2 gap-5 mb-5'>
                        <div className='flex'>
                            <div className='flex gap-3 w-1/3'>
                                <FontAwesomeIcon icon={faBullseye} color='gray' className='my-auto'/>
                                status
                            </div>

                            <div className='flex gap-3 rounded'>
                            <TaskStatusSign type={status}/>
                            {(status != "complete") && <button className='rounded border-2 border-green-200 px-1' onClick={() => handleCheck()}><FontAwesomeIcon icon={faCheck} color='#bbf7d0' className='m-auto' fontSize={15}/></button>}
                            {(status == "complete") && <button className='rounded border-2 border-red-400 px-1' onClick={() => handleUnCheck()}><FontAwesomeIcon icon={faX} color='#f87171' className='m-auto' fontSize={15}/></button>}
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <div className='flex gap-3 w-1/3'>
                                <FontAwesomeIcon icon={faCalendar} color='gray' className='my-auto'/>
                                Due date
                            </div>

                            <div className='flex gap-3 rounded'>
                                    {task?.deadline}
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <div className='flex gap-3 w-1/3'>
                                <FontAwesomeIcon icon={faFlagCheckered} color='gray' className='my-auto'/>
                                Priority
                            </div>

                            <div className='flex gap-3 rounded'>
                                    {task?.priority}
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <div className='flex gap-3 w-1/3'>
                                <FontAwesomeIcon icon={faUserAlt} color='gray' className='my-auto'/>
                                Assignee
                            </div>

                            <div className='flex gap-3 rounded'>
                                    {task?.assignee.name}
                            </div>
                        </div>
                    </div>

                    {task?.description?
                    <textarea name="" id="" placeholder='Write something to about your task' className='p-5 resize-none text-sm h-40 rounded border-gray-300'
                    value={task?.description}
                    onChange={(e) => setDescription(e.target.value)}></textarea>
                    :
                    <button className='text-left text-sm flex gap-3 hover:bg-gray-200' onClick={() => setAddDescription(true)}>
                      <InsertDriveFileIcon fontSize='10'className='my-auto'/>Add description
                    </button>}
                </div>

                <div className='grow p-5'>
                    <div className='w-full'>
                           <h1 className='font-bold text-2xl'>Comment</h1>
                    </div>
                </div>
            </div>
        </DialogContent>
    </BaseDialog>
  )
}

export default TaskDialog