import { combineReducers} from 'redux';
import {PageInfo,PageInfoType} from 'src/redux/reducers/PageInfo';
import { HistoryData } from './reducers/HistoryData';
import { BalanceData } from './reducers/BalanceData';
import { Databus } from './reducers/Databus';
import {Reload} from './reducers/Reload';

export interface RootReducerType {
    PageInfo : PageInfoType,
    HistoryData : Array<HistoryType>
    BalanceData : Array<BalanceType>
    Databus : DatabusType,
    Reload : number
}
const rootReducer = combineReducers({ PageInfo,HistoryData, BalanceData, Databus, Reload });

export default rootReducer;