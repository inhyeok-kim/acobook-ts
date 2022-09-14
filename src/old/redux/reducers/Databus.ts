export function Databus(currState : DatabusType, action : any ){
    if(currState === undefined){
        return {
            data : null
        };
    }    

    const newData = {...currState};

    if(action.type === SET_DATA){
        newData.data = action.value;
    }

    return newData;
}

export const DatabusDispatch = {
    SET_DATA : function(data : any){
        return {type : SET_DATA, value : data};
    }
}

const SET_DATA = 'Databus/SET_DATA';