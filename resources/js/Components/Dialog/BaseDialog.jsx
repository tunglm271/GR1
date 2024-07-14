import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
function BaseDialog(props) {
    const { onClose, open, title, size } = props;
  
    return (
      <Dialog onClose={onClose} open={open} maxWidth={size} fullWidth={true} style={{top: "-10%"}}>
        <DialogTitle className='border-b-[0.5px] border-gray-300' sx={{
            padding: "3px 10px",
            width: "100%",
            backgroundColor: "rgb(241 245 249)"
        }}> 
            <div className='flex justify-between bg-slate-100'>
                <h1 className='text-base font-bold text-gray-600 leading-loose'>{title}</h1>
                <div>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        padding: 0
                    }}
                    >
                    <CloseIcon fontSize='5'/>
                </IconButton>
                </div>
            </div>
        </DialogTitle>
        {props.children}
      </Dialog>
    );
  }
export default BaseDialog;