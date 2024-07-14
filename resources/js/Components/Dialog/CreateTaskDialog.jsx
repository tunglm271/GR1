import React, { useState } from 'react'
import BaseDialog from './BaseDialog'
import { DialogContent, DialogActions, FormControl, InputLabel, Select, MenuItem, FormControlLabel } from '@mui/material'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { router } from '@inertiajs/react'
function CreateTaskDialog({ onClose, open, creater}) {
  const [workspace, setWorkSpace] = useState()
  const [addDescription, setAddDescription] = useState(false)
  const [description, setDescription] = useState()
  const [tasktitle, setTaskTitle] = useState()
  const [priority, setPriority] = useState()
  const [dueDate, setDueDate] = useState()
  let options = ["Urgent", "High", "Normal", "Low"]
  
  const handleClose = () => {
    onClose()
    setAddDescription(false)
  }

  const handleSubmit = () => {
    console.log(dueDate)
        let data = {
            creater: creater,
            assignee: creater,
            name: tasktitle,
            description: description,
            priority: priority,
            deadline: dueDate
        }
         router.post('/personal/tasks/create', data)
        setDescription()
        setTaskTitle()
        setDueDate()
        setPriority() 
        handleClose()
  }

  return (
    <BaseDialog onClose={handleClose} open={open} size="sm" title="Create new task">
        <DialogContent>
        <div className='w-full'>
            <FormControl sx={{ mt: 2}} className='gap-3 w-full'>
              <InputLabel htmlFor="workspace">Workspace</InputLabel>
              <Select
                autoFocus
                value={workspace}
                onChange={(e) => setWorkSpace(e.target.value)}
                label="Workspace"
                inputProps={{
                  name: 'workspace',
                  id: 'workspace',
                }}
                sx={{height: 45}}
                className='w-40'
              >
                <MenuItem value={false}>My Workspace</MenuItem>
                <MenuItem value="xs">xs</MenuItem>
              </Select>

              <input type="text"  placeholder='Task name or type / for command'
              className='p-0 border-0 focus:outline-none font-bold text-lg placeholder:text-gray-400 mb-3'
              value={tasktitle}
              onChange={(e) => setTaskTitle(e.target.value)}/>

              {addDescription?
              <textarea name="" id="" placeholder='Write something to about your task' className='border-0 resize-none p-0 text-sm h-40'
              value={description}
              onChange={(e) => setDescription(e.target.value)}></textarea>
              :
              <button className='text-left text-sm flex gap-3 hover:bg-gray-200' onClick={() => setAddDescription(true)}>
                <InsertDriveFileIcon fontSize='10'className='my-auto'/>Add description
              </button>
              }
            
            <div className='flex gap-5'>
                <input type="date" name="" id="" placeholder='Deadline' value={dueDate} onChange={(e) => setDueDate(e.target.value)}/>
                <select name="" id="" onChange={(e) => setPriority(e.target.value)} required>
                    {options.map((option,index)=> <option value={option} key={index}>{option}</option>)}
                </select>
                
            </div>



            </FormControl>
          </div>
        </DialogContent>
              
        <DialogActions>
          <button className='rounded-lg font-semibold px-3 py-1 hover:bg-slate-100' onClick={handleClose}>Cancel</button>
          <button className='bg-[#1392d3] rounded-lg font-semibold px-3 py-1 text-white' onClick={() => handleSubmit()}>Create</button>
        </DialogActions>

    </BaseDialog>
  )
}

export default CreateTaskDialog