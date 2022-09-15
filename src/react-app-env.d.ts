/// <reference types="react-scripts" />

type TypeofHistory = 'income' | 'expense' | 'transfer'
interface HistoryType {
    id? : number
    targetBalance? : number
    transferBalance? : number
    category? : number
    type? : TypeofHistory
    amount? : number,
    date? : Date,
}

type TypeofBalance = "account" | "asset" | "debt" | "card";
interface BalanceType {
    id? : number
    name? : String
    amount? : number
    type? : TypeofBalance
    date? : Date
    autoClearing? : Boolean
    clearingDate? : number | string
    limit? : number
}

type TypeofCategory = 'income' | 'expense'
interface Category {
    id? : number
    name? : String
    type? : TypeofCategory
    parent? : number
  }
  
type TypeofRecycle = 'daily'|'weekly'|'monthly'|'date'|'week'|'month'
interface BudgetType{
    id? : number
    category? : number
    startDate? : Date
    endDate? : Date
    recycleType? : TypeofRecycle
    amount? : number
    recycle? : number
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