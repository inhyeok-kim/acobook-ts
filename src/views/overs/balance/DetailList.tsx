import FullscreenDialog from "src/components/common/FullscreenDialog"
import DetailListView from "./DetailListView"

interface propType {
    isOpen : boolean
    closeHandler : Function
    balanceId : number | undefined
}
export default function DetailList({
    isOpen = false,
    closeHandler = ()=>{},
    balanceId
}:propType){
    return (
        <FullscreenDialog
            isOpen={isOpen}
            closeHandler={()=>{closeHandler()}}
        >
            <DetailListView closeHandler={closeHandler} />
        </FullscreenDialog>
    )
}