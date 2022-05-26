export interface PageInfoType {
    page : string,
    
}

export function PageInfo(currState : PageInfoType, action : any ){
    if(currState === undefined){
        return { 
            page : 'Today'
        }
    }    

    const userInfo = {...currState};

    if(action.type === GO_PAGE){
        userInfo.page = action.value;
    }

    return userInfo;
}

export const PageInfoDispatch = {
    goPage : function(page : string){
        return {type : GO_PAGE, value : page};
    }
}

const GO_PAGE = 'PageInfo/GO_PAGE';

export const Pages = {
    today : 'Today',
    balance : 'Balance'
}