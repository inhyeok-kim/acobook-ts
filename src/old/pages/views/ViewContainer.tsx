import {useMemo, useRef } from "react";
import styled, {keyframes}from "styled-components"
import {useDispatch, useSelector} from 'react-redux'
import {PageInfoDispatch} from 'src/old/redux/reducers/PageInfo'
import { RootReducerType } from "src/old/redux/RootReducer";

interface PropType{
    view : Function
}

export default function ViewContainer({ view } :PropType){
    const dispatch = useDispatch();
    const viewLen = useSelector((state : RootReducerType)=>state.PageInfo.views.length);
    const zIndex = useMemo(()=>{
        return viewLen;
    },[]);

    const wrapper = useRef<HTMLDivElement>(null);
    function closeView(){
        if(wrapper.current){
            wrapper.current.classList.add('close');
        }
        setTimeout(()=>{
            dispatch(PageInfoDispatch.removeView());
        },300);
    }

    function renderView(){
        const View = view;
        return <View action={{close : closeView}}/>
    }

    return (
        <ViewWrapper zIndex={zIndex} ref={wrapper}>
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
interface ViewWrapperStyle {
    zIndex : number
}
const ViewWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #aaaaaa;
    position: absolute;
    top: 0px;
    animation: ${open} 0.3s;
    z-index: ${(props:ViewWrapperStyle) => props.zIndex ? props.zIndex : ''};
    &.close {
        animation: ${close} 0.3s;
    }
`
