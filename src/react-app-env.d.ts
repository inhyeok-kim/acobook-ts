/// <reference types="react-scripts" />

interface HistoryType {
    catogoryNm? : string
    type? : 'income' | 'expense' | 'transfer'
    amount : number,
    date : Date
}

interface AccountType {
    accountNm? : string
    amount : number
}

interface Window {
    databse : any
}
