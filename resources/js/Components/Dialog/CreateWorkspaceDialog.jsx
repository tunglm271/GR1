import React, { useState } from 'react'
import BaseDialog from './BaseDialog'
import { DialogActions, DialogContent, DialogContentText } from '@mui/material'
import TextField from '@mui/material/TextField';
import { router } from '@inertiajs/react';


function CreateWorkSpaceDialog({ onClose, open}) {

  const [workspaceName, setWorkspaceName] = useState();
  const [workspaceDes, setWorkspaceDes] = useState();

  const handleSubmit = () => {
    const data = {
        name: workspaceName,
        description: workspaceDes
    };
    router.post('/workspace/create',data);
    onClose();
  }
  
  return (
    <>
      <BaseDialog onClose={onClose} open={open} size="sm" title="Create new workspace">
          <DialogContent style={{paddingTop: "0.5rem", display: "flex", flexDirection: "column", gap: "1rem"}}>
                <p className='text-sm'>
                    Collaborate closely with a group of people inside your organization based on project, initiative, or common interest.
                </p>

                <div>
                    <h1 className='font-bold text-lg mb-2'>Workspace Name</h1>
                    <input type="text" className='text-sm rounded border-[1px] border-gray-300 w-full' placeholder='Enter workspace name...'
                    value={workspaceName}
                    onChange={(e) => setWorkspaceName(e.target.value)}/>
                </div>

                <div>
                    <h1 className='font-bold text-lg mb-2'>Workspace Description</h1>
                    <textarea name="" id="" placeholder='Write something to about your workspace' className='p-5 resize-none text-sm h-40 rounded border-gray-300 w-full'
                    value={workspaceDes}
                    onChange={(e) =>  setWorkspaceDes(e.target.value)}
                    ></textarea>
                </div>

          </DialogContent>
          
          <DialogActions>
            <button className='rounded-lg font-semibold px-3 py-1 hover:bg-slate-100' onClick={() => onClose()}>Cancel</button>
            <button className='bg-[#1392d3] rounded-lg font-semibold px-3 py-1 text-white' onClick={() => handleSubmit()}>Create</button>
          </DialogActions>
      </BaseDialog>
    </>
  )
}

export default CreateWorkSpaceDialog