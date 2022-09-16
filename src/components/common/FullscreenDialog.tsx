import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef, ReactNode } from "react";

interface propType {
    isOpen : boolean
    closeHandler : Function
    children? : ReactNode
}
export default function FullscreenDialog({
    isOpen = false,
    closeHandler = ()=>{},
    children
}:propType){

    return (
        <div>
            <Dialog
                fullScreen
                open={isOpen}
                onClose={()=>{closeHandler()}}
                TransitionComponent={Transition}
            >
                {children}
            </Dialog>
        </div>
    )
}

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="left" ref={ref} {...props} />;
});
  