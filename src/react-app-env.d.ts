/// <reference types="react-scripts" />

interface HistoryType {
    account : string
    categoryNm : string
    type : 'income' | 'expense' | 'transfer'
    amount : number,
    date : Date
}

interface BalanceType {
    balanceId : string
    balanceNm : string
    amount : number
    type : 'asset' | 'debt' | 'account' | 'credit_card'
    registDt? : Date
}

interface Window {
    databse : any
}

interface DatabusType {
    data : any
}