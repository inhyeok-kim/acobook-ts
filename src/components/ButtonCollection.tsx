import React, { ReactElement } from 'react';
import Collection from 'src/components/Collection'

interface Props {
    option : {
        lineType : 'vertical' | 'horizon'
        space? : 'around' | 'between' | 'evenly'
    },
    buttons? : Array<Button>
}

interface Button {
    dom : string | ReactElement,
    action? : Function,
    style? : Object,
    disabled? : boolean
}

export default function ButtonCollection( { option, buttons } : Props){


    function getButtons(){
        return buttons?.map((button,i)=>{
            function action(e : React.MouseEvent<HTMLElement>){
                if(button.action){
                    button.action();
                }
            }
            return (
                <button key={i} onClick={action} disabled={button.disabled} style={button.style}>
                    {button.dom}
                </button>
            )
        });
    }
    
    return (
        <Collection option={option} elements={getButtons()} />
        
    )
}
