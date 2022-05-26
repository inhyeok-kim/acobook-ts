import { combineReducers} from 'redux';
import {PageInfo,PageInfoType} from 'src/redux/reducers/PageInfo';

export interface RootReducerType {
    PageInfo : PageInfoType,
}
const rootReducer = combineReducers({ PageInfo });

export default rootReducer;