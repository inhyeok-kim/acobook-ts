export function Reload(currState : number, action : any ){
    if(currState === undefined){
        return 0;
    }    

    let newData = currState;
    if(action.type === RELOAD){
        newData += 1;
    }

    return newData;
}

export const ReloadDispatch = {
    RELOAD : function(){
        return {type : RELOAD};
    }
}

const RELOAD = 'Reload/RELOAD';