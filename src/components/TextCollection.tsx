import { ReactElement } from 'react';
import Collection from './Collection';

interface Props {
    option : {
        lineType : 'vertical' | 'horizon'
        space? : 'around' | 'between' | 'evenly'
    },
    texts? : Array<Text>
}

interface Text {
    dom : string | ReactElement,
    style? : Object
}

export default function TextCollection( { option, texts } : Props){


    function getTexts(){
        return texts?.map((text,i)=>{
            return (
                <span key={i} style={text.style}>
                    {text.dom}
                </span>
            )
        });
    }
    
    return (
        <Collection option={option} elements={getTexts()} />
    )
}