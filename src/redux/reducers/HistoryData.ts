export function HistoryData(currState : Array<HistoryType>, action : any ){
    if(currState === undefined){
        return [
            {
                account : '',
                categoryNm : '카카오 -> 내일채움공제',
                amount : 10000,
                type : 'transfer',
                date : new Date()
            },
            {
                account : '',
                categoryNm : '통신비',
                amount : 60000,
                type : 'expense',
                date : new Date()
            },
            {
                account : '',
                categoryNm : '월급',
                amount : 2000000,
                type : 'income',
                date : new Date()
            },
        ]
    }    

    const historyData = [...currState];

    if(action.type === ADD_HISTORY){
        historyData.push(action.value);
    }

    return historyData;
}

export const HistoryDataDispatch = {
    ADD_HISTORY : function(historyData : HistoryType){
        return {type : ADD_HISTORY, value : historyData};
    },
}

const ADD_HISTORY = 'HistoryData/ADD_HISTORY';
