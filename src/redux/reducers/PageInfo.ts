import Today from "src/pages/Today";
import Balance from 'src/pages/Balance';
import Regist from 'src/pages/views/Regist';

export interface PageInfoType {
    page : Function,
    views : Array<Function>
}

export function PageInfo(currState : PageInfoType, action : any ){
    if(currState === undefined){
        return { 
            page : Today,
            views : [],
        }
    }    

    const userInfo = {...currState};

    if(action.type === GO_PAGE){
        userInfo.page = action.value;
    } else if(action.type === ADD_VIEW){
        userInfo.views.push(action.value);
    } else if(action.type === REMOVE_VIEW){
        userInfo.views.pop();
    }

    return userInfo;
}

export const PageInfoDispatch = {
    goPage : function(page : Function){
        return {type : GO_PAGE, value : page};
    },
    addView : function(view : Function){
        return {type : ADD_VIEW, value : view};
    },
    removeView : function(){
        return {type : REMOVE_VIEW};
    }
}

const GO_PAGE = 'PageInfo/GO_PAGE';
const ADD_VIEW = 'PageInfo/ADD_VIEW';
const REMOVE_VIEW = 'PageInfo/REMOVE_VIEW';

export const Pages = {
    today : Today,
    balance : Balance
}

export const Views = {
    Regist : Regist,
}