import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import HistoryList from "src/components/app/HistoryList";

interface propType {
    closeHandler : Function
}
export default function DetailListView({
    closeHandler = ()=>{},
}:propType){
    
    return (
        <>
            <AppBar 
                sx={{ 
                    position: 'relative',
                    boxShadow : '0px 0px 4px -1px rgb(0 0 0 / 20%), 0px 0px 4px 0px rgb(0 0 0 / 14%), 0px 0px 5px 0px rgb(0 0 0 / 12%)'
                }} 
                color={'transparent'}>
                <Toolbar sx={{justifyContent:'space-between'}}>
                    <IconButton
                        sx={{flex:'1'}}
                        edge="start"
                        color="inherit"
                        onClick={()=>{closeHandler()}}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ m: 1, minWidth: 120, flex:'4' }} textAlign="center">계정명</Typography>
                    <IconButton
                        sx={{flex:'1'}}
                        edge="end"
                        color="inherit"
                        onClick={()=>{}}
                        aria-label="close"
                    >
                        <EditIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Grid container>
                <Grid></Grid>
            </Grid>
            <HistoryList />
        </>
    )
}