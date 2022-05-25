import { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
    option : {
        lineType : 'vertical' | 'horizon'
    },
    buttons? : Array<Button>
}

interface Button {
    dom : String | ReactElement
    action : Function
}

interface StyleProps {
    lineType? : String
}


export default function ButtonCollection( { option, buttons } : Props){

    function getButtons(){
        return buttons?.map((button,i)=>{
            return (
                <div key={i}>
                    {button.dom}
                </div>
            )
        });
    }
    
    return (
        <CollentionWrapper lineType={option.lineType}>
            {getButtons()}
        </CollentionWrapper>
    )
}

const CollentionWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: ${(props :StyleProps )=> props.lineType === 'vertical' ? 'center' : 'space-around' };
    align-items: ${(props :StyleProps )=> props.lineType === 'vertical' ? 'space-around' : 'center' };
    `;