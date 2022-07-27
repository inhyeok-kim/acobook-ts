import { deleteBalance, insertBalanceList, selectBalanceList } from "src/dao/BalanceDao";
import { deleteHistoryRange } from "src/dao/HistoryDao";
import { KeyRange } from "src/utils/IDBUtil";

export async function registBalance(balance : BalanceType){
    const result = await insertBalanceList(balance);
    return result
}

export async function getBalanceList(){
    const result = await selectBalanceList();
    return result
}

export async function removeBalance(id:string){
    const result = await deleteBalance(id);
    await deleteHistoryRange('balanceId', KeyRange.only(id));
    return result;
}
