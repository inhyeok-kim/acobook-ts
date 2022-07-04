import { combineReducers} from 'redux';
import {PageInfo,PageInfoType} from 'src/redux/reducers/PageInfo';
import { HistoryData } from './reducers/HistoryData';
import { BalanceData } from './reducers/BalanceData';
import { Databus } from './reducers/Databus';

export interface RootReducerType {
    PageInfo : PageInfoType,
    HistoryData : Array<HistoryType>
    BalanceData : Array<BalanceType>
    Databus : DatabusType
}
const rootReducer = combineReducers({ PageInfo,HistoryData, BalanceData, Databus });

export default rootReducer;