import { ReactElement, useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";

interface propType {
    element : ReactElement
    isShow : boolean
    requestClose : Function
}


function Modal({ element, requestClose, isShow } :propType){
    const container = useRef<HTMLDivElement>(null);
    const background = useRef<HTMLDivElement>(null);

    function touchOut(){
        requestClose();
    }

    useEffect(()=>{
        if(background.current){
            background.current.addEventListener('touchstart',touchOut);
        }
        return ()=>{
            if(background.current){
                background.current.addEventListener('touchstart',touchOut);
            }
        }
    },[]);

    const Ele = element;
    return (
        <>
            {isShow ? 
                <Background ref={background}>
                    <Container ref={container}>
                        {element}
                    </Container>
                </Background>
                :
                ''
            }
        </>
    )
};

export default Modal;

const Container = styled.div`
    width: 250px;
    border-radius: 15px;
    background : white;
    text-align: center;
`

const Background = styled.div`
    width: 100vw !important;
    height : 100vh !important;
    position: fixed !important;
    top: 0px !important;
    left: 0px !important;
    background-color: #00000037 !important;
    z-index: 998 !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
`