import { combineReducers} from 'redux';
import {PageInfo,PageInfoType} from 'src/redux/reducers/PageInfo';
import { HistoryData } from './reducers/HistoryData';
import { BalanceData } from './reducers/BalanceData';

export interface RootReducerType {
    PageInfo : PageInfoType,
    HistoryData : Array<HistoryType>
    BalanceData : Array<AccountType>
}
const rootReducer = combineReducers({ PageInfo,HistoryData, BalanceData });

export default rootReducer;