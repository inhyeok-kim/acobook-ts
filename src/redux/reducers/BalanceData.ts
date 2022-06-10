export function BalanceData(currState : Array<AccountType>, action : any ){
    if(currState === undefined){
        const def : Array<AccountType> = [
            {   
                accountId : 'acc1',
                accountNm : '카카오뱅크',
                amount : 10000,
                type : "account"
            },
            {
                accountId : 'acc2',
                accountNm : '급여계좌',
                amount : 60000,
                type : "account"
            },
            {
                accountId : 'acc3',
                accountNm : '온통대전',
                amount : 2000000,
                type : "account"
            },
            {
                accountId : 'acc4',
                accountNm : '현대카드',
                amount : 10000,
                type : "dept"
            }
        ]
        return def
    }    

    const balanceData = [...currState];

    if(action.type === ADD_BALANCE){
        balanceData.push(action.value);
    }

    return balanceData;
}

export const HistoryDataDispatch = {
    ADD_HISTORY : function(balanceData : AccountType){
        return {type : ADD_BALANCE, value : balanceData};
    },
}

const ADD_BALANCE = 'BalanceData/ADD_BALANCE';
