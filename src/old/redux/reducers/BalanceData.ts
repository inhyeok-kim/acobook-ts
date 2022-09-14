export function BalanceData(currState : Array<BalanceType>, action : any ){
    if(currState === undefined){
        const def : Array<BalanceType> = [
            {   
                balanceId : 'acc1',
                balanceNm : '카카오뱅크',
                amount : 10000,
                type : "account"
            },
            {
                balanceId : 'acc2',
                balanceNm : '급여계좌',
                amount : 60000,
                type : "account"
            },
            {
                balanceId : 'acc3',
                balanceNm : '온통대전',
                amount : 2000000,
                type : "account"
            },
            {
                balanceId : 'acc4',
                balanceNm : '현대카드',
                amount : 10000,
                type : "credit_card"
            }
        ]
        return def
    }    

    const balanceData = [...currState];

    if(action.type === ADD_BALANCE){
        action.value.balanceId = 'acc'+ seq;
        balanceData.push(action.value);
        seq++;
    } else if(action.type === DELETE_BALACE){
        const idx = balanceData.findIndex((v)=> v.balanceId === action.value ? true : false);
        balanceData.splice(idx,1);
    }

    return balanceData;
}

let seq = 5;

export const BalanceDataDispatch = {
    ADD_BALANCE : function(balanceData : BalanceType){
        return {type : ADD_BALANCE, value : balanceData};
    },
    DELETE_BALACE : function(id:string){
        return {type : DELETE_BALACE, value : id}
    }
}

const ADD_BALANCE = 'BalanceData/ADD_BALANCE';
const DELETE_BALACE = 'BalanceData/DELETE_BALANCE';