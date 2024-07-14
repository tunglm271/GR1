import { DialogActions, DialogContent } from "@mui/material"
import BaseDialog from "./BaseDialog"

function JoinWorkspaceDialog(props) {
    const {onClose, open} = props
    
    const handleSubmit = () => {

    }
    
    return (
        <BaseDialog onClose={onClose} open={open} size="xs" title="Enter workspace code">
            <DialogContent>
                <p className="text-xs pt-2">Join a team to communication with others, access Tasks, Docs,...</p>
                
                <div className="mt-5">
                    <h1 className="text-xs font-bold mb-2">join by code</h1>
                    <input type="text" placeholder="Enter workspace code..." className="rounded-lg w-full text-gray-400 border-gray-500"/>
                </div>
            </DialogContent>

            <DialogActions style={{paddingRight: "1.5rem", paddingBottom: "1rem"}}>
                <button className='rounded-md font-semibold px-3 py-1 hover:bg-slate-100 text-sm' onClick={() => onClose()}>Cancel</button>
                <button className='bg-[#1392d3] rounded-md font-semibold px-3 py-1 text-white text-sm' onClick={() => handleSubmit()}>Enter</button>
            </DialogActions>


        </BaseDialog>
    )
}

export default JoinWorkspaceDialog