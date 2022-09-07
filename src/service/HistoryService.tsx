import { selectBalanceById, updateBalance } from "src/dao/BalanceDao";
import { insertHistoryList, selectHistoryList } from "src/dao/HistoryDao";
import { KeyRange } from "src/utils/IDBUtil";

export async function registHistory(newHis : HistoryType){
    const balance = await selectBalanceById(newHis.balanceId) as BalanceType;
    if(newHis.type === 'expense'){
        if(balance.type === 'account'){
            balance.amount -= newHis.amount;
        } else {
            balance.amount += newHis.amount;
        }
    } else if(newHis.type === 'income'){
        if(balance.type === 'account'){
            balance.amount += newHis.amount;
        } else {
            balance.amount -= newHis.amount;
        }
    } else {
        if(newHis.transferId){
            const transfer = await selectBalanceById(newHis.transferId) as BalanceType;
            if(balance.type === 'account'){
                balance.amount -= newHis.amount;
            } else {
                balance.amount += newHis.amount;
            }

            if(transfer.type === 'account'){
                transfer.amount += newHis.amount;
            } else {
                transfer.amount -= newHis.amount;
            }
            updateBalance(transfer);
        }
    }
    updateBalance(balance);

    const result = await insertHistoryList(newHis);

    return result
}

export async function getTodayHistory(){
    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate()+1);
    const keyRange = KeyRange.bound(today, tomorrow, true, false);

    const result = await selectHistoryList(keyRange);
    
    return result
}

export async function getHistoryByDate(date : Date){
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    const tomorrow = new Date(date);
    tomorrow.setDate(date.getDate()+1);
    const keyRange = KeyRange.bound(date, tomorrow, true, false);

    const result = await selectHistoryList(keyRange);
    
    return result
}