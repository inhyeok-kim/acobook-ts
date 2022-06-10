/// <reference types="react-scripts" />

interface HistoryType {
    account : string
    categoryNm : string
    type : 'income' | 'expense' | 'transfer'
    amount : number,
    date : Date
}

interface AccountType {
    accountId : string
    accountNm : string
    amount : number
    type : 'asset' | 'dept' | 'account'
}

interface Window {
    databse : any
}
