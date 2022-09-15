import { useState } from "react";
import FullscreenDialog from "src/components/FullscreenDialog";
import SlideAlertDialog from "src/components/SlideAlertDialog";
import RegistView from "./RegistView";

interface propType {
    isOpen : boolean
    closeHandler : Function
}

export default function Regist({
    isOpen = false,
    closeHandler = ()=>{}
}:propType){
    const [alertOpen,setAlertOpen] = useState(false);
    const [alertTitle,setAlertTitle] = useState('')
    const [alertCont,setAlertCont] = useState('')

    function regist(newBalance : BalanceType){
        console.log(newBalance);
        if(!newBalance.name){
            setAlertCont('이름은 필수입니다.')
            setAlertOpen(true);
        } else {
            closeHandler();
        }
    }
    return (
        <FullscreenDialog
            isOpen={isOpen}
            closeHandler={()=>{closeHandler()}}
        >
            <RegistView closeHandler={closeHandler} onRegist={regist} />
            <SlideAlertDialog isOpen={alertOpen} title={alertTitle} content={alertCont} onClose={()=>{setAlertOpen(false)}}/>
        </FullscreenDialog>
    )
}