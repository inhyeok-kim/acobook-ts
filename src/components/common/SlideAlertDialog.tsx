import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

interface propType {
    title? : string
    content? : string
    onAgree? : Function
    onDisAgree? : Function
    isOpen : boolean
    onClose : Function
}
export default function SlideAlertDialog({
    title='',
    content='',
    isOpen=false,
    onClose=()=>{},
}:propType) {
    const [open, setOpen] = React.useState(false);
    
    return (
        <div>
            <Dialog
                open={isOpen}
                TransitionComponent={Transition}
                sx={{'& .MuiPaper-root':{width:'100%'}}}
                keepMounted
                // onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>{onClose()}}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
  );
}
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
