import { useState } from "react";
import ButtonCollection from "src/components/ButtonCollection";
import { colorCommonDarkBlue } from "src/style/CommonColor";
import { cssPageHeader } from "src/style/CommonStyles";
import styled from "styled-components"
import {useDispatch} from 'react-redux'
import {ButtonOnOff} from 'inhyeok.kim-module.ui/dist/Buttons'
import { HistoryDataDispatch } from "src/redux/reducers/HistoryData";

interface PropType{
    action : actionType
}

interface actionType {
    close : Function
}

export default function Regist({action} : PropType){
    const [changeMode, setChangeMode] = useState(false);
    const dispatch = useDispatch();

    const HeaderBtns = [
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
                regist();
            },
            style : {
                background : 'none',
                border : 'none',
                color : 'white',
                fontSize : '0.9rem',
            },
            disabled : changeMode
        }
    ];
    
    const [complete, setComplete] = useState(true);

    const [account, setAccount] = useState('');
    const [category, setCategory] = useState('');
    const [ammount, setAmmount] = useState(0);
    const [regDate, setRegDate] = useState('');
    const [regTime, setRegTime] = useState('');

    function regist(){
        let newHistory : HistoryType;
        newHistory = {
            account : account,
            categoryNm : category,
            amount : ammount,
            date : new Date(),
            type : "expense",
        }
        dispatch(HistoryDataDispatch.ADD_HISTORY(newHistory));
        action.close();
    }

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
                    <input type="text" value={account} placeholder="계정" onChange={(e)=>{setAccount(e.target.value)}} />
                </SelectAccount>        
                <Category>
                    <SelectCategory>
                        <input type="text" value={category} placeholder="항목" onChange={(e)=>{setCategory(e.target.value)}} />
                    </SelectCategory>
                    <InputAmount type="number" value={ammount}  onChange={(e)=>{setAmmount(parseInt(e.target.value))}}/>
                </Category>        
                <RegistDate>
                    <SelectDate>
                        <input type="date" value={regDate} onChange={(e)=>{setRegDate(e.target.value)}} />
                        <input type="time" value={regTime} onChange={(e)=>{setRegTime(e.target.value)}}/>
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

const InputAmount = styled.input`
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
    justify-content: flex-end;
`
