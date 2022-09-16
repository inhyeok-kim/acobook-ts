import { IconButton } from "@mui/material";
import { Stack } from "@mui/system";
import { ReactNode } from "react";

interface propType {
    list : Array<IconButtonType>
    direction? : 'row' | 'row-reverse' | 'column' | 'column-reverse'
}

export interface IconButtonType {
    icon : ReactNode
    action : Function
}

export default function IconButtonStack({
    list,
    direction = 'row'
}:propType){
    return (
        <Stack direction={direction} spacing={1}>
            { list ? 
                list.map((ib,i)=>{
                    return (
                        <IconButton key={i} onClick={()=>{ib.action()}}>
                            {ib.icon}
                        </IconButton>
                    )
                })
                :
                ''
            }
        </Stack>
    )
}