import { useMemo, useState } from "react";
import ButtonCollection from "src/components/ButtonCollection";
import { colorCommonDarkBlue } from "src/style/CommonColor";
import { cssPageHeader } from "src/style/CommonStyles";
import styled from "styled-components"
import {Views, PageInfoDispatch} from 'src/redux/reducers/PageInfo';
import {useDispatch} from 'react-redux'
import {ButtonOnOff} from 'inhyeok.kim-module.ui/dist/Buttons'

interface PropType{
    action : actionType
}

interface actionType {
    close : Function
}

export default function Regist({action} : PropType){
    const [changeMode, setChangeMode] = useState(false);
    const dispatch = useDispatch();
    const HeaderBtns = useMemo(()=>[
        {
            dom : <span style={{visibility : changeMode ? 'hidden' : 'visible'}}>취소</span>,
            action : function(){
                action.close();
            },
            style : {
                background : 'none',
                border : 'none',
                color : 'white',
                fontSize : '0.9rem',
            },
            disabled : changeMode
        },
        {
            dom : <h2>지출</h2>,
            action : function(){
                setChangeMode(curr=>!curr);
            },
            style : {
                background : 'none',
                border : 'none',
                color : 'white',
            },
        },
        {
            dom : <span style={{visibility : changeMode ? 'hidden' : 'visible'}}>저장</span>,
            action : function(){
                dispatch(PageInfoDispatch.addView(Views.Regist));
            },
            style : {
                background : 'none',
                border : 'none',
                color : 'white',
                fontSize : '0.9rem',
            },
            disabled : changeMode
        }
    ],[changeMode]);
    
    const [complete, setComplete] = useState(true);

    return (
        <>
            <Header>
                <HeaderButtons>
                    <ButtonCollection 
                        option={{
                            lineType : "horizon",
                            space : 'between'
                        }} 
                        buttons={HeaderBtns} />
                </HeaderButtons>
            </Header>
            <Body>
                <SelectAccount>
                    계정
                </SelectAccount>        
                <Category>
                    <SelectCategory>
                        항목
                    </SelectCategory>
                    <InputAmount contentEditable="false">
                        0
                    </InputAmount>
                </Category>        
                <RegistDate>
                    <SelectDate>
                        2022.05.06 12:33
                    </SelectDate>
                    <CheckComplete>
                        {complete ? 
                            <>완료&nbsp;</>
                            :
                            <>예정&nbsp;</>
                        }
                        <ButtonOnOff initial={complete} option={{width : "45px",onColor:colorCommonDarkBlue}} onChange={(e :any)=>{setComplete(e)}} />
                    </CheckComplete>
                </RegistDate>        
                <Memo contentEditable placeholder="#메모"></Memo>        
            </Body>
        </>
    )

}

const Header = styled.div`
    ${cssPageHeader}
    width : 100%;
    height : 6%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const HeaderButtons = styled.div`
    ${cssPageHeader}
    width : 90%;
    height : 100%;
`;

const Body = styled.div`
    width: 100%;
    height: 94%;
    padding : 0px 7%;
    background : white;
    overflow: auto;
    box-sizing: border-box;

    & > div {
        border-bottom: 1px solid black;
        height: 6%;
        font-size: 1rem;
        font-weight: bold;
        display: flex;
        align-items: center;
    }
`;

const SelectAccount = styled.div`
    width: 100%;
    position: relative;

    &::after{
        content: '';
        position: absolute;
        right: 1%;
        height: 0.5rem;
        width: 0.5rem;
        margin-top: 0.4rem;
        border-top: 2px solid ${colorCommonDarkBlue};
        border-right: 2px solid ${colorCommonDarkBlue};
        transform: rotateZ(45deg);
    }
`

const Category = styled.div`
    width: 100%;
    position: relative;
    display: flex;

`
const SelectCategory = styled.div`
    width: 50%;
    position: relative;
`

const InputAmount = styled.div`
    width: 50%;
    text-align: right;
    outline: 0px solid transparent;
`
const Memo = styled.div`
    width: 100%;
    border-bottom: 0px !important;
    font-weight: normal !important;
    outline: 0px solid transparent;
    
`
const RegistDate = styled.div`
    width: 100%;
    display: flex;
`
const SelectDate = styled.div`
    width: 60%;
`
const CheckComplete = styled.div`
    display: flex;
    width: 40%;
    height: 100%;
    align-items: center;
    justify-content: end;
`
const Check = styled.input`
    border-radius: 100%;
    width: 1.7rem;
    height: 1.7rem;
    border: 1px solid ${colorCommonDarkBlue};
    appearance: none;
    margin: 0px;
    position: relative;

    &:checked {
        background-color: ${colorCommonDarkBlue};
    }

    &:checked::after{
        position: absolute;
        content: '';
        height: 100%;
        border-right: 2px solid white;
        bottom: 14%;
        right: 24%;
        transform: rotateZ(30deg);
    }
    &:checked::before{
        position: absolute;
        content: '';
        height: 50%;
        border-right: 2px solid white;
        bottom: 15%;
        left: 33%;
        transform: rotateZ(-30deg);
        border-radius: 30%;
    }
`
