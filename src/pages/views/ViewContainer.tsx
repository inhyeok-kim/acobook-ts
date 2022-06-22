import {useRef } from "react";
import styled, {keyframes}from "styled-components"
import {useDispatch} from 'react-redux'
import {PageInfoDispatch} from 'src/redux/reducers/PageInfo'

interface PropType{
    view : Function
}

export default function ViewContainer({ view } :PropType){
    const dispatch = useDispatch();
    
    const wrapper = useRef<HTMLDivElement>(null);
    function closeView(){
        if(wrapper.current){
            wrapper.current.classList.add('close');
        }
        setTimeout(()=>{
            dispatch(PageInfoDispatch.removeView());
        },500);
    }

    function renderView(){
        const View = view;
        return <View action={{close : closeView}}/>
    }

    return (
        <ViewWrapper ref={wrapper}>
            {renderView()}
        </ViewWrapper>
    )

}

const open = keyframes`
    0% {
        left : 100%;
    }
    100% {
        left : 0%;
    }
`
const close = keyframes`
    0% {
        left : 0%;
    }
    100% {
        left : 100%;
    }
`

const ViewWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #aaaaaa;
    position: absolute;
    top: 0px;
    animation: ${open} 0.3s;
    &.close {
        animation: ${close} 0.3s;
    }
`
