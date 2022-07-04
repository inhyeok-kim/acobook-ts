import { useDispatch, useSelector } from "react-redux";
import { HistoryDataDispatch } from "src/redux/reducers/HistoryData";
import { RootReducerType } from "src/redux/RootReducer";

export function useHistoryInsert(){
    const dispatch = useDispatch();
    const balanceList = useSelector((state : RootReducerType) => state.BalanceData);
    
    return function(newHis : HistoryType){
        const account = balanceList.find(v=> v.balanceId === newHis.account ? true : false);
        if(account){
            account.amount = account.amount - newHis.amount;
        }
        dispatch(HistoryDataDispatch.ADD_HISTORY(newHis));
    }
}