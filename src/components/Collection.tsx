import { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
    option : {
        lineType : 'vertical' | 'horizon'
        space? : 'around' | 'between' | 'evenly'
    },
    elements? : Array<ReactElement>
}

interface StyleProps {
    lineType? : string,
    space? : 'around' | 'between' | 'evenly'
}


export default function Collection( { option, elements } : Props){

    return (
        <CollentionWrapper lineType={option.lineType} space={option.space} >
            {elements}
        </CollentionWrapper>
    )
}

const CollentionWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: ${(props :StyleProps )=> props.lineType === 'vertical' ? 'center' : props.space ? 'space-'+props.space : 'space-between' };
    align-items: ${(props :StyleProps )=> props.lineType === 'vertical' ? props.space ? 'space-'+props.space : 'space-between' : 'center' };
`;