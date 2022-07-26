import { insertBalanceList, selectBalanceList } from "src/dao/BalanceDao";

export async function registBalance(balance : BalanceType){
    const result = await insertBalanceList(balance);
    return result
}

export async function getBalanceList(){
    const result = await selectBalanceList();
    return result
}