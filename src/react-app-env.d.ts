/// <reference types="react-scripts" />

interface HistoryType {
    historyId? : string
    balanceId : string
    categoryNm : string
    type : 'income' | 'expense' | 'transfer'
    amount : number,
    date : Date,
    transferId? : string
}

interface BalanceType {
    balanceId? : string
    balanceNm : string
    amount : number
    type : 'asset' | 'debt' | 'account' | 'credit_card'
    registDt? : Date
}

interface Window {
    database : IDBDatabase
    mozIndexedDB : any
    webkitIndexedDB : any
    msIndexedDB : any
    webkitIDBTransaction : any
    msIDBTransaction : any
    webkitIDBKeyRange : any
    msIDBKeyRange : any
    transaction : any
    keyRange : any
}

interface DatabusType {
    data : any
}