import { combineReducers} from 'redux';
import {MenuInfo,MenuInfoType} from 'src/redux/reducers/MenuInfo';

export interface rootReducerType {
    MenuInfo : MenuInfoType,
}
const rootReducer = combineReducers({ MenuInfo });

export default rootReducer;