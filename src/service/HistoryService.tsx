import { insertHistoryList, selectHistoryList } from "src/dao/HistoryDao";

export async function registHistory(newHis : HistoryType){
    const result = await insertHistoryList(newHis);
    return result
}

export async function getHistoryList(){
    const result = await selectHistoryList();
    return result
}