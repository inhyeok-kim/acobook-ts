import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { colorCommonDarkBlue } from "src/old/style/CommonColor";
import styled from "styled-components";

interface propType {
    buttons : Array<ButtonType>
    onChange : Function
}

interface ButtonType {
    name : string
    value : string
}

const SelectButtons = forwardRef(({buttons, onChange} : propType, ref)=>{
    const container = useRef<HTMLDivElement>(null)
    const background = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref,()=>({
        open
    }));
    function open(){
        if(container.current){
            container.current.style.top = `calc(100vh - ${container.current.offsetHeight}px)`;
        }
        if(background.current){
            background.current.style.display = "block";
        }
    }
    
    function close(){
        if(container.current){
            container.current.style.top = `calc(100vh)`;
        }
        if(background.current){
            background.current.style.display = "none";
        }
    }

    function touchOut(){
        close();
    }

    function onClick(e:any,value:any){
        clickBtn(e.target);
        onChange(value);
        close();
    }

    function clickCancel(e:any){
        clickBtn(e.target);
        close();
    }

    function clickBtn(btn:HTMLElement){
        btn.style.background = '#e7e7e7';
        setTimeout(()=>{
            btn.style.background = 'none';
        }, 100);
    }

    useEffect(()=>{
        if(background.current){
            background.current.addEventListener('touchstart',touchOut);
        }
        return ()=>{
            if(background.current){
                background.current.removeEventListener('touchstart',touchOut);
            }
        }
    },[]);

    return (
        <>
            <Background ref={background}></Background>
            <Container ref={container}>
                <ButtonContainer>
                    { buttons.length >0 ? 
                        buttons.map((button,i)=>{
                            return (
                                <Button key={i} onClick={(e)=>{onClick(e,button.value)}} onTouchStart={(e)=>{e.stopPropagation();}}>{button.name}</Button>
                            )
                        })
                        :
                        ''
                    }
                </ButtonContainer>
                <ButtonContainer>
                    <Button style={{color:'black'}} onClick={(e)=>{clickCancel(e)}} onTouchStart={(e)=>{e.stopPropagation();}}>취소</Button>
                </ButtonContainer>
            </Container>
        </>
    )
});

export default SelectButtons;

const Container = styled.div`
    position: fixed;
    width: 100vw;
    left: 0px;
    top : 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: top 0.3s;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    z-index: 999;
`

const ButtonContainer = styled.div`
    width: 90%;
    border: 1px solid lightgray;
    margin-bottom: 1rem;
    border-radius : 5px;
    background-color: #f5f5f5;
    &:last-of-type {
        margin-bottom: 2.5rem;
    }
    &:nth-of-type(2n){
        background-color: white;
    }
    
`
const Button = styled.div`
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    /* font-weight: bold; */
    border-bottom: 1px solid lightgray;
    padding : 15px 0px;
    color : ${colorCommonDarkBlue};
    &:last-of-type{
        border-bottom: none;
    }

`

const Background = styled.div`
    width: 100vw;
    height : 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: #00000037;
    z-index: 998;
    display: none;
`