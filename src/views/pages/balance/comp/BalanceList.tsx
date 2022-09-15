import BalanceListView from "./BalanceListView";

export default function BalanceList(){

    return (
        <BalanceListView 
            accountList={accountList}
            cardList={cardList}
            assetList={assetList}
            debtList={debtList}
            totalAccount={accountList.reduce((prev,curr)=>prev+curr.amount!,0)}
            totalCard={cardList.reduce((prev,curr)=>prev+curr.amount!,0)}
            totalAsset={assetList.reduce((prev,curr)=>prev+curr.amount!,0)}
            totalDebt = {debtList.reduce((prev,curr)=>prev+curr.amount!,0)}
        />
    )
}

const accountList : Array<BalanceType> = [
    {
        id : 1,
        name : '계좌1',
        amount : 10000,
        type : 'account'
    },
    {
        id : 2,
        name : '계좌2',
        amount : 10000,
        type : 'account'
    },
    {
        id : 3,
        name : '계좌3',
        amount : 10000,
        type : 'account'
    },
]
const cardList : Array<BalanceType> = [
    {
        id : 1,
        name : '카드1',
        amount : 560000,
        type : 'card'
    },
    {
        id : 2,
        name : '카드2',
        amount : 10000,
        type : 'card'
    },
]
const assetList : Array<BalanceType> = [
    {
        id : 1,
        name : '자산1',
        amount : 1000000,
        type : 'asset'
    },
    {
        id : 2,
        name : '자산2',
        amount : 230000,
        type : 'asset'
    },
    {
        id : 3,
        name : '자산3',
        amount : 4210000,
        type : 'asset'
    },
]
const debtList : Array<BalanceType> = [
    {
        id : 1,
        name : '부채1',
        amount : 10000,
        type : 'debt'
    },
]