import { Grid } from "@mui/material";
import BalanceList from "./comp/BalanceList";
import BalanceHeader from "./comp/BalanceHeader";
import IconButtonStack from "src/components/common/IconButtonStack";
import EditIcon from '@mui/icons-material/Edit';
import { useMemo, useState } from "react";
import Regist from "src/views/overs/balance/Regist";

export default function BalanceView(){
    const [editMode, setEditMode] = useState(false);

    const balanceIconButtons = useMemo(()=>{
        return [
            {
                icon : <EditIcon />,
                action : ()=>{setRegistMode(true)}
            }
        ]
    }
    ,[editMode]);
    
    const [registMode,setRegistMode] = useState(false);
    
    return (
        <Grid container sx={{height:'100%'}}>
            <Grid item xs={12} sx={{height:'5%'}}>
                <Regist isOpen={registMode} closeHandler={()=>{setRegistMode(false)}}/>
                <IconButtonStack list={balanceIconButtons} direction={"row-reverse"}/>
            </Grid>
            <Grid item xs={12} sx={{height :'10%'}}>
                <BalanceHeader />
            </Grid>
            <Grid item xs={12} sx={{height : '85%'}}>
                <BalanceList />
            </Grid>
        </Grid>
    )
}
