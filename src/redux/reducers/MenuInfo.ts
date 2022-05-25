export interface MenuInfoType {
    menu : String,
    
}

export function MenuInfo(currState : MenuInfoType, action : any ){
    if(currState === undefined){
        return { 
            name : 'default'
        }
    }    
    const userInfo = {...currState};
    if(action.type === SET_NAME){
        userInfo.menu = action.value;
    }
    return userInfo;
}

export const MenuInfoDispatch = {
    setMenu : function(menu : String){
        return {type : SET_NAME, value : menu};
    }
}

const SET_NAME = 'MenuInfo/SET_MENU';